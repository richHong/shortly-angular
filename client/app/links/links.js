angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', ['$scope','Links','Auth',function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    Links.allLink()
      .then(function(links){
        $scope.data.links = links;
      });
  };
  $scope.getLinks();
  $scope.signOut = function(){
    Auth.signout();
  };
}]);
