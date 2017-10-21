var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var paths = require('../paths');

gulp.task('copy-client', function() {
  return gulp.src(paths.clientSource)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(gulp.dest(paths.root));
});
