/* global ionic */
angular.module('river.controllers')
    .controller('TimelistCtrl', function (DataFactory, $ionicPlatform, $ionicModal,
        $scope, Scopes) {

        Scopes.store('TimelistCtrl', $scope);

        $ionicPlatform.ready(function () {
            $scope.selectFilterDate = DataFactory.selectFilterDate;
            // changeOriantationLandspace();
        });

        $scope.close = function () {
            Scopes.get('DashboardCtrl').closeModal();
        }

        $scope.chooseTime = function (params) {
            // changeOriantationPortrait();
            $scope.close();
        }

        function changeOriantationLandspace() {
            screen.lockOrientation('landscape');
        }

        function changeOriantationPortrait() {
            screen.lockOrientation('portrait');
        }

    });