let x = 0;
let targetX = 0;
const speed = 0.1;
let xPx = [-35, -20, 20, 10];
const contentAll = document.querySelectorAll('.contWrap img');

window.addEventListener('mousemove', (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  contentAll.forEach((item, index) => {
    targetX += (x - targetX) * speed;
    const imgList = item;
    imgList.style.transform = `translateX(${-targetX / xPx[index]}px)`;
  });
  window.requestAnimationFrame(loop);
};

loop();
