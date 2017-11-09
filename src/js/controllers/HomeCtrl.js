var app = angular.module('myApp')
  app.controller('HomeCtrl', [
    '$scope',
    function($scope) {
      console.log('Loaded.');
      $scope.message = 'Hello World Test';
    }
  ]);
