import { QUESTIONS } from "./questions";
import { ROLES } from "./roles";
import type { Bias, Dim, Profile, Question, Result, Role } from "./types";

const DIMS: Dim[] = ["O", "C", "E", "A", "N"];
const BIASES: Bias[] = ["loss", "anchor", "herd", "sunk", "maximize", "procrastinate"];

const clamp = (v: number, lo = 0, hi = 100) => Math.min(hi, Math.max(lo, v));

export type Answers = Record<string, string>; // questionId -> optionId

/** 计分：五大维度 0-100、六项偏误 0-100，再由维度推出三维轴 */
export function score(answers: Answers, questions: Question[] = QUESTIONS): Profile {
  const raw: Record<Dim, number> = { O: 0, C: 0, E: 0, A: 0, N: 0 };
  const rawBias: Record<Bias, number> = { loss: 0, anchor: 0, herd: 0, sunk: 0, maximize: 0, procrastinate: 0 };
  let riskRaw = 0;
  let sjtA = 0, sjtACount = 0;
  let selfA = 0, selfACount = 0;

  for (const q of questions) {
    const optId = answers[q.id];
    if (!optId) continue;
    const opt = q.options.find((o) => o.id === optId);
    if (!opt) continue;
    const w = q.weight ?? 1;

    for (const d of DIMS) {
      const v = opt.score.dims?.[d];
      if (v) {
        raw[d] += v * w;
        if (d === "A") {
          if (q.kind === "self") { selfA += v; selfACount += 1; }
          else if (q.kind === "sjt") { sjtA += v; sjtACount += 1; }
        }
      }
    }
    for (const b of BIASES) {
      const v = opt.score.biases?.[b];
      if (v) rawBias[b] += v;
    }
    if (opt.score.risk) riskRaw += opt.score.risk;
  }

  // 幅度校准：raw 一般在 -10~+10，映射到 5-95，避免满分/零分显得假
  const dims = Object.fromEntries(
    DIMS.map((d) => [d, Math.round(clamp(50 + raw[d] * 4.2, 5, 95))])
  ) as Record<Dim, number>;

  const biases = Object.fromEntries(
    BIASES.map((b) => [b, Math.round(clamp(50 + rawBias[b] * 22))])
  ) as Record<Bias, number>;

  // 三维轴用"未压缩"的连续分，避免显示端的截断影响角色归属
  const pct = (v: number) => clamp(50 + v * 5);
  const aO = pct(raw.O), aC = pct(raw.C), aE = pct(raw.E), aA = pct(raw.A), aN = pct(raw.N);
  const axes = {
    speed: clamp(0.5 * aE + 0.3 * (100 - aN) + 0.2 * (100 - aC)) / 100,
    risk: clamp(0.45 * aO + 0.3 * (100 - biases.loss) + 0.25 * aE + riskRaw * 5) / 100,
    relation: clamp(0.7 * aA + 0.3 * aE) / 100,
  };

  // 作答一致性：自评与情境题给出的宜人性信号差异
  const aSelf = selfACount ? selfA / selfACount : 0;
  const aSjt = sjtACount ? sjtA / sjtACount : 0;
  const consistency = Math.round(clamp(100 - Math.abs(aSelf - aSjt) * 45));

  return { dims, biases, axes, consistency };
}

function distance(a: Role["axes"], b: Role["axes"]) {
  const ds = a.speed - b.speed;
  const dr = a.risk - b.risk;
  const dl = a.relation - b.relation;
  return Math.sqrt(ds * ds * 1.15 + dr * dr + dl * dl * 1.05);
}

export function pickRole(profile: Profile): Result {
  const ranked = ROLES.map((r) => ({ role: r, d: distance(profile.axes, r.axes) })).sort((x, y) => x.d - y.d);
  const [first, second] = ranked;
  const gap = second.d - first.d;
  // 用距离比值做匹配度：最近质心 vs 次近质心的相对优势
  const ratio = second.d / Math.max(first.d, 0.02);
  const base = Math.min(0.95, 0.63 + (ratio - 1) * 0.85); // 两者越接近，匹配度越低
  const consistencyFactor = 0.9 + profile.consistency / 1000; // 0.9~1.0
  const confidence = Math.min(0.96, Math.max(0.55, base * consistencyFactor));
  return {
    primary: first.role,
    secondary: second.role,
    confidence,
    profile,
  };
}

export function analyze(answers: Answers): Result {
  return pickRole(score(answers));
}

export const DIM_LABEL: Record<Dim, string> = {
  O: "开放性", C: "尽责性", E: "外向性", A: "宜人性", N: "情绪敏感度",
};

export const DIM_DESC: Record<Dim, [string, string]> = {
  O: ["偏爱熟悉的路", "偏爱没走过的路"],
  C: ["随性，边走边看", "有计划，按图施工"],
  E: ["独处充电", "人群充电"],
  A: ["先讲立场", "先看感受"],
  N: ["情绪稳，不太内耗", "情绪敏感，容易反刍"],
};

export const BIAS_LABEL: Record<Bias, string> = {
  loss: "损失厌恶", anchor: "锚定效应", herd: "从众倾向",
  sunk: "沉没成本", maximize: "最大化倾向", procrastinate: "拖延型回避",
};

export const BIAS_ADVICE: Record<Bias, string> = {
  loss: "亏了不肯走、赚了拿不住。下次先写止损价，再决定买不买。",
  anchor: "容易被第一个数字锁死。看到“原价”时，问自己：如果没写原价，我还买吗？",
  herd: "别人都在做时你会跟。问一句：如果只有我一个人，我还会做吗？",
  sunk: "已经投入的让人不肯停。问：如果今天从零开始，我还会选它吗？",
  maximize: "非要找到最优解，于是迟迟不定。给自己设截止时间，够好就选。",
  procrastinate: "难的决定往后拖。把决定拆成 10 分钟能做完的第一步。",
};
