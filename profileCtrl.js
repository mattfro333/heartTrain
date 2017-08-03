angular.module('sh')
.controller('profileCtrl', function( $scope, cardService ) {
 cardService.getcards().then(function(response){
   $scope.currentUser = response.currentUser;
   $scope.cards = response.cards;
 })

});
