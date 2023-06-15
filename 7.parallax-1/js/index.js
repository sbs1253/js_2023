const imageAll = document.querySelectorAll('.imageWrap .parallaxImage');
const subPage = document.querySelector('.subPage .parallaxImage');

let scrollNum = 0;
let image = 0;
let move = 0;
const speed = 0.2;
let targatX = 0;
window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;

  imageAll.forEach((value, index) => {
    image = value;
    image.style.transform = `translateY(${-scrollNum * 0.1 * index}px)`;
  });
});

window.addEventListener('mousemove', (e) => {
  move = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targatX += (move - targatX) * speed;
  imageAll[4].style.transform = `scale(1.1) translate(${-targatX / 200}px, ${
    -scrollNum * 0.1 * 4
  }px)`;
  imageAll[5].style.transform = `scale(1.1) translate(${-targatX / 100}px, ${
    -scrollNum * 0.1 * 5
  }px)`;
  subPage.style.transform = `scale(1.1) translateX(${-targatX / 20}px)`;
  requestAnimationFrame(loop);
};
loop();
