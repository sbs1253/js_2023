/*  document.documentElement.scrollTop,
    document.documentElement.clientHeight
    위의 항목은 body로 찍었을 경우 안나옴(!DOCTYPE 선언되었기때문임)
 */
const depthWrap = document.querySelector('.depthWrap');
const progress = document.querySelector('.progress__bar');
const submarine = document.querySelector('.submarine');
const octopus = document.querySelector('.octopus');

const percent = (num, totalNum) => ((num / totalNum) * 100).toFixed(0);
let scrollNum = 0;
let per;
let documentHeight = 0;
window.addEventListener('scroll', () => {
  documentHeight = document.body.scrollHeight - window.innerHeight;
  scrollNum = window.scrollY;
  per = percent(scrollNum, documentHeight);

  depthWrap.querySelector('span').innerText = scrollNum.toFixed(0);
  progress.style.width = `${per}'%'`;
  submarine.style.transform = `translateX(${per}%)`;
  octopus.style.transform = `translateY(${-per / 3}%))`;
});
