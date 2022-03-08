const reviewToggle = document.querySelector(".review-toggle");
const reviewItems = document.querySelector(".reviews");

reviewToggle.addEventListener("click", () => {
  reviewItems.classList.toggle("hide");
});

const tipToggle = document.querySelector(".tip-toggle");
const tipItems = document.querySelector(".tips");

tipToggle.addEventListener("click", () => {
  tipItems.classList.toggle("hide");
});

const aboutToggle = document.querySelector(".about-toggle");
const aboutItems = document.querySelector(".about");

aboutToggle.addEventListener("click", () => {
  aboutItems.classList.toggle("hide");
});
