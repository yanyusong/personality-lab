import type { SubText } from "../interpret";

export const COLLEAGUE_TEXT: Record<string, SubText> = {
  trust: {
    name: "信任建立",
    high: "会主动说出自己的判断，也敢把事交给同事",
    low: "习惯先留一手，合作再久也不太交底",
    mid: "愿意配合，但私下的分寸一直留着",
  },
  conflictStyle: {
    name: "冲突处理",
    high: "有分歧会当场说清，不怕把话讲开",
    low: "遇到分歧先绕开，宁可自己消化",
    mid: "小事让过去，大事才开口",
  },
  share: {
    name: "信息共享",
    high: "有进展就同步，不等别人来问",
    low: "习惯自己攒着，别人问起才说",
    mid: "该说的会说，但不会主动多说",
  },
  boundaryC: {
    name: "工作边界",
    high: "能直接说做不了，也会给出替代方案",
    low: "别人的请求很难推，常常先接下来",
    mid: "会拒绝，但要看对方是谁",
  },
};
