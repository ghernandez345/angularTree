/**
 * Main Controller
 * ------------------------------------------------------------------------
 * Just a controller to make some requrests. Nothing much to see here.
 */
angular.module('angularTree')

.controller('MainCtrl', function ($scope, sailsProject) {

  $scope.treeData = sailsProject;

});
