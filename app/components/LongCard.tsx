"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { toPng } from "html-to-image";
import { cdnAsset } from "@/lib/asset";
import { loadImage } from "@/lib/imgCache";
import { DIM_LABEL, DIM_DESC, BIAS_LABEL, BIAS_ADVICE } from "@/core/scoring";
import type { Dim, Result, Bias } from "@/core/types";

export type LongCardHandle = { generate: () => Promise<string | null> };

type Props = { res: Result; qr: string; imgSrc?: string };

const W = 1080;

export const LongCard = forwardRef<LongCardHandle, Props>(function LongCard({ res, qr, imgSrc }, ref) {
  const node = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => ({
    generate: async () => {
      if (!node.current) return null;

      // 1) 先把角色图拿到（dataURL，同源，canvas 可直接绘制）
      const dataUrl = imgSrc || (await loadImage(r.image));

      // 2) 模板（文字/二维码）截图：图片区先留白
      const base = await toPng(node.current, {
        pixelRatio: 1,
        cacheBust: false,
        backgroundColor: "#FFF8F0",
      });

      if (!dataUrl) return base;

      // 3) 用 canvas 把公仔按 cover 裁切后叠到留白处
      //    —— 不依赖 foreignObject 渲染 <img>，Safari/微信内核都能出图
      try {
        const nodeRect = node.current.getBoundingClientRect();
        const ph = node.current.querySelector<HTMLElement>("[data-photo]");
        if (!ph) return base;
        const pr = ph.getBoundingClientRect();
        const x = pr.left - nodeRect.left;
        const y = pr.top - nodeRect.top;
        const w = pr.width;
        const h = pr.height;

        const [baseImg, photo] = await Promise.all([loadImgEl(base), loadImgEl(dataUrl)]);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(nodeRect.width);
        canvas.height = Math.round(nodeRect.height);
        const ctx = canvas.getContext("2d");
        if (!ctx) return base;
        ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

        const radius = 36;
        ctx.save();
        roundRect(ctx, x, y, w, h, radius);
        ctx.clip();
        // cover 裁切，焦点偏上 30%
        const ir = photo.width / photo.height;
        const br = w / h;
        let sx = 0, sy = 0, sw = photo.width, sh = photo.height;
        if (ir > br) {
          sw = photo.height * br;
          sx = (photo.width - sw) / 2;
        } else {
          sh = photo.width / br;
          sy = (photo.height - sh) * 0.3;
        }
        ctx.drawImage(photo, sx, sy, sw, sh, x, y, w, h);
        ctx.restore();
        return canvas.toDataURL("image/png");
      } catch {
        return base;
      }
    },
  }));

  const r = res.primary;
  const dims: Dim[] = ["O", "C", "E", "A", "N"];
  const biases = (Object.entries(res.profile.biases) as [Bias, number][])
    .sort((a, b) => Math.abs(b[1] - 50) - Math.abs(a[1] - 50))
    .slice(0, 3);

  return (
    <div style={{ position: "fixed", left: 0, top: 0, opacity: 0, zIndex: -1, pointerEvents: "none" }}>
      <div ref={node} style={{ width: W, background: "#FFF8F0", padding: "80px 76px 70px", boxSizing: "border-box", position: "relative" }}>
        {/* 右上角二维码 */}
        {qr && (
          <div style={{ position: "absolute", top: 72, right: 72, textAlign: "center" }}>
            <div style={{ background: "#fff", padding: 9, borderRadius: 16, boxShadow: "0 6px 18px rgba(34,31,28,0.10)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qr} alt="qr" style={{ width: 132, height: 132, display: "block" }} />
            </div>
            <div style={{ fontSize: 17, color: "rgba(34,31,28,0.55)", marginTop: 7 }}>扫码测你的</div>
          </div>
        )}
        {/* 头部（右侧留出二维码位） */}
        <div style={{ maxWidth: 760 }}>
          <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: 8, color: r.color }}>{r.en} · {r.no}</div>
          <div style={{ fontSize: 112, fontWeight: 900, lineHeight: 1.05, marginTop: 10 }}>{r.name}</div>
          <div style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.5, marginTop: 22 }}>{r.verdict}</div>
          <div style={{ fontSize: 25, color: "rgba(34,31,28,0.62)", marginTop: 10 }}>{r.oneLine}</div>
        </div>

        {/* 公仔（截图时由 canvas 叠加，模板里只留占位） */}
        <div data-photo style={{ marginTop: 34, height: 780, borderRadius: 36, background: "#F3E9DD" }} />

        <Divider />

        {/* 五个刻度 */}
        <Head kicker="YOUR SCALE" title="你的五个刻度" color={r.color} />
        <div style={{ marginTop: 30 }}>
          {dims.map((d) => (
            <div key={d} style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: 28, fontWeight: 700 }}>{DIM_LABEL[d]}</span>
                <span style={{ fontSize: 26, fontWeight: 900, color: r.color }}>{res.profile.dims[d]}</span>
              </div>
              <div style={{ height: 14, background: "rgba(34,31,28,0.08)", borderRadius: 10, marginTop: 8, overflow: "hidden" }}>
                <div style={{ width: `${res.profile.dims[d]}%`, height: "100%", background: r.color, borderRadius: 10 }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 9, fontSize: 21, color: "rgba(34,31,28,0.58)" }}>
                <span>{DIM_DESC[d][0]}</span>
                <span>{DIM_DESC[d][1]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 偏误 */}
        <Head kicker="HOW YOU FAIL" title="你会怎么错" color="#FF6B35" />
        <div style={{ marginTop: 26 }}>
          {biases.map(([b, v]) => (
            <div key={b} style={{ background: "#fff", borderRadius: 24, padding: "22px 26px", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 26, fontWeight: 900 }}>{BIAS_LABEL[b]}</span>
                <span style={{ fontSize: 19, fontWeight: 900, color: "#FF6B35", background: "rgba(255,107,53,0.12)", borderRadius: 999, padding: "4px 14px" }}>{biasLabel(v)}</span>
              </div>
              <div style={{ fontSize: 23, lineHeight: 1.55, color: "rgba(34,31,28,0.7)", marginTop: 10 }}>{BIAS_ADVICE[b]}</div>
            </div>
          ))}
        </div>

        {/* 超能力 */}
        <Head kicker="SUPERPOWER" title="三个超能力" color={r.color} />
        <div style={{ marginTop: 22 }}>
          {r.strengths.map((s, i) => (
            <Row key={i} i={i} text={s} color={r.color} />
          ))}
        </div>

        {/* 暗礁 */}
        <Head kicker="REEF" title="三个暗礁" color="#E4572E" />
        <div style={{ marginTop: 22 }}>
          {r.reefs.map((s, i) => (
            <Row key={i} i={i} text={s} color="#E4572E" />
          ))}
        </div>

        <Divider />

        {/* 决策剧本 */}
        <Head kicker="WHAT TO DO" title="现在这个选择，你该怎么做" color={r.color} />
        <div style={{ marginTop: 26 }}>
          {r.scripts.map((s) => (
            <div key={s.scene} style={{ background: "#fff", borderRadius: 26, padding: "26px 28px", marginBottom: 18 }}>
              <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 4, color: r.color }}>{s.scene}</div>
              <div style={{ fontSize: 24, lineHeight: 1.6, marginTop: 12 }}>
                <span style={{ color: "rgba(34,31,28,0.45)" }}>默认动作：</span>{s.defaultMove}
              </div>
              <div style={{ fontSize: 24, lineHeight: 1.6, marginTop: 6 }}>
                <span style={{ color: "rgba(34,31,28,0.45)" }}>会怎么错：</span>{s.trap}
              </div>
              <div style={{ fontSize: 24, lineHeight: 1.6, marginTop: 12, background: "rgba(255,107,53,0.08)", borderRadius: 16, padding: "14px 18px" }}>
                <span style={{ color: "#FF6B35", fontWeight: 900 }}>怎么改：</span>{s.fix}
              </div>
            </div>
          ))}
        </div>

        {/* 压力态 */}
        <div style={{ marginTop: 26, background: "#221F1C", borderRadius: 28, padding: "30px 30px", color: "#FFF8F0" }}>
          <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 4, color: "#FFD166" }}>UNDER PRESSURE · 第二人格</div>
          <div style={{ fontSize: 40, fontWeight: 900, marginTop: 10 }}>{r.pressure.name}</div>
          <div style={{ fontSize: 24, lineHeight: 1.6, marginTop: 10, color: "rgba(255,248,240,0.75)" }}>{r.pressure.desc}</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            {r.pressure.signals.map((s) => (
              <span key={s} style={{ background: "rgba(255,255,255,0.14)", borderRadius: 999, padding: "8px 16px", fontSize: 20 }}>{s}</span>
            ))}
          </div>
        </div>

        {/* 搭档 + 第二倾向 */}
        <div style={{ marginTop: 20, display: "flex", gap: 16 }}>
          <div style={{ flex: 1, background: "rgba(126,217,195,0.28)", borderRadius: 24, padding: "20px 24px" }}>
            <div style={{ fontSize: 20, color: "rgba(34,31,28,0.55)" }}>最省力搭档</div>
            <div style={{ fontSize: 32, fontWeight: 900, marginTop: 6 }}>{r.partners.easy}</div>
          </div>
          <div style={{ flex: 1, background: "rgba(255,107,53,0.14)", borderRadius: 24, padding: "20px 24px" }}>
            <div style={{ fontSize: 20, color: "rgba(34,31,28,0.55)" }}>最费劲搭档</div>
            <div style={{ fontSize: 32, fontWeight: 900, marginTop: 6 }}>{r.partners.hard}</div>
          </div>
        </div>

        <div style={{ marginTop: 20, background: "#fff", borderRadius: 26, padding: "24px 28px" }}>
          <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 4, color: r.color }}>还有一个你</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 8 }}>
            <span style={{ fontSize: 34, fontWeight: 900 }}>{res.secondary.name}</span>
            <span style={{ fontSize: 22, color: "rgba(34,31,28,0.55)" }}>{Math.round((1 - res.confidence) * 100)}%</span>
          </div>
          <div style={{ fontSize: 23, lineHeight: 1.55, color: "rgba(34,31,28,0.68)", marginTop: 8 }}>{res.secondary.verdict}</div>
        </div>

        {/* 收尾 */}
        <div style={{ marginTop: 30, background: "rgba(255,209,102,0.32)", borderRadius: 26, padding: "26px 28px" }}>
          <div style={{ fontSize: 27, fontWeight: 900, lineHeight: 1.5 }}>把这张图发给最了解你的那个人</div>
          <div style={{ fontSize: 23, lineHeight: 1.6, color: "rgba(34,31,28,0.65)", marginTop: 10 }}>
            看他认不认这个判词。他要是笑了，说明这张图成了。
          </div>
        </div>

        <div style={{ marginTop: 34, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 32, fontWeight: 900 }}>人格档案</div>
            <div style={{ fontSize: 22, color: "rgba(34,31,28,0.55)", marginTop: 6 }}>扫码，测你的人格档案 · 15 题 3 分钟</div>
          </div>
          {qr && (
            <div style={{ background: "#fff", padding: 10, borderRadius: 18 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qr} alt="qr" style={{ width: 150, height: 150, display: "block" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

function Head({ kicker, title, color }: { kicker: string; title: string; color: string }) {
  return (
    <div style={{ marginTop: 56 }}>
      <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 6, color }}>{kicker}</div>
      <div style={{ fontSize: 48, fontWeight: 900, marginTop: 8 }}>{title}</div>
    </div>
  );
}

function Row({ i, text, color }: { i: number; text: string; color: string }) {
  return (
    <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
      <div style={{ width: 32, height: 32, borderRadius: 16, background: color, color: "#fff", fontSize: 19, fontWeight: 900, textAlign: "center", lineHeight: "32px", flexShrink: 0 }}>{i + 1}</div>
      <div style={{ fontSize: 25, lineHeight: 1.6 }}>{text}</div>
    </div>
  );
}

function Divider() {
  return <div style={{ height: 2, background: "rgba(34,31,28,0.08)", margin: "48px 0 0" }} />;
}

function biasLabel(v: number) {
  if (v >= 68) return "高";
  if (v >= 58) return "偏高";
  if (v <= 32) return "低";
  if (v <= 42) return "偏低";
  return "中等";
}

function loadImgEl(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
