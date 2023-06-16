const imageAll = document.querySelectorAll('.imageWrap .parallaxImage');

let scrollNum = 0;

window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;
});
const loop = () => {
  if (scrollNum < 1000) {
    imageAll.forEach((image, index) => {
      image.style.transform = `perspective(400px) translate3d(0px,0px,${
        scrollNum * 0.1 * index
      }px)`;
    });
  }
  requestAnimationFrame(loop);
};

loop();
