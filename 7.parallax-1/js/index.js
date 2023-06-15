const imageAll = document.querySelectorAll('.imageWrap .parallaxImage');

let scrollNum = 0;
let image = 0;
window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;

  imageAll.forEach((value, index) => {
    image = value;
    image.style.transform = `translateY(${-scrollNum * 0.1 * index}px)`;
  });
});
