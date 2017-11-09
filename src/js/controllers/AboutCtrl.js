var app = angular.module('myApp')
  app.controller('AboutCtrl', [
    '$scope',
    function($scope) {
      $scope.message = "What you know about me!"
    }
  ])
