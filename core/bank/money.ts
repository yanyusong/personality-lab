import type { Item } from "../adaptive";

// 金钱观维度题库：10 道筛查 + 10 道追问，覆盖 spend/save/risk/safety
export const MONEY_ITEMS: Item[] = [
  {
    id: "mo01", dim: "money", subDim: "spend", kind: "sjt", discrimination: 0.9, screener: true,
    text: "发工资那天，你打开了购物软件。",
    options: [
      { id: "A", label: "先把要买的列出来，买完就关", scores: { spend: 1 } },
      { id: "B", label: "逛到哪算哪，喜欢的先加购物车", scores: { spend: -1 } },
      { id: "C", label: "先还信用卡、转一笔去存，再花剩下的", scores: { spend: 1, save: 1 } },
      { id: "D", label: "看到打折就下单，反正以后用得上", scores: { spend: -1 } },
    ],
  },
  {
    id: "mo02", dim: "money", subDim: "save", kind: "sjt", discrimination: 0.85, screener: true,
    text: "这个月的收入比平时多出一笔。",
    options: [
      { id: "A", label: "大部分转进另一个账户，不动它", scores: { save: 1 } },
      { id: "B", label: "补上之前想买没舍得买的", scores: { save: -1 } },
      { id: "C", label: "先放着，过一阵再看要不要用", scores: { save: 1 } },
      { id: "D", label: "当月就花完了，也想不起买了什么", scores: { save: -1 } },
    ],
  },
  {
    id: "mo03", dim: "money", subDim: "risk", kind: "sjt", discrimination: 0.85, screener: true,
    text: "朋友说有个机会，半年可能翻倍，也可能全归零。",
    options: [
      { id: "A", label: "听完就算了，这种钱我赚不到", scores: { risk: 1 } },
      { id: "B", label: "拿一笔亏了会心疼的钱进去", scores: { risk: -1 } },
      { id: "C", label: "先弄清楚它到底是什么，再决定", scores: { risk: 1 } },
      { id: "D", label: "身边人都赚了，先跟一点", scores: { risk: -1 } },
    ],
  },
  {
    id: "mo04", dim: "money", subDim: "safety", kind: "sjt", discrimination: 0.85, screener: true,
    text: "离发工资还有十天，卡里剩的钱不多了。",
    options: [
      { id: "A", label: "算一下够不够，然后按计划花", scores: { safety: 1 } },
      { id: "B", label: "每天查好几次余额，睡得不太好", scores: { safety: -1 } },
      { id: "C", label: "该花的花，不够就先借一点", scores: { safety: 1 } },
      { id: "D", label: "一想到就烦，索性不看余额", scores: { safety: -1 } },
    ],
  },
  {
    id: "mo05", dim: "money", subDim: "spend", kind: "sjt", discrimination: 0.8, screener: true,
    text: "心情很差的一个晚上，你一个人在外面。",
    options: [
      { id: "A", label: "买了件不算便宜的东西", scores: { spend: -1 } },
      { id: "B", label: "点了顿贵的，吃完好受一点", scores: { spend: -1 } },
      { id: "C", label: "忍住没买，第二天再看还想不想要", scores: { spend: 1 } },
      { id: "D", label: "找朋友聊了会儿，没花钱", scores: { spend: 1 } },
    ],
  },
  {
    id: "mo06", dim: "money", subDim: "save", kind: "sjt", discrimination: 0.8, screener: true,
    text: "你现在的存款大概能撑几个月。",
    options: [
      { id: "A", label: "有明确的数，至少半年", scores: { save: 1 } },
      { id: "B", label: "没算过，基本上月光", scores: { save: -1 } },
      { id: "C", label: "有一点，一直放着没动", scores: { save: 1 } },
      { id: "D", label: "有多少花多少，存不下来", scores: { save: -1 } },
    ],
  },
  {
    id: "mo07", dim: "money", subDim: "risk", kind: "sjt", discrimination: 0.8, screener: true,
    text: "你手上有一笔钱，三年内用不到。",
    options: [
      { id: "A", label: "放在能随时取的地方，利息少点没关系", scores: { risk: 1 } },
      { id: "B", label: "大部分买了波动很大的东西", scores: { risk: -1 } },
      { id: "C", label: "分几份，稳的和搏的各放一点", scores: { risk: 1 } },
      { id: "D", label: "最近什么涨得好就买什么", scores: { risk: -1 } },
    ],
  },
  {
    id: "mo08", dim: "money", subDim: "safety", kind: "sjt", discrimination: 0.8, screener: true,
    text: "公司里传出要裁员的说法。",
    options: [
      { id: "A", label: "先算清自己有几个月的缓冲", scores: { safety: 1 } },
      { id: "B", label: "那几天一直睡不好，反复想最坏的情况", scores: { safety: -1 } },
      { id: "C", label: "该做什么做什么，真到那天再说", scores: { safety: 1 } },
      { id: "D", label: "开始频繁刷招聘，心一直悬着", scores: { safety: -1 } },
    ],
  },
  {
    id: "mo09", dim: "money", subDim: "risk", kind: "sjt", discrimination: 0.75, screener: true,
    text: "一次聚餐，桌上有人在聊某只股票。",
    options: [
      { id: "A", label: "只听，不参与", scores: { risk: 1 } },
      { id: "B", label: "回去就开了户", scores: { risk: -1 } },
      { id: "C", label: "问了几句，但没动钱", scores: { risk: 1 } },
      { id: "D", label: "跟着买了一点，怕错过", scores: { risk: -1 } },
    ],
  },
  {
    id: "mo10", dim: "money", subDim: "save", kind: "sjt", discrimination: 0.75, screener: true,
    text: "手机突然坏了，得换一台。",
    options: [
      { id: "A", label: "从平时留的那笔钱里出，不影响别的", scores: { save: 1 } },
      { id: "B", label: "刷信用卡，下个月再说", scores: { save: -1 } },
      { id: "C", label: "找家里人先垫上", scores: { save: -1 } },
      { id: "D", label: "这个月少花点，把它补回来", scores: { save: 1 } },
    ],
  },
  {
    id: "mo11", dim: "money", subDim: "spend", kind: "sjt", discrimination: 0.85, screener: false,
    text: "商场里一件大衣，试了很好看，价格是你半个月的结余。",
    options: [
      { id: "A", label: "放回去，回去想两天再说", scores: { spend: 1 } },
      { id: "B", label: "直接买，喜欢最重要", scores: { spend: -1 } },
      { id: "C", label: "先找找有没有更便宜的类似款", scores: { spend: 1 } },
      { id: "D", label: "买下来，这个月省着点过", scores: { spend: -1 } },
    ],
  },
  {
    id: "mo12", dim: "money", subDim: "save", kind: "sjt", discrimination: 0.8, screener: false,
    text: "朋友约你一起做一件事，需要先垫一笔钱。",
    options: [
      { id: "A", label: "先算这笔钱动了会不会影响自己的底", scores: { save: 1 } },
      { id: "B", label: "有多少出多少，朋友的事要紧", scores: { save: -1 } },
      { id: "C", label: "说清自己只能出一部分", scores: { save: 1 } },
      { id: "D", label: "刷卡先垫上，之后再说", scores: { save: -1 } },
    ],
  },
  {
    id: "mo13", dim: "money", subDim: "risk", kind: "sjt", discrimination: 0.85, screener: false,
    text: "你买的东西跌了两成。",
    options: [
      { id: "A", label: "再看一遍当初为什么买，没变就拿着", scores: { risk: 1 } },
      { id: "B", label: "赶紧卖掉，怕再跌", scores: { risk: -1 } },
      { id: "C", label: "又加了一些，想摊低成本", scores: { risk: -1 } },
      { id: "D", label: "停一段时间不看，按原计划继续", scores: { risk: 1 } },
    ],
  },
  {
    id: "mo14", dim: "money", subDim: "safety", kind: "sjt", discrimination: 0.8, screener: false,
    text: "你算了一下，如果三个月没有收入。",
    options: [
      { id: "A", label: "心里有数，能撑住", scores: { safety: 1 } },
      { id: "B", label: "一想到就发紧，不敢细算", scores: { safety: -1 } },
      { id: "C", label: "知道紧，会先列一下要砍的开支", scores: { safety: 1 } },
      { id: "D", label: "觉得天要塌了，反复想这件事", scores: { safety: -1 } },
    ],
  },
  {
    id: "mo15", dim: "money", subDim: "spend", kind: "sjt", discrimination: 0.8, screener: false,
    text: "网购下单前的那几分钟。",
    options: [
      { id: "A", label: "看一眼总价，把凑单的去掉", scores: { spend: 1 } },
      { id: "B", label: "为了满减又多买了两样", scores: { spend: -1 } },
      { id: "C", label: "想起家里还有类似的，就删了", scores: { spend: 1 } },
      { id: "D", label: "点了「先用后付」，感觉没花钱", scores: { spend: -1 } },
    ],
  },
  {
    id: "mo16", dim: "money", subDim: "save", kind: "sjt", discrimination: 0.8, screener: false,
    text: "每年到年底，你的账户大致是什么状态。",
    options: [
      { id: "A", label: "比年初多了一些，虽然不多", scores: { save: 1 } },
      { id: "B", label: "和年初差不多，来去都花掉了", scores: { save: -1 } },
      { id: "C", label: "有一笔专门留着不动的钱", scores: { save: 1 } },
      { id: "D", label: "年底还要还上一年欠的账", scores: { save: -1 } },
    ],
  },
  {
    id: "mo17", dim: "money", subDim: "risk", kind: "sjt", discrimination: 0.8, screener: false,
    text: "有人劝你把大部分积蓄投进一个「稳赚」的项目。",
    options: [
      { id: "A", label: "不投，「稳赚」这两个字就不对", scores: { risk: 1 } },
      { id: "B", label: "投一点，试试看", scores: { risk: -1 } },
      { id: "C", label: "让对方把合同和资质拿出来看", scores: { risk: 1 } },
      { id: "D", label: "关系好，先投了再说", scores: { risk: -1 } },
    ],
  },
  {
    id: "mo18", dim: "money", subDim: "safety", kind: "sjt", discrimination: 0.8, screener: false,
    text: "身边有人收入比你高很多。",
    options: [
      { id: "A", label: "羡慕一下，然后过自己的", scores: { safety: 1 } },
      { id: "B", label: "反复算自己差在哪，心里不舒服", scores: { safety: -1 } },
      { id: "C", label: "觉得自己的节奏也还行", scores: { safety: 1 } },
      { id: "D", label: "一比较就觉得自己很失败", scores: { safety: -1 } },
    ],
  },
  {
    id: "mo19", dim: "money", subDim: "safety", kind: "sjt", discrimination: 0.75, screener: false,
    text: "花完钱之后，你通常会。",
    options: [
      { id: "A", label: "记一下大概花在哪，心里有数", scores: { safety: 1, spend: 1 } },
      { id: "B", label: "不太敢回头看账单", scores: { safety: -1 } },
      { id: "C", label: "花完就忘，也不去查", scores: { safety: -1 } },
      { id: "D", label: "知道自己花了多少，不太纠结", scores: { safety: 1 } },
    ],
  },
  {
    id: "mo20", dim: "money", subDim: "save", kind: "sjt", discrimination: 0.75, screener: false,
    text: "你怎么看「存钱」这件事。",
    options: [
      { id: "A", label: "每个月先转一笔，剩下的才花", scores: { save: 1 } },
      { id: "B", label: "觉得存着也在贬值，不如花掉", scores: { save: -1 } },
      { id: "C", label: "想存，但总被别的事挤掉", scores: { save: -1 } },
      { id: "D", label: "留一笔应急的钱，雷打不动", scores: { save: 1 } },
    ],
  },
];
