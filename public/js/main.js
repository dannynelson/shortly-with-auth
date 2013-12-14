angular.module('shortly', ['ngRoute']);

// .config(function ($routeProvider) {
//   $routeProvider
//     .when('/', {
//       // controller: 'MainController',
//       templateUrl: 'templates/app.html'
//     })
//     // .when('/shorten', {
//     //   // controller: "ShortenController",
//     //   templateUrl: 'templates/shorten.html'
//     // })
//     // .when('/links', {
//     //   // controller: "LinksController",
//     //   templateUrl: 'templates/links.html'
//     // })
//     // .otherwise({
//     //   template: '<h1>404 Not Found</h1>'
//     // });
// });

angular.module('shortly')
.controller('MainController', function($scope){
  $scope.name = "test";
});