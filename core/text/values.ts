import type { SubText } from "../interpret";

export const VALUES_TEXT: Record<string, SubText> = {
  priority: {
    name: "优先级",
    high: "取舍时能说出自己先要什么，选完不反复",
    low: "什么都想顾，真到选的时候容易拖或问别人",
    mid: "大致知道自己要什么，遇到冲突还会犹豫",
  },
  longterm: {
    name: "长期目标",
    high: "能说清三五年要去哪，日常安排围着它转",
    low: "主要看眼前，很少想到三年以后的事",
    mid: "有个模糊的方向，具体路径还没定",
  },
  meaning: {
    name: "意义感",
    high: "做具体的事时会觉得值，不需要别人确认",
    low: "事情做完常觉得空，靠外部反馈撑着",
    mid: "有些事让你觉得值，有些只是必须做",
  },
  line: {
    name: "底线",
    high: "碰到不能做的事会直接停，不为好处让步",
    low: "边界看情况，压力和人情一上来就容易让",
    mid: "大是大非清楚，小事上会比较灵活",
  },
};
