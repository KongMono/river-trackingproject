/* global StatusBar */
angular.module('river', [
    'ionic',
    'river.controllers',
    'river.services',
    'river.factory',
    'ngCordova',
    'ionic-modal-select'])

    .constant('$ionicLoadingConfig', {
        noBackdrop: false,
        template: '<ion-spinner icon="android"></ion-spinner><br>Loading...'
    })

    .run(function ($ionicPlatform, $rootScope) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleLightContent();
            }

            $rootScope.$on('scope.stored', function (event, data) {
                console.log("scope.stored", data);
            });
        });

    })

    .config(function ($ionicConfigProvider, $stateProvider, $urlRouterProvider) {

        $ionicConfigProvider.views.swipeBackEnabled(false);
        $ionicConfigProvider.views.transition("android");

        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppController'
            })
            .state('app.dashboard', {
                url: '/dashboard',
                views: {
                    'menuContent': {
                        templateUrl: 'modules/dashboard/dashboard.html',
                        controller: 'DashboardCtrl'
                    }
                }
            })
            .state('app.profile', {
                url: '/profile',
                views: {
                    'menuContent': {
                        templateUrl: 'modules/profile/profile.html',
                        controller: 'ProfileCtrl'
                    }
                }
            })
            .state('app.timeline', {
                url: "/dashboard/timeline",
                views: {
                    'menuContent': {
                        templateUrl: 'modules/timeline/timeline.html',
                        controller: 'TimelineCtrl'
                    }
                }
            })
            .state('app.description', {
                url: '/dashboard/description',
                views: {
                    'menuContent': {
                        templateUrl: 'modules/description/description.html',
                        controller: 'DescriptionCtrl'
                    }
                }
            })
            .state('app.period', {
                url: '/dashboard/description/period',
                views: {
                    'menuContent': {
                        templateUrl: 'modules/period/period.html',
                        controller: 'DescriptionCtrl'
                    }
                }
            })
            .state('app.setting', {
                url: '/setting',
                views: {
                    'menuContent': {
                        templateUrl: 'modules/setting/setting.html'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/dashboard');
    });
