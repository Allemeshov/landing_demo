const infoBlocks = [
  document.querySelector(".weDoInfo1"),
  document.querySelector(".weDoInfo2"),
  document.querySelector(".weDoInfo3"),
];
const buttons = [
  document.querySelector(".weDoBtn1"),
  document.querySelector(".weDoBtn2"),
  document.querySelector(".weDoBtn3"),
];

let previousShow = 1;

function reset(number = 0) {
  for (let i = 1; i <= 3; i++) {
    if (number === i) continue;
    infoBlocks[i - 1].style.height = "0";
    infoBlocks[i - 1].style.paddingBottom = null;
    infoBlocks[i - 1].style.paddingTop = null;
    buttons[i - 1].style.transform = null;
    setTimeout(() => {
      infoBlocks[i - 1].style.borderTop = null;
    }, 150);
  }
}

function showInfo(number) {
  if (
    !(
      previousShow === number && infoBlocks[number - 1].style.height === "160px"
    )
  ) {
    previousShow = number;
    reset(number);
    buttons[number - 1].style.transform = "rotate(180deg)";
    infoBlocks[number - 1].style.height = "160px";
    infoBlocks[number - 1].style.paddingTop = "10px";
    infoBlocks[number - 1].style.paddingBottom = "10px";
    setTimeout(() => {
      infoBlocks[number - 1].style.borderTop = "1px solid #cccccc";
    }, 50);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.onload = function () {
    showInfo(1);
  };
});
