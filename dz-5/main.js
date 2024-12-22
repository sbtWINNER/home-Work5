const swiperWrapper = document.querySelector(".swiper-wrapper");
const swiperSlides = document.querySelectorAll(".swiper-slide");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");

let currentOffset = 0;

const slideHeight = 600;

const moveUp = () => {
  if (currentOffset < 0) {
    currentOffset += slideHeight;
    swiperWrapper.style.transform = `translateY(${currentOffset}px)`;
  }
};

const moveDown = () => {
  if (Math.abs(currentOffset) < (swiperSlides.length - 1) * slideHeight) {
    currentOffset -= slideHeight;
    swiperWrapper.style.transform = `translateY(${currentOffset}px)`;
  }
};

upBtn.addEventListener("click", moveUp);
downBtn.addEventListener("click", moveDown);
