const gulp = require("gulp");
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
//compile scss into css

task('style', function() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});
exports.style = style;