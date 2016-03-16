/* global ionic */
angular.module('river.controllers')
    .controller('SettingCtrl', function ($scope, $ionicPlatform, $cordovaLocalNotification) {

        $ionicPlatform.ready(function () {

            if (ionic.Platform.isIOS()) {
                window.plugin.notification.local.promptForPermission();
            }
         
            // $scope.scheduleDelayedNotification = function () {
            //     var now = new Date().getTime();
            //     var _10SecondsFromNow = new Date(now + 10 * 1000);

            //     $cordovaLocalNotification.schedule({
            //         id: 2,
            //         title: 'Warning',
            //         text: 'Im so late',
            //         at: _10SecondsFromNow
            //     }).then(function (result) {
            //         console.log('Notification 2 triggered');
            //     });
            // };

            $scope.scheduleEveryMinuteNotification = function () {
                $cordovaLocalNotification.schedule({
                    id: 3,
                    title: 'Warning',
                    text: 'Dont fall asleep',
                    every: 'minute'
                }).then(function (result) {
                    console.log('Notification 3 triggered');
                });
            };



            $scope.clearNotification = function (params) {

            }

       

            // $scope.cancelSingleNotification = function () {
            //     $cordovaLocalNotification.cancel(3).then(function (result) {
            //         console.log('Notification 3 Canceled');
            //     });
            // };
        });


        function changeOriantationLandspace() {
            screen.lockOrientation('landscape');
        }

        function changeOriantationPortrait() {
            screen.lockOrientation('portrait');
        }
    });