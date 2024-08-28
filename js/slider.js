let currentRotation = 0;
const slider = document.querySelector(".slider");
let isPaused = false;

document.querySelectorAll(".slide").forEach((slide) => {
  slide.addEventListener("click", () => {
    isPaused = !isPaused;
    slider.style.animationPlayState = isPaused ? "paused" : "running";
  });
});
