// formPage
const masEventsFilterBlock = document.querySelectorAll(
  ".events-filter-block-item-active"
);
const masEventsFilterBlockItems = document.querySelectorAll(
  ".events-filter-block-items"
);
for (let i = 0; i < masEventsFilterBlock.length; i++) {
  masEventsFilterBlock[i].addEventListener("click", () => {
    masEventsFilterBlockItems[i].classList.toggle("block-visible");
    masEventsFilterBlock[i]
      .querySelector("svg")
      .classList.toggle("form-arrow-default");
    masEventsFilterBlock[i].classList.toggle("form-black-text");

    let masEventsFilterBlockItemDefault = masEventsFilterBlockItems[
      i
    ].querySelectorAll(".events-filter-block-item-default");
    console.log(masEventsFilterBlockItemDefault.length);
    for (let j = 0; j < masEventsFilterBlockItemDefault.length; j++) {
      masEventsFilterBlockItemDefault[j].addEventListener("click", () => {
        masEventsFilterBlock[i].querySelector("span").innerText =
          masEventsFilterBlockItemDefault[j].innerText;
        masEventsFilterBlockItems[i].classList.remove("block-visible");
        masEventsFilterBlock[i].classList.remove("form-black-text");
        masEventsFilterBlock[i]
          .querySelector("svg")
          .classList.add("form-arrow-default");
      });
    }
  });
}
const masCurrentEvents = document.querySelectorAll(".current-event");
for (let k = 0; k < masCurrentEvents.length; k++) {
  masCurrentEvents[k].addEventListener("click", () => {
    masCurrentEvents[k].classList.toggle("current-event-active");
  });
}

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
