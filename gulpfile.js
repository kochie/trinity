// gulpfile.js
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');


gulp.task('scripts', function(){
  gulp.src('client/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(livereload())
});

gulp.task('page', function(){
  gulp.src('client/*.html')
    .pipe(plumber())
    .pipe(livereload())
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('client/js/*.js', ['scripts']);
  gulp.watch('client/*.html', ['page'])
});

gulp.task('default', ['scripts', 'watch']);
