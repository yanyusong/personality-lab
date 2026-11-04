import type { Item } from "../adaptive";

// 冲突与沟通维度题库：10 道筛查 + 10 道追问，覆盖 style/express/listen/repair
export const CONFLICT_ITEMS: Item[] = [
  {
    id: "c01", dim: "conflict", subDim: "style", kind: "sjt", discrimination: 0.9, screener: true,
    text: "你和身边的人对一个重要决定意见相反，谁也说服不了谁。",
    options: [
      { id: "A", label: "先放一放，等大家冷静再说", scores: { style: -1 } },
      { id: "B", label: "坚持自己的方案，摆事实讲道理", scores: { style: 1, express: 1 } },
      { id: "C", label: "让一步，关系比这个决定重要", scores: { style: -1 } },
      { id: "D", label: "找出双方都能接受的部分先做", scores: { style: 1, listen: 1 } },
    ],
  },
  {
    id: "c02", dim: "conflict", subDim: "express", kind: "sjt", discrimination: 0.85, screener: true,
    text: "对方做了一件让你很不舒服的事，但没意识到。",
    options: [
      { id: "A", label: "直接说清楚哪件事让你不舒服", scores: { express: 1 } },
      { id: "B", label: "忍着，等他自己发现", scores: { express: -1 } },
      { id: "C", label: "用玩笑的方式点一下", scores: { express: 1 } },
      { id: "D", label: "跟别人吐槽，不跟他说", scores: { express: -1, style: -1 } },
    ],
  },
  {
    id: "c03", dim: "conflict", subDim: "listen", kind: "sjt", discrimination: 0.8, screener: true,
    text: "对方在表达一个你不同意的观点，而且说得有点激动。",
    options: [
      { id: "A", label: "先听他说完，不打断", scores: { listen: 1 } },
      { id: "B", label: "听到不对就立刻纠正", scores: { listen: -1 } },
      { id: "C", label: "一边听一边想怎么反驳", scores: { listen: -1 } },
      { id: "D", label: "先复述一遍确认自己没听错", scores: { listen: 1, express: 1 } },
    ],
  },
  {
    id: "c04", dim: "conflict", subDim: "repair", kind: "sjt", discrimination: 0.85, screener: true,
    text: "刚和重要的人吵完一架，气氛很僵。",
    options: [
      { id: "A", label: "主动开口，把话说开", scores: { repair: 1 } },
      { id: "B", label: "等对方先低头", scores: { repair: -1 } },
      { id: "C", label: "当没发生，过两天自然好", scores: { repair: -1 } },
      { id: "D", label: "先做点实际的事缓和一下", scores: { repair: 1 } },
    ],
  },
  {
    id: "c05", dim: "conflict", subDim: "style", kind: "sjt", discrimination: 0.8, screener: true,
    text: "开会时你的想法被同事当场否掉。",
    options: [
      { id: "A", label: "当场回应，把逻辑讲清楚", scores: { style: 1, express: 1 } },
      { id: "B", label: "不争了，会后再说", scores: { style: -1 } },
      { id: "C", label: "接受对方的，先推进", scores: { style: -1 } },
      { id: "D", label: "问对方具体担心什么", scores: { style: 1, listen: 1 } },
    ],
  },
  {
    id: "c06", dim: "conflict", subDim: "express", kind: "sjt", discrimination: 0.8, screener: true,
    text: "你想让伴侣/家人少做一件让你难受的事。",
    options: [
      { id: "A", label: "说清楚这件事对我的影响", scores: { express: 1 } },
      { id: "B", label: "说「你总是这样」", scores: { express: -1 } },
      { id: "C", label: "不说，自己消化", scores: { express: -1 } },
      { id: "D", label: "先问他为什么这么做", scores: { listen: 1, express: 1 } },
    ],
  },
  {
    id: "c07", dim: "conflict", subDim: "listen", kind: "sjt", discrimination: 0.75, screener: true,
    text: "对方批评你，但你觉得他说得不对。",
    options: [
      { id: "A", label: "先听完，再判断有没有道理", scores: { listen: 1 } },
      { id: "B", label: "马上解释自己不是那样", scores: { listen: -1 } },
      { id: "C", label: "沉默，心里不服", scores: { listen: -1 } },
      { id: "D", label: "问他具体看到了什么", scores: { listen: 1, express: 1 } },
    ],
  },
  {
    id: "c08", dim: "conflict", subDim: "repair", kind: "sjt", discrimination: 0.8, screener: true,
    text: "你发现自己上次说话伤了人。",
    options: [
      { id: "A", label: "主动道歉，说清楚哪里不对", scores: { repair: 1 } },
      { id: "B", label: "心里知道，但说不出口", scores: { repair: -1 } },
      { id: "C", label: "用行动补偿，不提那件事", scores: { repair: 1 } },
      { id: "D", label: "等对方先提", scores: { repair: -1 } },
    ],
  },
  {
    id: "c09", dim: "conflict", subDim: "style", kind: "sjt", discrimination: 0.75, screener: true,
    text: "一件小事，对方却反应很大。",
    options: [
      { id: "A", label: "先问清楚他为什么这么在意", scores: { style: 1, listen: 1 } },
      { id: "B", label: "觉得他小题大做，直接说", scores: { style: 1, express: 1 } },
      { id: "C", label: "不吭声，让他自己冷静", scores: { style: -1 } },
      { id: "D", label: "先顺着他说，之后再谈", scores: { style: -1 } },
    ],
  },
  {
    id: "c10", dim: "conflict", subDim: "express", kind: "sjt", discrimination: 0.75, screener: true,
    text: "你想拒绝一个不合理的请求，但怕伤感情。",
    options: [
      { id: "A", label: "直接说做不到，说明原因", scores: { express: 1 } },
      { id: "B", label: "找借口推掉", scores: { express: -1 } },
      { id: "C", label: "勉强答应", scores: { express: -1 } },
      { id: "D", label: "提出一个替代方案", scores: { express: 1, repair: 1 } },
    ],
  },
  {
    id: "c11", dim: "conflict", subDim: "style", kind: "sjt", discrimination: 0.75, screener: false,
    text: "冲突发生时，你的第一反应通常是？",
    options: [
      { id: "A", label: "先解决事情，情绪之后再说", scores: { style: 1 } },
      { id: "B", label: "先照顾对方的情绪", scores: { style: -1, listen: 1 } },
      { id: "C", label: "先离开现场", scores: { style: -1 } },
      { id: "D", label: "先把话说清楚", scores: { style: 1, express: 1 } },
    ],
  },
  {
    id: "c12", dim: "conflict", subDim: "listen", kind: "sjt", discrimination: 0.75, screener: false,
    text: "别人说话时，你通常在做什么？",
    options: [
      { id: "A", label: "听内容，也听他的情绪", scores: { listen: 1 } },
      { id: "B", label: "想自己接下来要说什么", scores: { listen: -1 } },
      { id: "C", label: "判断他说得对不对", scores: { listen: -1 } },
      { id: "D", label: "记关键点，怕漏掉", scores: { listen: 1 } },
    ],
  },
  {
    id: "c13", dim: "conflict", subDim: "express", kind: "sjt", discrimination: 0.75, screener: false,
    text: "你表达不满时，通常怎么说？",
    options: [
      { id: "A", label: "说具体行为和对我的影响", scores: { express: 1 } },
      { id: "B", label: "说对方是什么样的人", scores: { express: -1 } },
      { id: "C", label: "不说，冷处理", scores: { express: -1 } },
      { id: "D", label: "先问对方怎么想", scores: { listen: 1, express: 1 } },
    ],
  },
  {
    id: "c14", dim: "conflict", subDim: "repair", kind: "sjt", discrimination: 0.8, screener: false,
    text: "吵完之后，你多久能恢复正常交流？",
    options: [
      { id: "A", label: "很快，事情过了就过了", scores: { repair: 1 } },
      { id: "B", label: "需要几天，还会想", scores: { repair: -1 } },
      { id: "C", label: "表面恢复，心里记着", scores: { repair: -1 } },
      { id: "D", label: "看对方态度", scores: { repair: -1 } },
    ],
  },
  {
    id: "c15", dim: "conflict", subDim: "style", kind: "sjt", discrimination: 0.7, screener: false,
    text: "你更害怕哪种场面？",
    options: [
      { id: "A", label: "当面吵起来", scores: { style: -1 } },
      { id: "B", label: "冷战，谁也不说", scores: { style: 1 } },
      { id: "C", label: "被误会但不解释", scores: { style: 1, express: 1 } },
      { id: "D", label: "为了和气委屈自己", scores: { style: 1 } },
    ],
  },
  {
    id: "c16", dim: "conflict", subDim: "listen", kind: "sjt", discrimination: 0.7, screener: false,
    text: "对方说的内容和你的经验完全相反。",
    options: [
      { id: "A", label: "先问他为什么这么看", scores: { listen: 1 } },
      { id: "B", label: "直接说他不了解情况", scores: { listen: -1 } },
      { id: "C", label: "表面点头，心里否定", scores: { listen: -1 } },
      { id: "D", label: "找共同点再讨论分歧", scores: { listen: 1, repair: 1 } },
    ],
  },
  {
    id: "c17", dim: "conflict", subDim: "express", kind: "sjt", discrimination: 0.7, screener: false,
    text: "你需要提出一个会让对方不高兴的要求。",
    options: [
      { id: "A", label: "直接说，讲清理由", scores: { express: 1 } },
      { id: "B", label: "绕很大一圈才说", scores: { express: -1 } },
      { id: "C", label: "让别人帮我说", scores: { express: -1 } },
      { id: "D", label: "先铺垫情绪再提", scores: { express: 1, listen: 1 } },
    ],
  },
  {
    id: "c18", dim: "conflict", subDim: "repair", kind: "sjt", discrimination: 0.75, screener: false,
    text: "对方一直不肯让步，但这件事对你很重要。",
    options: [
      { id: "A", label: "继续沟通，找新的方案", scores: { repair: 1, style: 1 } },
      { id: "B", label: "放弃，不想再争", scores: { repair: -1 } },
      { id: "C", label: "强行按自己的来", scores: { style: 1, repair: -1 } },
      { id: "D", label: "先搁置，找第三方", scores: { repair: 1 } },
    ],
  },
  {
    id: "c19", dim: "conflict", subDim: "style", kind: "sjt", discrimination: 0.7, screener: false,
    text: "在一段关系里，你更倾向于？",
    options: [
      { id: "A", label: "有问题就说，不攒着", scores: { style: 1, express: 1 } },
      { id: "B", label: "小事忍，忍不了才爆发", scores: { style: -1 } },
      { id: "C", label: "尽量不冲突，和气最重要", scores: { style: -1 } },
      { id: "D", label: "看对方能不能沟通", scores: { listen: 1 } },
    ],
  },
  {
    id: "c20", dim: "conflict", subDim: "listen", kind: "sjt", discrimination: 0.7, screener: false,
    text: "对方情绪很激动，说的话不太讲道理。",
    options: [
      { id: "A", label: "先接住情绪，等冷静再谈事实", scores: { listen: 1, repair: 1 } },
      { id: "B", label: "立刻指出他哪里不理性", scores: { listen: -1 } },
      { id: "C", label: "不说话，等他自己平复", scores: { listen: -1 } },
      { id: "D", label: "先把事情解决，情绪不重要", scores: { style: 1 } },
    ],
  },
];
