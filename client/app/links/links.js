angular.module('shortly.links', [])

.controller('LinksController', ['$scope', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
    Links.allLink()
      .then(function(links){
        console.log(links);
        console.log('inside getLinks')
      });
  };
}]);
