const images = [
  "./img/01.jpg",
  "./img/02.jpg",
  "./img/03.jpg",
  "./img/04.jpg",
  "./img/05.jpg",
];

const slideElems = document.querySelector(".items");

let imagesString = "";

for (let i = 0; i < images.length; i++) {
  const curImage = images[i];
  imagesString += `
   <div class="item">
    <img src="${curImage}" alt="">
   </div>`;
}

slideElems.innerHTML += imagesString;

const slideItems = document.querySelectorAll(".item");

let currentSlideIndex = 0;
slideItems[currentSlideIndex].classList.add("active");

document.querySelector(".next").addEventListener("click", function (event) {
  event.preventDefault();
  slideItems[currentSlideIndex].classList.remove("active");
  currentSlideIndex++;
  if (currentSlideIndex >= slideItems.length) {
    currentSlideIndex = 0;
  }
  slideItems[currentSlideIndex].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", function (event) {
  event.preventDefault();
  slideItems[currentSlideIndex].classList.remove("active");
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slideItems.length - 1;
  }
  slideItems[currentSlideIndex].classList.add("active");
});
