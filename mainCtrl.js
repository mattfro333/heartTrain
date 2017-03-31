angular.module('sh')
.controller('mainCtrl', function( $scope, friendService, $location ) {

	$scope.login = function( user ) {
		friendService.login(user).then(function( response ) {
			console.log(response);
			if (response.userFound) {
				$location.path('/profile');
			} else {
				alert('user not found');
			}
		});
	}

});
