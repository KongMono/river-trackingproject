angular.module('river.controllers')
    .controller('PeriodCtrl', function ($ionicPlatform, $ionicSlideBoxDelegate, DataFactory, Scopes, $scope) {

        Scopes.store('PeriodCtrl', $scope);

        $ionicPlatform.ready(function () {
            // $scope.dataProject = Scopes.get('DashboardCtrl').dataSelectProject;
            $scope.dataProject = DataFactory.dataProject[0];
            console.log($scope.dataProject);
        });

        $scope.navSlide = function (index) {
            $ionicSlideBoxDelegate.slide(index, 500);
        }

    });