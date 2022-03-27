const iPad = document.querySelector(".ipad");
const iPhone = document.querySelector(".iphone");
const designSection = document.querySelector(".design");

subscribe(iPad, subscribe.PAST, function () {
  gsap.fromTo(
    iPad,
    { left: "-100%" },
    { left: 0, opacity: 1, ease: Back.easeOut, delay: 1 }
  );
});
