// Show main content after clicking Enter button
document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.querySelector(".enter-btn");
  const intro = document.getElementById("intro");
  const main = document.getElementById("main-content");

  enterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    intro.style.display = "none";
    main.style.display = "block";
  });
});
