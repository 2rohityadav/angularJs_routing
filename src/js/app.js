var app = angular.module('myApp', [
    'ngRoute'
  ])
  app.config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/contactme', {
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl'
        })
        .otherwise({
          redirectTo: 'views/404.html'
        })

        // $locationProvider.html5Mode(true).hashPrefix('!');
        $locationProvider.html5Mode({
          enabled: true, requireBase: false
        })
    }
  ]);

  app.controller('NavCtrl', [
    '$scope',
    '$location',
    function($scope, $location) {
      $scope.isActive = function(destination) {
        return destination === $location.path();
      }
    }
  ])
