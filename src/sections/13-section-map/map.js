const url =
  "https://www.google.de/maps/place/%D1%83%D0%BB.+%D0%A3%D0%BB%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2%D0%B0,+16,+%D0%91%D1%80%D1%8F%D0%BD%D1%81%D0%BA,+%D0%91%D1%80%D1%8F%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+241035/@53.3051001,34.3122288,17z/data=!3m1!4b1!4m5!3m4!1s0x4132a81635a341b7:0x251a490d12ce1985!8m2!3d53.3051001!4d34.3144175?hl=ru&authuser=0";

function showLocationOnMap() {
  window.open(url, "_blank").focus();
}
