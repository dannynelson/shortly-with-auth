angular.module('shortly')

.controller('ShortenController', function($scope, $http){
  $scope.addLink = function() {
    $http({
      method: 'POST',
      url: '/links',
      data: {url: $scope.link}
    });
    $scope.link = '';
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
});