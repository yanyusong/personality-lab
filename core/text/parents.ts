import type { SubText } from "../interpret";

export const PARENTS_TEXT: Record<string, SubText> = {
  attach: {
    name: "依恋模式",
    high: "能亲近，也能各自过，不用靠得很紧才安心",
    low: "要么离得很远，要么贴得很紧，中间状态比较难",
    mid: "想联系又怕麻烦，亲近和独立还在找平衡",
  },
  boundary: {
    name: "边界感",
    high: "能听他们的意见，也分得清哪些是自己要的",
    low: "他们的期待容易变成你的决定，事后才发现不对",
    mid: "大事上能坚持，日常小事常顺着他们",
  },
  guilt: {
    name: "愧疚感",
    high: "拒绝之后会反复回想，总觉得自己做得不对",
    low: "拒绝之后能说清原因，不太需要靠补偿抵消",
    mid: "拒绝时会不舒服一阵，过两天就好了",
  },
  expect: {
    name: "期待压力",
    high: "总觉得要活成他们期待的样子，做不到就发沉",
    low: "知道他们有期待，但能把它和自己的选择分开",
    mid: "被提起时会紧一下，多数时候还能按自己的节奏",
  },
};
