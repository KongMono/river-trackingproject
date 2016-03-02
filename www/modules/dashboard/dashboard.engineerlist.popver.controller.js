/* global ionic */
angular.module('river.controllers')
    .controller('EngineerlistCtrl', function ($ionicPlatform, $ionicModal,
        $scope, Scopes) {

        Scopes.store('EngineerlistCtrl', $scope);

        $scope.close = function () {
            Scopes.get('DashboardCtrl').closeModal();
        }

    });