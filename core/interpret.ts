import { SELF_EVAL_TEXT } from "./text/selfEval";
import { EMOTION_TEXT } from "./text/emotion";
import { VALUES_TEXT } from "./text/values";
import { TIME_TEXT } from "./text/time";
import { MONEY_TEXT } from "./text/money";
import { PARENTS_TEXT } from "./text/parents";
import { COLLEAGUE_TEXT } from "./text/colleague";
import { BOSS_TEXT } from "./text/boss";
import { FRIEND_TEXT } from "./text/friend";

// 把子维度分数翻译成人话（纯规则，不调模型）
// 每个子维度给出高/低两端的行为描述，中间段给中性描述

export interface SubText {
  name: string;
  high: string;
  low: string;
  mid: string;
}

const BASE_TEXT: Record<string, SubText> = {
  // 性格
  O: {
    name: "开放性",
    high: "对新观点、新体验接受度高，愿意先试再判断",
    low: "更信任已经被验证的做法，不喜欢没必要的变动",
    mid: "遇到新东西会看情况，既不排斥也不冒进",
  },
  C: {
    name: "尽责性",
    high: "计划性强，答应的事基本会做到",
    low: "更随性，靠临场发挥，常被截止日期推着走",
    mid: "重要的事会盯住，小事上比较随意",
  },
  E: {
    name: "外向性",
    high: "从与人互动中获得能量，习惯主动开口",
    low: "社交耗电，需要独处回血，更愿意一对深聊",
    mid: "社交看状态，能应付场合，但不主动张罗",
  },
  A: {
    name: "宜人性",
    high: "优先维持关系，冲突中容易先让步",
    low: "更直接，对事不对人，不太在意场面",
    mid: "愿意配合，但触到底线也会顶回去",
  },
  N: {
    name: "情绪敏感度",
    high: "对负面信号敏感，容易反复想同一件事",
    low: "情绪波动小，压力下也能稳住",
    mid: "会有波动，但一般能自己缓过来",
  },
  // 工作
  drive: {
    name: "驱动力",
    high: "没人推也会自己往前走，主动找下一步",
    low: "需要外部节点推动，容易等指令再动",
    mid: "有明确目标时很能推，模糊时就慢下来",
  },
  plan: {
    name: "计划性",
    high: "习惯先拆解再动手，进度可预期",
    low: "边做边想，计划容易被突发打乱",
    mid: "会列计划，但执行时经常调整",
  },
  resilient: {
    name: "抗压",
    high: "高压下还能保持输出，恢复得快",
    low: "压力累积后效率下降明显，需要缓冲",
    mid: "短时高压能扛，长期消耗会明显掉速",
  },
  ownership: {
    name: "担当",
    high: "出问题先接住，不等别人安排",
    low: "更愿意先划清责任，避免背锅",
    mid: "自己的部分会负责，边界外的事看情况",
  },
  collab: {
    name: "协作",
    high: "主动同步、愿意配合，能把人拉齐",
    low: "更依赖独立完成，协作时容易各干各的",
    mid: "需要协作时能配合，但不喜欢频繁沟通",
  },
  // 学习
  motive: {
    name: "动机",
    high: "有明确目标或强兴趣驱动，不太需要人推",
    low: "更需要外部要求和截止日期来启动",
    mid: "有兴趣就学得快，没兴趣就拖",
  },
  method: {
    name: "方法",
    high: "有自己的一套输入和整理方法，学得有条理",
    low: "学习方式偏随意，容易停在收藏和囤资料",
    mid: "会用一些方法，但没有固定套路",
  },
  persist: {
    name: "坚持",
    high: "平台期也能继续，不容易半途换方向",
    low: "遇到停滞容易怀疑自己或换赛道",
    mid: "顺的时候能坚持，卡住时会动摇",
  },
  feedback: {
    name: "反馈耐受",
    high: "能把批评当信息，先看有没有道理",
    low: "被指出问题容易先防御或内耗",
    mid: "能接受批评，但需要一点时间消化",
  },
  depth: {
    name: "深度",
    high: "追到原理，能讲清楚来龙去脉",
    low: "够用就停，偏实用主义",
    mid: "该深的地方会深，其余够用就行",
  },
  // 冲突与沟通
  style: {
    name: "冲突风格",
    high: "倾向于正面处理，把分歧摆到桌面上谈",
    low: "倾向于回避或让步，先保住关系再说",
    mid: "看事情大小决定是谈还是让",
  },
  express: {
    name: "表达清晰度",
    high: "能说清具体行为和自己的感受，不指责对方",
    low: "要么憋着不说，要么一开口就变成指责",
    mid: "能表达，但情绪上来时容易说走样",
  },
  listen: {
    name: "倾听",
    high: "会先听完、先确认，再表达自己的看法",
    low: "容易在对方说话时就想反驳或走神",
    mid: "愿意听，但耐心有限",
  },
  repair: {
    name: "修复能力",
    high: "冲突后能主动把关系接回来，不冷战",
    low: "冲突后容易僵住，等对方先低头",
    mid: "能修复，但需要时间消化",
  },
};

export const SUB_TEXT: Record<string, SubText> = {
  ...BASE_TEXT,
  ...SELF_EVAL_TEXT,
  ...EMOTION_TEXT,
  ...VALUES_TEXT,
  ...TIME_TEXT,
  ...MONEY_TEXT,
  ...PARENTS_TEXT,
  ...COLLEAGUE_TEXT,
  ...BOSS_TEXT,
  ...FRIEND_TEXT,
};

export function describeSub(id: string, score: number): string {
  const t = SUB_TEXT[id];
  if (!t) return "";
  if (score >= 65) return t.high;
  if (score <= 35) return t.low;
  return t.mid;
}
