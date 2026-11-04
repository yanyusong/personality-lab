import type { Item } from "../adaptive";

// 性格维度题库：10 道筛查 + 10 道追问，覆盖 O/C/E/A/N 五个子维度
export const PERSONALITY_ITEMS: Item[] = [
  {
    id: "p01", dim: "personality", subDim: "C", kind: "sjt", discrimination: 0.9, screener: true,
    text: "周五下午四点，客户突然要求方案提前，明天上午就要。你手上是按周交付排的期。",
    options: [
      { id: "A", label: "当场应下，今晚通宵改", scores: { C: 1, A: 1 } },
      { id: "B", label: "提出明天只交核心，完整版后天", scores: { C: 1, A: -1 } },
      { id: "C", label: "会上不表态，散会后单独找老板", scores: { N: 1, E: -1 } },
      { id: "D", label: "先问这次改动最想解决哪个问题", scores: { O: 1, C: 1 } },
    ],
  },
  {
    id: "p02", dim: "personality", subDim: "E", kind: "sjt", discrimination: 0.85, screener: true,
    text: "连加三天班，周五晚九点刚到家洗完澡。朋友发消息：出来吃饭，就缺你了。",
    options: [
      { id: "A", label: "换衣服就出门", scores: { E: 1, A: 1 } },
      { id: "B", label: "回今天真不行，关机看剧", scores: { E: -1, A: -1 } },
      { id: "C", label: "回看情况，最后没去", scores: { E: -1, N: 1 } },
      { id: "D", label: "提议改成明天中午", scores: { A: 1, C: 1 } },
    ],
  },
  {
    id: "p03", dim: "personality", subDim: "O", kind: "sjt", discrimination: 0.8, screener: true,
    text: "接到一个没人做过的项目，下周就要方案。",
    options: [
      { id: "A", label: "兴奋，先试最野的那条路", scores: { O: 1, C: -1 } },
      { id: "B", label: "先列风险清单再动手", scores: { O: -1, C: 1 } },
      { id: "C", label: "担心做不出来，睡不好", scores: { N: 1, O: -1 } },
      { id: "D", label: "找做过类似事的人聊一小时", scores: { O: 1, A: 1 } },
    ],
  },
  {
    id: "p04", dim: "personality", subDim: "N", kind: "sjt", discrimination: 0.85, screener: true,
    text: "给重要的人发了条消息，两小时没回。",
    options: [
      { id: "A", label: "开始想是不是自己说错了", scores: { N: 1, A: 1 } },
      { id: "B", label: "忙别的，晚点再说", scores: { N: -1, C: 1 } },
      { id: "C", label: "直接打电话问", scores: { E: 1, N: 1 } },
      { id: "D", label: "猜对方在忙，先不管", scores: { N: -1, A: 1 } },
    ],
  },
  {
    id: "p05", dim: "personality", subDim: "A", kind: "sjt", discrimination: 0.8, screener: true,
    text: "你在工作群发了做了一周的方案，同事直接回：这个方向有问题，数据也不对。",
    options: [
      { id: "A", label: "当场解释清楚", scores: { A: -1, C: 1 } },
      { id: "B", label: "先记下来，会后核实", scores: { C: 1, A: 1 } },
      { id: "C", label: "心里不舒服但不说", scores: { N: 1, A: 1 } },
      { id: "D", label: "反问对方具体哪里不对", scores: { O: 1, A: -1 } },
    ],
  },
  {
    id: "p06", dim: "personality", subDim: "C", kind: "sjt", discrimination: 0.75, screener: true,
    text: "今天该做的事，和一件很想立刻做的事撞在一起。",
    options: [
      { id: "A", label: "先按计划做该做的", scores: { C: 1 } },
      { id: "B", label: "先爽一下，明天补", scores: { C: -1, N: 1 } },
      { id: "C", label: "重新评估目标还值不值得", scores: { O: 1, C: 1 } },
      { id: "D", label: "找人一起做，靠外部约束", scores: { A: 1, C: 1 } },
    ],
  },
  {
    id: "p07", dim: "personality", subDim: "O", kind: "sjt", discrimination: 0.7, screener: true,
    text: "旅行出发前一天，原定路线因为天气走不了了。",
    options: [
      { id: "A", label: "立刻改路线，找新地方", scores: { O: 1, C: -1 } },
      { id: "B", label: "能改的改，不能改的忍", scores: { C: 1, O: -1 } },
      { id: "C", label: "有点烦，但很快接受", scores: { N: 1, A: 1 } },
      { id: "D", label: "问同行的人想怎么办", scores: { A: 1, O: 1 } },
    ],
  },
  {
    id: "p08", dim: "personality", subDim: "E", kind: "sjt", discrimination: 0.75, screener: true,
    text: "朋友拉你去一个聚会，到場发现大部分人你都不认识。",
    options: [
      { id: "A", label: "主动找话题，很快融进去", scores: { E: 1 } },
      { id: "B", label: "找认识的人待着", scores: { E: -1, A: 1 } },
      { id: "C", label: "先观察一会儿再决定", scores: { O: 1, E: -1 } },
      { id: "D", label: "待一会儿就早点走", scores: { E: -1, N: 1 } },
    ],
  },
  {
    id: "p09", dim: "personality", subDim: "N", kind: "sjt", discrimination: 0.8, screener: true,
    text: "明天上午要做重要汇报，今晚十一点。",
    options: [
      { id: "A", label: "再过一遍材料就睡", scores: { C: 1, N: -1 } },
      { id: "B", label: "反复想可能被问什么，睡不着", scores: { N: 1 } },
      { id: "C", label: "干脆不想，刷手机", scores: { N: 1, C: -1 } },
      { id: "D", label: "找同事模拟一遍", scores: { A: 1, C: 1 } },
    ],
  },
  {
    id: "p10", dim: "personality", subDim: "A", kind: "sjt", discrimination: 0.7, screener: true,
    text: "一个关系不错的朋友开口借一笔钱，数目不算小。",
    options: [
      { id: "A", label: "直接借，不好意思拒绝", scores: { A: 1, C: -1 } },
      { id: "B", label: "问用途和还款时间", scores: { C: 1, A: -1 } },
      { id: "C", label: "借一部分，当送了", scores: { A: 1, C: 1 } },
      { id: "D", label: "说最近手紧", scores: { A: -1, N: 1 } },
    ],
  },
  {
    id: "p11", dim: "personality", subDim: "C", kind: "sjt", discrimination: 0.8, screener: false,
    text: "报告下周三交，今天是周三，你还没开始。",
    options: [
      { id: "A", label: "今天就开个头", scores: { C: 1 } },
      { id: "B", label: "明天再说", scores: { C: -1 } },
      { id: "C", label: "先做最容易的部分找手感", scores: { C: 1, N: 1 } },
      { id: "D", label: "等有灵感再动", scores: { O: 1, C: -1 } },
    ],
  },
  {
    id: "p12", dim: "personality", subDim: "O", kind: "sjt", discrimination: 0.75, screener: false,
    text: "有人提出一个你从没听过、甚至有点反常识的观点。",
    options: [
      { id: "A", label: "先想有没有道理", scores: { O: 1 } },
      { id: "B", label: "第一反应是反驳", scores: { O: -1, A: -1 } },
      { id: "C", label: "记下来，回去查", scores: { O: 1, C: 1 } },
      { id: "D", label: "看是谁说的再决定", scores: { A: 1, O: -1 } },
    ],
  },
  {
    id: "p13", dim: "personality", subDim: "E", kind: "sjt", discrimination: 0.7, screener: false,
    text: "连续一周几乎没跟人说话。",
    options: [
      { id: "A", label: "有点憋，想找人说话", scores: { E: 1 } },
      { id: "B", label: "挺好，还能再待一周", scores: { E: -1 } },
      { id: "C", label: "看情况，忙就不想", scores: { C: 1, E: -1 } },
      { id: "D", label: "焦虑，怕被遗忘", scores: { N: 1, E: 1 } },
    ],
  },
  {
    id: "p14", dim: "personality", subDim: "A", kind: "sjt", discrimination: 0.75, screener: false,
    text: "一个不太熟的同事组局，你不想去。",
    options: [
      { id: "A", label: "直接说不去", scores: { A: -1, C: 1 } },
      { id: "B", label: "编个理由", scores: { A: 1, N: 1 } },
      { id: "C", label: "去了但早点走", scores: { A: 1 } },
      { id: "D", label: "硬着头皮全程", scores: { A: 1, N: 1 } },
    ],
  },
  {
    id: "p15", dim: "personality", subDim: "N", kind: "sjt", discrimination: 0.8, screener: false,
    text: "你做的方案被上级当众指出一个明显错误。",
    options: [
      { id: "A", label: "先看有没有道理", scores: { C: 1, N: -1 } },
      { id: "B", label: "一整天心情都不好", scores: { N: 1 } },
      { id: "C", label: "表面接受，心里不服", scores: { A: 1, N: 1 } },
      { id: "D", label: "当场辩解", scores: { A: -1, N: 1 } },
    ],
  },
  {
    id: "p16", dim: "personality", subDim: "C", kind: "sjt", discrimination: 0.7, screener: false,
    text: "一份材料可以交了，但你觉得还有细节能改。",
    options: [
      { id: "A", label: "再检查三遍", scores: { C: 1, N: 1 } },
      { id: "B", label: "够用就交，有问题再改", scores: { C: -1, O: 1 } },
      { id: "C", label: "交给别人把关", scores: { A: 1, C: -1 } },
      { id: "D", label: "拖到最后一刻", scores: { C: -1, N: 1 } },
    ],
  },
  {
    id: "p17", dim: "personality", subDim: "O", kind: "sjt", discrimination: 0.65, screener: false,
    text: "朋友推荐一部很抽象、评价两极的文艺片。",
    options: [
      { id: "A", label: "喜欢，会主动找来看", scores: { O: 1 } },
      { id: "B", label: "看不懂，不感兴趣", scores: { O: -1 } },
      { id: "C", label: "有人解释就看", scores: { A: 1, O: 1 } },
      { id: "D", label: "觉得浪费时间", scores: { O: -1, C: 1 } },
    ],
  },
  {
    id: "p18", dim: "personality", subDim: "E", kind: "sjt", discrimination: 0.7, screener: false,
    text: "电梯里遇到只见过两面的邻居。",
    options: [
      { id: "A", label: "主动搭话", scores: { E: 1 } },
      { id: "B", label: "等对方先开口", scores: { E: -1 } },
      { id: "C", label: "点个头就算", scores: { A: 1, E: -1 } },
      { id: "D", label: "假装看手机", scores: { E: -1, N: 1 } },
    ],
  },
  {
    id: "p19", dim: "personality", subDim: "A", kind: "sjt", discrimination: 0.75, screener: false,
    text: "和伴侣/好朋友为一个小事争起来了。",
    options: [
      { id: "A", label: "先让步，关系更重要", scores: { A: 1, C: -1 } },
      { id: "B", label: "坚持自己那个点", scores: { A: -1, C: 1 } },
      { id: "C", label: "找双方都能接受的方案", scores: { A: 1, O: 1 } },
      { id: "D", label: "不表态，拖着", scores: { N: 1, A: 1 } },
    ],
  },
  {
    id: "p20", dim: "personality", subDim: "N", kind: "sjt", discrimination: 0.7, screener: false,
    text: "压力大的时候，你的身体会先有反应吗？",
    options: [
      { id: "A", label: "很少，压力大也能睡", scores: { N: -1, C: 1 } },
      { id: "B", label: "会胃疼或失眠", scores: { N: 1 } },
      { id: "C", label: "靠运动或做事压下去", scores: { C: 1, N: 1 } },
      { id: "D", label: "找人倾诉", scores: { A: 1, E: 1 } },
    ],
  },
];
