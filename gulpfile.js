var gulp = require('gulp-help')(require('gulp'))(require('gulp-connect'));
var sass = require('gulp-sass');

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    port: 1820,
    livereload: true
  });
});

gulp.task('reload', function () {
  gulp.src('src')
    .pipe(connect.reload());
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/*.scss', 'src/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('src'));
});

gulp.task('watch', function () {
  gulp.watch('src/*.scss', ['sass']);
  gulp.watch(['src/*.html', 'src/*.css', 'src/*.js'], ['reload']);
});

gulp.task('default', ['sass','connect', 'watch']);
