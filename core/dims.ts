// 自我认知 360 —— 维度注册表
// v1 只开放 3 个维度（性格 / 工作 / 学习），其余维度已定义但 active=false，铺开时改开关即可

export type DimId =
  | "personality"
  | "work"
  | "learning"
  | "selfEval"
  | "emotion"
  | "values"
  | "time"
  | "money"
  | "parents"
  | "colleague"
  | "boss"
  | "friend"
  | "conflict";

export type DimGroup = "core" | "doing" | "relation";

export interface SubDim {
  id: string;
  name: string;
  desc: string;
  /**
   * 分数极性。默认 positive：分越高越是优势。
   * negative：分越高代表这个「问题」越重（如自我苛责、内耗、拖延），
   * 结果页会把它归入盲区，而不会被误当成优势。
   */
  polarity?: "positive" | "negative";
}

export interface DimMeta {
  id: DimId;
  name: string;
  group: DimGroup;
  tagline: string;
  color: string;
  active: boolean;
  subDims: SubDim[];
}

export const GROUPS: Record<DimGroup, { name: string; desc: string }> = {
  core: { name: "自我内核", desc: "你是谁、你怎么看自己、你为什么这么想" },
  doing: { name: "做事方式", desc: "你怎么工作、怎么学习、怎么分配时间和钱" },
  relation: { name: "关系中的我", desc: "你在父母、同事、上级、朋友面前是什么样子" },
};

export const DIMS: DimMeta[] = [
  {
    id: "personality",
    name: "性格",
    group: "core",
    tagline: "你的默认反应模式",
    color: "#ff6b35",
    active: true,
    subDims: [
      { id: "O", name: "开放性", desc: "对新观点、新体验的接受度" },
      { id: "C", name: "尽责性", desc: "计划、自律、交付的稳定度" },
      { id: "E", name: "外向性", desc: "从外部世界获取能量的程度" },
      { id: "A", name: "宜人性", desc: "合作、体谅、冲突中的让步倾向" },
      { id: "N", name: "情绪敏感度", desc: "对负面信号的放大程度" },
    ],
  },
  {
    id: "work",
    name: "工作",
    group: "doing",
    tagline: "你在事情里的样子",
    color: "#5b8def",
    active: true,
    subDims: [
      { id: "drive", name: "驱动力", desc: "推动事情往前走的内在动力" },
      { id: "plan", name: "计划性", desc: "拆解、排期、按节奏推进" },
      { id: "resilient", name: "抗压", desc: "高压和挫折下的稳定性" },
      { id: "ownership", name: "担当", desc: "出问题时是否主动接住" },
      { id: "collab", name: "协作", desc: "与他人配合、共享信息的顺畅度" },
    ],
  },
  {
    id: "learning",
    name: "学习",
    group: "doing",
    tagline: "你怎么把不会变成会",
    color: "#7ed9c3",
    active: true,
    subDims: [
      { id: "motive", name: "动机", desc: "为什么学：兴趣、目标还是焦虑" },
      { id: "method", name: "方法", desc: "输入方式与知识组织方式" },
      { id: "persist", name: "坚持", desc: "遇到平台期是否继续" },
      { id: "feedback", name: "反馈耐受", desc: "被指出错误时的反应" },
      { id: "depth", name: "深度", desc: "追到底还是够用就停" },
    ],
  },
  // —— 以下 v1 不开放，定义先留好 ——
  {
    id: "selfEval",
    name: "自我评价",
    group: "core",
    tagline: "你怎么看你自己",
    color: "#a78bfa",
    active: true,
    subDims: [
      { id: "esteem", name: "自尊稳定性", desc: "外界评价对自我价值的影响" },
      { id: "harsh", name: "自我苛责", desc: "犯错后的自我攻击强度" , polarity: "negative" },
      { id: "impostor", name: "冒充者感", desc: "是否总觉得成功不属于自己" , polarity: "negative" },
      { id: "critique", name: "批评敏感度", desc: "被指出问题时的防御反应" , polarity: "negative" },
    ],
  },
  {
    id: "emotion",
    name: "情绪与压力",
    group: "core",
    tagline: "压力来了你怎么运转",
    color: "#ffd166",
    active: true,
    subDims: [
      { id: "regulate", name: "情绪调节", desc: "难受时怎么让自己缓过来" },
      { id: "react", name: "压力反应", desc: "高压下的行为变化" , polarity: "negative" },
      { id: "recover", name: "恢复速度", desc: "从打击里回到正常的速度" },
      { id: "ruminate", name: "内耗", desc: "反复想同一件事的程度" , polarity: "negative" },
    ],
  },
  {
    id: "values",
    name: "价值观与意义",
    group: "core",
    tagline: "你到底想要什么",
    color: "#ff9f68",
    active: true,
    subDims: [
      { id: "priority", name: "优先级", desc: "金钱、成就、关系、自由谁在前" },
      { id: "longterm", name: "长期目标", desc: "是否有清晰的三五年方向" },
      { id: "meaning", name: "意义感", desc: "做什么事让你觉得值得" },
      { id: "line", name: "底线", desc: "什么事你绝不会做" },
    ],
  },
  {
    id: "time",
    name: "时间与精力",
    group: "doing",
    tagline: "你的精力花在哪",
    color: "#94d2bd",
    active: true,
    subDims: [
      { id: "rhythm", name: "精力节律", desc: "一天里什么时候最能干" },
      { id: "focus", name: "注意力", desc: "被打断后能否快速回来" },
      { id: "delay", name: "拖延机制", desc: "为什么明知道要做却不动" , polarity: "negative" },
      { id: "restore", name: "恢复方式", desc: "靠什么真正回血" },
    ],
  },
  {
    id: "money",
    name: "金钱观",
    group: "doing",
    tagline: "钱在你手里是什么",
    color: "#e0a458",
    active: true,
    subDims: [
      { id: "spend", name: "消费倾向", desc: "花钱的冲动与克制" },
      { id: "save", name: "储蓄倾向", desc: "为未来留多少" },
      { id: "risk", name: "风险态度", desc: "对亏损和不确定的容忍" },
      { id: "safety", name: "金钱安全感", desc: "钱少时焦虑到什么程度" },
    ],
  },
  {
    id: "parents",
    name: "父母关系",
    group: "relation",
    tagline: "你和来处的关系",
    color: "#d98c8c",
    active: true,
    subDims: [
      { id: "attach", name: "依恋模式", desc: "亲近与独立的平衡" },
      { id: "boundary", name: "边界感", desc: "能否分开「他们想要的」和「我想要的」" },
      { id: "guilt", name: "愧疚感", desc: "拒绝父母时的心理负担" , polarity: "negative" },
      { id: "expect", name: "期待压力", desc: "被期待压住的程度" , polarity: "negative" },
    ],
  },
  {
    id: "colleague",
    name: "同事关系",
    group: "relation",
    tagline: "平级之间的你",
    color: "#8fb8de",
    active: true,
    subDims: [
      { id: "trust", name: "信任建立", desc: "多久能把同事当自己人" },
      { id: "conflictStyle", name: "冲突处理", desc: "分歧时正面说还是绕开" },
      { id: "share", name: "信息共享", desc: "愿不愿意主动同步" },
      { id: "boundaryC", name: "工作边界", desc: "拒绝额外请求的能力" },
    ],
  },
  {
    id: "boss",
    name: "上下级关系",
    group: "relation",
    tagline: "面对权威的你",
    color: "#6c8ebf",
    active: true,
    subDims: [
      { id: "authority", name: "权威态度", desc: "面对上级时的自然反应" },
      { id: "report", name: "汇报风格", desc: "报喜还是报忧、主动还是被动" },
      { id: "evalSensitive", name: "被评价敏感度", desc: "被点评时的心理波动" , polarity: "negative" },
      { id: "pushback", name: "向上反馈", desc: "能否对上级说不" },
    ],
  },
  {
    id: "friend",
    name: "朋友与社交边界",
    group: "relation",
    tagline: "非功利关系里的你",
    color: "#c9a0dc",
    active: true,
    subDims: [
      { id: "energy", name: "社交能量", desc: "社交是充电还是耗电" },
      { id: "refuse", name: "拒绝能力", desc: "不想去时能不能直说" },
      { id: "distance", name: "亲密距离", desc: "能靠多近、需要多少空间" },
      { id: "invest", name: "投入程度", desc: "维系关系的主动程度" },
    ],
  },
  {
    id: "conflict",
    name: "冲突与沟通",
    group: "relation",
    tagline: "分歧发生时你怎么处理",
    color: "#e07a5f",
    active: true,
    subDims: [
      { id: "style", name: "冲突风格", desc: "回避、竞争、迁就还是协作" },
      { id: "express", name: "表达清晰度", desc: "能否说清自己的需求而不指责" },
      { id: "listen", name: "倾听", desc: "对方说话时你在准备反驳还是理解" },
      { id: "repair", name: "修复能力", desc: "吵完之后能不能把关系接回来" },
    ],
  },
];

export const ACTIVE_DIMS = DIMS.filter((d) => d.active);

export function getDim(id: string): DimMeta | undefined {
  return DIMS.find((d) => d.id === id);
}
