angular.module('shortly')
.factory('Session', function() {
  var session = {
    loggedIn: false
  };

  return session;
});