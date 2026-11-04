import type { SubText } from "../interpret";

export const BOSS_TEXT: Record<string, SubText> = {
  authority: {
    name: "权威态度",
    high: "面对上级能正常说话，不刻意表现也不躲",
    low: "在上级面前容易紧，开口前先掂量几遍",
    mid: "熟的上级面前自然，不熟时会拘谨",
  },
  report: {
    name: "汇报风格",
    high: "坏消息也第一时间说，带上自己的判断",
    low: "习惯报喜，问题拖到瞒不住才说",
    mid: "重要的事会报，小事自己消化",
  },
  evalSensitive: {
    name: "被评价敏感度",
    high: "被点评后容易反复回想，几天都缓不过来",
    low: "被指出问题能就事论事，不太往心里去",
    mid: "当时会不舒服，过一阵就过去了",
  },
  pushback: {
    name: "向上反馈",
    high: "认为不对会说出来，也会给替代方案",
    low: "多数时候照做，有意见留在心里",
    mid: "会提一次，对方坚持就不再争",
  },
};
