var gulp = require('gulp');
var jspm = require('jspm/api');
var paths = require('../paths');
var fs = require('fs');

var bundleIt = function () {
  return jspm.bundle(
    [
      // '*',
      'aurelia-skeleton-navigation/*',
      'aurelia-bootstrapper',
      'aurelia-http-client',
      'aurelia-dependency-injection',
      'aurelia-router',
      // 'npm:core-js@0.4.10',
      //these below wont be needed in near future as Aurelia team will fix it
      'github:aurelia/history-browser@0.3.0',
      'github:aurelia/templating-router@0.11.0',
      'github:aurelia/templating-resources@0.10.0',
      'github:aurelia/templating-binding@0.10.0',
      'github:aurelia/loader-default@0.6.0'
    ].join(' + '),
    'app-bundle.js',
    {inject:true, minify: true}
  )
};

gulp.task('bundle', function (done) {
  bundleIt().then(function () {
    fs.rename('app-bundle.js', 'dist/app-bundle.js', done);
  });
});

gulp.task('copy-bundle', function (done) {
  if (fs.existsSync('app-bundle.js')) {
    fs.rename('app-bundle.js', 'dist/app-bundle.js', done);
  } else {
    bundleIt()
  }
});
