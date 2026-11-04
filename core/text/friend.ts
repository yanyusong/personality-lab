import type { SubText } from "../interpret";

export const FRIEND_TEXT: Record<string, SubText> = {
  energy: {
    name: "社交能量",
    high: "清楚自己能撑多久，会提前留出独处时间",
    low: "常常硬撑到结束，回家要缓好几天",
    mid: "状态好时很能玩，累了就想消失",
  },
  refuse: {
    name: "拒绝能力",
    high: "不想去会直接说，不编理由绕",
    low: "不想去也答应，事后找借口推掉",
    mid: "熟人能拒，面对不太熟的人会勉强",
  },
  distance: {
    name: "亲密距离",
    high: "会主动说清自己能给的空间和频率",
    low: "别人靠太近时不好意思说，只能躲",
    mid: "愿意亲近，但需要定期退回自己的世界",
  },
  invest: {
    name: "投入程度",
    high: "会主动发起联系，记得对方的重要节点",
    low: "不主动联系，关系靠对方维持",
    mid: "想起来会联系，平时各过各的",
  },
};
