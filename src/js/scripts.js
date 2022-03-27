// ====================================
var scrollNotified = [];
var noop = function () {};

var subscribe = function (el, test, callback = noop) {
  if (typeof test == "function") {
    callback = test;
    test = "visible";
  }
  scrollNotified.push({ el, callback, test });
  onScroll();
};

subscribe.VISIBLE = "visible";
subscribe.ENTER = "enter";
subscribe.MIDDLE = "middle";
subscribe.PAST = "past";

var onScroll = function () {
  scrollNotified = scrollNotified.filter(function (sub) {
    var bounds = sub.el.getBoundingClientRect();
    switch (sub.test) {
      case subscribe.ENTER:
        if (bounds.top > 0 && bounds.top < window.innerHeight) {
          return sub.callback();
        }
        break;

      case subscribe.MIDDLE:
        if (bounds.top > 0 && bounds.top < window.innerHeight * 0.5) {
          return sub.callback();
        }
        break;

      case subscribe.PAST:
        if (bounds.top < window.innerHeight * 0.5) {
          return sub.callback();
        }
        break;

      case subscribe.visible:
      default:
        if (bounds.top > 0 && bounds.bottom < window.innerHeight) {
          return sub.callback();
        }
    }

    return true;
  });
};

window.addEventListener("scroll", onScroll);
// ====================================

// ====================================

var PictureReader = document.querySelector(".picture-reader");
var ReadingPictureWrapper = document.querySelector(".reading-picture-wrapper");
var ReadingPicture = document.querySelector(".reading-picture");

function openPictureReader(srcPath) {
  console.log(srcPath);

  if (!srcPath) return;

  PictureReader.style.zIndex = "25";
  gsap.to(PictureReader, { opacity: 1, duration: 1 });

  ReadingPicture.src = srcPath;
}

function closePictureReader(event) {
  if (
    !event.target.classList.contains("picture-reader") &&
    !event.target.classList.contains("reading-picture-wrapper")
  )
    return;

  gsap.to(PictureReader, {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      PictureReader.style.zIndex = "-25";
    },
  });

  ReadingPicture.src = "";
}

// ====================================

//=require **/**.js
