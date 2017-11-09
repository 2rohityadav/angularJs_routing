var app = angular.module('myApp')
  app.controller('HomeCtrl', [
    '$scope',
    function($scope) {
      console.log('Loaded.');
      $scope.title = "Home Page";
      $scope.message = "Work hard - Play hard";
      $scope.readMoreBtn = "Read More";
    }
  ]);
