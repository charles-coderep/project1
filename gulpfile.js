const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
//compile scss into css
function style() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream()); // stream to browser
}
function watch() {
    browserSync.init({
        server: {
           baseDir: "./src",
           index: "/index.html" 
        }
    });
    gulp.watch('src/scss/**/*.scss', style).on('change', browserSync.reload); // watch changes to scss, if any go to style task and convert to css
    gulp.watch('src/css/style.css').on('change', browserSync.reload);
    gulp.watch("src/index.html").on('change',browserSync.reload);
    gulp.watch('src/js/script.js').on('change', browserSync.reload);
    gulp.watch('src/js/utils.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;