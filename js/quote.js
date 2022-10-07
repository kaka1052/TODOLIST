const quote = document.querySelector("#quote");
const sp1Quote = quote.querySelector("span:first-child");
const sp2Quote = quote.querySelector("span:last-child");

const quoteDatas = [
  { text: "삶이 있는 한 희망은 있다.", arthor: " -키케로-" },
  {
    text: "삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다.",
    arthor: " -알베르트 아인슈타인-",
  },
  {
    text: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다.",
    arthor: " -동아프리카속담-",
  },
  {
    text: "성공으로 가는 엘리베이터는 고장입니다. 당신은 계단을 이용해야만 합니다. 한계단 한계단씩",
    arthor: " -조 지라드-",
  },
  {
    text: "내가 헛되이 보낸 오늘은 어제 죽어간 이들이 그토록 바라던 하루이다 단 하루면 인간적인 모든 것을 멸망시킬수도 다시 소생시킬수도 있다.",
    arthor: " -소포클레스-",
  },
];

const ran_quote = Math.floor(Math.random() * quoteDatas.length);
sp1Quote.innerText = `${quoteDatas[ran_quote].text}`;
sp2Quote.innerText = ` ${quoteDatas[ran_quote].arthor}`;
