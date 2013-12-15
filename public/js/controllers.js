angular.module('shortly')

.controller('ShortenController', function($scope, $http){
  $scope.addLink = function() {
    if (/^(?:ht|f)tps?:\/\/(?:[a-zA-Z0-9])(?:[a-zA-Z0-9-+%]+\.)?(?:[a-z-A-Z0-9])(?:[a-zA-Z0-9-+%]+)\.(?:\w){2,4}(?:\.(?:\w){2})?$/.test($scope.link)) {
      console.log($scope.link);
      $http({
        method: 'POST',
        url: '/links',
        data: {url: $scope.link}
      });
      $scope.link = '';
    } else {
      console.error("Not sent");
    }
  };
})

.controller('LinksController', function($scope, $http){
  $scope.sort = "-visits";
  $http({
    method: 'GET',
    url: '/links'
  }).success(function(data) {
    $scope.links = data;
  });
})

.controller('LoginController', function($scope, $q, $http, $location, Session) {
  $scope.formType = 'login';
  $scope.submit = function () {
    $http({
      method: 'POST',
      url: '/api/' + $scope.formType,
      params: {
        username: $scope.username,
        password: $scope.password
      }
    }).success(function () {
      Session.loggedIn = true;
      $location.path('/links');
    });
  };
});