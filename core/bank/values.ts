import type { Item } from "../adaptive";

// 价值观与意义维度题库：10 道筛查 + 10 道追问，覆盖 priority/longterm/meaning/line
export const VALUES_ITEMS: Item[] = [
  {
    id: "va01", dim: "values", subDim: "priority", kind: "sjt", discrimination: 0.9, screener: true,
    text: "两份工作：一份钱多但没意思，一份钱少但是你想做的。",
    options: [
      { id: "A", label: "选钱多的，先把生活稳住", scores: { priority: 1 } },
      { id: "B", label: "选想做的，钱够花就行", scores: { priority: 1 } },
      { id: "C", label: "两边拖着，等对方催", scores: { priority: -1 } },
      { id: "D", label: "问一圈人该选哪个", scores: { priority: -1 } },
    ],
  },
  {
    id: "va02", dim: "values", subDim: "longterm", kind: "sjt", discrimination: 0.85, screener: true,
    text: "有人问你，五年后想做成什么样。",
    options: [
      { id: "A", label: "能说出几个具体方向", scores: { longterm: 1 } },
      { id: "B", label: "只能说到明年的事", scores: { longterm: -1 } },
      { id: "C", label: "说走一步看一步", scores: { longterm: -1 } },
      { id: "D", label: "说不清要什么，但知道不要什么", scores: { longterm: -1, priority: 1 } },
    ],
  },
  {
    id: "va03", dim: "values", subDim: "meaning", kind: "sjt", discrimination: 0.85, screener: true,
    text: "收入不错，但你觉得每天做的事没什么用。",
    options: [
      { id: "A", label: "业余时间做点自己觉得有用的事", scores: { meaning: 1 } },
      { id: "B", label: "先干着，钱到位就行", scores: { meaning: -1 } },
      { id: "C", label: "开始找别的方向", scores: { meaning: 1 } },
      { id: "D", label: "忍着，但心里一直别扭", scores: { meaning: -1 } },
    ],
  },
  {
    id: "va04", dim: "values", subDim: "line", kind: "sjt", discrimination: 0.9, screener: true,
    text: "一件能带来很大好处的事，但要走一点灰色地带。",
    options: [
      { id: "A", label: "不做，换别的路", scores: { line: 1 } },
      { id: "B", label: "别人都这么做就做", scores: { line: -1 } },
      { id: "C", label: "做，但把风险控制住", scores: { line: -1 } },
      { id: "D", label: "先问清楚边界在哪", scores: { line: 1 } },
    ],
  },
  {
    id: "va05", dim: "values", subDim: "priority", kind: "sjt", discrimination: 0.8, screener: true,
    text: "一个很好的出差机会，正好撞上家里的一件大事。",
    options: [
      { id: "A", label: "推掉出差", scores: { priority: 1 } },
      { id: "B", label: "去出差，家里的事之后再补", scores: { priority: 1 } },
      { id: "C", label: "两边都想顾，最后都没顾好", scores: { priority: -1 } },
      { id: "D", label: "一直犹豫到截止那天", scores: { priority: -1 } },
    ],
  },
  {
    id: "va06", dim: "values", subDim: "longterm", kind: "sjt", discrimination: 0.8, screener: true,
    text: "你现在的日常，和你想去的地方对不上。",
    options: [
      { id: "A", label: "知道差在哪，已经在补", scores: { longterm: 1 } },
      { id: "B", label: "知道对不上，但没动", scores: { longterm: -1 } },
      { id: "C", label: "没仔细想过这件事", scores: { longterm: -1 } },
      { id: "D", label: "在慢慢调整，哪怕慢", scores: { longterm: 1 } },
    ],
  },
  {
    id: "va07", dim: "values", subDim: "meaning", kind: "sjt", discrimination: 0.8, screener: true,
    text: "周末两天完全空着，没有任何安排。",
    options: [
      { id: "A", label: "做点一直想做的事", scores: { meaning: 1 } },
      { id: "B", label: "补觉刷剧，两天就过去了", scores: { meaning: -1 } },
      { id: "C", label: "约人见面聊聊天", scores: { meaning: 1 } },
      { id: "D", label: "躺着，但一直觉得该干点什么", scores: { meaning: -1 } },
    ],
  },
  {
    id: "va08", dim: "values", subDim: "line", kind: "sjt", discrimination: 0.8, screener: true,
    text: "朋友让你帮他跟家里圆一个谎。",
    options: [
      { id: "A", label: "拒绝，让他自己说", scores: { line: 1 } },
      { id: "B", label: "帮，但只帮这一次", scores: { line: -1 } },
      { id: "C", label: "帮，他开口了不好拒绝", scores: { line: -1 } },
      { id: "D", label: "说自己不说谎，但可以陪他去", scores: { line: 1 } },
    ],
  },
  {
    id: "va09", dim: "values", subDim: "priority", kind: "sjt", discrimination: 0.75, screener: true,
    text: "你有一笔钱，可以换套更好的房子，也可以辞职歇一年。",
    options: [
      { id: "A", label: "换房子，先改善日常", scores: { priority: 1 } },
      { id: "B", label: "辞职歇一年，先换回时间", scores: { priority: 1 } },
      { id: "C", label: "存着不动，怕以后不够", scores: { priority: -1 } },
      { id: "D", label: "问别人这钱该怎么用", scores: { priority: -1 } },
    ],
  },
  {
    id: "va10", dim: "values", subDim: "longterm", kind: "sjt", discrimination: 0.75, screener: true,
    text: "一个短期很赚钱、但跟你长期想做的不相干的机会。",
    options: [
      { id: "A", label: "接，钱先攒着", scores: { longterm: -1, priority: 1 } },
      { id: "B", label: "不接，时间留给正事", scores: { longterm: 1 } },
      { id: "C", label: "接下来，但只投一部分精力", scores: { longterm: 1 } },
      { id: "D", label: "拖着不回复", scores: { longterm: -1 } },
    ],
  },
  {
    id: "va11", dim: "values", subDim: "meaning", kind: "sjt", discrimination: 0.85, screener: false,
    text: "你做完一件事，周围没什么反应。",
    options: [
      { id: "A", label: "自己知道做成了，就够了", scores: { meaning: 1 } },
      { id: "B", label: "没人认可就觉得白做了", scores: { meaning: -1 } },
      { id: "C", label: "会主动找人说说", scores: { meaning: -1 } },
      { id: "D", label: "接着做下一件", scores: { meaning: 1 } },
    ],
  },
  {
    id: "va12", dim: "values", subDim: "line", kind: "sjt", discrimination: 0.85, screener: false,
    text: "有人在报表上做了手脚，让你签字确认。",
    options: [
      { id: "A", label: "不签，说明原因", scores: { line: 1 } },
      { id: "B", label: "签，反正不是我做的", scores: { line: -1 } },
      { id: "C", label: "签，但自己留一份记录", scores: { line: -1 } },
      { id: "D", label: "找上级反映", scores: { line: 1 } },
    ],
  },
  {
    id: "va13", dim: "values", subDim: "priority", kind: "sjt", discrimination: 0.8, screener: false,
    text: "同一天晚上，一场是领导的饭局，一场是老朋友的聚会。",
    options: [
      { id: "A", label: "去领导那场", scores: { priority: 1 } },
      { id: "B", label: "去朋友那场", scores: { priority: 1 } },
      { id: "C", label: "两边跑，各待半小时", scores: { priority: -1 } },
      { id: "D", label: "都不去，回家", scores: { priority: -1 } },
    ],
  },
  {
    id: "va14", dim: "values", subDim: "longterm", kind: "sjt", discrimination: 0.8, screener: false,
    text: "你在做一件要三年才有结果的事，第二年开始怀疑。",
    options: [
      { id: "A", label: "回去看当初为什么开始", scores: { longterm: 1 } },
      { id: "B", label: "开始找更快的替代方案", scores: { longterm: -1 } },
      { id: "C", label: "继续做，但心里没底", scores: { longterm: -1 } },
      { id: "D", label: "调路径，方向不变", scores: { longterm: 1 } },
    ],
  },
  {
    id: "va15", dim: "values", subDim: "meaning", kind: "sjt", discrimination: 0.8, screener: false,
    text: "有人问你「你图什么」。",
    options: [
      { id: "A", label: "能说出具体图什么", scores: { meaning: 1 } },
      { id: "B", label: "说「生活嘛」，说不清", scores: { meaning: -1 } },
      { id: "C", label: "愣了一下，没想过这问题", scores: { meaning: -1 } },
      { id: "D", label: "说了一半，发现自己挺清楚", scores: { meaning: 1 } },
    ],
  },
  {
    id: "va16", dim: "values", subDim: "line", kind: "sjt", discrimination: 0.8, screener: false,
    text: "一个不太熟的人找你帮忙，要动用你的关系。",
    options: [
      { id: "A", label: "先问清楚要办什么事", scores: { line: 1 } },
      { id: "B", label: "直接答应，人情先欠着", scores: { line: -1 } },
      { id: "C", label: "拒绝，不掺和", scores: { line: 1 } },
      { id: "D", label: "答应，但不说清自己做了什么", scores: { line: -1 } },
    ],
  },
  {
    id: "va17", dim: "values", subDim: "priority", kind: "sjt", discrimination: 0.75, screener: false,
    text: "手上有一个能升职的项目，和一段能陪家人的假期。",
    options: [
      { id: "A", label: "选项目", scores: { priority: 1 } },
      { id: "B", label: "选假期", scores: { priority: 1 } },
      { id: "C", label: "带着电脑去休假", scores: { priority: -1 } },
      { id: "D", label: "让公司来安排", scores: { priority: -1 } },
    ],
  },
  {
    id: "va18", dim: "values", subDim: "longterm", kind: "sjt", discrimination: 0.75, screener: false,
    text: "朋友拉你一起做件有意思的事，会打乱你现在的节奏。",
    options: [
      { id: "A", label: "先看它跟我的方向有没有关系", scores: { longterm: 1 } },
      { id: "B", label: "有意思就去，节奏再调", scores: { longterm: -1 } },
      { id: "C", label: "拒绝，不想被打乱", scores: { longterm: 1 } },
      { id: "D", label: "答应，然后两边都耽误", scores: { longterm: -1 } },
    ],
  },
  {
    id: "va19", dim: "values", subDim: "meaning", kind: "sjt", discrimination: 0.75, screener: false,
    text: "一件没什么回报、但确实帮到人的事。",
    options: [
      { id: "A", label: "会做，不用别人知道", scores: { meaning: 1 } },
      { id: "B", label: "做一次可以，长期不行", scores: { meaning: -1 } },
      { id: "C", label: "会做，也希望有人知道", scores: { meaning: 1 } },
      { id: "D", label: "看当时有没有空", scores: { meaning: -1 } },
    ],
  },
  {
    id: "va20", dim: "values", subDim: "line", kind: "sjt", discrimination: 0.75, screener: false,
    text: "你发现同事把你的功劳写成了他的，而你还要他配合。",
    options: [
      { id: "A", label: "直接说清，不怕关系僵", scores: { line: 1 } },
      { id: "B", label: "算了，这次不追究", scores: { line: -1 } },
      { id: "C", label: "下次留证据，这次不提", scores: { line: -1 } },
      { id: "D", label: "私下跟他讲清楚", scores: { line: 1 } },
    ],
  },
];
