 var gulp = require('gulp'),
  connect = require('gulp-connect');
var gulp = require('gulp-help')(require('gulp'));

gulp.task('lint', 'Lints all server side js', function () {
    gulp.src('src')
      .pipe(jshint());
});
gulp.task('connect', function() {
  connect.server({
    root: 'src',
    port: 1820,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('src')
    .pipe(connect.reload());
});

gulp.task('scss', function () {
  gulp.src('src')
    .pipe(connect.reload());
});
gulp.task('sass', function () {
  gulp.src('src')
    .pipe(connect.reload());
});



gulp.task('watch', function () {
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['*.sass'], ['sass']);
  gulp.watch(['*.scss'], ['scss']);
});

gulp.task('default', ['connect', 'watch']);
