angular.controller('shoppingCtrl',function($scope){
    $scope.products = [];
    $scope.cartItems = [];

    function initProducts(){
        $scope.products = [
            { name : 'CD', price : 110, id : 1 },
            { name : 'DVD', price : 150, id: 2 }
        ]
    }


    initProducts();

    $scope.addCartItem = function(product){
        $scope.cartItems.push({ name : product.name, quantity: 1, id : product.id, price : product.price })
    }

    $scope.cartSum = function(){
        var sum =0;
        $scope.cartItems.forEach(function(item){
            sum += item.quantity * item.price;
        });

        return sum;
    }
})
