angular.module('sh')
.controller('profileCtrl', function( $scope, friendService ) {
 friendService.getFriends().then(function(response){
   $scope.currentUser = response.currentUser;
   $scope.friends = response.friends;
 })

});
