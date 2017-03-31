angular.module('sh',['ui.router']).config(function($stateProvider, $urlRouterProvider){

            $stateProvider
            .state('home', {
              url: '/',
              templateUrl: '../views/home.html',
              controller: 'mainCtrl'
            })
            .state('battle', {
              url: '/battle',
              templateUrl: '../views/battle.html',
              // controller: 'heroCon'
            })
            .state('profile', {
              url: '/profile',
              templateUrl: '../views/profile.html',
              controller: 'profileCtrl'
            })

            .state('checkout', {
              url: '/checkout',
              templateUrl: '../views/pay.html',
              // controller: 'payCon'
            })
            $urlRouterProvider.otherwise('/')
      });
