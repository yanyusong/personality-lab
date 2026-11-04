import type { Item } from "../adaptive";

// 时间与精力维度题库：10 道筛查 + 10 道追问，覆盖 rhythm/focus/delay/restore
export const TIME_ITEMS: Item[] = [
  {
    id: "ti01", dim: "time", subDim: "delay", kind: "sjt", discrimination: 0.9, screener: true,
    text: "晚上十一点，明天要交的东西还只写了个开头。",
    options: [
      { id: "A", label: "关掉手机，先写二十分钟再说", scores: { delay: -1 } },
      { id: "B", label: "先把桌子收拾干净，泡杯茶，再开始", scores: { delay: 1 } },
      { id: "C", label: "定个六点的闹钟，先睡，早上起来写", scores: { delay: -1 } },
      { id: "D", label: "打开文档，一边刷手机一边找状态", scores: { delay: 1, focus: -1 } },
    ],
  },
  {
    id: "ti02", dim: "time", subDim: "rhythm", kind: "sjt", discrimination: 0.85, screener: true,
    text: "上午九点半，今天最难的那件事正等着你。",
    options: [
      { id: "A", label: "趁上午脑子清楚，先啃它", scores: { rhythm: 1 } },
      { id: "B", label: "先回消息、开短会，把难的挪到下午", scores: { rhythm: -1 } },
      { id: "C", label: "上午做杂事，硬活留到晚上", scores: { rhythm: -1 } },
      { id: "D", label: "先试十分钟，做不动就换个时间", scores: { rhythm: 1 } },
    ],
  },
  {
    id: "ti03", dim: "time", subDim: "focus", kind: "sjt", discrimination: 0.85, screener: true,
    text: "写方案写到一半，同事过来问了件五分钟就能说清的事。",
    options: [
      { id: "A", label: "答完立刻回到刚才那一段", scores: { focus: 1 } },
      { id: "B", label: "答完顺手看了下群，回来找不到思路了", scores: { focus: -1 } },
      { id: "C", label: "答完干脆聊了十几分钟，回来从头开始", scores: { focus: -1 } },
      { id: "D", label: "先记下停在哪一句，答完按笔记接上", scores: { focus: 1 } },
    ],
  },
  {
    id: "ti04", dim: "time", subDim: "restore", kind: "sjt", discrimination: 0.8, screener: true,
    text: "连着上了六天班，周日一整天是你自己的。",
    options: [
      { id: "A", label: "睡到中午，剩下的时间躺着刷手机", scores: { restore: -1 } },
      { id: "B", label: "出门走一走，或者去游个泳", scores: { restore: 1 } },
      { id: "C", label: "约朋友吃饭，聊到晚上", scores: { restore: 1 } },
      { id: "D", label: "补个觉，然后把下周的事理一遍", scores: { restore: -1 } },
    ],
  },
  {
    id: "ti05", dim: "time", subDim: "delay", kind: "sjt", discrimination: 0.85, screener: true,
    text: "一份报销单，填起来只要十五分钟，已经拖了两周。",
    options: [
      { id: "A", label: "现在就填，十五分钟的事", scores: { delay: -1 } },
      { id: "B", label: "攒着，等下次一起弄", scores: { delay: 1 } },
      { id: "C", label: "打开系统看了一眼流程，又关掉了", scores: { delay: 1 } },
      { id: "D", label: "找一段完整时间坐下，一次填完", scores: { delay: -1 } },
    ],
  },
  {
    id: "ti06", dim: "time", subDim: "rhythm", kind: "sjt", discrimination: 0.8, screener: true,
    text: "你要安排一件需要连续三小时不被打断的活。",
    options: [
      { id: "A", label: "放在自己最清醒的时段，提前把会推掉", scores: { rhythm: 1 } },
      { id: "B", label: "哪段空就放哪段，能做多少做多少", scores: { rhythm: -1 } },
      { id: "C", label: "等晚上十点以后，没人找你的时候", scores: { rhythm: 1 } },
      { id: "D", label: "一直排不上，只能见缝插针地做", scores: { rhythm: -1 } },
    ],
  },
  {
    id: "ti07", dim: "time", subDim: "restore", kind: "sjt", discrimination: 0.8, screener: true,
    text: "周五晚上，一周的事刚收尾，你明显感觉人被掏空了。",
    options: [
      { id: "A", label: "一个人待着，不看任何工作消息", scores: { restore: 1 } },
      { id: "B", label: "出去吃顿好的，热闹一晚", scores: { restore: 1 } },
      { id: "C", label: "先把没做完的收完尾，收完才踏实", scores: { restore: -1 } },
      { id: "D", label: "躺着刷短视频，一下刷到凌晨两点", scores: { restore: -1 } },
    ],
  },
  {
    id: "ti08", dim: "time", subDim: "focus", kind: "sjt", discrimination: 0.85, screener: true,
    text: "手机在桌上震了一下，你正在做需要想清楚的事。",
    options: [
      { id: "A", label: "不看，把这一段做完再说", scores: { focus: 1 } },
      { id: "B", label: "看一眼，然后接着做", scores: { focus: -1 } },
      { id: "C", label: "拿起来回完，再顺手刷两条", scores: { focus: -1 } },
      { id: "D", label: "把手机翻面，放到另一个房间", scores: { focus: 1 } },
    ],
  },
  {
    id: "ti09", dim: "time", subDim: "delay", kind: "sjt", discrimination: 0.85, screener: true,
    text: "下周要做一次汇报，材料还没开始动。",
    options: [
      { id: "A", label: "今天先列个提纲，剩下的慢慢填", scores: { delay: -1 } },
      { id: "B", label: "等有灵感了再写", scores: { delay: 1 } },
      { id: "C", label: "先把模板和旧材料翻出来，摊在桌上", scores: { delay: 1 } },
      { id: "D", label: "定好每天写一页，按天推进", scores: { delay: -1 } },
    ],
  },
  {
    id: "ti10", dim: "time", subDim: "rhythm", kind: "sjt", discrimination: 0.75, screener: true,
    text: "有人问你「你一天里什么时候效率最高」。",
    options: [
      { id: "A", label: "能说清具体时段，也照着这个排事", scores: { rhythm: 1 } },
      { id: "B", label: "感觉都差不多，没太注意过", scores: { rhythm: -1 } },
      { id: "C", label: "只有截止日期前一天最高", scores: { rhythm: -1 } },
      { id: "D", label: "早上和深夜各有一段，中间是低谷", scores: { rhythm: 1 } },
    ],
  },
  {
    id: "ti11", dim: "time", subDim: "delay", kind: "sjt", discrimination: 0.9, screener: false,
    text: "一件事你很清楚该做，但一想到它就觉得沉。",
    options: [
      { id: "A", label: "先做最小的那一步，比如把文件打开", scores: { delay: -1 } },
      { id: "B", label: "先做别的，把它往后排", scores: { delay: 1 } },
      { id: "C", label: "在心里反复想它有多麻烦", scores: { delay: 1 } },
      { id: "D", label: "找人一起做，或者约个时间当面弄", scores: { delay: -1 } },
    ],
  },
  {
    id: "ti12", dim: "time", subDim: "rhythm", kind: "sjt", discrimination: 0.8, screener: false,
    text: "连续几天熬夜之后，你的白天变成了什么样。",
    options: [
      { id: "A", label: "上午基本废掉，靠下午和晚上补", scores: { rhythm: -1 } },
      { id: "B", label: "知道在欠债，会主动早睡两天调回来", scores: { rhythm: 1 } },
      { id: "C", label: "靠咖啡硬撑，作息完全乱掉", scores: { rhythm: -1 } },
      { id: "D", label: "干脆改成晚睡晚起，按自己的点走", scores: { rhythm: 1 } },
    ],
  },
  {
    id: "ti13", dim: "time", subDim: "focus", kind: "sjt", discrimination: 0.85, screener: false,
    text: "一个上午被会议切成三段，每段只有四十分钟。",
    options: [
      { id: "A", label: "每段挑一件四十分钟能做完的事", scores: { focus: 1 } },
      { id: "B", label: "每段都要重新进入状态，实际没做成什么", scores: { focus: -1 } },
      { id: "C", label: "中间干脆不做了，等下午的整块时间", scores: { focus: -1 } },
      { id: "D", label: "用前五分钟把上次停下的地方捡起来", scores: { focus: 1 } },
    ],
  },
  {
    id: "ti14", dim: "time", subDim: "delay", kind: "sjt", discrimination: 0.85, screener: false,
    text: "你打开要做的那件事，五分钟后已经在看别的页面。",
    options: [
      { id: "A", label: "关掉别的页面，把这件事做满二十分钟", scores: { delay: -1 } },
      { id: "B", label: "就这样切来切去，一上午过去了", scores: { delay: 1 } },
      { id: "C", label: "承认今天做不进去，改做别的事", scores: { delay: 1 } },
      { id: "D", label: "换个地方，比如去咖啡馆或图书馆", scores: { delay: -1 } },
    ],
  },
  {
    id: "ti15", dim: "time", subDim: "restore", kind: "sjt", discrimination: 0.8, screener: false,
    text: "一个很累的周末，朋友临时约你出门。",
    options: [
      { id: "A", label: "去了，人多反而更累，回来更空", scores: { restore: -1 } },
      { id: "B", label: "不去，一个人待着才回得了血", scores: { restore: 1 } },
      { id: "C", label: "去了，但全程惦记着没做完的事", scores: { restore: -1 } },
      { id: "D", label: "推掉，在家做点吃的，早点睡", scores: { restore: 1 } },
    ],
  },
  {
    id: "ti16", dim: "time", subDim: "rhythm", kind: "sjt", discrimination: 0.8, screener: false,
    text: "你发现自己下午三点总是发困。",
    options: [
      { id: "A", label: "早就知道，那个点只安排不费脑的事", scores: { rhythm: 1 } },
      { id: "B", label: "硬撑，靠咖啡顶过去", scores: { rhythm: -1 } },
      { id: "C", label: "出去走十分钟，回来接着干", scores: { rhythm: 1 } },
      { id: "D", label: "没注意过这个规律，困了就困着", scores: { rhythm: -1 } },
    ],
  },
  {
    id: "ti17", dim: "time", subDim: "focus", kind: "sjt", discrimination: 0.8, screener: false,
    text: "你正专心，室友在旁边说话、走来走去。",
    options: [
      { id: "A", label: "戴上耳机，继续手上的事", scores: { focus: 1 } },
      { id: "B", label: "被打断后干脆停下来一起聊", scores: { focus: -1 } },
      { id: "C", label: "忍着，但一直在听他们在说什么", scores: { focus: -1 } },
      { id: "D", label: "换个房间，或者约好一个不被打扰的时段", scores: { focus: 1 } },
    ],
  },
  {
    id: "ti18", dim: "time", subDim: "delay", kind: "sjt", discrimination: 0.9, screener: false,
    text: "每次都要拖到最后一刻，你自己怎么看这件事。",
    options: [
      { id: "A", label: "知道是怕做不好，所以迟迟不开始", scores: { delay: 1 } },
      { id: "B", label: "靠截止日期的压力做得还行，就这样了", scores: { delay: 1 } },
      { id: "C", label: "会提前把最难的第一步做掉，后面就顺了", scores: { delay: -1 } },
      { id: "D", label: "已经摸出几个能让自己启动的办法", scores: { delay: -1 } },
    ],
  },
  {
    id: "ti19", dim: "time", subDim: "restore", kind: "sjt", discrimination: 0.8, screener: false,
    text: "一个真正让你缓过来的假期，通常是什么样。",
    options: [
      { id: "A", label: "什么都不安排，睡够、发呆", scores: { restore: 1 } },
      { id: "B", label: "换个城市，走很多路", scores: { restore: 1 } },
      { id: "C", label: "假期也在回工作消息", scores: { restore: -1 } },
      { id: "D", label: "玩得很满，回来比上班还累", scores: { restore: -1 } },
    ],
  },
  {
    id: "ti20", dim: "time", subDim: "focus", kind: "sjt", discrimination: 0.8, screener: false,
    text: "刚被打断，你回来面对原来那件事。",
    options: [
      { id: "A", label: "花一两分钟回想刚才想到哪", scores: { focus: 1 } },
      { id: "B", label: "从开头重读一遍", scores: { focus: -1 } },
      { id: "C", label: "干脆换一件事做", scores: { focus: -1 } },
      { id: "D", label: "平时会随手记进度，回来直接接上", scores: { focus: 1 } },
    ],
  },
];
