import type { Item } from "../adaptive";

// 上下级关系维度题库：10 道筛查 + 10 道追问，覆盖 authority/report/evalSensitive/pushback
export const BOSS_ITEMS: Item[] = [
  {
    id: "bo01", dim: "boss", subDim: "authority", kind: "sjt", discrimination: 0.9, screener: true,
    text: "电梯里只有你和上级，还有十几层。",
    options: [
      { id: "A", label: "正常打招呼，聊两句天气", scores: { authority: 1 } },
      { id: "B", label: "低头看手机，希望快点到", scores: { authority: -1 } },
      { id: "C", label: "顺口提一句手上的进展", scores: { authority: 1, report: 1 } },
      { id: "D", label: "等他先开口", scores: { authority: -1 } },
    ],
  },
  {
    id: "bo02", dim: "boss", subDim: "report", kind: "sjt", discrimination: 0.85, screener: true,
    text: "一个任务进度落后了，离交付还有一周。",
    options: [
      { id: "A", label: "现在就报，说清新的时间", scores: { report: 1 } },
      { id: "B", label: "先赶，赶不上再说", scores: { report: -1 } },
      { id: "C", label: "报一部分，话说得乐观些", scores: { report: -1 } },
      { id: "D", label: "报的同时给出补救方案", scores: { report: 1 } },
    ],
  },
  {
    id: "bo03", dim: "boss", subDim: "evalSensitive", kind: "sjt", discrimination: 0.85, screener: true,
    text: "上级在群里指出你的一份材料格式有问题。",
    options: [
      { id: "A", label: "改完就过，不太往心里去", scores: { evalSensitive: -1 } },
      { id: "B", label: "一整天都在想是不是被看低了", scores: { evalSensitive: 1 } },
      { id: "C", label: "觉得他说得对，下次注意", scores: { evalSensitive: -1 } },
      { id: "D", label: "回头把其他材料全查一遍", scores: { evalSensitive: 1 } },
    ],
  },
  {
    id: "bo04", dim: "boss", subDim: "pushback", kind: "sjt", discrimination: 0.9, screener: true,
    text: "上级要你两天做完一件至少需要一周的事。",
    options: [
      { id: "A", label: "直接说两天做不完，讲清原因", scores: { pushback: 1 } },
      { id: "B", label: "应下来，熬夜试试", scores: { pushback: -1 } },
      { id: "C", label: "问能不能砍掉一部分", scores: { pushback: 1 } },
      { id: "D", label: "先答应，做不完再解释", scores: { pushback: -1 } },
    ],
  },
  {
    id: "bo05", dim: "boss", subDim: "authority", kind: "sjt", discrimination: 0.85, screener: true,
    text: "上级临时叫你进会议室，没说要谈什么。",
    options: [
      { id: "A", label: "拿上本子就进去", scores: { authority: 1 } },
      { id: "B", label: "一路想自己是不是做错了什么", scores: { authority: -1, evalSensitive: 1 } },
      { id: "C", label: "先问一句大概什么事", scores: { authority: 1 } },
      { id: "D", label: "让别人先进去探探", scores: { authority: -1 } },
    ],
  },
  {
    id: "bo06", dim: "boss", subDim: "report", kind: "sjt", discrimination: 0.9, screener: true,
    text: "你犯了一个错，客户还没发现。",
    options: [
      { id: "A", label: "立刻告诉上级，一起想怎么处理", scores: { report: 1 } },
      { id: "B", label: "自己补救，瞒过去就算了", scores: { report: -1 } },
      { id: "C", label: "补完再说，说得轻一点", scores: { report: -1 } },
      { id: "D", label: "补完主动说清过程和影响", scores: { report: 1 } },
    ],
  },
  {
    id: "bo07", dim: "boss", subDim: "evalSensitive", kind: "sjt", discrimination: 0.8, screener: true,
    text: "年度评估里，上级写了一句「沟通可以更主动」。",
    options: [
      { id: "A", label: "记下来，问问他具体指什么", scores: { evalSensitive: -1 } },
      { id: "B", label: "反复看那条，觉得自己被否定了", scores: { evalSensitive: 1 } },
      { id: "C", label: "觉得他不了解情况，心里不服", scores: { evalSensitive: 1 } },
      { id: "D", label: "当成一条普通建议", scores: { evalSensitive: -1 } },
    ],
  },
  {
    id: "bo08", dim: "boss", subDim: "pushback", kind: "sjt", discrimination: 0.85, screener: true,
    text: "上级的方案里有个你认为会出问题的环节。",
    options: [
      { id: "A", label: "在会上提出自己的顾虑", scores: { pushback: 1 } },
      { id: "B", label: "私下找他讲", scores: { pushback: 1 } },
      { id: "C", label: "照做，出问题也不是我的", scores: { pushback: -1 } },
      { id: "D", label: "保留意见，执行时自己绕开", scores: { pushback: -1 } },
    ],
  },
  {
    id: "bo09", dim: "boss", subDim: "authority", kind: "sjt", discrimination: 0.85, screener: true,
    text: "上级在会上讲了一个你确定是错的数据。",
    options: [
      { id: "A", label: "当场补充正确的数字", scores: { authority: 1, pushback: 1 } },
      { id: "B", label: "会后发消息告诉他", scores: { authority: 1 } },
      { id: "C", label: "装作没听出来", scores: { authority: -1 } },
      { id: "D", label: "心里觉得他不专业", scores: { authority: -1 } },
    ],
  },
  {
    id: "bo10", dim: "boss", subDim: "report", kind: "sjt", discrimination: 0.8, screener: true,
    text: "这周你基本没推进什么，事情都卡在别人那里。",
    options: [
      { id: "A", label: "照实说卡在哪、谁在卡", scores: { report: 1 } },
      { id: "B", label: "挑几件做成的事说", scores: { report: -1 } },
      { id: "C", label: "说在推进中，细节下周再说", scores: { report: -1 } },
      { id: "D", label: "说清现状，也说自己下一步做什么", scores: { report: 1 } },
    ],
  },
  {
    id: "bo11", dim: "boss", subDim: "pushback", kind: "sjt", discrimination: 0.85, screener: false,
    text: "上级想把一个明显不合适的同事放进核心项目。",
    options: [
      { id: "A", label: "说出具体顾虑，讲清风险", scores: { pushback: 1 } },
      { id: "B", label: "接了，再想办法把他边缘化", scores: { pushback: -1 } },
      { id: "C", label: "可以先加，但要求配个兜底的人", scores: { pushback: 1 } },
      { id: "D", label: "不表态，照办", scores: { pushback: -1 } },
    ],
  },
  {
    id: "bo12", dim: "boss", subDim: "evalSensitive", kind: "sjt", discrimination: 0.85, screener: false,
    text: "会上你的提议被上级一句「先放放」带过。",
    options: [
      { id: "A", label: "记下，等合适时机再提", scores: { evalSensitive: -1 } },
      { id: "B", label: "后半场一直在想自己哪说错了", scores: { evalSensitive: 1 } },
      { id: "C", label: "觉得自己的想法不被重视", scores: { evalSensitive: 1 } },
      { id: "D", label: "直接问是哪方面不合适", scores: { evalSensitive: -1, pushback: 1 } },
    ],
  },
  {
    id: "bo13", dim: "boss", subDim: "authority", kind: "sjt", discrimination: 0.8, screener: false,
    text: "上级突然问你一个你没准备过的数据。",
    options: [
      { id: "A", label: "说不记得，回头查了发他", scores: { authority: 1 } },
      { id: "B", label: "硬编一个大概的数字", scores: { authority: -1 } },
      { id: "C", label: "当场翻记录找", scores: { authority: 1 } },
      { id: "D", label: "慌了，说得含含糊糊", scores: { authority: -1, evalSensitive: 1 } },
    ],
  },
  {
    id: "bo14", dim: "boss", subDim: "report", kind: "sjt", discrimination: 0.8, screener: false,
    text: "项目出了个坏消息，正好赶上上级心情不好。",
    options: [
      { id: "A", label: "该说还是说，挑重点讲", scores: { report: 1 } },
      { id: "B", label: "等他心情好点再说", scores: { report: -1 } },
      { id: "C", label: "发消息说，不面对面", scores: { report: -1 } },
      { id: "D", label: "先说事实，再给两个选项", scores: { report: 1 } },
    ],
  },
  {
    id: "bo15", dim: "boss", subDim: "pushback", kind: "sjt", discrimination: 0.85, screener: false,
    text: "上级要求所有人周末加班，你家里已经排了事。",
    options: [
      { id: "A", label: "直接说这周末不行，说明原因", scores: { pushback: 1 } },
      { id: "B", label: "取消安排，来加班", scores: { pushback: -1 } },
      { id: "C", label: "问能不能远程做", scores: { pushback: 1 } },
      { id: "D", label: "请假，但不说真实原因", scores: { pushback: -1 } },
    ],
  },
  {
    id: "bo16", dim: "boss", subDim: "evalSensitive", kind: "sjt", discrimination: 0.8, screener: false,
    text: "上级把你和另一个同事放在一起比较。",
    options: [
      { id: "A", label: "听听他的依据，认不认再说", scores: { evalSensitive: -1 } },
      { id: "B", label: "之后一段时间总想证明自己", scores: { evalSensitive: 1 } },
      { id: "C", label: "心里不舒服，工作照做", scores: { evalSensitive: -1 } },
      { id: "D", label: "反复琢磨自己是不是不如人", scores: { evalSensitive: 1 } },
    ],
  },
  {
    id: "bo17", dim: "boss", subDim: "authority", kind: "sjt", discrimination: 0.85, screener: false,
    text: "饭桌上上级开了个关于你的玩笑。",
    options: [
      { id: "A", label: "跟着笑，也回一句", scores: { authority: 1 } },
      { id: "B", label: "笑一下，之后少说话", scores: { authority: -1 } },
      { id: "C", label: "当场说这个不好笑", scores: { authority: 1 } },
      { id: "D", label: "心里记着，回去想很久", scores: { authority: -1, evalSensitive: 1 } },
    ],
  },
  {
    id: "bo18", dim: "boss", subDim: "report", kind: "sjt", discrimination: 0.85, screener: false,
    text: "项目要延期，原因一半在别的部门。",
    options: [
      { id: "A", label: "先说自己的部分，再说协同的问题", scores: { report: 1 } },
      { id: "B", label: "主要说别的部门不配合", scores: { report: -1 } },
      { id: "C", label: "说尽量赶，不提延期", scores: { report: -1 } },
      { id: "D", label: "拿着新排期去谈", scores: { report: 1 } },
    ],
  },
  {
    id: "bo19", dim: "boss", subDim: "pushback", kind: "sjt", discrimination: 0.85, screener: false,
    text: "上级定的方向，你认为会白费两个月。",
    options: [
      { id: "A", label: "把成本算给他看", scores: { pushback: 1 } },
      { id: "B", label: "提一次，他不听就算了", scores: { pushback: -1 } },
      { id: "C", label: "不说，照做", scores: { pushback: -1 } },
      { id: "D", label: "要求先做两周验证再全铺", scores: { pushback: 1 } },
    ],
  },
  {
    id: "bo20", dim: "boss", subDim: "evalSensitive", kind: "sjt", discrimination: 0.8, screener: false,
    text: "你交上去的东西被退回重做，没写原因。",
    options: [
      { id: "A", label: "直接问要改成什么样", scores: { evalSensitive: -1 } },
      { id: "B", label: "猜他是不满意，改到半夜", scores: { evalSensitive: 1 } },
      { id: "C", label: "觉得被针对", scores: { evalSensitive: 1 } },
      { id: "D", label: "按自己的判断改一版再交", scores: { evalSensitive: -1 } },
    ],
  },
];
