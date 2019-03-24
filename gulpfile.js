const gulp = require("gulp"),
      sass = require("gulp-sass"),
      browserSync = require("browser-sync"),
      reload = browserSync.reload,
      plumber = require("gulp-plumber");

const postcss = require("gulp-postcss"),
      sourceMaps = require("gulp-sourcemaps"),
      cssImport = require("postcss-import"),
      precss = require("precss"),
      autoprefixer = require("autoprefixer"),
      minify = require("cssnano");




var src = {
    js: "src/js/*.js",
    scss: "src/styles/**/*.scss",
    css:  "src/styles/",
    html: "*.html"
};



gulp.task("serve", function() {
reload();
    browserSync.init({
        server: {
            baseDir: "./"
        }   
    })

    gulp.watch(src.scss, ["sass"]);
    gulp.watch([src.html, src.scss, src.js]).on("change", reload);
});




gulp.task("sass", function() {
 
  var processors = [
    postcss,
    cssImport,
    precss,
    autoprefixer,
    minify
  ];

  return gulp
    .src(src.scss)
    .pipe(plumber())
    .pipe(sourceMaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(src.css))
    .pipe(browserSync.stream());
});

gulp.task("watch-sass", function() {
    gulp.watch(src.scss).on("change", ["sass"]);
})

gulp.task("watch-js", function() {
    gulp.watch(src.js).on("change", reload);
})

gulp.task("reload", function() {
    reload();
});




gulp.task("build-sass", ["sass"]);

gulp.task("watch-sass", ["watch-sass"]);

gulp.task("watch-js", ["watch-js"]);

gulp.task("default", ["sass", "serve"]);
