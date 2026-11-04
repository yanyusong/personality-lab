import type { Item } from "../adaptive";

// 自我评价维度题库：10 道筛查 + 10 道追问，覆盖 esteem/harsh/impostor/critique
export const SELF_EVAL_ITEMS: Item[] = [
  {
    id: "se01", dim: "selfEval", subDim: "esteem", kind: "sjt", discrimination: 0.9, screener: true,
    text: "你提的方案在会上被主管当面说「这个不太行」。",
    options: [
      { id: "A", label: "问清哪里不行，回去改", scores: { esteem: 1, critique: -1 } },
      { id: "B", label: "脸上挂不住，后面半场没说话", scores: { esteem: -1, critique: 1 } },
      { id: "C", label: "当场把自己的思路解释一遍", scores: { critique: 1 } },
      { id: "D", label: "回去想了一整晚，觉得自己能力不行", scores: { esteem: -1, harsh: 1 } },
    ],
  },
  {
    id: "se02", dim: "selfEval", subDim: "harsh", kind: "sjt", discrimination: 0.9, screener: true,
    text: "你发出去的报表里有个数字写错了，客户已经看到。",
    options: [
      { id: "A", label: "先补救，把正确版本发过去", scores: { harsh: -1 } },
      { id: "B", label: "一边改一边在心里骂自己蠢", scores: { harsh: 1 } },
      { id: "C", label: "想说明是别人给的数据", scores: { harsh: -1, critique: 1 } },
      { id: "D", label: "改完了还在反复回想这事", scores: { harsh: 1 } },
    ],
  },
  {
    id: "se03", dim: "selfEval", subDim: "impostor", kind: "sjt", discrimination: 0.85, screener: true,
    text: "你被提拔到一个比自己预期高的位置。",
    options: [
      { id: "A", label: "觉得自己还没准备好，怕被发现", scores: { impostor: 1 } },
      { id: "B", label: "觉得是赶上机会了，先干着", scores: { impostor: 1 } },
      { id: "C", label: "觉得这是对自己能力的认可", scores: { impostor: -1 } },
      { id: "D", label: "先列清楚自己缺什么，补上", scores: { impostor: -1, esteem: 1 } },
    ],
  },
  {
    id: "se04", dim: "selfEval", subDim: "critique", kind: "sjt", discrimination: 0.85, screener: true,
    text: "同事在群里指出你流程上漏了一步。",
    options: [
      { id: "A", label: "先确认，按他说的补上", scores: { critique: -1 } },
      { id: "B", label: "回一句「之前都这么做的」", scores: { critique: 1 } },
      { id: "C", label: "问他怎么会去查这个", scores: { critique: 1 } },
      { id: "D", label: "私下问他还有没有别的漏洞", scores: { critique: -1, esteem: 1 } },
    ],
  },
  {
    id: "se05", dim: "selfEval", subDim: "esteem", kind: "sjt", discrimination: 0.8, screener: true,
    text: "一个很久没联系的朋友突然说你「这两年变厉害了」。",
    options: [
      { id: "A", label: "道谢，也觉得自己确实有进步", scores: { esteem: 1 } },
      { id: "B", label: "觉得对方只是客套", scores: { esteem: -1 } },
      { id: "C", label: "有点不好意思，赶紧转话题", scores: { esteem: -1 } },
      { id: "D", label: "会记很久，心情好一整天", scores: { esteem: -1 } },
    ],
  },
  {
    id: "se06", dim: "selfEval", subDim: "harsh", kind: "sjt", discrimination: 0.85, screener: true,
    text: "项目砸了，复盘会上点名到你负责的部分。",
    options: [
      { id: "A", label: "讲清过程和原因，不加码也不开脱", scores: { harsh: -1 } },
      { id: "B", label: "会后一个人待着，反复责备自己", scores: { harsh: 1, impostor: 1 } },
      { id: "C", label: "觉得主要责任不在自己", scores: { harsh: -1, critique: 1 } },
      { id: "D", label: "当场全认下来，把责任揽住", scores: { harsh: 1 } },
    ],
  },
  {
    id: "se07", dim: "selfEval", subDim: "impostor", kind: "sjt", discrimination: 0.8, screener: true,
    text: "你拿了个奖，同组的人说你「实至名归」。",
    options: [
      { id: "A", label: "接受这个说法", scores: { impostor: -1 } },
      { id: "B", label: "觉得只是这次运气好", scores: { impostor: 1 } },
      { id: "C", label: "觉得别人比自己更该拿", scores: { impostor: 1 } },
      { id: "D", label: "把奖放一边，接着做手上的事", scores: { impostor: -1 } },
    ],
  },
  {
    id: "se08", dim: "selfEval", subDim: "critique", kind: "sjt", discrimination: 0.8, screener: true,
    text: "你交上去的东西被退回来，批注写得很密。",
    options: [
      { id: "A", label: "逐条看，能改的就改", scores: { critique: -1 } },
      { id: "B", label: "先看是谁批的，再决定怎么改", scores: { critique: 1 } },
      { id: "C", label: "觉得被针对，心里堵着", scores: { critique: 1 } },
      { id: "D", label: "当面问清楚他的标准", scores: { critique: -1, esteem: 1 } },
    ],
  },
  {
    id: "se09", dim: "selfEval", subDim: "esteem", kind: "sjt", discrimination: 0.75, screener: true,
    text: "聚会上有人当众拿你开了个玩笑，一桌人都笑了。",
    options: [
      { id: "A", label: "跟着笑一下，过去了", scores: { esteem: 1 } },
      { id: "B", label: "笑完心里一直不舒服", scores: { esteem: -1 } },
      { id: "C", label: "当场回一句更狠的", scores: { esteem: -1, critique: 1 } },
      { id: "D", label: "事后跟他说这样不太合适", scores: { esteem: 1 } },
    ],
  },
  {
    id: "se10", dim: "selfEval", subDim: "harsh", kind: "sjt", discrimination: 0.75, screener: true,
    text: "你答应朋友的事忘了，他到地方等了半小时。",
    options: [
      { id: "A", label: "道歉，说清情况，想办法补", scores: { harsh: -1 } },
      { id: "B", label: "道歉之后一直觉得对不起他", scores: { harsh: 1 } },
      { id: "C", label: "说路上堵车，没提忘了", scores: { harsh: -1, critique: 1 } },
      { id: "D", label: "觉得自己这人就是不靠谱", scores: { harsh: 1 } },
    ],
  },
  {
    id: "se11", dim: "selfEval", subDim: "esteem", kind: "sjt", discrimination: 0.8, screener: false,
    text: "你换了发型，一整天没人提起。",
    options: [
      { id: "A", label: "没往心里去", scores: { esteem: 1 } },
      { id: "B", label: "开始怀疑是不是很难看", scores: { esteem: -1 } },
      { id: "C", label: "主动问身边的人怎么样", scores: { esteem: -1 } },
      { id: "D", label: "自己觉得挺好就够了", scores: { esteem: 1 } },
    ],
  },
  {
    id: "se12", dim: "selfEval", subDim: "harsh", kind: "sjt", discrimination: 0.8, screener: false,
    text: "开会时你说错了一个数据，被人当场纠正。",
    options: [
      { id: "A", label: "记下来，接着往下说", scores: { harsh: -1 } },
      { id: "B", label: "后面的话都说得不利索", scores: { harsh: 1 } },
      { id: "C", label: "心里一遍遍回放刚才那句", scores: { harsh: 1 } },
      { id: "D", label: "散会后核对，把数据补齐", scores: { harsh: -1 } },
    ],
  },
  {
    id: "se13", dim: "selfEval", subDim: "impostor", kind: "sjt", discrimination: 0.8, screener: false,
    text: "新工作上手很快，同事夸你学得快。",
    options: [
      { id: "A", label: "确实上手快，接下来多担点", scores: { impostor: -1 } },
      { id: "B", label: "觉得是这活本来就简单", scores: { impostor: 1 } },
      { id: "C", label: "担心再过一阵就露馅", scores: { impostor: 1 } },
      { id: "D", label: "归功于带自己的人教得好", scores: { impostor: 1 } },
    ],
  },
  {
    id: "se14", dim: "selfEval", subDim: "critique", kind: "sjt", discrimination: 0.8, screener: false,
    text: "朋友说你最近说话有点冲。",
    options: [
      { id: "A", label: "问他是哪句，自己回想一下", scores: { critique: -1 } },
      { id: "B", label: "先说自己最近压力大", scores: { critique: 1 } },
      { id: "C", label: "反过来说他也有同样的问题", scores: { critique: 1 } },
      { id: "D", label: "认了，之后留意", scores: { critique: -1 } },
    ],
  },
  {
    id: "se15", dim: "selfEval", subDim: "esteem", kind: "sjt", discrimination: 0.75, screener: false,
    text: "你做的决定被身边几个人都反对。",
    options: [
      { id: "A", label: "听完理由，再决定改不改", scores: { esteem: 1 } },
      { id: "B", label: "开始怀疑自己的判断力", scores: { esteem: -1 } },
      { id: "C", label: "坚持自己的，不解释", scores: { esteem: 1, critique: 1 } },
      { id: "D", label: "顺着他们改，不想被说固执", scores: { esteem: -1 } },
    ],
  },
  {
    id: "se16", dim: "selfEval", subDim: "harsh", kind: "sjt", discrimination: 0.75, screener: false,
    text: "一个重要场合你迟到了十分钟。",
    options: [
      { id: "A", label: "进去坐好，把该做的做完", scores: { harsh: -1 } },
      { id: "B", label: "整场都在想别人怎么看你", scores: { harsh: 1 } },
      { id: "C", label: "反复道歉，解释了很久", scores: { harsh: 1 } },
      { id: "D", label: "提前跟主持人打过招呼，按流程进", scores: { harsh: -1 } },
    ],
  },
  {
    id: "se17", dim: "selfEval", subDim: "impostor", kind: "sjt", discrimination: 0.75, screener: false,
    text: "有人让你负责一件你从没做过的事。",
    options: [
      { id: "A", label: "接下来，边做边学", scores: { impostor: -1 } },
      { id: "B", label: "先想自己凭什么被选中", scores: { impostor: 1 } },
      { id: "C", label: "担心做砸了暴露真实水平", scores: { impostor: 1 } },
      { id: "D", label: "问清要什么结果，再答应", scores: { impostor: -1 } },
    ],
  },
  {
    id: "se18", dim: "selfEval", subDim: "critique", kind: "sjt", discrimination: 0.75, screener: false,
    text: "你写的方案被打回来重做，理由是「方向不对」。",
    options: [
      { id: "A", label: "问清楚对的方向是什么", scores: { critique: -1 } },
      { id: "B", label: "觉得对方一开始就没说清楚", scores: { critique: 1 } },
      { id: "C", label: "重做，但心里不服", scores: { critique: 1 } },
      { id: "D", label: "把之前的沟通记录翻出来核对", scores: { critique: -1, esteem: 1 } },
    ],
  },
  {
    id: "se19", dim: "selfEval", subDim: "impostor", kind: "sjt", discrimination: 0.7, screener: false,
    text: "你被拉进一个都是前辈的群，要你说两句。",
    options: [
      { id: "A", label: "说自己的看法，说完就完", scores: { impostor: -1 } },
      { id: "B", label: "反复删改，最后发得很短", scores: { impostor: 1 } },
      { id: "C", label: "先看别人怎么说再跟", scores: { impostor: 1 } },
      { id: "D", label: "直说这块自己不熟，请多指教", scores: { impostor: -1 } },
    ],
  },
  {
    id: "se20", dim: "selfEval", subDim: "critique", kind: "sjt", discrimination: 0.7, screener: false,
    text: "你带的实习生说你教他的方法有问题。",
    options: [
      { id: "A", label: "让他演示一遍，看是不是", scores: { critique: -1 } },
      { id: "B", label: "先说自己这么做是有原因的", scores: { critique: 1 } },
      { id: "C", label: "觉得他不懂装懂", scores: { critique: 1 } },
      { id: "D", label: "回去自己查了一遍资料", scores: { critique: -1, esteem: 1 } },
    ],
  },
];
