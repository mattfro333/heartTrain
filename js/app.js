angular.module('sh',['ui.router']).config(function($stateProvider, $urlRouterProvider){

            $stateProvider
            .state('home', {
              url: '/',
              templateUrl: '../views/home.html',
              // controller: 'mainCon'
            })
            .state('battle', {
              url: '/battle',
              templateUrl: '../views/battle.html',
              // controller: 'heroCon'
            })
            .state('cart', {
              url: '/cart',
              templateUrl: '../views/cart.html',
              // controller: 'payCon'
            })

            .state('checkout', {
              url: '/checkout',
              templateUrl: '../views/pay.html',
              // controller: 'payCon'
            })
            $urlRouterProvider.otherwise('/')
      });
