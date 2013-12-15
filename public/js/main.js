angular.module('shortly', ['ngRoute', 'ngCookies'])

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
    .when('/auth', {
      controller: "LoginController",
      templateUrl: "templates/login.html"
    });
    // .otherwise({
    //   template: '<h1>404 Not Found</h1>'
    // });
})

.run(function($rootScope, $location, $cookieStore, Session) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (!$cookieStore.get('logIn')) {
      if (next.$$route.controller !== 'LoginController') $location.path('/auth');
    }
  });
});

