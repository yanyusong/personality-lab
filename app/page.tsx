"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cdnAsset } from "@/lib/asset";
import { ROLES } from "@/core/roles";

const JOBS = ["互联网/技术", "学生", "金融/商务", "教育/研究", "医疗", "创意/媒体", "制造/工程", "管理", "自由职业", "公共部门"];

export default function Home() {
  const router = useRouter();
  const [bio, setBio] = useState("");
  const [job, setJob] = useState("");

  const start = () => {
    sessionStorage.setItem("pp_ctx", JSON.stringify({ bio, job }));
    sessionStorage.removeItem("pp_answers");
    router.push("/test");
  };

  return (
    <main className="min-h-dvh bg-cream">
      <div className="mx-auto max-w-[520px] px-5 pb-16 pt-10">
        <div className="animate-fade-in">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-ink-2 shadow-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange" />
            15 题 · 3 分钟 · 不用登录
          </div>

          <h1 className="text-[42px] font-black leading-[1.05] tracking-tight">
            人格<span className="text-orange">剧本</span>
          </h1>
          <p className="mt-3 text-[15px] leading-6 text-ink-2">
            你不是一种类型，你是一个会重复犯错的剧本。
            <br />
            15 题，看看你在关键时刻，会怎么选。
          </p>
        </div>

        <div className="card mt-7 p-5 animate-fade-in-up">
          <label className="text-[13px] font-bold">用一句话说说你现在的状态</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="例：刚毕业一年，在做产品，最近总觉得自己什么都想试但定不下来"
            rows={3}
            className="mt-2 w-full resize-none rounded-2xl border-2 border-black/10 bg-cream/60 p-3 text-[14px] leading-6 outline-none placeholder:text-ink-2/50 focus:border-orange/60"
          />

          <div className="mt-4 text-[13px] font-bold">你的身份</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {JOBS.map((j) => (
              <button
                key={j}
                onClick={() => setJob(j === job ? "" : j)}
                data-selected={job === j}
                className="rounded-full border-2 border-black/10 bg-white px-3 py-1.5 text-[12.5px] font-medium transition data-[selected=true]:border-orange data-[selected=true]:bg-orange/10 data-[selected=true]:text-orange"
              >
                {j}
              </button>
            ))}
          </div>

          <button onClick={start} className="btn-primary mt-6 w-full py-4 text-[16px]">
            开始测试
          </button>
          <p className="mt-3 text-center text-[11.5px] leading-5 text-ink-2/60">
            用于自我探索，不构成心理诊断。结果仅存在你的浏览器里。
          </p>
        </div>

        <div className="mt-9">
          <div className="mb-3 flex items-baseline justify-between">
            <span className="text-[13px] font-bold">12 种人格角色</span>
            <span className="text-[11.5px] text-ink-2/60">可能你是其中两个的混合</span>
          </div>
          <div className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 pb-2">
            {ROLES.map((r) => (
              <div key={r.id} className="w-[104px] shrink-0">
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm" style={{ aspectRatio: "3/4" }}>
                  <img src={cdnAsset(r.thumb)} alt={r.name} loading="lazy" decoding="async" width={312} height={416} className="h-full w-full object-cover" />
                </div>
                <div className="mt-1.5 text-center text-[11.5px] font-semibold">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
