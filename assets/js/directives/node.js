/**
 * Node directive
 * ------------------------------------------------------------------------
 * Node in a tree.
 */
angular.module('angularTree')

.directive('node', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/node.html',
    scope: {
      data: '='
    },
    link: function (scope, el, attrs) {
      console.log('this nodes data', scope.data);
    }
  };
})
