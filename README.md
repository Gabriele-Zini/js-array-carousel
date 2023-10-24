# EXERCISE

Given an array containing a list of five images, create a carousel as shown in the screenshot. Attached, you will find markup with the HTML and CSS code already provided.

## SOLUTION

**Data Collection**

Array of images

```javascript
const images = [
  "./img/01.jpg",
  "./img/02.jpg",
  "./img/03.jpg",
  "./img/04.jpg",
  "./img/05.jpg",
];
```

<br>

**Program Logic**

1. Initialize the variable "imagesString" to store HTML elements created in JavaScript.
2. Set up a for loop over the array of images to create as many HTML elements as there are items in the array.

```javascript
const slideElems = document.querySelector(".items");

let imagesString = "";

for (let i = 0; i < images.length; i++) {
  const curImage = images[i];
  imagesString += `<div class="item"> <img src="${curImage}" alt=""></div>`;
}

slideElems.innerHTML += imagesString;
```

<br>

3. Set up a variable to keep track of the current element's index as "active" for use as a parameter in the eventListener conditions for the "prev" and "next" buttons.
4. In the "prev" button, decrement the counter, and in the "next" button, increment it.
5. After the loop, set a condition in both "prev" and "next" to restart the photo sliding when the user clicks: in the case of "prev," it restarts from the end of the array; in the case of "next," it restarts from the beginning.

<br>

```javascript
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
```
