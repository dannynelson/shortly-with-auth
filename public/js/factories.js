angular.module('shortly')
.factory('Session', function($cookieStore) {
  var session = {
    logIn: function() {
      $cookieStore.put('logIn', true);
    }
  };

  return session;
});