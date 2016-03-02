angular.module('river.controllers')
    .controller('DescriptionCtrl', function ($ionicPlatform, $ionicSlideBoxDelegate, DataFactory, Scopes, $scope) {

        Scopes.store('DescriptionCtrl', $scope);

        $ionicPlatform.ready(function () {
            // $scope.dataProject = Scopes.get('DashboardCtrl').dataSelectProject;
            $scope.dataProject = DataFactory.dataProject[0];
            console.log($scope.dataProject);
        });

        $scope.navSlide = function (index) {
            $ionicSlideBoxDelegate.slide(index, 500);
        }

    });