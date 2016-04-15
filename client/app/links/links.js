angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', ['$scope','Links','Auth',function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    // console.log('Is this working?')
    // console.log('links', Links);
    Links.allLink()
      .then(function(links){
        // console.log('links###########',links);
        // console.log('inside getLinks')
        $scope.data.links = links;
      });
  };
  $scope.getLinks();
  $scope.signOut = function(){
    Auth.signout();
  }
}]);
