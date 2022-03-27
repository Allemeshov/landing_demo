new Swiper(".swiper-comment", {
  // Optional parameters
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".comment2-swiper-button-next",
    prevEl: ".comment2-swiper-button-prev",
  },
});

// document
//   .querySelector(".slider-container > .left")
//   .addEventListener("click", () => {
//     swiper.slidePrev();
//   });
// document
//   .querySelector(".slider-container > .right")
//   .addEventListener("click", () => {
//     swiper.slideNext();
//   });
