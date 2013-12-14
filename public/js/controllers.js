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
});