import Link from "next/link";
import { ACTIVE_DIMS, GROUPS } from "@/core/dims";

export default function SeriesPage() {
  return (
    <main className="min-h-dvh bg-cream">
      <div className="mx-auto max-w-[520px] px-5 pb-20 pt-8">
        <div className="mb-1 text-[12px] font-bold text-ink-2/60">
          <Link href="/" className="hover:text-orange">← 返回人格档案</Link>
        </div>

        <h1 className="mt-4 text-[34px] font-black leading-[1.1] tracking-tight">
          自我认知 <span className="text-orange">360</span>
        </h1>
        <p className="mt-3 text-[14.5px] leading-6 text-ink-2">
          不是给你贴一个标签，是把你放到不同的场景里，看你在每一面分别是什么样。
          <br />
          每个维度单独成卷，做完就出报告，结果会累积成一份属于你的档案。
        </p>

        <div className="mt-7 space-y-4">
          {ACTIVE_DIMS.map((d) => (
            <Link
              key={d.id}
              href={`/series/test?dim=${d.id}`}
              className="card block p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: d.color }} />
                    <span className="text-[19px] font-black">{d.name}</span>
                  </div>
                  <div className="mt-1 text-[12.5px] text-ink-2/70">{d.tagline}</div>
                </div>
                <span className="rounded-full bg-black/5 px-2.5 py-1 text-[11px] font-bold text-ink-2">
                  {d.subDims.length} 个子维度
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {d.subDims.map((s) => (
                  <span key={s.id} className="rounded-full bg-white px-2 py-1 text-[11px] text-ink-2/80">
                    {s.name}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-[12px] font-bold" style={{ color: d.color }}>
                开始测评 →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-white/70 p-4 text-[12px] leading-5 text-ink-2/70">
          <div className="font-bold text-ink-2">还有 10 个维度正在准备</div>
          <div className="mt-1">
            {GROUPS.core.name}：自我评价、情绪与压力、价值观与意义；
            {GROUPS.doing.name}：时间与精力、金钱观；
            {GROUPS.relation.name}：父母关系、同事关系、上下级关系、朋友与社交边界。
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] leading-5 text-ink-2/50">
          用于自我探索，不构成心理诊断。结果只存在你的浏览器里，随时可以导出。
        </p>
      </div>
    </main>
  );
}
