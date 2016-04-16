angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.addLink = function(){
     Links.newLink($scope.url)
      .then(function(){
        $location.path('/links');
      });
  };
  $scope.signOut = function(){
    Auth.signout();
  };
});
