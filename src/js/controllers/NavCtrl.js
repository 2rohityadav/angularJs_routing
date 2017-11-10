var app = angular.module('myApp', [])
app.controller('NavCtrl', [
  '$scope',
  '$location',
  function($scope, $location) {
    $scope.isActive = function(destination) {
      return destination === $location.path();
    }
  }
])
