import type { Item } from "../adaptive";

// 情绪与压力维度题库：10 道筛查 + 10 道追问，覆盖 regulate/react/recover/ruminate
export const EMOTION_ITEMS: Item[] = [
  {
    id: "em01", dim: "emotion", subDim: "regulate", kind: "sjt", discrimination: 0.9, screener: true,
    text: "白天被客户骂了一顿，晚上一个人在家。",
    options: [
      { id: "A", label: "出门走一圈，回来早睡", scores: { regulate: 1 } },
      { id: "B", label: "找个朋友把这事讲一遍", scores: { regulate: 1 } },
      { id: "C", label: "刷手机刷到两三点", scores: { regulate: -1 } },
      { id: "D", label: "躺着琢磨他那句话什么意思", scores: { regulate: -1 } },
    ],
  },
  {
    id: "em02", dim: "emotion", subDim: "react", kind: "sjt", discrimination: 0.9, screener: true,
    text: "离交付还有三天，核心的东西还没做出来。",
    options: [
      { id: "A", label: "排个序，先做能交的那部分", scores: { react: -1 } },
      { id: "B", label: "睡不着，白天效率更低", scores: { react: 1 } },
      { id: "C", label: "对同事说话变得很急", scores: { react: 1 } },
      { id: "D", label: "找人分担，把范围砍小", scores: { react: -1, regulate: 1 } },
    ],
  },
  {
    id: "em03", dim: "emotion", subDim: "recover", kind: "sjt", discrimination: 0.85, screener: true,
    text: "一场准备很久的面试没通过。",
    options: [
      { id: "A", label: "当天难受，第二天开始投下一家", scores: { recover: 1 } },
      { id: "B", label: "一周都提不起劲", scores: { recover: -1 } },
      { id: "C", label: "把过程复盘一遍，找出问题", scores: { recover: 1 } },
      { id: "D", label: "先不想这事，搁着", scores: { recover: -1 } },
    ],
  },
  {
    id: "em04", dim: "emotion", subDim: "ruminate", kind: "sjt", discrimination: 0.85, screener: true,
    text: "你在群里发的一句话，一直没人回。",
    options: [
      { id: "A", label: "没太在意", scores: { ruminate: -1 } },
      { id: "B", label: "隔一会儿点开看一次", scores: { ruminate: 1 } },
      { id: "C", label: "回想自己那句话的措辞", scores: { ruminate: 1 } },
      { id: "D", label: "转头去做别的事", scores: { ruminate: -1 } },
    ],
  },
  {
    id: "em05", dim: "emotion", subDim: "regulate", kind: "sjt", discrimination: 0.8, screener: true,
    text: "跟家里人吵完架，气得手发抖。",
    options: [
      { id: "A", label: "先离开那间屋子，等气下去", scores: { regulate: 1 } },
      { id: "B", label: "继续吵，把话说完", scores: { regulate: -1 } },
      { id: "C", label: "忍着不说，回房间摔门", scores: { regulate: -1 } },
      { id: "D", label: "写下来，或者下楼走两圈", scores: { regulate: 1 } },
    ],
  },
  {
    id: "em06", dim: "emotion", subDim: "react", kind: "sjt", discrimination: 0.85, screener: true,
    text: "三个人同时在催你同一件事。",
    options: [
      { id: "A", label: "按顺序回，说清各自要等多久", scores: { react: -1 } },
      { id: "B", label: "手忙脚乱，哪个都没推进", scores: { react: 1 } },
      { id: "C", label: "对催得最凶的那个发火", scores: { react: 1 } },
      { id: "D", label: "关掉消息，专心做完一件", scores: { react: -1, regulate: 1 } },
    ],
  },
  {
    id: "em07", dim: "emotion", subDim: "recover", kind: "sjt", discrimination: 0.8, screener: true,
    text: "被一个很信任的人骗了一次。",
    options: [
      { id: "A", label: "难过一阵，之后还能正常来往", scores: { recover: 1 } },
      { id: "B", label: "很久都不敢再信人", scores: { recover: -1 } },
      { id: "C", label: "把界限划清，日子照过", scores: { recover: 1 } },
      { id: "D", label: "反复回想当时的细节", scores: { recover: -1, ruminate: 1 } },
    ],
  },
  {
    id: "em08", dim: "emotion", subDim: "ruminate", kind: "sjt", discrimination: 0.8, screener: true,
    text: "开会时你说了一句不太合适的话。",
    options: [
      { id: "A", label: "当时有点尴尬，过后就放下了", scores: { ruminate: -1 } },
      { id: "B", label: "晚上躺床上还在想那句", scores: { ruminate: 1 } },
      { id: "C", label: "在心里演练当时该怎么讲", scores: { ruminate: 1 } },
      { id: "D", label: "第二天照常，没再提", scores: { ruminate: -1 } },
    ],
  },
  {
    id: "em09", dim: "emotion", subDim: "regulate", kind: "sjt", discrimination: 0.75, screener: true,
    text: "连着几天状态很差，什么都不想干。",
    options: [
      { id: "A", label: "先把作息拉回来，睡够再说", scores: { regulate: 1 } },
      { id: "B", label: "硬撑着把事做完", scores: { regulate: -1, react: 1 } },
      { id: "C", label: "找人聊聊，或者去干点体力活", scores: { regulate: 1 } },
      { id: "D", label: "放任着，等它自己好", scores: { regulate: -1 } },
    ],
  },
  {
    id: "em10", dim: "emotion", subDim: "react", kind: "sjt", discrimination: 0.75, screener: true,
    text: "一件大事临时改期，你之前的准备全白做。",
    options: [
      { id: "A", label: "确认新时间，重新排一遍", scores: { react: -1 } },
      { id: "B", label: "当场语气就变了", scores: { react: 1 } },
      { id: "C", label: "心里骂了很久，事一点没动", scores: { react: 1, ruminate: 1 } },
      { id: "D", label: "把还能用的留下，其余放掉", scores: { react: -1 } },
    ],
  },
  {
    id: "em11", dim: "emotion", subDim: "recover", kind: "sjt", discrimination: 0.8, screener: false,
    text: "一个准备了很久的机会，最后给了别人。",
    options: [
      { id: "A", label: "失落几天，然后继续做手上的事", scores: { recover: 1 } },
      { id: "B", label: "很久不想再争这类机会", scores: { recover: -1 } },
      { id: "C", label: "去问清楚自己差在哪", scores: { recover: 1 } },
      { id: "D", label: "反复想是不是哪里得罪了人", scores: { recover: -1, ruminate: 1 } },
    ],
  },
  {
    id: "em12", dim: "emotion", subDim: "ruminate", kind: "sjt", discrimination: 0.8, screener: false,
    text: "朋友丢下一句「你自己想想吧」，就没再说。",
    options: [
      { id: "A", label: "直接问他到底指什么", scores: { ruminate: -1 } },
      { id: "B", label: "把最近的事一件件过一遍", scores: { ruminate: 1 } },
      { id: "C", label: "想了一晚上，越想越糟", scores: { ruminate: 1 } },
      { id: "D", label: "先放着，等他自己说", scores: { ruminate: -1 } },
    ],
  },
  {
    id: "em13", dim: "emotion", subDim: "regulate", kind: "sjt", discrimination: 0.8, screener: false,
    text: "一件小事让你一整天都不太对劲。",
    options: [
      { id: "A", label: "找点具体的事做，把注意力挪开", scores: { regulate: 1 } },
      { id: "B", label: "跟人反复讲这件事", scores: { regulate: -1 } },
      { id: "C", label: "关起门自己扛，谁也不说", scores: { regulate: -1 } },
      { id: "D", label: "该干嘛干嘛，不太受影响", scores: { regulate: 1 } },
    ],
  },
  {
    id: "em14", dim: "emotion", subDim: "react", kind: "sjt", discrimination: 0.8, screener: false,
    text: "手上的事已经排满，又被临时加了一件。",
    options: [
      { id: "A", label: "说清自己排不开，让他找别人", scores: { react: -1 } },
      { id: "B", label: "接下来，然后一直拖着", scores: { react: 1 } },
      { id: "C", label: "接下来，加班硬做", scores: { react: 1 } },
      { id: "D", label: "重排一遍，砍掉一件不重要的", scores: { react: -1, regulate: 1 } },
    ],
  },
  {
    id: "em15", dim: "emotion", subDim: "recover", kind: "sjt", discrimination: 0.75, screener: false,
    text: "你因为一个失误被通报批评。",
    options: [
      { id: "A", label: "认了，接着把流程补上", scores: { recover: 1 } },
      { id: "B", label: "之后做事特别小心，反复检查", scores: { recover: -1 } },
      { id: "C", label: "好几天见人都不太想说话", scores: { recover: -1 } },
      { id: "D", label: "该解释的解释清，然后翻篇", scores: { recover: 1 } },
    ],
  },
  {
    id: "em16", dim: "emotion", subDim: "ruminate", kind: "sjt", discrimination: 0.75, screener: false,
    text: "半夜醒来，脑子里开始过白天的事。",
    options: [
      { id: "A", label: "起来喝口水，接着睡", scores: { ruminate: -1 } },
      { id: "B", label: "躺着一件件想，越想越清醒", scores: { ruminate: 1 } },
      { id: "C", label: "把想到的记下来，明天再说", scores: { ruminate: -1 } },
      { id: "D", label: "开始想很久以前的尴尬事", scores: { ruminate: 1 } },
    ],
  },
  {
    id: "em17", dim: "emotion", subDim: "regulate", kind: "sjt", discrimination: 0.7, screener: false,
    text: "刚收到一条让你火大的消息。",
    options: [
      { id: "A", label: "先不回，等半小时再说", scores: { regulate: 1 } },
      { id: "B", label: "立刻回，把话说狠", scores: { regulate: -1 } },
      { id: "C", label: "找个人先念一遍", scores: { regulate: 1 } },
      { id: "D", label: "删掉不回，自己憋着", scores: { regulate: -1 } },
    ],
  },
  {
    id: "em18", dim: "emotion", subDim: "react", kind: "sjt", discrimination: 0.7, screener: false,
    text: "项目出了大问题，所有人都在等你说下一步。",
    options: [
      { id: "A", label: "稳住场面，把要做的事分下去", scores: { react: -1 } },
      { id: "B", label: "脑子一片空白，说不出话", scores: { react: 1 } },
      { id: "C", label: "先发火，追责", scores: { react: 1 } },
      { id: "D", label: "拉几个人关起门理一遍", scores: { react: -1, regulate: 1 } },
    ],
  },
  {
    id: "em19", dim: "emotion", subDim: "recover", kind: "sjt", discrimination: 0.7, screener: false,
    text: "你跟一个重要的人闹僵了。",
    options: [
      { id: "A", label: "过两天主动找他讲开", scores: { recover: 1 } },
      { id: "B", label: "等对方先开口，一直僵着", scores: { recover: -1 } },
      { id: "C", label: "难过，但照常过日子", scores: { recover: 1 } },
      { id: "D", label: "反复回想到底哪一步做错了", scores: { recover: -1, ruminate: 1 } },
    ],
  },
  {
    id: "em20", dim: "emotion", subDim: "ruminate", kind: "sjt", discrimination: 0.7, screener: false,
    text: "你做了个决定，事后不太确定对不对。",
    options: [
      { id: "A", label: "按决定的做，看结果再说", scores: { ruminate: -1 } },
      { id: "B", label: "反复比较另一个选项会怎样", scores: { ruminate: 1 } },
      { id: "C", label: "找人问了一遍又一遍", scores: { ruminate: 1 } },
      { id: "D", label: "把当时的理由写下来，以后不再翻", scores: { ruminate: -1 } },
    ],
  },
];
