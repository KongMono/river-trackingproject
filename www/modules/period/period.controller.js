angular.module('river.controllers')
    .controller('PeriodCtrl', function ($ionicPlatform, $ionicModal, $ionicScrollDelegate, $ionicSlideBoxDelegate, DataFactory, Scopes, $scope) {

        Scopes.store('PeriodCtrl', $scope);

        $ionicPlatform.ready(function () {
            // $scope.dataProject = Scopes.get('DashboardCtrl').dataSelectProject;
            $scope.dataProject = DataFactory.dataProject[0];
            console.log($scope.dataProject);
        });

        $scope.navSlide = function (index) {
            $ionicSlideBoxDelegate.slide(index, 500);
        }

        $scope.allImages = [
            {
                src: 'img/adam.jpg'
            }, {
                src: 'img/ben.jpg'
            }, {
                src: 'img/max.jpg'
            }];

        $scope.zoomMin = 1;

        $scope.showImages = function (index) {
            $scope.activeSlide = index;
            $scope.showModal('templates/gallery-zoomview.html');
        };

        $scope.showModal = function (templateUrl) {
            $ionicModal.fromTemplateUrl(templateUrl, {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
                $scope.modal.show();
            });
        }

        $scope.closeModal = function () {
            $scope.modal.hide();
            $scope.modal.remove()
        };

        $scope.updateSlideStatus = function (slide) {
            var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
            if (zoomFactor == $scope.zoomMin) {
                $ionicSlideBoxDelegate.enableSlide(true);
            } else {
                $ionicSlideBoxDelegate.enableSlide(false);
            }
        };

    });