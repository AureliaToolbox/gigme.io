var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var paths = require('../paths');
var vinylPaths = require('vinyl-paths');
var del = require('del');

gulp.task('clean-src', function() {
  return gulp.src(['./client/src'])
    .pipe(vinylPaths(del));
});

gulp.task('copy-client', ['clean-src'], function() {
  return gulp.src('./../gigme.io-client/client/src/**/*')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(gulp.dest('./client/src'));
});
