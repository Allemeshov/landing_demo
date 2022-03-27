const bannerSwiper = new Swiper(".banner-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".banner-swiper-button-next",
    prevEl: ".banner-swiper-button-prev",
  },

  pagination: {
    el: ".banner-swiper-pagination",
    // type: 'bullets',
  },
});

const burgerMenu = document.querySelector(".burger-menu");
const bannerNavMenu = document.querySelector(".nav-menu");

function toggleMenu() {
  if (burgerMenu.classList.contains("entered-menu")) {
    // Deactivate burger
    burgerMenu.classList.remove("entered-menu");
    bannerNavMenu.classList.remove("nav-menu-triggered");
    gsap.fromTo(".nav-menu", { opacity: 1 }, { opacity: 0, duration: 0.7 });

    enableScroll();

    // gsap.to(window, {duration: 2, scrollTo:"#someID"});
  } else {
    // Activate burger
    disableScroll();
    bannerNavMenu.classList.add("nav-menu-triggered");
    burgerMenu.classList.add("entered-menu");
    gsap.to(".nav-menu", { opacity: 1, duration: 0.7 });
    let burgerNavMenus = document.querySelectorAll(".burger-nav-el");
    burgerNavMenus.forEach((el, idx) => {
      gsap.from(el, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: Back.easeOut,
        delay: idx / 5,
      });
    });
  }
}

function movePageTo(pageNumber) {
  document.querySelector(".current-page").classList.remove("current-page");
  document
    .querySelectorAll(".banner-pagination .slider-el")
    [pageNumber - 1].classList.add("current-page");
  bannerSwiper.slideTo(pageNumber);
}

function scrollFromBurgerTo(fromClass) {
  toggleMenu();
  switch (fromClass) {
    case "about":
      scrollToAbout();
      break;
    case "service":
      scrollToService();
      break;
    case "work":
      scrollToWork();
      break;
    case "blog":
      scrollToBlog();
      break;
    case "contact":
      scrollToContact();
      break;

    default:
      break;
  }
}
function scrollToAbout() {
  gsap.to(window, { ease: Power3.easeOut, duration: 2, scrollTo: ".about-us" });
}
function scrollToService() {
  gsap.to(window, {
    ease: Power3.easeOut,
    duration: 2.5,
    scrollTo: ".services",
  });
}
function scrollToWork() {
  gsap.to(window, {
    ease: Power3.easeOut,
    duration: 3,
    scrollTo: ".works",
  });
}
function scrollToBlog() {
  gsap.to(window, {
    ease: Power3.easeOut,
    duration: 3,
    scrollTo: ".blog-section",
  });
}
function scrollToContact() {
  gsap.to(window, {
    ease: Power3.easeOut,
    duration: 3,
    scrollTo: ".map",
  });
}

bannerSwiper.on("slideChange", function () {
  console.log(bannerSwiper.activeIndex);
  switch (bannerSwiper.activeIndex) {
    case 0:
    case 4: {
      movePageTo(4);
      break;
    }

    case 1:
    case 5: {
      movePageTo(1);
      break;
    }

    case 2: {
      movePageTo(2);
      break;
    }

    case 3: {
      movePageTo(3);
      break;
    }

    default:
      break;
  }
});

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}
