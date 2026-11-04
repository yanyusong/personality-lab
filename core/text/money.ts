import type { SubText } from "../interpret";

export const MONEY_TEXT: Record<string, SubText> = {
  spend: {
    name: "消费倾向",
    high: "花钱前会停一下，分得清想要和需要",
    low: "情绪一上来就容易买，事后想不起钱花在哪",
    mid: "大额会想清楚，小额基本随手就花",
  },
  save: {
    name: "储蓄倾向",
    high: "每个月先把一笔钱留出来，再安排花销",
    low: "钱到手就安排掉了，很少为以后单独留一份",
    mid: "想起来会存一点，遇到事又拿出来用",
  },
  risk: {
    name: "风险态度",
    high: "对亏损有明确底线，不碰自己看不懂的东西",
    low: "愿意为高回报承担大风险，容易跟风进场",
    mid: "小钱愿意试，大钱还是会先想清楚",
  },
  safety: {
    name: "金钱安全感",
    high: "钱少的时候能算清自己撑多久，不太慌",
    low: "余额一低心里就发紧，容易反复查看",
    mid: "会有压力，但一般过一阵就过去了",
  },
};
