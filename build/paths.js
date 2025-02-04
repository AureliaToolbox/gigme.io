var appRoot = 'client/src/';
var outputRoot = 'public/dist/';

module.exports = {
  root: appRoot,
  clientSource: './../gigme.io-client/client/*',
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  output: outputRoot,
  scss: appRoot + '**/*.scss'
};
