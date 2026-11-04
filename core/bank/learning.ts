import type { Item } from "../adaptive";

// 学习维度题库：10 道筛查 + 10 道追问，覆盖 motive/method/persist/feedback/depth
export const LEARNING_ITEMS: Item[] = [
  {
    id: "l01", dim: "learning", subDim: "motive", kind: "sjt", discrimination: 0.9, screener: true,
    text: "你决定开始学一个新东西，通常是因为？",
    options: [
      { id: "A", label: "有个具体问题要解决", scores: { motive: 1 } },
      { id: "B", label: "觉得以后可能有用", scores: { motive: 1 } },
      { id: "C", label: "别人都在学", scores: { motive: -1 } },
      { id: "D", label: "纯粹好奇", scores: { motive: 1, depth: 1 } },
    ],
  },
  {
    id: "l02", dim: "learning", subDim: "method", kind: "sjt", discrimination: 0.85, screener: true,
    text: "上手一个全新技能，你的第一动作是？",
    options: [
      { id: "A", label: "找教程跟着做", scores: { method: 1 } },
      { id: "B", label: "直接做个小项目", scores: { method: 1, persist: 1 } },
      { id: "C", label: "先读理论打基础", scores: { method: 1, depth: 1 } },
      { id: "D", label: "找人带我", scores: { method: 1, motive: -1 } },
    ],
  },
  {
    id: "l03", dim: "learning", subDim: "persist", kind: "sjt", discrimination: 0.85, screener: true,
    text: "学了三周，感觉没什么进步。",
    options: [
      { id: "A", label: "换方法继续", scores: { persist: 1, method: 1 } },
      { id: "B", label: "停一阵再说", scores: { persist: -1 } },
      { id: "C", label: "降低目标", scores: { persist: -1 } },
      { id: "D", label: "找反馈看卡在哪", scores: { persist: 1, feedback: 1 } },
    ],
  },
  {
    id: "l04", dim: "learning", subDim: "feedback", kind: "sjt", discrimination: 0.8, screener: true,
    text: "你的作业/方案被批了很多问题。",
    options: [
      { id: "A", label: "先逐条看批注", scores: { feedback: 1 } },
      { id: "B", label: "先不舒服一会儿", scores: { feedback: -1 } },
      { id: "C", label: "只挑认同的看", scores: { feedback: -1, depth: -1 } },
      { id: "D", label: "找老师问清楚", scores: { feedback: 1, depth: 1 } },
    ],
  },
  {
    id: "l05", dim: "learning", subDim: "depth", kind: "sjt", discrimination: 0.8, screener: true,
    text: "学一个概念，学到「够用」了。",
    options: [
      { id: "A", label: "够用就停", scores: { depth: -1 } },
      { id: "B", label: "追到原理", scores: { depth: 1 } },
      { id: "C", label: "看时间，有空再深", scores: { depth: -1 } },
      { id: "D", label: "记下来以后再说", scores: { depth: -1, persist: -1 } },
    ],
  },
  {
    id: "l06", dim: "learning", subDim: "motive", kind: "sjt", discrimination: 0.75, screener: true,
    text: "一本没人要求你读、也不考试的书。",
    options: [
      { id: "A", label: "主动找来看", scores: { motive: 1 } },
      { id: "B", label: "只看别人推荐的", scores: { motive: 1 } },
      { id: "C", label: "看不进去", scores: { motive: -1 } },
      { id: "D", label: "听别人讲书", scores: { method: 1 } },
    ],
  },
  {
    id: "l07", dim: "learning", subDim: "method", kind: "sjt", discrimination: 0.75, screener: true,
    text: "学东西时你怎么记笔记？",
    options: [
      { id: "A", label: "结构化整理成自己的话", scores: { method: 1 } },
      { id: "B", label: "抄原文", scores: { method: -1 } },
      { id: "C", label: "只记关键词", scores: { method: 1 } },
      { id: "D", label: "不记，靠理解", scores: { method: -1, depth: 1 } },
    ],
  },
  {
    id: "l08", dim: "learning", subDim: "persist", kind: "sjt", discrimination: 0.8, screener: true,
    text: "学了三周完全没进步，你会怀疑自己不适合吗？",
    options: [
      { id: "A", label: "调整计划继续", scores: { persist: 1 } },
      { id: "B", label: "怀疑自己不适合", scores: { persist: -1, motive: -1 } },
      { id: "C", label: "换一个学", scores: { persist: -1 } },
      { id: "D", label: "找人问", scores: { feedback: 1, persist: 1 } },
    ],
  },
  {
    id: "l09", dim: "learning", subDim: "feedback", kind: "sjt", discrimination: 0.75, screener: true,
    text: "有人指出你「基础不牢」。",
    options: [
      { id: "A", label: "回头补基础", scores: { feedback: 1, depth: 1 } },
      { id: "B", label: "觉得对方不懂", scores: { feedback: -1 } },
      { id: "C", label: "焦虑但不动", scores: { feedback: -1 } },
      { id: "D", label: "先做当前项目，回头补", scores: { feedback: 1 } },
    ],
  },
  {
    id: "l10", dim: "learning", subDim: "depth", kind: "sjt", discrimination: 0.8, screener: true,
    text: "遇到一个不懂的概念，但跳过也不影响当前进度。",
    options: [
      { id: "A", label: "查到底", scores: { depth: 1 } },
      { id: "B", label: "跳过，先往下", scores: { depth: -1 } },
      { id: "C", label: "问人", scores: { feedback: 1 } },
      { id: "D", label: "记下来，之后再说", scores: { depth: -1 } },
    ],
  },
  {
    id: "l11", dim: "learning", subDim: "motive", kind: "sjt", discrimination: 0.75, screener: false,
    text: "你学习最主要的动力来自？",
    options: [
      { id: "A", label: "一个明确的目标", scores: { motive: 1 } },
      { id: "B", label: "兴趣本身", scores: { motive: 1, depth: 1 } },
      { id: "C", label: "怕落后", scores: { motive: -1 } },
      { id: "D", label: "外界要求", scores: { motive: -1 } },
    ],
  },
  {
    id: "l12", dim: "learning", subDim: "method", kind: "sjt", discrimination: 0.7, screener: false,
    text: "同样一份内容，你更愿意怎么输入？",
    options: [
      { id: "A", label: "看视频", scores: { method: 1 } },
      { id: "B", label: "读文字", scores: { method: 1 } },
      { id: "C", label: "动手做", scores: { method: 1, persist: 1 } },
      { id: "D", label: "听人讲", scores: { method: 1 } },
    ],
  },
  {
    id: "l13", dim: "learning", subDim: "persist", kind: "sjt", discrimination: 0.75, screener: false,
    text: "一个要学三个月的长期项目。",
    options: [
      { id: "A", label: "每天固定时间学", scores: { persist: 1 } },
      { id: "B", label: "靠冲刺，想起来才学", scores: { persist: -1 } },
      { id: "C", label: "有人陪才坚持", scores: { persist: -1 } },
      { id: "D", label: "设里程碑逐段完成", scores: { persist: 1 } },
    ],
  },
  {
    id: "l14", dim: "learning", subDim: "feedback", kind: "sjt", discrimination: 0.75, screener: false,
    text: "别人给你一个和你原有理解冲突的建议。",
    options: [
      { id: "A", label: "先听完再判断", scores: { feedback: 1 } },
      { id: "B", label: "立刻解释自己", scores: { feedback: -1 } },
      { id: "C", label: "表面听，心里不服", scores: { feedback: -1 } },
      { id: "D", label: "记下来去验证", scores: { feedback: 1, depth: 1 } },
    ],
  },
  {
    id: "l15", dim: "learning", subDim: "depth", kind: "sjt", discrimination: 0.8, screener: false,
    text: "你怎么判断自己「学会」了一个东西？",
    options: [
      { id: "A", label: "能讲给别人听", scores: { depth: 1 } },
      { id: "B", label: "做完题就算", scores: { depth: -1 } },
      { id: "C", label: "能写出一份总结", scores: { depth: 1 } },
      { id: "D", label: "收藏了资料就算", scores: { depth: -1 } },
    ],
  },
  {
    id: "l16", dim: "learning", subDim: "motive", kind: "sjt", discrimination: 0.7, screener: false,
    text: "学的东西暂时用不上。",
    options: [
      { id: "A", label: "还是学，相信以后有用", scores: { motive: 1 } },
      { id: "B", label: "立刻失去兴趣", scores: { motive: -1 } },
      { id: "C", label: "找能用的场景", scores: { motive: 1 } },
      { id: "D", label: "换学别的", scores: { motive: -1, persist: -1 } },
    ],
  },
  {
    id: "l17", dim: "learning", subDim: "method", kind: "sjt", discrimination: 0.7, screener: false,
    text: "你怎么复习已经学过的内容？",
    options: [
      { id: "A", label: "间隔重复", scores: { method: 1 } },
      { id: "B", label: "考前突击", scores: { method: -1 } },
      { id: "C", label: "从头重看一遍", scores: { method: 1 } },
      { id: "D", label: "讲给别人听", scores: { method: 1, depth: 1 } },
    ],
  },
  {
    id: "l18", dim: "learning", subDim: "persist", kind: "sjt", discrimination: 0.75, screener: false,
    text: "遇到一道很难、想了很久也没头绪的题。",
    options: [
      { id: "A", label: "继续死磕", scores: { persist: 1, depth: 1 } },
      { id: "B", label: "直接看答案", scores: { persist: -1 } },
      { id: "C", label: "跳过", scores: { persist: -1 } },
      { id: "D", label: "找人讨论", scores: { feedback: 1, persist: 1 } },
    ],
  },
  {
    id: "l19", dim: "learning", subDim: "feedback", kind: "sjt", discrimination: 0.75, screener: false,
    text: "考试成绩明显低于预期。",
    options: [
      { id: "A", label: "分析错在哪", scores: { feedback: 1 } },
      { id: "B", label: "觉得自己笨", scores: { feedback: -1, motive: -1 } },
      { id: "C", label: "怪题目太难", scores: { feedback: -1 } },
      { id: "D", label: "找老师同学问", scores: { feedback: 1 } },
    ],
  },
  {
    id: "l20", dim: "learning", subDim: "depth", kind: "sjt", discrimination: 0.7, screener: false,
    text: "你学一个东西，目标通常定在？",
    options: [
      { id: "A", label: "掌握到能教别人", scores: { depth: 1 } },
      { id: "B", label: "考试够用", scores: { depth: -1 } },
      { id: "C", label: "能解决当前问题", scores: { depth: 1 } },
      { id: "D", label: "了解个大概", scores: { depth: -1 } },
    ],
  },
];
