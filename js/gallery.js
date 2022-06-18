const one = document.querySelector(".gallery__one").children;
const two = document.querySelector(".gallery__two").children;
const three = document.querySelector(".gallery__three").children;
const four = document.querySelector(".gallery__four").children;
const five = document.querySelector(".gallery__five").children;
const six = document.querySelector(".gallery__six").children;
const bd = document.querySelector(".gallery__slide");
const glClose = document.querySelector(".gallery__close");
const back = document.querySelector(".gallery__back");
const next = document.querySelector(".gallery__next");

const mbBack = document.querySelector(".gallery__mb-back");
const mbNext = document.querySelector(".gallery__mb-next");

const children = [...one, ...two, ...three, ...four, ...five, ...six];
const img = document.querySelector(".gallery__window").children;
// const btn = document.querySelector(".btn");
// console.log(btn);
// let height =
//   document.querySelector(".galerry").offsetHeight +
//   document.querySelector(".block").offsetHeight +
//   document.querySelector(".btn").offsetHeight;
// console.log(height);
// btn.addEventListener("click", function () {
//   window.scrollTo(0, height);
// });
for (let i = 0; i < children.length; i += 1) {
  children[i].addEventListener("click", function () {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.right = 0;
    document.body.style.left = 0;
    document.body.style.position = "fixed";
    bd.classList.toggle("galerry__is-hidden");
    img[i].classList.toggle("gallery__img-visible");
  });
}

glClose.addEventListener("click", function () {
  bd.classList.toggle("galerry__is-hidden");
  const scrollY = document.body.style.top;
  document.body.style.position = "static";
  window.scrollTo(0, parseInt(scrollY) * -1);
  for (let i = 0; i < img.length; i += 1) {
    if (img[i].classList.contains("gallery__img-visible")) {
      img[i].classList.toggle("gallery__img-visible");
    }
  }
});
glClose.addEventListener("click", function () {
  document.body.style.position = "static";
  window.scrollTo({
    top: height,
    left: 0,
    behavior: "smooth",
  });
  bd.classList.toggle("galerry__is-hidden");
  for (let i = 0; i < img.length; i += 1) {
    if (img[i].classList.contains("gallery__img-visible")) {
      img[i].classList.toggle("gallery__img-visible");
    }
  }
});

let count = 0;

mbNext.addEventListener("click", function () {
  for (let i = 0; i < img.length; i += 1) {
    if (img[i].classList.contains("gallery__img-visible")) {
      count = i + 1;
      img[i].classList.toggle("gallery__img-visible");
    }
  }
  if (count === img.length) {
    count = 0;
  }
  img[count].classList.toggle("gallery__img-visible");
});
mbBack.addEventListener("click", function () {
  for (let i = 0; i < img.length; i += 1) {
    if (img[i].classList.contains("gallery__img-visible")) {
      count = i - 1;
      img[i].classList.toggle("gallery__img-visible");
    }
  }
  if (count < 0) {
    count = img.length - 1;
  }
  img[count].classList.toggle("gallery__img-visible");
});

next.addEventListener("click", function () {
  for (let i = 0; i < img.length; i += 1) {
    if (img[i].classList.contains("gallery__img-visible")) {
      count = i + 1;
      img[i].classList.toggle("gallery__img-visible");
    }
  }
  if (count === img.length) {
    count = 0;
  }
  img[count].classList.toggle("gallery__img-visible");
});
back.addEventListener("click", function () {
  for (let i = 0; i < img.length; i += 1) {
    if (img[i].classList.contains("gallery__img-visible")) {
      count = i - 1;
      img[i].classList.toggle("gallery__img-visible");
    }
  }
  if (count < 0) {
    count = img.length - 1;
  }
  img[count].classList.toggle("gallery__img-visible");
});
