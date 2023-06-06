// menu toggle

const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");
const menu = document.getElementById("menu");

function toggleMenu() {
  if (menu.classList.contains("active-menu")) {
    menu.classList.remove("active-menu");
  } else {
    menu.classList.add("active-menu");
  }
}

openButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

// active url colored

let url = window.location.href;
let activeUrl = url.substring(url.lastIndexOf("/") + 1);
$(document).ready(function () {
  $("a[href*='" + activeUrl + "']").addClass("active");
});
