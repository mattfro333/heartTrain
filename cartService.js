angular.module('sh')
.service('cardService', function( $http ) {


    this.login = function( user ) {
    return  $http({
        method: "POST",
        url: '/api/login',
        data: user
      })
      .then(function(response){
        return response.data
      })
    };

    this.getcards = function() {
    	return $http({
        method: 'GET',
        url: '/api/profiles'
      })
      .then(function(response){
        // console.log(response);
      return response.data;
    })
    };

});
