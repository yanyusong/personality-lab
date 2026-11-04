import type { SubText } from "../interpret";

export const EMOTION_TEXT: Record<string, SubText> = {
  regulate: {
    name: "情绪调节",
    high: "难受时能主动找办法缓过来，比如走动、睡觉、找人聊",
    low: "情绪上来容易堆着，靠刷手机或硬扛过去",
    mid: "有时能自己缓过来，有时要拖几天",
  },
  react: {
    name: "压力反应",
    high: "压力一大就睡不好、说话变急，事情反而推不动",
    low: "高压下节奏会乱一点，但该做的还在推进",
    mid: "压力下会紧，但还能维持基本秩序",
  },
  recover: {
    name: "恢复速度",
    high: "受了打击，通常几天内就能回到正常节奏",
    low: "一次挫败的影响会拖很久，做事提不起劲",
    mid: "需要一两周消化，之后能慢慢回来",
  },
  ruminate: {
    name: "内耗",
    high: "同一件事会在脑子里反复过，越想越沉",
    low: "事情过去就过去了，不太回头翻",
    mid: "偶尔会反复想，但能自己叫停",
  },
};
