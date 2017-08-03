angular.module('sh')
.controller('mainCtrl', function( $scope, cardService, $location ) {

	$scope.login = function( user ) {
		cardService.login(user).then(function( response ) {
			console.log(response);
			if (response.userFound) {
				$location.path('/profile');
			} else {
				alert('user not found');
			}
		});
	}

});
