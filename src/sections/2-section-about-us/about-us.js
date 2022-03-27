const statsSwiper = new Swiper(".stats-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".stats-swiper-button-next",
    prevEl: ".stats-swiper-button-prev",
  },
});

const StatsWrapper = document.querySelector(".stats");
var aboutUsH1s = document.querySelectorAll(".stats >.stat-el > h1");

aboutUsH1s.forEach((h1, idx) =>
  subscribe(h1, function () {
    let counter = { number: 1 };
    switch (idx) {
      case 0:
        counter.max = 42;
        break;
      case 1:
        counter.max = 123;
        break;

      case 2:
        counter.max = 15;
        break;
      case 3:
        counter.max = 99;
        break;
      case 4:
        counter.max = 24;
        break;
      default:
        break;
    }
    TweenMax.to(counter, {
      ease: Power3.easeOut,
      duration: 2,
      number: counter.max,
      onUpdate: () => {
        h1.innerHTML = Math.ceil(counter.number);
      },
    });
  })
);
