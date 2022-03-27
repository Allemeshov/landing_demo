const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const csso = require("gulp-csso");
const fileInclude = require("gulp-file-include");
const gulpInclude = require("gulp-include");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const sync = require("browser-sync").create();
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const aliases = require("gulp-style-aliases");

function html() {
  return src("src/index.html")
    .pipe(
      fileInclude({
        prefix: "@@",
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest("dist"));
}

function importAliases() {
  return aliases({
    "@scss": "src/scss",
    "@section": "src/sections",
    "@assets": "assets",
    "@shared": "src/scss/shared",
    "@mixins": "src/scss/mixins",
  });
}

function scss() {
  return src(["src/sections/**/**.scss", "src/scss/**"])
    .pipe(concat("concated.scss"))
    .pipe(importAliases())
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(csso())
    .pipe(concat("index.css"))
    .pipe(dest("dist"));
}

function js() {
  return src("src/js/scripts.js")
    .pipe(
      gulpInclude({
        extensions: "js",
        hardFail: true,
        separateInputs: true,
        includePaths: [__dirname + "/src/sections"],
      })
    )
    .on("error", console.log)
    .pipe(dest("dist"));
}

function clear() {
  return del("dist");
}

function serve() {
  sync.init({
    server: "./dist",
  });

  watch("src/**/**.html", series(html)).on("change", sync.reload);
  watch("src/sections/**/**.scss", series(scss)).on("change", sync.reload);
  watch("src/scss/**", series(scss)).on("change", sync.reload);
  watch("src/js/**.js", series(js)).on("change", sync.reload);
  watch("src/sections/**/**.js", series(js)).on("change", sync.reload);
  watch("assets/**", series(assets)).on("change", sync.reload);
}

function assets() {
  return src("assets/**/**").pipe(dest("dist/assets"));
}

exports.html = html;
exports.scss = scss;
exports.clear = clear;
exports.assets = assets;
exports.js = js;

exports.build = series(clear, js, assets, scss, html);
exports.serve = series(clear, js, assets, scss, html, serve);
