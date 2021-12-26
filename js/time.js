const middleDiv = document.querySelector(".middle")


const hourDiv = middleDiv.querySelector("div span:first-child")
const minuteDiv = middleDiv.querySelector("div span:last-child")
const h3 = middleDiv.querySelector("h3")

const yiIlArray = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

const nowTime = () => {
  const now = new Date
  const realHour = now.getHours()
  const halfDay = realHour>=12?"오후":"오전"
  const hour = ((realHour>12?realHour-12:realHour)+"").padStart(2,"0")
  const minute = (now.getMinutes()+"").padStart(2,"0")
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  const yoIl = yiIlArray[now.getDay()]
  hourDiv.innerText = `${halfDay} ${hour}`
  minuteDiv.innerText = minute
  h3.innerText = `${year}년 ${month}월 ${day}일 ${yoIl}`
}

const second = middleDiv.querySelector("div .second")
setInterval(() => {
  second.classList.toggle('second-colon-display')
},500)

nowTime()
const delaySecond = (61-(new Date).getSeconds())*1000
console.log(delaySecond)
setTimeout(()=>{
  nowTime()
  setInterval(nowTime,60000)
},delaySecond)