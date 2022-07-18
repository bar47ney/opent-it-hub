// mobile-menu
const subMobileItems = document.querySelector(".sub-mobile-items");
const eventsMobileButton = document.querySelectorAll(".mobile-menu-item")[1];
const svgMobileArrow = eventsMobileButton.querySelector("svg");

eventsMobileButton.addEventListener("click", () => {
  subMobileItems.classList.toggle("sub-mobile-items-none");
  svgMobileArrow.classList.toggle("mobile-menu-svg-rotate");
});

const burgerMenu = document.querySelector(".burger-mobile");
const scrollMobileMenu = document.querySelector(".scroll-mobile-menu");
const menuExit = document.querySelector(".menu-exit");

burgerMenu.addEventListener("click", () => {
  scrollMobileMenu.classList.toggle("scroll-mobile-menu-visibility");
});

menuExit.addEventListener("click", () => {
  scrollMobileMenu.classList.toggle("scroll-mobile-menu-visibility");
});