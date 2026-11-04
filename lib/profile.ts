// 自我认知档案：localStorage 累积 + 导出单一 Markdown 文档
// 纯静态站点没有后端，档案在浏览器本地累积，随时可导出成一份 .md 放进 Obsidian

import { describeSub, SUB_TEXT } from "@/core/interpret";

export interface SubResult {
  id: string;
  name: string;
  score: number;
  sigma: number;
  text: string;
}

export interface DimResult {
  dim: string;
  name: string;
  date: string;      // ISO
  overall: number;
  confidence: number;
  answered: number;
  subs: SubResult[];
  strengths: string[];
  blindspots: string[];
}

const KEY = "self360_profile_v1";

export function loadResults(): DimResult[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function saveDimResult(r: DimResult): DimResult[] {
  if (typeof window === "undefined") return [];
  const all = loadResults().filter((x) => x.dim !== r.dim);
  const next = [r, ...all];
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function latestByDim(): Record<string, DimResult> {
  const out: Record<string, DimResult> = {};
  for (const r of loadResults()) {
    if (!out[r.dim]) out[r.dim] = r;
  }
  return out;
}

export function clearResults() {
  if (typeof window !== "undefined") localStorage.removeItem(KEY);
}

/** 从子维度分数生成优势 / 盲区（纯规则，按分数阈值取，避免把低分项说成优势） */
export function deriveStrengthsBlindspots(subs: SubResult[]): { strengths: string[]; blindspots: string[] } {
  const sorted = [...subs].sort((a, b) => b.score - a.score);
  const highs = sorted.filter((s) => s.score >= 60).slice(0, 2);
  const lows = sorted.filter((s) => s.score <= 40).reverse().slice(0, 2);

  const strengths = (highs.length > 0 ? highs : sorted.slice(0, 1)).map(
    (s) => `${s.name}：${s.text}`
  );
  const blindspots = (lows.length > 0 ? lows : sorted.slice(-1)).map(
    (s) => `${s.name}：${s.text}`
  );
  return { strengths, blindspots };
}

const fmtDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

/** 导出完整档案：单一 Markdown 文档，按维度分节，附变更记录 */
export function exportMarkdown(): string {
  const all = loadResults();
  const latest = latestByDim();
  const dims = Object.values(latest);

  if (dims.length === 0) return "";

  const lines: string[] = [];
  lines.push("# 自我认知档案");
  lines.push("");
  lines.push(`> 版本 1.0 | 最后更新 ${fmtDate(new Date().toISOString())} | 数据来源：自我认知 360 系列`);
  lines.push("");

  // 一页速览
  lines.push("## 0. 一页速览");
  lines.push("");
  lines.push("| 维度 | 总体分 | 置信度 | 一句话 |");
  lines.push("|---|---|---|---|");
  for (const d of dims) {
    const top = [...d.subs].sort((a, b) => b.score - a.score)[0];
    lines.push(`| ${d.name} | ${d.overall} | ${Math.round(d.confidence * 100)}% | ${top ? top.text : ""} |`);
  }
  lines.push("");

  // 各维度
  dims.forEach((d, i) => {
    lines.push(`## ${i + 1}. ${d.name}`);
    lines.push("");
    lines.push(`> 测评时间 ${fmtDate(d.date)} | 总体分 ${d.overall} | 置信度 ${Math.round(d.confidence * 100)}% | 答题 ${d.answered} 道`);
    lines.push("");
    lines.push("### 子维度");
    lines.push("");
    for (const s of d.subs) {
      lines.push(`- **${s.name}**（${s.score}）：${s.text}`);
    }
    lines.push("");
    lines.push("### 优势");
    lines.push("");
    for (const s of d.strengths) lines.push(`- ${s}`);
    lines.push("");
    lines.push("### 盲区");
    lines.push("");
    for (const s of d.blindspots) lines.push(`- ${s}`);
    lines.push("");
  });

  // 变更记录
  lines.push("## 变更记录");
  lines.push("");
  lines.push("| 日期 | 维度 | 总体分 | 置信度 |");
  lines.push("|---|---|---|---|");
  for (const r of all) {
    lines.push(`| ${fmtDate(r.date)} | ${r.name} | ${r.overall} | ${Math.round(r.confidence * 100)}% |`);
  }
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("*本档案用于自我探索，不构成心理诊断，不作为招聘、婚恋、保险等决策依据。*");

  return lines.join("\n");
}

export function subText(id: string): string {
  return SUB_TEXT[id]?.name ?? id;
}

export { describeSub };
