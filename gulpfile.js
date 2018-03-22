//Gulpfile

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat');

var jsSources = ['build/scripts/*.js'],
    sassSources = ['build/styles/*.scss'],
    htmlSources = ['**/*.html'];


gulp.task('js', function() {
  return gulp.src(jsSources)
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('assets/js'))
  .pipe(browserSync.stream());
});

gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('sass-watch', ['sass'], function (done) {
    done();
});

gulp.task('sass', function() {
  return gulp.src(sassSources)
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('assets/css'))
  .pipe(browserSync.stream());
});

gulp.task('log', function() {
  gutil.log('== Log ==')
});

gulp.task('watch', function() {

  browserSync.init({
        server: ".",
        port: 3030
    });

  gulp.watch(jsSources, ['js-watch']);
  gulp.watch(sassSources, ['sass-watch']);
  gulp.watch(htmlSources).on('change', browserSync.reload);
});


gulp.task('default', ['watch']);
