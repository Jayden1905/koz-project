const signUp = document.querySelector(".sign-up");
const overlay = document.querySelector(".overlay");

signUp.addEventListener("click", () => {
  overlay.classList.toggle("hide");
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hide");
});
