const header = document.querySelector('header');
const progressBar = document.querySelector('.bar');
// const coverTitle = document.querySelector('.coverTitle');
const coverWrap = document.querySelector('.coverWrap');
const dimd = document.querySelector('.dimd');
let scrollNum = 0;
// 전체 스크롤 비율계산
let documentHeight = 0;
let per = 0;
// 이미지 스크롤 비율계산
let imgPer = 0;

const percent = (num, totalNum) => Math.ceil((num / totalNum) * 100);
window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight;
  imgPer = percent(scrollNum, 800);
  per = percent(scrollNum, documentHeight);

  progressBar.style.width = `${per}%`;

  if (scrollNum >= 800) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
    coverWrap.style.transform = `translateY(${-per}%)`;
    dimd.style.backgroundColor = `rgba(0, 0, 0, ${imgPer / 100})`;
  }
});
