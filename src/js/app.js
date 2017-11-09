var app = angular.module('myApp', [
    'ngRoute'
  ])
  app.config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true).hashPrefix('!');
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: "views/404.html"
        })
    }
  ]);
