const images = document.querySelectorAll(".title__slider > img");
const rightBtn = document.querySelector(".title__slider > .btn-arrow.right");
const leftBtn = document.querySelector(".title__slider > .btn-arrow.left");
var current = 0;

const toRight = () => {
  images[current].classList.remove("active");

  if (current < images.length - 1) current++;
  else current = 0;

  images[current].classList.add("active");
};

const toLeft = () => {
  images[current].classList.remove("active");

  if (current > 0) current--;
  else current = images.length - 1;

  images[current].classList.add("active");
};

rightBtn.addEventListener("click", toRight);
leftBtn.addEventListener("click", toLeft);
