angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(){
    // console.log("inside addLink")
    // console.log('our url', $scope.url)
    // console.log('$location',$location)
     Links.newLink($scope.url)
      .then(function(){
        $location.path('/links');
      });
  };
  $scope.signOut = function(){
    Auth.signout();
  }
});
