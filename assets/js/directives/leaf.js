/**
 * Leaf directive
 * ------------------------------------------------------------------------
 * Leaf in a tree. Not sure this needs to be its own directive. Lets just do it for now. We can
 * combine it with node later if we need to.
 */
angular.module('angularTree')

.directive('leaf', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/leaf.html',
    scope: {
      data: '='
    },
    link: function (scope, el, attrs) {

    }
  }
});
