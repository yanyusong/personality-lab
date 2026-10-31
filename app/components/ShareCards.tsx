"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { toPng } from "html-to-image";
import { asset } from "@/lib/asset";
import { DIM_LABEL, BIAS_LABEL, BIAS_ADVICE } from "@/core/scoring";
import type { Dim, Result, Bias } from "@/core/types";

const W = 1080;
const H = 1920;

export type ShareCardsHandle = {
  generate: () => Promise<string[]>;
};

type Props = { res: Result; qr: string };

export const ShareCards = forwardRef<ShareCardsHandle, Props>(function ShareCards({ res, qr }, ref) {
  const p1 = useRef<HTMLDivElement>(null);
  const p2 = useRef<HTMLDivElement>(null);
  const p3 = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    generate: async () => {
      const nodes = [p1.current, p2.current, p3.current];
      const out: string[] = [];
      for (const n of nodes) {
        if (!n) continue;
        out.push(await toPng(n, { pixelRatio: 1, cacheBust: true, backgroundColor: "#FFF8F0" }));
      }
      return out;
    },
  }));

  const r = res.primary;
  const dims: Dim[] = ["O", "C", "E", "A", "N"];
  const biases = (Object.entries(res.profile.biases) as [Bias, number][])
    .sort((a, b) => Math.abs(b[1] - 50) - Math.abs(a[1] - 50))
    .slice(0, 3);

  return (
    <div style={{ position: "fixed", left: -99999, top: 0, pointerEvents: "none" }}>
      {/* ---------- P1 封面 ---------- */}
      <div ref={p1} style={{ width: W, height: H, background: "#FFF8F0", position: "relative", overflow: "hidden" }}>
        <div style={{ padding: "72px 76px 0" }}>
          <div style={{ fontSize: 26, fontWeight: 900, letterSpacing: 8, color: r.color }}>{r.en} · {r.no}</div>
          <div style={{ fontSize: 120, fontWeight: 900, lineHeight: 1.06, marginTop: 8 }}>{r.name}</div>
          <div style={{ fontSize: 30, fontWeight: 700, color: "rgba(34,31,28,0.55)", marginTop: 10 }}>
            人格档案 · 第 {r.no} 号角色
          </div>
        </div>

        <div style={{ position: "absolute", top: 430, left: 76, right: 76, height: 860, borderRadius: 40, overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(r.image)} alt="" crossOrigin="anonymous" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        <div style={{ position: "absolute", left: 76, right: 76, bottom: 300 }}>
          <div style={{ fontSize: 46, fontWeight: 900, lineHeight: 1.42 }}>{r.verdict}</div>
          <div style={{ fontSize: 28, marginTop: 16, color: "rgba(34,31,28,0.62)", lineHeight: 1.5 }}>{r.oneLine}</div>
        </div>

        <div style={{ position: "absolute", left: 76, right: 76, bottom: 84, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 30, fontWeight: 900 }}>人格档案</div>
            <div style={{ fontSize: 22, color: "rgba(34,31,28,0.55)", marginTop: 6 }}>15 题 · 3 分钟 · 不用登录</div>
          </div>
          {qr && (
            <div style={{ background: "#fff", padding: 10, borderRadius: 18 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qr} alt="qr" style={{ width: 140, height: 140, display: "block" }} />
            </div>
          )}
        </div>
      </div>

      {/* ---------- P2 刻度 · 超能力 · 暗礁 ---------- */}
      <div ref={p2} style={{ width: W, height: H, background: "#FFF8F0", position: "relative", overflow: "hidden", padding: "76px 76px 0" }}>
        <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: 6, color: r.color }}>YOUR SCALE</div>
        <div style={{ fontSize: 56, fontWeight: 900, marginTop: 10 }}>你的五个刻度</div>

        <div style={{ marginTop: 36 }}>
          {dims.map((d) => (
            <div key={d} style={{ marginBottom: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: 28, fontWeight: 700 }}>{DIM_LABEL[d]}</span>
                <span style={{ fontSize: 26, fontWeight: 900, color: r.color }}>{res.profile.dims[d]}</span>
              </div>
              <div style={{ height: 14, background: "rgba(34,31,28,0.08)", borderRadius: 10, marginTop: 8, overflow: "hidden" }}>
                <div style={{ width: `${res.profile.dims[d]}%`, height: "100%", background: r.color, borderRadius: 10 }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 34 }}>
          <div style={{ fontSize: 34, fontWeight: 900 }}>你会怎么错</div>
          <div style={{ marginTop: 14 }}>
            {biases.map(([b, v]) => (
              <div key={b} style={{ background: "#fff", borderRadius: 24, padding: "20px 24px", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 25, fontWeight: 900 }}>{BIAS_LABEL[b]}</span>
                  <span style={{ fontSize: 19, fontWeight: 900, color: "#FF6B35", background: "rgba(255,107,53,0.12)", borderRadius: 999, padding: "4px 14px" }}>{biasLabel(v)}</span>
                </div>
                <div style={{ fontSize: 22, lineHeight: 1.5, color: "rgba(34,31,28,0.7)", marginTop: 8 }}>{BIAS_ADVICE[b]}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 30 }}>
          <div style={{ fontSize: 32, fontWeight: 900 }}>三个超能力</div>
          {r.strengths.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 16, marginTop: 16 }}>
              <div style={{ width: 30, height: 30, borderRadius: 15, background: r.color, color: "#fff", fontSize: 18, fontWeight: 900, textAlign: "center", lineHeight: "30px", flexShrink: 0 }}>{i + 1}</div>
              <div style={{ fontSize: 25, lineHeight: 1.55 }}>{s}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 26 }}>
          <div style={{ fontSize: 32, fontWeight: 900 }}>三个暗礁</div>
          {r.reefs.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 16, marginTop: 14 }}>
              <div style={{ width: 30, height: 30, borderRadius: 15, background: "#E4572E", color: "#fff", fontSize: 18, fontWeight: 900, textAlign: "center", lineHeight: "30px", flexShrink: 0 }}>{i + 1}</div>
              <div style={{ fontSize: 24, lineHeight: 1.5, color: "rgba(34,31,28,0.85)" }}>{s}</div>
            </div>
          ))}
        </div>

        <div style={{ position: "absolute", left: 76, right: 76, bottom: 110, background: "#fff", borderRadius: 26, padding: "22px 26px", boxShadow: "0 6px 20px rgba(34,31,28,0.06)" }}>
          <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 4, color: r.color }}>还有一个你</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 6 }}>
            <span style={{ fontSize: 32, fontWeight: 900 }}>{res.secondary.name}</span>
            <span style={{ fontSize: 22, color: "rgba(34,31,28,0.55)" }}>{Math.round((1 - res.confidence) * 100)}%</span>
          </div>
          <div style={{ fontSize: 22, lineHeight: 1.5, color: "rgba(34,31,28,0.68)", marginTop: 6 }}>{res.secondary.verdict}</div>
        </div>

        <div style={{ position: "absolute", left: 76, right: 76, bottom: 46, display: "flex", justifyContent: "space-between", fontSize: 20, color: "rgba(34,31,28,0.4)" }}>
          <span>{r.name} · 人格档案</span><span>2 / 3</span>
        </div>
      </div>

      {/* ---------- P3 怎么做 · 压力态 · 协作 ---------- */}
      <div ref={p3} style={{ width: W, height: H, background: "#FFF8F0", position: "relative", overflow: "hidden", padding: "76px 76px 0" }}>
        <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: 6, color: r.color }}>WHAT TO DO</div>
        <div style={{ fontSize: 56, fontWeight: 900, marginTop: 10 }}>现在这个选择，你该怎么做</div>

        <div style={{ marginTop: 34 }}>
          {r.scripts.map((s) => (
            <div key={s.scene} style={{ background: "#fff", borderRadius: 26, padding: "24px 26px", marginBottom: 18 }}>
              <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 4, color: r.color }}>{s.scene}</div>
              <div style={{ fontSize: 23, lineHeight: 1.55, marginTop: 12 }}>
                <span style={{ color: "rgba(34,31,28,0.5)" }}>默认动作：</span>{s.defaultMove}
              </div>
              <div style={{ fontSize: 23, lineHeight: 1.55, marginTop: 6 }}>
                <span style={{ color: "rgba(34,31,28,0.5)" }}>会怎么错：</span>{s.trap}
              </div>
              <div style={{ fontSize: 23, lineHeight: 1.55, marginTop: 10, background: "rgba(255,107,53,0.08)", borderRadius: 16, padding: "12px 16px" }}>
                <span style={{ color: "#FF6B35", fontWeight: 900 }}>怎么改：</span>{s.fix}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 10, background: "#221F1C", borderRadius: 26, padding: "26px 26px", color: "#FFF8F0" }}>
          <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 4, color: "#FFD166" }}>UNDER PRESSURE · 第二人格</div>
          <div style={{ fontSize: 38, fontWeight: 900, marginTop: 8 }}>{r.pressure.name}</div>
          <div style={{ fontSize: 23, lineHeight: 1.55, marginTop: 8, color: "rgba(255,248,240,0.75)" }}>{r.pressure.desc}</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
            {r.pressure.signals.map((s) => (
              <span key={s} style={{ background: "rgba(255,255,255,0.14)", borderRadius: 999, padding: "8px 16px", fontSize: 20 }}>{s}</span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 20, display: "flex", gap: 14 }}>
          <div style={{ flex: 1, background: "rgba(126,217,195,0.28)", borderRadius: 22, padding: "18px 22px" }}>
            <div style={{ fontSize: 20, color: "rgba(34,31,28,0.55)" }}>最省力搭档</div>
            <div style={{ fontSize: 30, fontWeight: 900, marginTop: 4 }}>{r.partners.easy}</div>
          </div>
          <div style={{ flex: 1, background: "rgba(255,107,53,0.14)", borderRadius: 22, padding: "18px 22px" }}>
            <div style={{ fontSize: 20, color: "rgba(34,31,28,0.55)" }}>最费劲搭档</div>
            <div style={{ fontSize: 30, fontWeight: 900, marginTop: 4 }}>{r.partners.hard}</div>
          </div>
        </div>

        <div style={{ marginTop: 22, background: "rgba(255,209,102,0.3)", borderRadius: 24, padding: "24px 26px" }}>
          <div style={{ fontSize: 25, fontWeight: 900, lineHeight: 1.5 }}>把这张图发给最了解你的那个人</div>
          <div style={{ fontSize: 22, lineHeight: 1.55, color: "rgba(34,31,28,0.65)", marginTop: 8 }}>
            看他认不认这个判词。他要是笑了，说明这张图成了。
          </div>
        </div>

        <div style={{ position: "absolute", left: 76, right: 76, bottom: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 26, fontWeight: 900 }}>扫码，测你的人格档案</div>
            <div style={{ fontSize: 20, color: "rgba(34,31,28,0.5)", marginTop: 6 }}>15 题 · 3 分钟 · 不用登录</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 20, color: "rgba(34,31,28,0.4)" }}>3 / 3</span>
            {qr && (
              <div style={{ background: "#fff", padding: 8, borderRadius: 14 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={qr} alt="qr" style={{ width: 116, height: 116, display: "block" }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

function biasLabel(v: number) {
  if (v >= 68) return "高";
  if (v >= 58) return "偏高";
  if (v <= 32) return "低";
  if (v <= 42) return "偏低";
  return "中等";
}
