/**
 * grunt/pipeline.js
 *
 * The order your css, javascript, and template files should be injected.
 */
var cssFilesToInject = [
  'styles/**/*.css'
];

var jsFilesToInject = [

  // deps
  'vendor/angular/angular.min.js',

  // src
  'js/**/*.js'
];

var templateFilesToInject = [];



module.exports = {
  cssFilesToInject: cssFilesToInject.map(function(path) {
    return '.tmp/public/' + path;
  }),
  jsFilesToInject: jsFilesToInject.map(function(path) {
    return '.tmp/public/' + path;
  }),
  templateFilesToInject: templateFilesToInject.map(function(path) {
    return 'assets/' + path;
  })
};
