import type { SubText } from "../interpret";

export const SELF_EVAL_TEXT: Record<string, SubText> = {
  esteem: {
    name: "自尊稳定性",
    high: "被夸或被批评，情绪会动，但对自我判断影响不大",
    low: "一句负面评价能影响好几天怎么看自己",
    mid: "在意别人怎么看，但不会被完全带着走",
  },
  harsh: {
    name: "自我苛责",
    high: "犯错后会反复回想，对自己说很重的话",
    low: "犯错后能就事论事，不太攻击自己",
    mid: "错了会自责一阵，但不至于否定整个人",
  },
  impostor: {
    name: "冒充者感",
    high: "被认可时先想到运气，担心哪天被看穿",
    low: "做出成绩时能接受这是自己的能力",
    mid: "有时觉得是侥幸，有时也认自己的功劳",
  },
  critique: {
    name: "批评敏感度",
    high: "被指出问题先觉得被否定，要缓一阵才听得进",
    low: "被指出问题时先看内容，不太在意语气",
    mid: "能听进意见，但当下会有点不舒服",
  },
};
