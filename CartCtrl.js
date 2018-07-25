angular.module('sh')
.controller('cartCtrl', function( $scope, friendService ) {
 friendService.getFriends().then(function(response){
   $scope.User = response.User;
   $scope.friends = response.friends;
 })

});
