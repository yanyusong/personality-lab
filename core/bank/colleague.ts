import type { Item } from "../adaptive";

// 同事关系维度题库：10 道筛查 + 10 道追问，覆盖 trust/conflictStyle/share/boundaryC
export const COLLEAGUE_ITEMS: Item[] = [
  {
    id: "co01", dim: "colleague", subDim: "trust", kind: "sjt", discrimination: 0.9, screener: true,
    text: "新来的同事被安排坐在你旁边。",
    options: [
      { id: "A", label: "主动讲讲这边的坑和谁好说话", scores: { trust: 1 } },
      { id: "B", label: "客套两句，各自忙", scores: { trust: -1 } },
      { id: "C", label: "先看他做事的路子再说", scores: { trust: -1 } },
      { id: "D", label: "中午叫上他一起吃", scores: { trust: 1, share: 1 } },
    ],
  },
  {
    id: "co02", dim: "colleague", subDim: "conflictStyle", kind: "sjt", discrimination: 0.85, screener: true,
    text: "开会时同事当众否了你的方案，语气还有点冲。",
    options: [
      { id: "A", label: "当场把分歧摆开讲", scores: { conflictStyle: 1 } },
      { id: "B", label: "会后单独找他聊", scores: { conflictStyle: 1, trust: 1 } },
      { id: "C", label: "笑笑过去，心里记着", scores: { conflictStyle: -1 } },
      { id: "D", label: "不吭声，回去改方案", scores: { conflictStyle: -1 } },
    ],
  },
  {
    id: "co03", dim: "colleague", subDim: "share", kind: "sjt", discrimination: 0.85, screener: true,
    text: "你手上有一条会影响下周排期的消息。",
    options: [
      { id: "A", label: "马上在群里同步", scores: { share: 1 } },
      { id: "B", label: "等周会再说", scores: { share: -1 } },
      { id: "C", label: "先告诉关系近的两个", scores: { share: -1 } },
      { id: "D", label: "确认准了，统一发一次", scores: { share: 1 } },
    ],
  },
  {
    id: "co04", dim: "colleague", subDim: "boundaryC", kind: "sjt", discrimination: 0.9, screener: true,
    text: "同事第三次把不属于你的活推过来，说自己忙不过来。",
    options: [
      { id: "A", label: "这次接下来，下次再说", scores: { boundaryC: -1 } },
      { id: "B", label: "说手上排满了，让他找上级排优先级", scores: { boundaryC: 1 } },
      { id: "C", label: "帮他做一半", scores: { boundaryC: -1, trust: 1 } },
      { id: "D", label: "直接说这不在我职责里", scores: { boundaryC: 1 } },
    ],
  },
  {
    id: "co05", dim: "colleague", subDim: "trust", kind: "sjt", discrimination: 0.8, screener: true,
    text: "团建到后半场，大家开始聊各自的私事。",
    options: [
      { id: "A", label: "也跟着说点真的", scores: { trust: 1 } },
      { id: "B", label: "听着，不接自己的事", scores: { trust: -1 } },
      { id: "C", label: "把话题换回轻松的", scores: { trust: -1 } },
      { id: "D", label: "从工作以外的小事聊起", scores: { trust: 1 } },
    ],
  },
  {
    id: "co06", dim: "colleague", subDim: "conflictStyle", kind: "sjt", discrimination: 0.85, screener: true,
    text: "你发现同事的方案有个明显漏洞，他已经交给上级了。",
    options: [
      { id: "A", label: "立刻告诉他，让他去改", scores: { conflictStyle: 1 } },
      { id: "B", label: "委婉提一句，看他自己", scores: { conflictStyle: 1 } },
      { id: "C", label: "不说，等他被问住", scores: { conflictStyle: -1 } },
      { id: "D", label: "直接跟上级说这个漏洞", scores: { conflictStyle: -1, trust: -1 } },
    ],
  },
  {
    id: "co07", dim: "colleague", subDim: "share", kind: "sjt", discrimination: 0.8, screener: true,
    text: "你摸索出一套能省不少时间的做法。",
    options: [
      { id: "A", label: "整理一份发到组里", scores: { share: 1 } },
      { id: "B", label: "自己先用着", scores: { share: -1 } },
      { id: "C", label: "有人问才说", scores: { share: -1 } },
      { id: "D", label: "拉个小会讲一遍", scores: { share: 1 } },
    ],
  },
  {
    id: "co08", dim: "colleague", subDim: "boundaryC", kind: "sjt", discrimination: 0.85, screener: true,
    text: "快下班时同事说：这个能不能今晚帮我弄一下？",
    options: [
      { id: "A", label: "先问急到什么程度再定", scores: { boundaryC: 1 } },
      { id: "B", label: "答应，留下来做", scores: { boundaryC: -1 } },
      { id: "C", label: "说今晚有事，明早第一件事做", scores: { boundaryC: 1, trust: 1 } },
      { id: "D", label: "嘴上答应，回家没做", scores: { boundaryC: -1 } },
    ],
  },
  {
    id: "co09", dim: "colleague", subDim: "trust", kind: "sjt", discrimination: 0.8, screener: true,
    text: "你和同事一起背了一个项目的锅。",
    options: [
      { id: "A", label: "事后跟他说清自己的想法", scores: { trust: 1, conflictStyle: 1 } },
      { id: "B", label: "从此对他留个心眼", scores: { trust: -1 } },
      { id: "C", label: "一起吐槽上级，关系近了些", scores: { trust: 1 } },
      { id: "D", label: "各走各的，少接触", scores: { trust: -1 } },
    ],
  },
  {
    id: "co10", dim: "colleague", subDim: "conflictStyle", kind: "sjt", discrimination: 0.85, screener: true,
    text: "分工会上，同事把最难啃的部分推给你。",
    options: [
      { id: "A", label: "当场说这个分法不合理", scores: { conflictStyle: 1, boundaryC: 1 } },
      { id: "B", label: "接下来，回头再抱怨", scores: { conflictStyle: -1, boundaryC: -1 } },
      { id: "C", label: "私下找他重新分", scores: { conflictStyle: 1 } },
      { id: "D", label: "不说话，用别的方式让他知道", scores: { conflictStyle: -1 } },
    ],
  },
  {
    id: "co11", dim: "colleague", subDim: "share", kind: "sjt", discrimination: 0.8, screener: false,
    text: "你觉得项目方向可能有问题，但还没拿到证据。",
    options: [
      { id: "A", label: "先在小组里说一声自己的担心", scores: { share: 1 } },
      { id: "B", label: "等有证据再说", scores: { share: -1 } },
      { id: "C", label: "只跟直属上级提", scores: { share: -1 } },
      { id: "D", label: "边查边同步查到哪了", scores: { share: 1 } },
    ],
  },
  {
    id: "co12", dim: "colleague", subDim: "boundaryC", kind: "sjt", discrimination: 0.8, screener: false,
    text: "同事习惯性找你确认他自己就能定的小事。",
    options: [
      { id: "A", label: "这次答，下次提醒他自己定", scores: { boundaryC: 1 } },
      { id: "B", label: "每次都耐心答", scores: { boundaryC: -1 } },
      { id: "C", label: "说这块你定就行，不用问我", scores: { boundaryC: 1 } },
      { id: "D", label: "假装没看到消息", scores: { boundaryC: -1 } },
    ],
  },
  {
    id: "co13", dim: "colleague", subDim: "trust", kind: "sjt", discrimination: 0.75, screener: false,
    text: "一个同事在别人面前替你说了句话。",
    options: [
      { id: "A", label: "事后专门谢他，关系近一步", scores: { trust: 1 } },
      { id: "B", label: "客气谢过，不打算深交", scores: { trust: -1 } },
      { id: "C", label: "怀疑他是不是有事要你帮", scores: { trust: -1 } },
      { id: "D", label: "找机会还他一个人情", scores: { trust: 1 } },
    ],
  },
  {
    id: "co14", dim: "colleague", subDim: "conflictStyle", kind: "sjt", discrimination: 0.85, screener: false,
    text: "同事连续两次在截止前一天才说他的部分没做完。",
    options: [
      { id: "A", label: "直接说这样影响我，得改", scores: { conflictStyle: 1, boundaryC: 1 } },
      { id: "B", label: "自己加班补上，不说", scores: { conflictStyle: -1 } },
      { id: "C", label: "找上级反映", scores: { conflictStyle: -1 } },
      { id: "D", label: "语气缓一点，但把话说清", scores: { conflictStyle: 1 } },
    ],
  },
  {
    id: "co15", dim: "colleague", subDim: "share", kind: "sjt", discrimination: 0.75, screener: false,
    text: "你手上有个资源，同事的项目正好用得上。",
    options: [
      { id: "A", label: "主动告诉他", scores: { share: 1 } },
      { id: "B", label: "他开口再给", scores: { share: -1 } },
      { id: "C", label: "先说清怎么用，再给他", scores: { share: 1 } },
      { id: "D", label: "留着，怕他做得比我好", scores: { share: -1 } },
    ],
  },
  {
    id: "co16", dim: "colleague", subDim: "boundaryC", kind: "sjt", discrimination: 0.8, screener: false,
    text: "上级临时加活，同事在旁边说「你反正做得快」。",
    options: [
      { id: "A", label: "说快也是排满的，让他自己接", scores: { boundaryC: 1 } },
      { id: "B", label: "又接了", scores: { boundaryC: -1 } },
      { id: "C", label: "讲清我手上还有什么，让他定优先级", scores: { boundaryC: 1 } },
      { id: "D", label: "接下来，心里不痛快", scores: { boundaryC: -1 } },
    ],
  },
  {
    id: "co17", dim: "colleague", subDim: "trust", kind: "sjt", discrimination: 0.8, screener: false,
    text: "一起搭过两次项目的同事，请你周末去他家吃饭。",
    options: [
      { id: "A", label: "去，带点东西", scores: { trust: 1 } },
      { id: "B", label: "找个理由推掉", scores: { trust: -1 } },
      { id: "C", label: "去，但坐一会儿就走", scores: { trust: -1 } },
      { id: "D", label: "答应，也说清自己待不了太久", scores: { trust: 1, boundaryC: 1 } },
    ],
  },
  {
    id: "co18", dim: "colleague", subDim: "conflictStyle", kind: "sjt", discrimination: 0.85, screener: false,
    text: "复盘会上同事把责任推到你这边，其实不全是你的。",
    options: [
      { id: "A", label: "当场把事实顺序讲清", scores: { conflictStyle: 1 } },
      { id: "B", label: "认下来，会后再说", scores: { conflictStyle: -1 } },
      { id: "C", label: "会后再找他谈", scores: { conflictStyle: 1, trust: 1 } },
      { id: "D", label: "不解释，反正说不清", scores: { conflictStyle: -1 } },
    ],
  },
  {
    id: "co19", dim: "colleague", subDim: "share", kind: "sjt", discrimination: 0.75, screener: false,
    text: "你手上的进度落后了，但还来得及补。",
    options: [
      { id: "A", label: "主动说一声，给个新时间", scores: { share: 1 } },
      { id: "B", label: "拖到交付日再说", scores: { share: -1 } },
      { id: "C", label: "悄悄加班补上，不提", scores: { share: -1 } },
      { id: "D", label: "说清卡在哪，请人搭把手", scores: { share: 1, trust: 1 } },
    ],
  },
  {
    id: "co20", dim: "colleague", subDim: "boundaryC", kind: "sjt", discrimination: 0.8, screener: false,
    text: "同事想让你帮他代打卡，说就这一次。",
    options: [
      { id: "A", label: "说这个不行，别的能帮就帮", scores: { boundaryC: 1 } },
      { id: "B", label: "帮了，反正没人查", scores: { boundaryC: -1 } },
      { id: "C", label: "拒绝，也不多解释", scores: { boundaryC: 1 } },
      { id: "D", label: "含糊答应，到时候装忘", scores: { boundaryC: -1 } },
    ],
  },
];
