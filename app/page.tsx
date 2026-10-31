"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ROLES } from "@/core/roles";
import { track } from "@/lib/track";

const JOBS = ["互联网/技术", "学生", "金融/商务", "教育/研究", "医疗", "创意/媒体", "制造/工程", "管理", "自由职业", "公共部门"];

export default function Home() {
  const router = useRouter();
  const [bio, setBio] = useState("");
  const [job, setJob] = useState("");

  const start = () => {
    sessionStorage.setItem("pp_ctx", JSON.stringify({ bio, job }));
    sessionStorage.removeItem("pp_answers");
    track("start_test", { job });
    router.push("/test");
  };

  return (
    <main className="min-h-dvh bg-cream">
      <div className="mx-auto max-w-[520px] px-5 pb-16 pt-10">
        <div>
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
          <div className="mb-3 text-[13px] font-bold">12 种人格角色</div>
          <div className="flex flex-wrap gap-1.5">
            {ROLES.map((r) => (
              <span key={r.id} className="rounded-full bg-white px-2.5 py-1 text-[11.5px] font-medium text-ink-2/75 shadow-sm">
                {r.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
