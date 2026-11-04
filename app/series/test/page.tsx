"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { getDim } from "@/core/dims";
import { getBank } from "@/core/bank";
import { nextItem, progress as calcProgress, MAX_ITEMS, type AnswerMap } from "@/core/adaptive";

function TestInner() {
  const router = useRouter();
  const sp = useSearchParams();
  const dimId = sp.get("dim") ?? "personality";
  const meta = getDim(dimId);
  const items = useMemo(() => getBank(dimId), [dimId]);
  const subDims = useMemo(() => meta?.subDims.map((s) => s.id) ?? [], [meta]);

  const [answers, setAnswers] = useState<AnswerMap>({});
  const [locked, setLocked] = useState(false);

  const current = useMemo(() => nextItem(items, answers, subDims), [items, answers, subDims]);
  const prog = useMemo(() => calcProgress(items, answers, subDims), [items, answers, subDims]);

  useEffect(() => {
    if (!meta || items.length === 0) router.replace("/series");
  }, [meta, items, router]);

  const choose = (optId: string) => {
    if (locked || !current) return;
    setLocked(true);
    const next = { ...answers, [current.id]: optId };
    setAnswers(next);
    setTimeout(() => {
      setLocked(false);
      const n = nextItem(items, next, subDims);
      if (!n) {
        sessionStorage.setItem(`s360_answers_${dimId}`, JSON.stringify(next));
        router.push(`/series/result?dim=${dimId}`);
      }
    }, 180);
  };

  if (!meta || !current) {
    return (
      <main className="flex min-h-dvh items-center justify-center bg-cream">
        <div className="text-[13px] text-ink-2/60">正在生成题目…</div>
      </main>
    );
  }

  const answered = prog.answered;
  const percent = Math.min(100, Math.round((answered / MAX_ITEMS) * 100));

  return (
    <main className="min-h-dvh bg-cream">
      <div className="mx-auto flex min-h-dvh max-w-[520px] flex-col px-5 pb-8 pt-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/series")}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[16px] shadow-sm"
            aria-label="返回"
          >
            ←
          </button>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-black/8">
            <motion.div
              className="h-full rounded-full"
              style={{ background: meta.color }}
              animate={{ width: `${Math.max(6, percent)}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
          <span className="w-12 text-right text-[12px] font-bold text-ink-2">{answered}/{MAX_ITEMS}</span>
        </div>

        <div className="mt-6 flex items-center gap-2 text-[12px] font-bold text-ink-2/60">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: meta.color }} />
          {meta.name} · {meta.subDims.find((s) => s.id === current.subDim)?.name ?? "综合"}
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
          className="mt-4"
        >
          <h2 className="text-[22px] font-black leading-[1.35] tracking-tight">{current.text}</h2>

          <div className="mt-6 space-y-3">
            {current.options.map((o) => (
              <button
                key={o.id}
                onClick={() => choose(o.id)}
                className="card w-full px-4 py-3.5 text-left text-[14.5px] leading-6 transition hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-md"
              >
                <span className="mr-2 text-[12px] font-black text-ink-2/40">{o.id}</span>
                {o.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-auto pt-8">
          <div className="rounded-2xl bg-white/70 p-3 text-[11.5px] leading-5 text-ink-2/60">
            题目会跟着你的回答走：已经确认的部分不再重复问，不确定的地方会多问两道。
            {prog.weak.length > 0 && (
              <span className="ml-1 font-bold" style={{ color: meta.color }}>
                还需确认 {prog.weak.length} 个子维度
              </span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<main className="min-h-dvh bg-cream" />}>
      <TestInner />
    </Suspense>
  );
}
