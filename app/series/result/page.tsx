"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { getDim } from "@/core/dims";
import { getBank } from "@/core/bank";
import { scoreDim } from "@/core/adaptive";
import { describeSub } from "@/core/interpret";
import {
  saveDimResult,
  deriveStrengthsBlindspots,
  exportMarkdown,
  type DimResult,
  type SubResult,
} from "@/lib/profile";

function ResultInner() {
  const router = useRouter();
  const sp = useSearchParams();
  const dimId = sp.get("dim") ?? "personality";
  const meta = getDim(dimId);
  const items = useMemo(() => getBank(dimId), [dimId]);
  const subDims = useMemo(() => meta?.subDims.map((s) => s.id) ?? [], [meta]);

  const [result, setResult] = useState<DimResult | null>(null);
  const [hint, setHint] = useState("");

  useEffect(() => {
    if (!meta) {
      router.replace("/series");
      return;
    }
    const raw = sessionStorage.getItem(`s360_answers_${dimId}`);
    if (!raw) {
      router.replace(`/series/test?dim=${dimId}`);
      return;
    }
    try {
      const answers = JSON.parse(raw);
      const s = scoreDim(items, answers, subDims);
      const subs: SubResult[] = subDims.map((id) => ({
        id,
        name: meta.subDims.find((x) => x.id === id)?.name ?? id,
        score: s.subs[id].score,
        sigma: s.subs[id].sigma,
        text: describeSub(id, s.subs[id].score),
      }));
      const { strengths, blindspots } = deriveStrengthsBlindspots(subs);
      const r: DimResult = {
        dim: dimId,
        name: meta.name,
        date: new Date().toISOString(),
        overall: s.overall,
        confidence: s.confidence,
        answered: s.answered,
        subs,
        strengths,
        blindspots,
      };
      saveDimResult(r);
      setResult(r);
    } catch {
      router.replace(`/series/test?dim=${dimId}`);
    }
  }, [dimId, items, meta, router, subDims]);

  const download = () => {
    const md = exportMarkdown();
    if (!md) return;
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "自我认知档案.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setHint("已导出完整档案（含已测的所有维度）");
  };

  const copy = async () => {
    const md = exportMarkdown();
    try {
      await navigator.clipboard.writeText(md);
      setHint("档案已复制到剪贴板，可直接粘贴进 Obsidian");
    } catch {
      setHint("复制失败，请用「导出档案」按钮");
    }
  };

  if (!result || !meta) {
    return (
      <main className="flex min-h-dvh items-center justify-center bg-cream">
        <div className="text-[13px] text-ink-2/60">正在计算…</div>
      </main>
    );
  }

  const confidenceLabel =
    result.confidence >= 0.75 ? "高" : result.confidence >= 0.55 ? "中" : "低";

  return (
    <main className="min-h-dvh bg-cream">
      <div className="mx-auto max-w-[520px] px-5 pb-20 pt-8">
        <div className="mb-1 text-[12px] font-bold text-ink-2/60">
          <Link href="/series" className="hover:text-orange">← 返回系列</Link>
        </div>

        <div className="mt-4 flex items-center gap-2 text-[12px] font-bold" style={{ color: meta.color }}>
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: meta.color }} />
          {meta.name} · 测评报告
        </div>

        <h1 className="mt-2 text-[32px] font-black leading-[1.15] tracking-tight">
          你在「{meta.name}」这一面
          <br />
          是 <span style={{ color: meta.color }}>{result.overall}</span> 分
        </h1>

        <div className="mt-2 text-[12.5px] text-ink-2/70">
          置信度 {confidenceLabel}（{Math.round(result.confidence * 100)}%）· 共答 {result.answered} 题
          {result.confidence < 0.55 && " · 信息偏少，结论仅供参考"}
        </div>

        <div className="card mt-6 p-5">
          <div className="text-[13px] font-bold">子维度</div>
          <div className="mt-3 space-y-3.5">
            {result.subs.map((s) => (
              <div key={s.id}>
                <div className="flex items-baseline justify-between text-[12.5px]">
                  <span className="font-bold">{s.name}</span>
                  <span className="text-ink-2/60">{s.score}</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-black/8">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: meta.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${s.score}%` }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                  />
                </div>
                <div className="mt-1 text-[11.5px] leading-5 text-ink-2/65">{s.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4">
          <div className="card p-5">
            <div className="text-[13px] font-bold text-orange">三条优势</div>
            <ul className="mt-2 space-y-2 text-[13px] leading-6 text-ink-2">
              {result.strengths.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-5">
            <div className="text-[13px] font-bold text-blue">两条盲区</div>
            <ul className="mt-2 space-y-2 text-[13px] leading-6 text-ink-2">
              {result.blindspots.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card mt-4 p-5">
          <div className="text-[13px] font-bold">下一步</div>
          <p className="mt-1 text-[12.5px] leading-5 text-ink-2/70">
            这只是你的一面。把其他维度也测完，档案才会完整——而且每多测一个维度，AI 对你的理解就准一分。
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/series" className="btn-primary px-4 py-2.5 text-[13px]">
              继续测其他维度
            </Link>
            <button onClick={download} className="rounded-full border-2 border-black/10 bg-white px-4 py-2.5 text-[13px] font-bold">
              导出档案 .md
            </button>
            <button onClick={copy} className="rounded-full border-2 border-black/10 bg-white px-4 py-2.5 text-[13px] font-bold">
              复制档案
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem(`s360_answers_${dimId}`);
                router.push(`/series/test?dim=${dimId}`);
              }}
              className="rounded-full border-2 border-black/10 bg-white px-4 py-2.5 text-[13px] font-bold"
            >
              重测
            </button>
          </div>
          {hint && <div className="mt-2 text-[11.5px] font-bold text-mint">{hint}</div>}
        </div>

        <p className="mt-6 text-center text-[11px] leading-5 text-ink-2/50">
          用于自我探索，不构成心理诊断。档案只存在你的浏览器里。
        </p>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<main className="min-h-dvh bg-cream" />}>
      <ResultInner />
    </Suspense>
  );
}
