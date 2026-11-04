import type { Item } from "../adaptive";

// 工作维度题库：10 道筛查 + 10 道追问，覆盖 drive/plan/resilient/ownership/collab
export const WORK_ITEMS: Item[] = [
  {
    id: "w01", dim: "work", subDim: "drive", kind: "sjt", discrimination: 0.9, screener: true,
    text: "一个没人催、也没人检查进度的任务交到你手上。",
    options: [
      { id: "A", label: "自己定节点，按计划推进", scores: { drive: 1, plan: 1 } },
      { id: "B", label: "等有人问起才动", scores: { drive: -1 } },
      { id: "C", label: "先做别的更急的", scores: { plan: 1, drive: -1 } },
      { id: "D", label: "找人一起做，互相监督", scores: { collab: 1, drive: 1 } },
    ],
  },
  {
    id: "w02", dim: "work", subDim: "plan", kind: "sjt", discrimination: 0.85, screener: true,
    text: "接到一个两周交付的大任务，还没想好怎么开始。",
    options: [
      { id: "A", label: "先拆成小步，排好期", scores: { plan: 1 } },
      { id: "B", label: "直接开干，边做边想", scores: { plan: -1, drive: 1 } },
      { id: "C", label: "先问清楚交付标准", scores: { plan: 1, collab: 1 } },
      { id: "D", label: "拖到最后集中做", scores: { plan: -1 } },
    ],
  },
  {
    id: "w03", dim: "work", subDim: "resilient", kind: "sjt", discrimination: 0.8, screener: true,
    text: "你花了两周做的方案，被上级一句话否了。",
    options: [
      { id: "A", label: "立刻改，找下一个方向", scores: { resilient: 1, drive: 1 } },
      { id: "B", label: "先难受一会儿，再动", scores: { resilient: -1 } },
      { id: "C", label: "找人吐槽", scores: { collab: 1, resilient: -1 } },
      { id: "D", label: "反复想是不是自己不行", scores: { resilient: -1, ownership: -1 } },
    ],
  },
  {
    id: "w04", dim: "work", subDim: "ownership", kind: "sjt", discrimination: 0.85, screener: true,
    text: "项目出了问题，但严格说不是你的环节。",
    options: [
      { id: "A", label: "先想办法补救", scores: { ownership: 1 } },
      { id: "B", label: "先撇清责任", scores: { ownership: -1 } },
      { id: "C", label: "报告上级等指示", scores: { ownership: -1, collab: 1 } },
      { id: "D", label: "拉着相关人一起复盘", scores: { ownership: 1, collab: 1 } },
    ],
  },
  {
    id: "w05", dim: "work", subDim: "collab", kind: "sjt", discrimination: 0.8, screener: true,
    text: "同事的进度落后，而他的部分卡着你的交付。",
    options: [
      { id: "A", label: "主动问他卡在哪", scores: { collab: 1 } },
      { id: "B", label: "自己先做能做的", scores: { drive: 1, collab: -1 } },
      { id: "C", label: "直接告诉上级", scores: { collab: -1 } },
      { id: "D", label: "帮他分担一部分", scores: { collab: 1, ownership: 1 } },
    ],
  },
  {
    id: "w06", dim: "work", subDim: "drive", kind: "sjt", discrimination: 0.75, screener: true,
    text: "一项每天重复、没什么新意的例行工作。",
    options: [
      { id: "A", label: "想办法自动化或优化", scores: { drive: 1, plan: 1 } },
      { id: "B", label: "按流程做完就行", scores: { plan: 1 } },
      { id: "C", label: "拖着做", scores: { drive: -1 } },
      { id: "D", label: "找人换活", scores: { drive: -1, collab: 1 } },
    ],
  },
  {
    id: "w07", dim: "work", subDim: "plan", kind: "sjt", discrimination: 0.8, screener: true,
    text: "同时有五件事压着，都说明天要。",
    options: [
      { id: "A", label: "列优先级，逐个推进", scores: { plan: 1 } },
      { id: "B", label: "同时开好几个，来回切", scores: { plan: -1 } },
      { id: "C", label: "先做简单的找成就感", scores: { plan: -1 } },
      { id: "D", label: "问上级哪个最急", scores: { collab: 1 } },
    ],
  },
  {
    id: "w08", dim: "work", subDim: "resilient", kind: "sjt", discrimination: 0.8, screener: true,
    text: "已经连续加班两周，事情还没完。",
    options: [
      { id: "A", label: "还能撑，按节奏走", scores: { resilient: 1 } },
      { id: "B", label: "效率明显下降，容易烦", scores: { resilient: -1 } },
      { id: "C", label: "主动跟上级说需要调整", scores: { resilient: 1, ownership: 1 } },
      { id: "D", label: "硬扛，不说", scores: { resilient: -1, collab: -1 } },
    ],
  },
  {
    id: "w09", dim: "work", subDim: "ownership", kind: "sjt", discrimination: 0.75, screener: true,
    text: "你做的核心工作，被同事在汇报里说成他做的。",
    options: [
      { id: "A", label: "当场说明自己做了什么", scores: { ownership: 1, collab: -1 } },
      { id: "B", label: "私下找对方谈", scores: { collab: 1, ownership: 1 } },
      { id: "C", label: "算了，下次注意", scores: { ownership: -1 } },
      { id: "D", label: "找上级反映", scores: { ownership: 1, collab: -1 } },
    ],
  },
  {
    id: "w10", dim: "work", subDim: "collab", kind: "sjt", discrimination: 0.7, screener: true,
    text: "跨部门协作卡住了，对方一直不配合。",
    options: [
      { id: "A", label: "主动拉群对齐目标", scores: { collab: 1, drive: 1 } },
      { id: "B", label: "等对方先动", scores: { collab: -1 } },
      { id: "C", label: "找共同上级推动", scores: { collab: -1 } },
      { id: "D", label: "自己先做能做的部分", scores: { drive: 1, collab: -1 } },
    ],
  },
  {
    id: "w11", dim: "work", subDim: "drive", kind: "sjt", discrimination: 0.8, screener: false,
    text: "上级给了一个很模糊的目标，没说清楚要什么。",
    options: [
      { id: "A", label: "自己定义成功标准", scores: { drive: 1, ownership: 1 } },
      { id: "B", label: "等别人给标准", scores: { drive: -1 } },
      { id: "C", label: "先做起来再校准", scores: { drive: 1, plan: -1 } },
      { id: "D", label: "干脆先不做", scores: { drive: -1, resilient: -1 } },
    ],
  },
  {
    id: "w12", dim: "work", subDim: "plan", kind: "sjt", discrimination: 0.75, screener: false,
    text: "计划排好了，突然被插进来一件急事。",
    options: [
      { id: "A", label: "快速重排，标出新优先级", scores: { plan: 1, resilient: 1 } },
      { id: "B", label: "烦躁，很久回不来", scores: { resilient: -1 } },
      { id: "C", label: "放弃计划，随机应变", scores: { plan: -1, drive: 1 } },
      { id: "D", label: "加班补回来", scores: { plan: 1, resilient: -1 } },
    ],
  },
  {
    id: "w13", dim: "work", subDim: "resilient", kind: "sjt", discrimination: 0.8, screener: false,
    text: "在会上被当众指出一个低级错误。",
    options: [
      { id: "A", label: "当场稳住，会后消化", scores: { resilient: 1 } },
      { id: "B", label: "脸发热，说不出话", scores: { resilient: -1 } },
      { id: "C", label: "立刻反驳", scores: { resilient: -1, collab: -1 } },
      { id: "D", label: "记下来，回去改", scores: { ownership: 1, resilient: 1 } },
    ],
  },
  {
    id: "w14", dim: "work", subDim: "ownership", kind: "sjt", discrimination: 0.75, screener: false,
    text: "出现一件没人负责的灰色地带工作。",
    options: [
      { id: "A", label: "我先接住", scores: { ownership: 1 } },
      { id: "B", label: "等分工明确", scores: { ownership: -1 } },
      { id: "C", label: "提议谁来做", scores: { collab: 1, ownership: 1 } },
      { id: "D", label: "装作没看见", scores: { ownership: -1 } },
    ],
  },
  {
    id: "w15", dim: "work", subDim: "collab", kind: "sjt", discrimination: 0.7, screener: false,
    text: "团队里有人明显在摸鱼，影响了整体进度。",
    options: [
      { id: "A", label: "直接跟他说", scores: { collab: -1, ownership: 1 } },
      { id: "B", label: "帮他补上，先交付", scores: { collab: 1, ownership: 1 } },
      { id: "C", label: "告诉上级", scores: { collab: -1 } },
      { id: "D", label: "不管，做好自己的", scores: { collab: -1 } },
    ],
  },
  {
    id: "w16", dim: "work", subDim: "drive", kind: "sjt", discrimination: 0.7, screener: false,
    text: "一个长期项目，几个月都看不到反馈。",
    options: [
      { id: "A", label: "自己设里程碑庆祝", scores: { drive: 1 } },
      { id: "B", label: "容易失去动力", scores: { drive: -1 } },
      { id: "C", label: "转去做有反馈的事", scores: { drive: -1 } },
      { id: "D", label: "找同伴互相汇报", scores: { collab: 1, drive: 1 } },
    ],
  },
  {
    id: "w17", dim: "work", subDim: "plan", kind: "sjt", discrimination: 0.75, screener: false,
    text: "让你估一个从没做过的任务要多久。",
    options: [
      { id: "A", label: "留缓冲，按最坏情况排", scores: { plan: 1, resilient: 1 } },
      { id: "B", label: "按最理想情况排", scores: { plan: -1 } },
      { id: "C", label: "参考同类项目", scores: { plan: 1 } },
      { id: "D", label: "让别人估", scores: { collab: 1, plan: -1 } },
    ],
  },
  {
    id: "w18", dim: "work", subDim: "resilient", kind: "sjt", discrimination: 0.8, screener: false,
    text: "一个你投入很多的项目最终失败了。",
    options: [
      { id: "A", label: "复盘后继续", scores: { resilient: 1, ownership: 1 } },
      { id: "B", label: "消沉很久", scores: { resilient: -1 } },
      { id: "C", label: "归因于外部", scores: { ownership: -1 } },
      { id: "D", label: "立刻找新项目盖过去", scores: { drive: 1, resilient: -1 } },
    ],
  },
  {
    id: "w19", dim: "work", subDim: "ownership", kind: "sjt", discrimination: 0.75, screener: false,
    text: "上级的决策你认为明显有问题。",
    options: [
      { id: "A", label: "私下提出来", scores: { ownership: 1, collab: 1 } },
      { id: "B", label: "照做，不说什么", scores: { ownership: -1 } },
      { id: "C", label: "会上直接反对", scores: { ownership: 1, collab: -1 } },
      { id: "D", label: "拖着执行", scores: { ownership: -1, resilient: -1 } },
    ],
  },
  {
    id: "w20", dim: "work", subDim: "collab", kind: "sjt", discrimination: 0.7, screener: false,
    text: "你的方案需要其他同事配合才能落地。",
    options: [
      { id: "A", label: "先讲清为什么重要", scores: { collab: 1, drive: 1 } },
      { id: "B", label: "直接派活", scores: { collab: -1 } },
      { id: "C", label: "自己做掉大部分", scores: { collab: -1, ownership: 1 } },
      { id: "D", label: "找上级压下去", scores: { collab: -1 } },
    ],
  },
];
