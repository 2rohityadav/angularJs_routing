var app = angular.module('myApp')
  app.controller('ContactCtrl', [
    '$scope',
    function($scope) {
      $scope.title = "Contact Page";
      $scope.message = "Work hard - Play hard";
      $scope.readMoreBtn = "Read More";
    }
  ]);
