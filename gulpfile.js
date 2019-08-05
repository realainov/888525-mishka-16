"use strict";

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const browsersync = require("browser-sync").create();

const del = require("del");
const rename = require("gulp-rename");
const concat = require("gulp-concat");

const pug = require("gulp-pug");

const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");

const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sorting = require("postcss-sorting");

const uglify = require("gulp-uglify-es").default;

const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");

gulp.task("pages", function () {
  return gulp.src("source/pug/*.pug")
    .pipe(plumber())
    .pipe(pug({pretty: false}))
    .pipe(gulp.dest("build"));
});

gulp.task("styles", function () {

  const processors = [
    autoprefixer({browsers: ["last 2 version"]}),
    sorting({
      "order": [
        "custom-properties",
        "declarations",
        "at-rules",
        "rules"
      ],

      "properties-order": "alphabetical",

      "unspecified-properties-position": "bottom"
    })
  ];

  return gulp.src(["source/sass/style.scss"])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest("build/css"))
    .pipe(cssnano())
    .pipe(rename({suffix: ".min"}))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/css"));
});

gulp.task("scripts", function () {
  return gulp.src(["source/js/**/*.js", "!source/js/app.js"])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/js"));
});

gulp.task("images", function () {
  return gulp.src("source/img/*.{jpg,jpeg,png,gif.svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo(),
      imagemin.gifsicle()
    ]))
    .pipe(gulp.dest("build/img"))
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"));
});

gulp.task("sprite", function () {
  return gulp.src("source/img/*.svg")
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("source/img"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("clean", function () {
  return del(["build", "source/img/sprite.svg"]);
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/*.{png,jpg,jpeg,gif,svg}"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
});

gulp.task("browser-sync", function () {
  browsersync.init({
    server: {
      baseDir: "build"
    }
  });
  browsersync.watch(["build/*.html", "build/css/style.min.css", "build/js/app.min.js", "build/img/**/*", "build/fonts/**/*"], browsersync.reload);
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "pages",
  "images",
  "sprite",
  "styles",
  "scripts"
));

gulp.task("server", function () {
  gulp.watch("source/pug/**/*.pug", gulp.parallel("pages"));
  gulp.watch(["source/img/*", "!source/img/sprite.svg"], gulp.series("images", "sprite"));
  gulp.watch(["source/sass/**/*.{scss,sass}", "!source/sass/style.scss"], gulp.parallel("styles"));
  gulp.watch(["source/js/**/*.js", "!source/js/app.js"], gulp.parallel("scripts"));
});

gulp.task("default", gulp.series(
  gulp.series("clean", "copy", "images", "sprite", "pages", "styles", "scripts"),
  gulp.parallel("server", "browser-sync")
));
