/**
 * Tree directive
 * ------------------------------------------------------------------------
 * The tree directive can take in a javascript object and spits out a tree to the UI.
 */
angular.module('angularTree')

.directive('tree', function (recursionHelper) {

  return {

    templateUrl: 'templates/tree.html',
    restrict: 'E',
    scope: {
      data: '='
    },
    compile: function (el) {
      return recursionHelper.compile(el);
    }
  };
});
