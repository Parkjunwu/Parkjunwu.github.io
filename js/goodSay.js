const quotes = [
  {
    quote: "지금 현재 나의 모습이 지금까지의 선택의 결과들이다",
    author: "me",
  },
  {
    quote:
      "현실을 똑바로 봐라 문제를 똑바로 봐라 외면하면 더욱 차가운 현실만 다가올 뿐",
    author: "say no",
  },
  {
    quote: "지금 할 수 있는 것에만 집중해라",
    author: "say no",
  },
  {
    quote: "절대 절대 현재를 바탕으로 미래를 계산하지 마라",
    author: "say no",
  },
  {
    quote: "절대 자만하지 마라 운이 실력이라고 절대 착각하지 마라",
    author: "say no",
  },
  {
    quote:
      "나는 개좆밥이다. 이 세상의 겨우 요만큼 쥐톨만큼 알고 있는 것 뿐이다. 너의 생각은 언제나 틀리며 항상 검증에 검증을 거쳐라. 그때는 맞고 지금은 틀리다. 너 자신을 알라.",
    author: "say no",
  },
  {
    quote:
      "공짜 지식이라고 절대 우습게 보지 마라. 오히려 공짜 지식이 더 유용한 경우가 많다",
    author: "say no",
  },
  {
    quote:
      "현실을 바탕으로 해석하라. 나의 머릿속 생각은 언제나 틀리다. 설령 현실의 그것이 기분이 나쁠지 언정 현실에서 맞다면 받아들여라.",
    author: "국제관계학",
  },
  {
    quote:
      "인간은 완벽하지 않다. 나는 좆밥이다. 다만 완벽을 추구하며 변화해 나갈 수 있는 것이 짐승과의 차이점이며 인간의 존재 이유다.",
    author: "",
  },
  {
    quote: "항상 최악을 대비하라. 절대 망하는 선택을 하면 안된다.",
    author: "최정",
  },
  {
    quote:
      "정상에서 만나자. 한번 사는 인생 무엇이 되었든 최고가 되자. 어렵고 힘들겠지만 그렇기 때문에 그것들이 의미가 있는 것이다.",
    author: "최정",
  },
  {
    quote:
      "신의 영역에 도전하지 마라. 다만 지금 할 수 있는 것에 최선을 다할 수 있을 뿐. 그것밖에 내가 할 수 있는 건 없다.",
    author: "say no",
  },
  {
    quote:
      "야망을 갖지 마라. 전국일주를 꿈꾸며 집 바깥에 나가는 한걸음을 우습게 보는 병신새끼가 되지 마라. 나를 변화시키는 건 원대한 야망이 아닌 아무것도 아닌 것 같은 1인치 전진을 위해 오늘 최선을 다하는 것이다.",
    author: "say no",
  },
  {
    quote:
      "노력은 하기 싫은 일을 열심히 하는 것이다. 좋아하는 일을 하는건 그냥 노는 것이다.",
    author: "say no",
  },
  {
    quote: "노오오오력의 총량을 알라. 니가 하는 노력은 노력도 아니다.",
    author: "셀리",
  },
  {
    quote:
      "노력이 중요한 것이 아니고 잘하는 것이 중요하다. 내가 열심히 하는 것은 나의 멍청함의 총집합일 수 있다. 아니 병신짓의 총집합이다. 언제나 무엇을 하든 항상 개선점을 찾아라. 노력은 더욱 잘하게 되기 위해 하는 것이다.",
    author: "나",
  },
  {
    quote:
      "내게 나무를 벨 시간이 1시간 주어진다면 45분은 도끼를 가는 데에 쓰겠소. 무슨 일이든 잘하는 방법이 있으며, 사전 지식 습득은 필수다. 멍청하게 일하지 말라. 바보들은 언제나 열심히 했다 한다.",
    author: "링컨",
  },
  {
    quote:
      "내일 세상이 망하더라도 나는 나무 한그루를 심겠다. 왜 세상이 망한다고 뒤돌아봐야 하는가. 그건 평소에 제대로 살지 않았다는 방증이다. 현재 내가 할 수 있는 것에 충실하라.",
    author: "스피노자",
  },
  {
    quote:
      "의도가 좋다고 결과가 좋은 것은 아니다. 절대 아니다. 오히려 의도가 좋을 경우 더더욱 검증을 거쳐라. 그리고 그런 미사어구를 사용하는 사람을 경계하라.",
    author: "나",
  },
  {
    quote:
      "분야가 다르든 장르가 다르든 본질은 똑같다. 상대방이 원하는 것을 알고 내가 그것을 제공하면 된다.",
    author: "기안",
  },
  {
    quote: "맥락을 알라. ",
    author: "신명준",
  },
  {
    quote: "실력은 연습에서 나온다.",
    author: "최정",
  },
  {
    quote: "신뢰가 모든 것의 핵심이다. 모든 것은 인간관계이다.",
    author: "최정",
  },
  {
    quote: "상대방이 들을 준비가 되어있지 않으면 그 어떤 이야기도 할 수 없다.",
    author: "say no",
  },
  {
    quote:
      "사람이란 자기 말에 귀기울여주고, 가치를 인정해주고, 의견을 물어보는 사람에게 보답해주기 마련이다.",
    author: "스튜어트 다이아몬드",
  },
];

const bottomDiv = document.querySelector(".bottom")

const length = quotes.length
const random = Math.floor(Math.random()*length)

bottomDiv.innerText = `${quotes[random].quote} - ${quotes[random].author}`