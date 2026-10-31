"use client";

import { useEffect, useMemo, useState } from "react";
import { prefetchAllRoles } from "@/lib/imgCache";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { QUESTIONS } from "@/core/questions";

export default function Test() {
  const router = useRouter();
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [locked, setLocked] = useState(false);

  const q = QUESTIONS[idx];
  const progress = useMemo(() => ((idx + (answers[q?.id] ? 1 : 0)) / QUESTIONS.length) * 100, [idx, answers, q]);

  // 答题期间后台预取 12 张角色图，出结果时直接读缓存
  useEffect(() => {
    const t = setTimeout(() => { void prefetchAllRoles(); }, 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("pp_answers");
    if (saved) {
      try { setAnswers(JSON.parse(saved)); } catch {}
    }
  }, []);

  const choose = (optId: string) => {
    if (locked) return;
    setLocked(true);
    const next = { ...answers, [q.id]: optId };
    setAnswers(next);
    sessionStorage.setItem("pp_answers", JSON.stringify(next));
    setTimeout(() => {
      setLocked(false);
      if (idx === QUESTIONS.length - 1) {
        router.push("/result");
      } else {
        setIdx((i) => i + 1);
      }
    }, 220);
  };

  if (!q) return null;

  return (
    <main className="min-h-dvh bg-cream">
      <div className="mx-auto flex min-h-dvh max-w-[520px] flex-col px-5 pb-8 pt-6">
        {/* 顶部进度 */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => (idx === 0 ? router.push("/") : setIdx((i) => i - 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[16px] shadow-sm"
            aria-label="返回"
          >
            ←
          </button>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-black/8">
            <motion.div
              className="h-full rounded-full bg-orange"
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
          <span className="w-10 text-right text-[12px] font-bold text-ink-2">
            {idx + 1}/{QUESTIONS.length}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={q.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
            className="mt-6 flex-1"
          >
            {/* 场景区 */}
            {q.kind !== "self" && (
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFE8D6] via-[#FFF3E4] to-[#DFF3EC] p-5">
                <div className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-orange/15 blur-xl" />
                <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-mint/30 blur-xl" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-black tracking-widest text-orange">SCENE · {String(idx + 1).padStart(2, "0")}</div>
                    <div className="mt-1 text-[17px] font-black">{q.title}</div>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-8 w-8 rounded-full bg-white/70" />
                    <span className="h-8 w-8 rounded-full bg-white/45" />
                    <span className="h-8 w-8 rounded-full bg-white/25" />
                  </div>
                </div>
              </div>
            )}

            {q.kind === "self" && (
              <div className="text-[11px] font-black tracking-widest text-purple">SELF · {String(idx + 1).padStart(2, "0")}</div>
            )}

            <h2 className="mt-5 text-[19px] font-bold leading-8">{q.text}</h2>

            <div className="mt-5 space-y-2.5">
              {q.options.map((o, i) => (
                <motion.button
                  key={o.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.22 }}
                  onClick={() => choose(o.id)}
                  data-selected={answers[q.id] === o.id}
                  className="option flex w-full items-center gap-3 px-4 py-3.5 text-left"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/5 text-[12px] font-black">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-[14px] font-medium leading-6">{o.label}</span>
                </motion.button>
              ))}
            </div>

            {q.kind === "self" && (
              <p className="mt-4 text-center text-[11.5px] text-ink-2/50">按第一反应选，别想太久</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
