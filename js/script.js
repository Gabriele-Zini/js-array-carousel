const images = [
  "./img/01.jpg",
  "./img/02.jpg",
  "./img/03.jpg",
  "./img/04.jpg",
  "./img/05.jpg",
];

const container = document.querySelector(".container");
const items = document.querySelector(".items");

creatImg();
setInterval(sliderInterval, 3000);

let autoplay = false;
let currentIndex = 0;
const imageItem = document.querySelectorAll(".item");
imageItem[currentIndex].classList.add("active");

const next = document.querySelector(".next");
next.addEventListener("click", nextFunction);

const prev = document.querySelector(".prev");
prev.addEventListener("click", prevFunction);

container.addEventListener("mouseover", function () {
  autoplay = false;
});

container.addEventListener("mouseout", function () {
  autoplay = true;
});

// FUNCTIONS

function creatImg() {
  let imageDiv = "";

  for (let i = 0; i < images.length; i++) {
    const curImage = images[i];
    imageDiv += `<div class="item"><img src="${curImage}" alt=""></div>`;
  }

  items.innerHTML += imageDiv;
  return imageDiv;
}

function nextFunction() {
  imageItem[currentIndex].classList.remove("active");
  currentIndex++;
  if (currentIndex >= imageItem.length) {
    currentIndex = 0;
  }
  imageItem[currentIndex].classList.add("active");
}

function prevFunction() {
  imageItem[currentIndex].classList.remove("active");
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imageItem.length - 1;
  }
  imageItem[currentIndex].classList.add("active");
}

function sliderInterval() {
  if (autoplay) {
    imageItem[currentIndex].classList.remove("active");
    currentIndex++;
    if (currentIndex >= imageItem.length) {
      currentIndex = 0;
    }
    imageItem[currentIndex].classList.add("active");
  }
}
