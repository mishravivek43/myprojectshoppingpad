(function () {
    angular.module('myModule', ['ngResource','ngMaterial', 'ui.router', 'ngAnimate', 'ngAria','ngMessages'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/index');
            $stateProvider
                .state('app', {
                    url: "",
                    abstract: true,
                    controller: 'homeController',
                    template: '<div ui-view></div>',
                    onEnter: function () {
                        console.log('in app');
                    }
                })
                //this is registeration's index states
                .state('app.home', {
                    url: "",
                    abstract: true,
                    controller: 'homePageController',
                    template: '<div ui-view></div>',
                    onEnter: function () {
                        console.log('in app.index');
                    }
                })
                //.state('app.displaydata', {
                //    url: '/index',
                //    templateUrl: 'templates/Displaydata.html',
                //    controller: 'homeController'
                //})
                //.state('app.stringSplit', {
                //    url: '/split',
                //    templateUrl: 'templates/splitstring.html',
                //    controller: 'homeController'
                //})
                .state('app.home.homepage', {
                    url: '/index',
                    templateUrl: 'templates/homepage.html',
                    controller: 'homePageController',
                    onEnter: function () {
                        console.log('xdfgdfg');
                    }
                })
                .state('app.home.register1', {
                    url: '/homepage/register',
                    templateUrl: 'templates/registration1.html',
                    controller: 'registerController'
                })

        });
})();