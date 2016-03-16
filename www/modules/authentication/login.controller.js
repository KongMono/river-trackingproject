angular.module('river.controllers')
    .controller('LoginCtrl', function ($state, $scope) {

        $scope.signIn = function (user) {
            console.log('Sign-In', user);
            $state.go('app.dashboard');
        };

    });