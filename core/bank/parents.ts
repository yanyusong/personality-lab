import type { Item } from "../adaptive";

// 父母关系维度题库：10 道筛查 + 10 道追问，覆盖 attach/boundary/guilt/expect
export const PARENTS_ITEMS: Item[] = [
  {
    id: "pa01", dim: "parents", subDim: "attach", kind: "sjt", discrimination: 0.9, screener: true,
    text: "你已经一个月没和父母通电话了。",
    options: [
      { id: "A", label: "想起来就打一个，聊几句近况", scores: { attach: 1 } },
      { id: "B", label: "觉得没什么可说的，一直拖着", scores: { attach: -1 } },
      { id: "C", label: "打了，但只报喜不报忧", scores: { attach: -1 } },
      { id: "D", label: "平时零零散散发消息，不用特意打电话", scores: { attach: 1 } },
    ],
  },
  {
    id: "pa02", dim: "parents", subDim: "boundary", kind: "sjt", discrimination: 0.85, screener: true,
    text: "父母对你现在的工作有明确看法，和你自己的打算不一样。",
    options: [
      { id: "A", label: "听他们说完，然后按自己的来", scores: { boundary: 1 } },
      { id: "B", label: "照他们说的改，省得吵", scores: { boundary: -1 } },
      { id: "C", label: "表面答应，实际没改", scores: { boundary: -1 } },
      { id: "D", label: "说清自己为什么这么选", scores: { boundary: 1 } },
    ],
  },
  {
    id: "pa03", dim: "parents", subDim: "guilt", kind: "sjt", discrimination: 0.85, screener: true,
    text: "你已经很久没回家，这次又不打算回。",
    options: [
      { id: "A", label: "说明原因，心里过得去", scores: { guilt: -1 } },
      { id: "B", label: "挂了电话一直不舒服，觉得自己不孝", scores: { guilt: 1 } },
      { id: "C", label: "改用买东西、转钱来弥补", scores: { guilt: 1 } },
      { id: "D", label: "把下次回去的时间先定下来", scores: { guilt: -1 } },
    ],
  },
  {
    id: "pa04", dim: "parents", subDim: "expect", kind: "sjt", discrimination: 0.85, screener: true,
    text: "家里希望你今年把某件人生大事定下来。",
    options: [
      { id: "A", label: "说自己还没准备好，不急", scores: { expect: -1 } },
      { id: "B", label: "一被提起就烦，又不敢顶回去", scores: { expect: 1 } },
      { id: "C", label: "按他们的时间表在推进，心里不情愿", scores: { expect: 1 } },
      { id: "D", label: "知道他们急，但这是自己的节奏", scores: { expect: -1 } },
    ],
  },
  {
    id: "pa05", dim: "parents", subDim: "attach", kind: "sjt", discrimination: 0.85, screener: true,
    text: "你遇到一件很难的事，还没跟任何人说。",
    options: [
      { id: "A", label: "会给家里打个电话", scores: { attach: 1 } },
      { id: "B", label: "不会说，说了只会更乱", scores: { attach: -1 } },
      { id: "C", label: "想说，但先想好怎么讲才不让他们担心", scores: { attach: -1 } },
      { id: "D", label: "会说，也会说清自己需要什么", scores: { attach: 1 } },
    ],
  },
  {
    id: "pa06", dim: "parents", subDim: "boundary", kind: "sjt", discrimination: 0.85, screener: true,
    text: "父母来你住的城市，想在你这里住两周。",
    options: [
      { id: "A", label: "欢迎，但先说好各自的作息", scores: { boundary: 1 } },
      { id: "B", label: "直接答应，两周全程陪着", scores: { boundary: -1 } },
      { id: "C", label: "找借口说房子小，让他们去住酒店", scores: { boundary: -1 } },
      { id: "D", label: "说清自己只能陪几天", scores: { boundary: 1 } },
    ],
  },
  {
    id: "pa07", dim: "parents", subDim: "guilt", kind: "sjt", discrimination: 0.85, screener: true,
    text: "父母说「我们做这些都是为了你」。",
    options: [
      { id: "A", label: "听着，不接这句话", scores: { guilt: -1 } },
      { id: "B", label: "立刻觉得自己欠了他们", scores: { guilt: 1 } },
      { id: "C", label: "想办法补偿，多给钱或多回去", scores: { guilt: 1 } },
      { id: "D", label: "知道这是他们的表达方式，不往心里去", scores: { guilt: -1 } },
    ],
  },
  {
    id: "pa08", dim: "parents", subDim: "expect", kind: "sjt", discrimination: 0.85, screener: true,
    text: "家庭群里又转来一条「别人家孩子」的消息。",
    options: [
      { id: "A", label: "看一眼，不回", scores: { expect: -1 } },
      { id: "B", label: "心里堵，反复想自己是不是不够好", scores: { expect: 1 } },
      { id: "C", label: "回句玩笑，把话岔开", scores: { expect: -1 } },
      { id: "D", label: "认真解释自己现在的选择", scores: { expect: 1 } },
    ],
  },
  {
    id: "pa09", dim: "parents", subDim: "boundary", kind: "sjt", discrimination: 0.8, screener: true,
    text: "父母对你的花钱方式有意见。",
    options: [
      { id: "A", label: "说明自己的考虑，不改也不吵", scores: { boundary: 1 } },
      { id: "B", label: "当着他们的面收敛，回去照旧", scores: { boundary: -1 } },
      { id: "C", label: "跟他们争了几句，把话摊开", scores: { boundary: 1 } },
      { id: "D", label: "干脆不告诉他们自己怎么过", scores: { boundary: -1 } },
    ],
  },
  {
    id: "pa10", dim: "parents", subDim: "expect", kind: "sjt", discrimination: 0.8, screener: true,
    text: "你做的一个决定，父母明显失望。",
    options: [
      { id: "A", label: "会难受，但知道那是他们的情绪", scores: { expect: -1 } },
      { id: "B", label: "反复解释，直到他们认可", scores: { expect: 1 } },
      { id: "C", label: "会改，哪怕自己不认同", scores: { expect: 1 } },
      { id: "D", label: "让他们失望一阵，事情照做", scores: { expect: -1 } },
    ],
  },
  {
    id: "pa11", dim: "parents", subDim: "attach", kind: "sjt", discrimination: 0.85, screener: false,
    text: "过年回家待了三天。",
    options: [
      { id: "A", label: "前两天还好，第三天开始想走", scores: { attach: -1 } },
      { id: "B", label: "待得住，也能自己出去待一会儿", scores: { attach: 1 } },
      { id: "C", label: "全程陪着，自己一点空间都没有", scores: { attach: -1 } },
      { id: "D", label: "会主动找点能一起做的事", scores: { attach: 1 } },
    ],
  },
  {
    id: "pa12", dim: "parents", subDim: "boundary", kind: "sjt", discrimination: 0.8, screener: false,
    text: "父母替你做的一个安排，你其实不想要。",
    options: [
      { id: "A", label: "直接说不去，并说清原因", scores: { boundary: 1 } },
      { id: "B", label: "去了，全程不高兴", scores: { boundary: -1 } },
      { id: "C", label: "让他们去取消，自己不开口", scores: { boundary: -1 } },
      { id: "D", label: "先说出自己的想法，再一起改方案", scores: { boundary: 1 } },
    ],
  },
  {
    id: "pa13", dim: "parents", subDim: "guilt", kind: "sjt", discrimination: 0.85, screener: false,
    text: "拒绝父母之后的那一晚。",
    options: [
      { id: "A", label: "睡得着，知道自己为什么拒绝", scores: { guilt: -1 } },
      { id: "B", label: "反复想他们当时的表情", scores: { guilt: 1 } },
      { id: "C", label: "想发条消息解释，写完又删掉", scores: { guilt: 1 } },
      { id: "D", label: "第二天照常联系，不提这事", scores: { guilt: -1 } },
    ],
  },
  {
    id: "pa14", dim: "parents", subDim: "expect", kind: "sjt", discrimination: 0.8, screener: false,
    text: "你换了工作，收入比原来低一点，但自己更喜欢。",
    options: [
      { id: "A", label: "会说清自己的打算，不怕他们担心", scores: { expect: -1 } },
      { id: "B", label: "先瞒着，等稳定了再说", scores: { expect: 1 } },
      { id: "C", label: "反复解释，直到他们不反对", scores: { expect: 1 } },
      { id: "D", label: "直接说，也接受他们一时接受不了", scores: { expect: -1 } },
    ],
  },
  {
    id: "pa15", dim: "parents", subDim: "attach", kind: "sjt", discrimination: 0.8, screener: false,
    text: "你搬出来住之后。",
    options: [
      { id: "A", label: "会定期回去，也享受自己住", scores: { attach: 1 } },
      { id: "B", label: "很少回去，回去也不知道说什么", scores: { attach: -1 } },
      { id: "C", label: "几乎每周都回，不回会不安", scores: { attach: -1 } },
      { id: "D", label: "平时各过各的，有事第一时间联系", scores: { attach: 1 } },
    ],
  },
  {
    id: "pa16", dim: "parents", subDim: "boundary", kind: "sjt", discrimination: 0.8, screener: false,
    text: "父母之间闹矛盾，其中一方来找你诉苦。",
    options: [
      { id: "A", label: "听着，但不替他们做决定", scores: { boundary: 1 } },
      { id: "B", label: "站到一边，去说另一边", scores: { boundary: -1 } },
      { id: "C", label: "觉得自己必须把这个家修好", scores: { boundary: -1 } },
      { id: "D", label: "说清自己只能听，不参与评判", scores: { boundary: 1 } },
    ],
  },
  {
    id: "pa17", dim: "parents", subDim: "guilt", kind: "sjt", discrimination: 0.8, screener: false,
    text: "你算了一下，今年给家里的钱比往年少。",
    options: [
      { id: "A", label: "按自己的情况来，明年再说", scores: { guilt: -1 } },
      { id: "B", label: "心里过不去，想办法补上", scores: { guilt: 1 } },
      { id: "C", label: "不敢提这件事", scores: { guilt: 1 } },
      { id: "D", label: "会跟家里说明今年的情况", scores: { guilt: -1 } },
    ],
  },
  {
    id: "pa18", dim: "parents", subDim: "expect", kind: "sjt", discrimination: 0.8, screener: false,
    text: "父母在人前夸你，说得比实际好。",
    options: [
      { id: "A", label: "有点尴尬，回去会说一句", scores: { expect: -1 } },
      { id: "B", label: "顺着他们的话，不让他们没面子", scores: { expect: 1 } },
      { id: "C", label: "心里发紧，怕以后做不到", scores: { expect: 1 } },
      { id: "D", label: "知道他们是高兴，不太在意", scores: { expect: -1 } },
    ],
  },
  {
    id: "pa19", dim: "parents", subDim: "guilt", kind: "sjt", discrimination: 0.8, screener: false,
    text: "一个长假，你选择和伴侣或朋友出去，不回家。",
    options: [
      { id: "A", label: "提前跟家里说清楚，玩得安心", scores: { guilt: -1 } },
      { id: "B", label: "玩的时候一直想着家里", scores: { guilt: 1 } },
      { id: "C", label: "每天发照片打电话，怕他们不高兴", scores: { guilt: 1 } },
      { id: "D", label: "觉得这是自己的假期，不需要交代", scores: { guilt: -1 } },
    ],
  },
  {
    id: "pa20", dim: "parents", subDim: "expect", kind: "sjt", discrimination: 0.8, screener: false,
    text: "你和父母聊天，话题总会绕到「以后」。",
    options: [
      { id: "A", label: "会接，也说清自己还没想好", scores: { expect: -1 } },
      { id: "B", label: "一转到这个话题就想结束对话", scores: { expect: 1 } },
      { id: "C", label: "顺着说他们想听的", scores: { expect: 1 } },
      { id: "D", label: "说清楚现在不想聊这个", scores: { expect: -1 } },
    ],
  },
];
