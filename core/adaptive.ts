// 自适应测评引擎（CAT 简化版）
// 纯本地规则：按子维度不确定度 σ 决定是否追问，不调用任何模型

export interface ItemOption {
  id: string;
  label: string;
  scores: Record<string, number>; // subDimId -> +1 / 0 / -1
}

export interface Item {
  id: string;
  dim: string;
  subDim: string;        // 主载荷子维度（用于选题）
  kind: "sjt" | "self" | "check";
  text: string;
  scene?: string;
  options: ItemOption[];
  discrimination: number; // 0-1，预标区分度，越高越优先
  screener: boolean;      // 是否筛查层固定题
}

export type AnswerMap = Record<string, string>; // itemId -> optionId

export interface SubEstimate {
  mu: number;      // 估计值 -1..1
  count: number;   // 已答题数
  sigma: number;   // 不确定度，越小越确定
  score: number;   // 映射到 0-100
}

export const SIGMA_DONE = 0.35;
export const MIN_PER_SUB = 2;
export const MAX_ITEMS = 20;
export const MAX_PER_SUB = 4;

const clamp = (v: number, lo = 0, hi = 100) => Math.min(hi, Math.max(lo, v));

/** 逐题累计每个子维度的取值，算出 μ 与 σ */
export function estimate(items: Item[], answers: AnswerMap, subDims: string[]): Record<string, SubEstimate> {
  const acc: Record<string, { sum: number; n: number }> = {};
  for (const s of subDims) acc[s] = { sum: 0, n: 0 };

  for (const it of items) {
    const optId = answers[it.id];
    if (!optId) continue;
    const opt = it.options.find((o) => o.id === optId);
    if (!opt) continue;
    for (const [s, v] of Object.entries(opt.scores)) {
      if (!acc[s]) acc[s] = { sum: 0, n: 0 };
      acc[s].sum += v;
      acc[s].n += 1;
    }
  }

  const out: Record<string, SubEstimate> = {};
  for (const s of subDims) {
    const { sum, n } = acc[s] ?? { sum: 0, n: 0 };
    const mu = n > 0 ? sum / n : 0;
    // 题越多、越一致 → σ 越小
    const sigma = (1 - Math.abs(mu)) / Math.sqrt(n + 1);
    out[s] = { mu, count: n, sigma, score: Math.round(clamp(50 + mu * 45, 5, 95)) };
  }
  return out;
}

export interface Progress {
  answered: number;
  done: boolean;
  confidence: number; // 0-1
  weak: string[];     // 仍需追问的子维度
}

export function progress(items: Item[], answers: AnswerMap, subDims: string[]): Progress {
  const est = estimate(items, answers, subDims);
  const weak = subDims.filter((s) => est[s].count < MIN_PER_SUB || est[s].sigma >= SIGMA_DONE);
  const answered = Object.keys(answers).length;
  const avgSigma = subDims.reduce((a, s) => a + est[s].sigma, 0) / subDims.length;
  const done = weak.length === 0 || answered >= MAX_ITEMS;
  return {
    answered,
    done,
    confidence: Math.round(clamp((1 - avgSigma) * 100) / 100),
    weak,
  };
}

/** 选下一题：优先追问最不确定的子维度，同子维度内取区分度最高的未答题 */
export function nextItem(items: Item[], answers: AnswerMap, subDims: string[]): Item | null {
  const est = estimate(items, answers, subDims);
  const answered = Object.keys(answers).length;
  if (answered >= MAX_ITEMS) return null;

  // 还有筛查题没答完 → 先按顺序答筛查题
  const pendingScreener = items.filter((i) => i.screener && !answers[i.id]);
  if (pendingScreener.length > 0) return pendingScreener[0];

  const candidates = subDims
    .filter((s) => est[s].count < MAX_PER_SUB && est[s].sigma >= SIGMA_DONE)
    .sort((a, b) => est[b].sigma - est[a].sigma);

  for (const s of candidates) {
    const pool = items
      .filter((i) => i.subDim === s && !answers[i.id])
      .sort((a, b) => b.discrimination - a.discrimination);
    if (pool.length > 0) return pool[0];
  }
  return null;
}

export interface DimScore {
  subs: Record<string, SubEstimate>;
  overall: number;
  confidence: number;
  answered: number;
}

export function scoreDim(items: Item[], answers: AnswerMap, subDims: string[]): DimScore {
  const subs = estimate(items, answers, subDims);
  const vals = subDims.map((s) => subs[s].score);
  const overall = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
  const p = progress(items, answers, subDims);
  return { subs, overall, confidence: p.confidence, answered: p.answered };
}
