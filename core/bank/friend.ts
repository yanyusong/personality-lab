import type { Item } from "../adaptive";

// 朋友与社交边界维度题库：10 道筛查 + 10 道追问，覆盖 energy/refuse/distance/invest
export const FRIEND_ITEMS: Item[] = [
  {
    id: "fr01", dim: "friend", subDim: "energy", kind: "sjt", discrimination: 0.9, screener: true,
    text: "连着三个晚上都有局。",
    options: [
      { id: "A", label: "第三天推掉，留一晚在家", scores: { energy: 1, refuse: 1 } },
      { id: "B", label: "都去，不去不好意思", scores: { energy: -1 } },
      { id: "C", label: "去，但早点走", scores: { energy: 1 } },
      { id: "D", label: "硬撑到最后，回家倒头就睡", scores: { energy: -1 } },
    ],
  },
  {
    id: "fr02", dim: "friend", subDim: "refuse", kind: "sjt", discrimination: 0.9, screener: true,
    text: "朋友临时叫你今晚出来，你只想躺着。",
    options: [
      { id: "A", label: "直接说今天不想动，改天", scores: { refuse: 1 } },
      { id: "B", label: "还是去了", scores: { refuse: -1 } },
      { id: "C", label: "编个理由推掉", scores: { refuse: -1 } },
      { id: "D", label: "说清状态，约下周", scores: { refuse: 1 } },
    ],
  },
  {
    id: "fr03", dim: "friend", subDim: "distance", kind: "sjt", discrimination: 0.85, screener: true,
    text: "一个认识不久的朋友开始每天给你发消息。",
    options: [
      { id: "A", label: "按自己的节奏回", scores: { distance: 1 } },
      { id: "B", label: "每条都秒回，怕冷落他", scores: { distance: -1 } },
      { id: "C", label: "直接说我不太习惯天天聊", scores: { distance: 1 } },
      { id: "D", label: "慢慢拖长回复时间", scores: { distance: -1 } },
    ],
  },
  {
    id: "fr04", dim: "friend", subDim: "invest", kind: "sjt", discrimination: 0.85, screener: true,
    text: "一个以前很熟的朋友，已经半年没联系了。",
    options: [
      { id: "A", label: "主动发消息约一次", scores: { invest: 1 } },
      { id: "B", label: "等他先联系", scores: { invest: -1 } },
      { id: "C", label: "朋友圈点个赞算打过招呼", scores: { invest: -1 } },
      { id: "D", label: "记着这个人，过节问候一句", scores: { invest: 1 } },
    ],
  },
  {
    id: "fr05", dim: "friend", subDim: "energy", kind: "sjt", discrimination: 0.8, screener: true,
    text: "一整天会议加聚餐，到家已经十点。",
    options: [
      { id: "A", label: "留半小时自己待着再睡", scores: { energy: 1 } },
      { id: "B", label: "瘫着刷手机到凌晨", scores: { energy: -1 } },
      { id: "C", label: "第二天主动推掉安排", scores: { energy: 1 } },
      { id: "D", label: "觉得还行，接着回消息", scores: { energy: -1 } },
    ],
  },
  {
    id: "fr06", dim: "friend", subDim: "refuse", kind: "sjt", discrimination: 0.85, screener: true,
    text: "朋友要借一笔不小的钱，你不太想借。",
    options: [
      { id: "A", label: "直接说不方便", scores: { refuse: 1 } },
      { id: "B", label: "借了，心里不踏实", scores: { refuse: -1 } },
      { id: "C", label: "说清原则，换个方式帮", scores: { refuse: 1 } },
      { id: "D", label: "拖着不回复", scores: { refuse: -1 } },
    ],
  },
  {
    id: "fr07", dim: "friend", subDim: "distance", kind: "sjt", discrimination: 0.85, screener: true,
    text: "朋友提出想搬来和你合租。",
    options: [
      { id: "A", label: "先说清各自的习惯和底线", scores: { distance: 1 } },
      { id: "B", label: "答应，关系好没问题", scores: { distance: -1 } },
      { id: "C", label: "婉拒，说想留自己的空间", scores: { distance: 1 } },
      { id: "D", label: "答应，但担心以后不好说", scores: { distance: -1 } },
    ],
  },
  {
    id: "fr08", dim: "friend", subDim: "invest", kind: "sjt", discrimination: 0.8, screener: true,
    text: "朋友遇到事，半夜给你打电话。",
    options: [
      { id: "A", label: "接，听他说完", scores: { invest: 1 } },
      { id: "B", label: "静音，第二天再回", scores: { invest: -1 } },
      { id: "C", label: "接，也说清自己明天要早起", scores: { invest: 1 } },
      { id: "D", label: "让他先发消息说说什么事", scores: { invest: -1 } },
    ],
  },
  {
    id: "fr09", dim: "friend", subDim: "energy", kind: "sjt", discrimination: 0.8, screener: true,
    text: "同一个周末，两拨朋友都约你。",
    options: [
      { id: "A", label: "只选一场，另一场改期", scores: { energy: 1 } },
      { id: "B", label: "两边都赶，来回跑", scores: { energy: -1 } },
      { id: "C", label: "看哪边更需要我，再定", scores: { energy: 1 } },
      { id: "D", label: "都答应，到时候看状态", scores: { energy: -1 } },
    ],
  },
  {
    id: "fr10", dim: "friend", subDim: "refuse", kind: "sjt", discrimination: 0.85, screener: true,
    text: "朋友总在最后一刻改约，这次又改了。",
    options: [
      { id: "A", label: "直接说这样我很不方便", scores: { refuse: 1 } },
      { id: "B", label: "说没事，心里不舒服", scores: { refuse: -1 } },
      { id: "C", label: "说这次不行，下次提前定", scores: { refuse: 1 } },
      { id: "D", label: "算了，反正也没别的事", scores: { refuse: -1 } },
    ],
  },
  {
    id: "fr11", dim: "friend", subDim: "distance", kind: "sjt", discrimination: 0.8, screener: false,
    text: "朋友开始跟你讲他婚姻里的细节。",
    options: [
      { id: "A", label: "听着，也说说自己的看法", scores: { distance: 1 } },
      { id: "B", label: "有点不适，但不好意思打断", scores: { distance: -1 } },
      { id: "C", label: "说这个我不太方便听", scores: { distance: 1 } },
      { id: "D", label: "之后找机会避开这类话题", scores: { distance: -1 } },
    ],
  },
  {
    id: "fr12", dim: "friend", subDim: "invest", kind: "sjt", discrimination: 0.8, screener: false,
    text: "你搬家，需要有人搭把手。",
    options: [
      { id: "A", label: "直接开口找朋友", scores: { invest: 1 } },
      { id: "B", label: "花钱请人，不想麻烦别人", scores: { invest: -1 } },
      { id: "C", label: "问了两个，来不来都行", scores: { invest: 1 } },
      { id: "D", label: "一个人慢慢搬", scores: { invest: -1 } },
    ],
  },
  {
    id: "fr13", dim: "friend", subDim: "energy", kind: "sjt", discrimination: 0.8, screener: false,
    text: "聚会里你通常是那个把气氛带起来的人。",
    options: [
      { id: "A", label: "愿意，也会提前说好自己早走", scores: { energy: 1 } },
      { id: "B", label: "一直撑到最后，回家两天缓不过来", scores: { energy: -1 } },
      { id: "C", label: "更愿意在旁边接话，不当中心", scores: { energy: 1 } },
      { id: "D", label: "不想当，但每次都被推上去", scores: { energy: -1 } },
    ],
  },
  {
    id: "fr14", dim: "friend", subDim: "refuse", kind: "sjt", discrimination: 0.85, screener: false,
    text: "朋友让你帮忙介绍工作，你觉得他不合适。",
    options: [
      { id: "A", label: "直接说不合适，讲清原因", scores: { refuse: 1 } },
      { id: "B", label: "答应试试，然后拖着", scores: { refuse: -1 } },
      { id: "C", label: "帮改简历，推荐就不做了", scores: { refuse: 1 } },
      { id: "D", label: "硬着头皮推给同事", scores: { refuse: -1 } },
    ],
  },
  {
    id: "fr15", dim: "friend", subDim: "distance", kind: "sjt", discrimination: 0.8, screener: false,
    text: "朋友想让你当他孩子的干爹或干妈。",
    options: [
      { id: "A", label: "答应，但说清自己能做多少", scores: { distance: 1 } },
      { id: "B", label: "当场答应，觉得是好事", scores: { distance: -1 } },
      { id: "C", label: "婉拒，说自己不太会带孩子", scores: { distance: 1 } },
      { id: "D", label: "答应，之后尽量躲", scores: { distance: -1 } },
    ],
  },
  {
    id: "fr16", dim: "friend", subDim: "invest", kind: "sjt", discrimination: 0.75, screener: false,
    text: "一群人建的群，慢慢没人说话了。",
    options: [
      { id: "A", label: "偶尔发点东西，把话头递出去", scores: { invest: 1 } },
      { id: "B", label: "等着别人先开口", scores: { invest: -1 } },
      { id: "C", label: "私下约其中一两个见面", scores: { invest: 1 } },
      { id: "D", label: "群放着，也不看", scores: { invest: -1 } },
    ],
  },
  {
    id: "fr17", dim: "friend", subDim: "energy", kind: "sjt", discrimination: 0.8, screener: false,
    text: "连着社交几天之后，你会明显烦躁。",
    options: [
      { id: "A", label: "知道这个规律，提前留空档", scores: { energy: 1 } },
      { id: "B", label: "每次都硬撑到崩", scores: { energy: -1 } },
      { id: "C", label: "靠减少局的数量来控制", scores: { energy: 1 } },
      { id: "D", label: "觉得是自己不合群，逼自己多去", scores: { energy: -1 } },
    ],
  },
  {
    id: "fr18", dim: "friend", subDim: "refuse", kind: "sjt", discrimination: 0.85, screener: false,
    text: "朋友希望你每周固定一天陪他做一件事。",
    options: [
      { id: "A", label: "说做不到每周，但可以不定时约", scores: { refuse: 1 } },
      { id: "B", label: "答应了，之后常想请假", scores: { refuse: -1 } },
      { id: "C", label: "直接说这个频率我受不了", scores: { refuse: 1 } },
      { id: "D", label: "答应，然后经常临时有事", scores: { refuse: -1 } },
    ],
  },
  {
    id: "fr19", dim: "friend", subDim: "distance", kind: "sjt", discrimination: 0.8, screener: false,
    text: "朋友开始对你的选择给很多建议。",
    options: [
      { id: "A", label: "听完，说自己会考虑", scores: { distance: 1 } },
      { id: "B", label: "照他说的做，免得他不高兴", scores: { distance: -1 } },
      { id: "C", label: "直接说这个我自己定", scores: { distance: 1 } },
      { id: "D", label: "不争，之后少跟他说自己的事", scores: { distance: -1 } },
    ],
  },
  {
    id: "fr20", dim: "friend", subDim: "invest", kind: "sjt", discrimination: 0.8, screener: false,
    text: "一个朋友最近状态很差，但没主动找你。",
    options: [
      { id: "A", label: "主动问一句，约他出来", scores: { invest: 1 } },
      { id: "B", label: "等他自己说", scores: { invest: -1 } },
      { id: "C", label: "发条消息，让他知道有人在", scores: { invest: 1 } },
      { id: "D", label: "怕问多了打扰，就没提", scores: { invest: -1 } },
    ],
  },
];
