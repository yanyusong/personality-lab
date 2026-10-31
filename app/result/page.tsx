"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import QRCode from "qrcode";
import { LongCard, type LongCardHandle } from "@/app/components/LongCard";
import { analyze, DIM_DESC, DIM_LABEL, BIAS_LABEL, BIAS_ADVICE } from "@/core/scoring";
import { asset, cdnAsset, BASE_PATH } from "@/lib/asset";
import { getCachedImage, loadImage } from "@/lib/imgCache";
import { track } from "@/lib/track";
import type { Bias, Dim, Result } from "@/core/types";

const ORDER: Dim[] = ["O", "C", "E", "A", "N"];

export default function ResultPage() {
  const router = useRouter();
  const [res, setRes] = useState<Result | null>(null);
  const [qr, setQr] = useState<string>("");
  const [sharing, setSharing] = useState(false);
  const [longImg, setLongImg] = useState<string>("");
  const [showSave, setShowSave] = useState(false);
  const [savedHint, setSavedHint] = useState("");
  const [imgData, setImgData] = useState<string>("");
  const shareRef = useRef<LongCardHandle>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("pp_answers");
    if (!raw) { router.replace("/"); return; }
    try {
      setRes(analyze(JSON.parse(raw)));
    } catch {
      router.replace("/");
    }
  }, [router]);

  // 直接从答题期的预取缓存取图；没命中再补加载
  useEffect(() => {
    if (!res) return;
    const path = res.primary.image;
    const hit = getCachedImage(path);
    if (hit) {
      setImgData(hit);
      return;
    }
    let cancelled = false;
    loadImage(path).then((d) => {
      if (!cancelled && d) setImgData(d);
    });
    return () => {
      cancelled = true;
    };
  }, [res]);

  useEffect(() => {
    const url = `${window.location.origin}${BASE_PATH}/?from=card&utm_source=share&utm_medium=longimage`;
    QRCode.toDataURL(url, { margin: 1, width: 320, color: { dark: "#221F1C", light: "#FFFFFF" } })
      .then(setQr)
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (res) track("result_view", { role: res.primary.id, conf: Math.round(res.confidence * 100) });
  }, [res]);

  const topBiases = useMemo(() => {
    if (!res) return [];
    return (Object.entries(res.profile.biases) as [Bias, number][])
      .sort((a, b) => Math.abs(b[1] - 50) - Math.abs(a[1] - 50))
      .slice(0, 3);
  }, [res]);

  const fileName = () => `人格档案_${res?.primary.name ?? "结果"}_长图.png`;

  const downloadLong = (dataUrl: string) => {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = fileName();
    a.click();
  };

  /** 优先调用系统分享面板（iOS 上就是"存储图像"），不支持则下载 */
  const saveToAlbum = async () => {
    if (!longImg) return;
    try {
      const blob = await (await fetch(longImg)).blob();
      const file = new File([blob], fileName(), { type: "image/png" });
      const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
      if (nav.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: "人格档案" });
        setSavedHint("已保存（如果没看到，请在弹窗里选「存储图像」）");
        return;
      }
    } catch {
      /* 用户取消或不支持，回退下载 */
    }
    downloadLong(longImg);
    setSavedHint("已下载到本地");
  };

  const makeCard = async () => {
    if (!shareRef.current) return;
    setSharing(true);
    try {
      const img = await shareRef.current.generate();
      if (img) {
        setLongImg(img);
        setSavedHint("");
        track("share_generate", { role: res?.primary.id ?? "" });
        setShowSave(true);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setSharing(false);
    }
  };

  if (!res) return <main className="min-h-dvh bg-cream" />;
  const r = res.primary;
  const second = res.secondary;
  const showSecond = res.confidence < 0.78;

  return (
    <main className="min-h-dvh bg-cream pb-16">
      <div className="mx-auto max-w-[520px] px-5 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[12px] font-bold tracking-widest text-ink-2/60">YOUR SCRIPT</span>
          <button onClick={() => router.push("/")} className="text-[12px] font-semibold text-ink-2/60">重测</button>
        </div>

        {/* 角色卡 */}
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-[32px] shadow-xl">
          <div className="relative" style={{ aspectRatio: "3/4" }}>
            <img src={imgData || cdnAsset(r.image)} alt={r.name} width={720} height={960} className="h-full w-full object-cover" onError={(e) => { const t = e.currentTarget; if (!t.dataset.fb) { t.dataset.fb = "1"; t.src = asset(r.image); } }} />
            <div className="absolute inset-x-0 top-0 h-40 scrim-top" />
            <div className="absolute inset-x-0 bottom-0 h-56 scrim-bottom" />
            <div className="absolute left-5 top-5">
              <div className="text-[11px] font-black tracking-[0.2em]" style={{ color: r.color }}>{r.en} · {r.no}</div>
              <h1 className="mt-1 text-[40px] font-black leading-none">{r.name}</h1>
            </div>
            <div className="absolute inset-x-5 bottom-5">
              <p className="text-[15px] font-bold leading-6">{r.verdict}</p>
              <p className="mt-1 text-[12.5px] leading-5 text-ink-2/80">{r.oneLine}</p>
            </div>
          </div>
        </motion.div>

        {/* 置信度 & 第二倾向 */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 rounded-2xl bg-white px-4 py-3 shadow-sm">
            <div className="text-[11px] text-ink-2/60">匹配度</div>
            <div className="text-[18px] font-black">{Math.round(res.confidence * 100)}%</div>
          </div>
          {showSecond && (
            <div className="flex-[1.6] rounded-2xl bg-white px-4 py-3 shadow-sm">
              <div className="text-[11px] text-ink-2/60">第二倾向</div>
              <div className="text-[15px] font-bold">{second.name} <span className="text-[11.5px] font-medium text-ink-2/60">也像你</span></div>
            </div>
          )}
        </div>

        {/* 大五 */}
        <Section title="你的五个刻度" sub="你不是标签，是一组连续的倾向">
          {ORDER.map((d, i) => (
            <div key={d} className="mb-4 last:mb-0">
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] font-bold">{DIM_LABEL[d]}</span>
                <span className="text-[12px] font-black" style={{ color: r.color }}>{res.profile.dims[d]}</span>
              </div>
              <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-black/6">
                <motion.div className="h-full rounded-full"
                  style={{ background: r.color }}
                  initial={{ width: 0 }} animate={{ width: `${res.profile.dims[d]}%` }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.7, ease: "easeOut" }} />
              </div>
              <div className="mt-1 flex justify-between text-[10.5px] text-ink-2/55">
                <span>{DIM_DESC[d][0]}</span><span>{DIM_DESC[d][1]}</span>
              </div>
            </div>
          ))}
        </Section>

        {/* 偏误 */}
        <Section title="你会怎么错" sub="性格只说明你是谁，偏误说明你会掉进哪个坑">
          {topBiases.map(([b, v]) => (
            <div key={b} className="mb-3 rounded-2xl bg-cream/70 p-3.5 last:mb-0">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold">{BIAS_LABEL[b]}</span>
                <span className="rounded-full bg-orange/12 px-2 py-0.5 text-[11px] font-black text-orange">{biasLevel(v)}</span>
              </div>
              <p className="mt-1 text-[12px] leading-5 text-ink-2/80">{BIAS_ADVICE[b]}</p>
            </div>
          ))}
        </Section>

        {/* 超能力 */}
        <Section title="你的三个超能力">
          {r.strengths.map((s, i) => (
            <Bullet key={i} n={i + 1} text={s} color={r.color} />
          ))}
        </Section>

        {/* 暗礁 */}
        <Section title="你的三个暗礁" sub="不是缺点，是会在特定时刻咬你一口的东西">
          {r.reefs.map((s, i) => (
            <Bullet key={i} n={i + 1} text={s} color="#E4572E" />
          ))}
        </Section>

        {/* 决策剧本 */}
        <Section title="现在这个选择，你该怎么做" sub="三类高频场景：你的默认动作 → 会怎么错 → 怎么改">
          {r.scripts.map((s) => (
            <div key={s.scene} className="mb-3 rounded-2xl border-2 border-black/6 p-4 last:mb-0">
              <div className="text-[11px] font-black tracking-widest" style={{ color: r.color }}>{s.scene}</div>
              <div className="mt-2 space-y-1.5 text-[12.5px] leading-5">
                <p><span className="font-bold text-ink-2/70">默认动作：</span>{s.defaultMove}</p>
                <p><span className="font-bold text-ink-2/70">会怎么错：</span>{s.trap}</p>
                <p className="rounded-xl bg-cream/80 p-2.5"><span className="font-bold text-orange">怎么改：</span>{s.fix}</p>
              </div>
            </div>
          ))}
        </Section>

        {/* 压力态 */}
        <Section title="你的第二人格" sub="平时是这个人，压力大了会变成另一个">
          <div className="rounded-2xl bg-ink p-4 text-cream">
            <div className="text-[11px] font-black tracking-widest text-yellow">UNDER PRESSURE</div>
            <div className="mt-1 text-[20px] font-black">{r.pressure.name}</div>
            <p className="mt-1 text-[12.5px] leading-5 text-cream/75">{r.pressure.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {r.pressure.signals.map((s) => (
                <span key={s} className="rounded-full bg-white/12 px-2.5 py-1 text-[11px]">{s}</span>
              ))}
            </div>
          </div>
        </Section>

        {/* 协作 */}
        <Section title="跟谁合作最省力">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-2xl bg-mint/25 p-3.5">
              <div className="text-[11px] text-ink-2/60">最省力</div>
              <div className="text-[15px] font-black">{r.partners.easy}</div>
            </div>
            <div className="rounded-2xl bg-orange/12 p-3.5">
              <div className="text-[11px] text-ink-2/60">最费劲</div>
              <div className="text-[15px] font-black">{r.partners.hard}</div>
            </div>
          </div>
          <p className="mt-2.5 text-[12.5px] leading-5 text-ink-2/80">{r.partners.tip}</p>
        </Section>

        <button onClick={makeCard} disabled={sharing || !imgData} className="btn-primary mt-8 w-full py-4 text-[16px] disabled:opacity-60">
          {sharing ? "生成中…" : imgData ? "生成分享长图" : "准备中…"}
        </button>
        <p className="mt-3 text-center text-[11px] leading-5 text-ink-2/55">
          一屏到底：角色 + 刻度 + 暗礁 + 行动剧本 + 二维码
        </p>

        {longImg && (
          <div className="mt-7">
            <div className="mb-3 flex items-baseline justify-between">
              <span className="text-[13px] font-black">长图已生成</span>
              <button onClick={() => setShowSave(true)} className="text-[12px] font-bold text-orange">
                保存到相册
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={longImg} alt="长图" className="w-full rounded-2xl shadow-lg" />
            <p className="mt-2 text-center text-[11px] text-ink-2/55">{savedHint || "点上方「保存到相册」，或长按图片保存"}</p>
          </div>
        )}
      </div>

      {showSave && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 px-4 pb-6" onClick={() => setShowSave(false)}>
          <div className="w-full max-w-[420px] rounded-3xl bg-white p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-[17px] font-black">长图生成好了</div>
            <p className="mt-1 text-[12.5px] leading-5 text-ink-2/70">存到相册，发给最了解你的那个人</p>
            <div className="mt-3 overflow-hidden rounded-2xl border border-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={longImg} alt="长图预览" className="max-h-[42vh] w-full object-cover object-top" />
            </div>
            <button onClick={saveToAlbum} className="btn-primary mt-4 w-full py-3.5 text-[15px]">
              保存到相册
            </button>
            <button onClick={() => { downloadLong(longImg); setSavedHint("已下载到本地"); }} className="mt-2 w-full rounded-2xl border-2 border-black/10 py-3 text-[14px] font-bold">
              下载图片
            </button>
            <button onClick={() => setShowSave(false)} className="mt-2 w-full py-2 text-[13px] text-ink-2/60">
              先不存，继续看结果
            </button>
            <p className="mt-2 text-center text-[11px] leading-4 text-ink-2/50">
              手机上会弹出系统面板，选「存储图像」即可进相册
            </p>
          </div>
        </div>
      )}

      <LongCard ref={shareRef} res={res} qr={qr} imgSrc={imgData} />
    </main>
  );
}

function biasLevel(v: number) {
  if (v >= 68) return "高";
  if (v >= 58) return "偏高";
  if (v <= 32) return "低";
  if (v <= 42) return "偏低";
  return "中等";
}

function Section({ title, sub, children }: { title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section className="mt-7">
      <h3 className="text-[16px] font-black">{title}</h3>
      {sub && <p className="mt-1 text-[11.5px] leading-5 text-ink-2/60">{sub}</p>}
      <div className="card mt-3 p-4">{children}</div>
    </section>
  );
}

function Bullet({ n, text, color }: { n: number; text: string; color: string }) {
  return (
    <div className="mb-3 flex gap-3 last:mb-0">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white" style={{ background: color }}>
        {n}
      </span>
      <p className="text-[13px] leading-6">{text}</p>
    </div>
  );
}
