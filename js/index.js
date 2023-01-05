let nav = document.getElementById("show-nav");
let menu = document.querySelector("ul");
let triangle = document.querySelector(".triangle");
let isShowed = false;
nav.addEventListener("click", toggleNav);

function toggleNav() {
  if (isShowed) {
    menu.style.display = "none";
    triangle.style.display = "none";
  } else {
    menu.style.display = "flex";
    triangle.style.display = "block";
  }
  isShowed = !isShowed;
}
