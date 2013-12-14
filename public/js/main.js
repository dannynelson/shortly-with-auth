angular.module('shortly', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/shorten', {
      controller: "ShortenController",
      templateUrl: 'templates/shorten.html'
    })
    .when('/links', {
      controller: "LinksController",
      templateUrl: 'templates/links.html'
    })
    .otherwise({
      template: '<h1>404 Not Found</h1>'
    });
});

