//현재 시간!
const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    // console.log("hello");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000);
// sayHello();

getClock();

setTimeout(getClock, 1000);
setInterval(getClock, 1000);
new Data().getHours();

/*

const clockTitle = document.querySelector("#clock");

function getTime() {
  // Don't delete this.
  // 크리스마스 이브 날짜
  const xmasEveDay = new Date("2021-12-24:00:00:00+0900");
  // 현재 날짜
  const today = new Date();

  // 크리스마스 까지 남은 날짜 per millsecond
  const milliSecond = -(xmasEveDay - today);

  // 남을 날짜를 일,시간,분,초 로 나눔
  const second = Math.floor((milliSecond / 1000) % 60);
  const minute = Math.floor((milliSecond / 1000 / 60) % 60);
  const hour = Math.floor(milliSecond / 1000 / 60 / 60) % 24;
  const day = Math.floor(milliSecond / 1000 / 60 / 60 / 24);

  // d-day 문자열 생성
  const dDayInfo = `${day}d ${hour}h ${minute}m ${second}s`;

  clockTitle.innerText = dDayInfo;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
*/