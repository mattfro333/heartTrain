angular.module('sh')
.controller('cartCtrl', function( $scope, cartService ) {
 friendService.getProducts().then(function(response){
   $scope.products = response.products;

 })

});
