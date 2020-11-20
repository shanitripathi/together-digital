const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const images = document.querySelectorAll(".slider-col img");
const amount = 330;
const totalWidth = images.length * 200;

// slidler animation
var initial = 0;
function classAdd() {
  if (initial === 0) {
    prev.classList.add("btn-end");
  } else {
    prev.classList.remove("btn-end");
  }
  if (initial < -totalWidth) {
    next.classList.add("btn-end");
  } else {
    next.classList.remove("btn-end");
  }
}

function nextSlide() {
  initial -= amount;

  images.forEach((img) => {
    img.style.transform = "translatex(" + initial + "px)";
  });

  classAdd();
}
function previousSlide() {
  initial += amount;

  images.forEach((img) => {
    img.style.transform = "translatex(" + initial + "px)";
  });
  classAdd();
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", previousSlide);

// accordion icon change
const collapses = document.querySelectorAll(".collapse");
function active() {
  setInterval(function () {
    collapses.forEach((c, index) => {
      let element = c.parentElement.children[0].children[0].children[1];
      if (c.classList.contains("show")) {
        element.children[0].style.display = "none";
        element.children[1].style.display = "block";
      } else {
        element.children[0].style.display = "block";
        element.children[1].style.display = "none";
      }
    });
  }, 0);
}

active();

const loader = document.querySelector(".loader");
const height = document.body.clientHeight - window.innerHeight;
function loading() {
  let varHeight = window.pageYOffset;
  let move = (varHeight / height) * 100;
  loader.style.width = `${move}vw`;

  console.log(`${move}vw`);
}

window.addEventListener("scroll", loading);
