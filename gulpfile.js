"use strict";

const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const remember = require('gulp-remember-cache');
const pug = require("gulp-pug");
const beautify = require('gulp-beautify');
const htmlmin = require("gulp-html-minifier");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sorting = require("postcss-sorting");
const cssnano = require("gulp-cssnano");
// const gulpbemcss = require("gulp-bem-css");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const browsersync = require("browser-sync").create();


// gulp.task("bem", function () {
//   return gulp.src("source/*.html")
//     .pipe(gulpbemcss({
//       folder: "source/sass/blocks",
//       extension: "scss",
//       elementSeparator: "__",
//       modifierSeparator: "--"
//     }))
//     .pipe(gulp.dest("source"));
// });

gulp.task("pug", function () {
  return gulp.src("source/pug/*.pug").pipe(remember({cacheName: "pages"}))
    .pipe(pug({pretty: false}))
    .pipe(beautify.html({
      "indent_size": 2,
      "indent_with_tabs": false,
      "end-with-newline": true,
      "inline": [],
      "unformatted": [],
      "content_unformatted": [],
      "extra_liners": []
    }))
    .pipe(gulp.dest("source"));
});

gulp.task("html-build", function () {
  return gulp.src("source/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("build"));
});

gulp.task("sass", function () {

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

  return gulp.src(["source/sass/style.scss"]).pipe(remember({cacheName: "styles"}))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(processors))
    .pipe(beautify.css({
      "indent_size": 2,
      "indent_with_tabs": false,
      "end-with-newline": true
    }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("source/css"));
});

gulp.task("css-build", function () {
  return gulp.src("source/css/style.css")
    .pipe(gulp.dest("build/css"))
    .pipe(cssnano())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("build/css"));
});

gulp.task("js", function () {
  return gulp.src("source/js/blocks/*.js").pipe(remember({cacheName: "scripts"}))
    .pipe(sourcemaps.init())
    .pipe(concat("app.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("source/js"));
});

gulp.task("js-build", function () {
  return gulp.src("source/js/app.js")
    .pipe(gulp.dest("build/js"))
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("build/js"));
});

gulp.task("img-build", function () {
  return gulp.src("app/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("build/img"));
});

gulp.task("browser-sync", function () {
  browsersync.init({
    server: {
      baseDir: "source"
    }
  });
  browsersync.watch(["source/*.html", "source/css/style.css", "source/js/app.js", "source/img/**/*"], browsersync.reload);
});

gulp.task("source", function () {
  gulp.watch("source/pug/**/*.pug", gulp.parallel("pug"));
  gulp.watch("source/sass/**/*.scss", gulp.parallel("sass"));
  gulp.watch("source/js/blocks/*.js", gulp.parallel("js"));
});

gulp.task("build", gulp.parallel("html-build", "css-build", "js-build", "img-build"));

gulp.task("default", gulp.series(
  gulp.parallel("pug", "sass", "js"),
  gulp.parallel("source", "browser-sync")
));
