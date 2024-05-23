const menuBtn = document.querySelector(".header__menu");
const headerNav = document.querySelector(".header__nav > ul");

const toggleMenu = () => {
  if (getComputedStyle(headerNav).display == "none") {
    headerNav.style.display = "flex";
  } else {
    headerNav.style.display = "none";
  }
}

const closeMenu = (event) => {
  if (
    event.target.parentElement.className != "header__menu" &&
    getComputedStyle(menuBtn).display != "none"
  ) {
    headerNav.style.display = "none";
  }
}

menuBtn.addEventListener("click", toggleMenu);
window.addEventListener("click", closeMenu);
