var app = angular.module('myApp')
  app.controller('AboutCtrl', [
    '$scope',
    function($scope) {
      $scope.title = "About Page";
      $scope.message = "Work hard - Play hard";
      $scope.readMoreBtn = "Read More";
    }
  ])
