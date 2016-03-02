/* global ionic */
angular.module('river.controllers')
    .controller('DashboardCtrl', function ($ionicPlatform, $ionicModal, $ionicLoading,
        $ionicScrollDelegate, $filter, $scope, $timeout, $ionicSlideBoxDelegate, DataFactory, Scopes) {

        Scopes.store('DashboardCtrl', $scope);
        $scope.selectedDate = DataFactory.selectFilterDate[0].name;

        $ionicPlatform.ready(function () {

            $ionicLoading.show();
            $scope.dataStatus = DataFactory.dataStatus;
            $scope.dataProject = DataFactory.dataProject;
            
            // set defaults selectFilterDate
            $scope.selectFilterDate = DataFactory.selectFilterDate;

            $scope.masterdataProject = $scope.dataProject;
            $scope.chooseStatus = $scope.dataStatus[0];

            $scope.shoutLoud = function (newValuea, oldValue) {
                console.log("changed from " + JSON.stringify(oldValue) + " to " + JSON.stringify(newValuea));
            };

            $ionicLoading.hide();
        });

        $scope.navSlide = function (index) {
            $ionicSlideBoxDelegate.slide(index, 500);
        }

        $scope.greyImg = function (obj) {
            var style;

            if (ionic.Platform.isAndroid()) {
                if ($scope.chooseStatus != obj) {
                    style = { "opacity": "0.3" };
                } else {
                    style = { "opacity": "1" };
                }
            } else {
                if ($scope.chooseStatus != obj) {
                    style = { "-webkit-filter": "opacity(0.3)" };
                } else {
                    style = { "-webkit-filter": "none" };
                }
            }
            return style;
        }

        $scope.selectProject = function (obj) {
            $scope.dataSelectProject = obj;
        }


        $scope.clickStatus = function (obj) {
            $scope.chooseStatus = obj;
            var matches = $scope.masterdataProject.filter(function (datarow) {
                if (obj.title == "ทั้งหมด") {
                    return true;
                } else if (obj.title != datarow.status) {
                    return false;
                }
                return true;
            });
            $scope.dataProject = matches;
            $ionicScrollDelegate.resize();
        }

        $scope.setColorStatus = function (obj) {

            if (obj.status == "เกินกำหนด") {
                return "font-red"
            } else if (obj.status == "ตามเวลา") {
                return "font-green"
            } else {
                return "font-purple"
            }
        }

        $scope.setIcon = function (obj) {
            if (obj.title == "ทั้งหมด") {
                return "fa fa-comments"
            } else if (obj.title == "เกินกำหนด") {
                return "fa fa-bar-chart-o"
            } else if (obj.title == "ตามเวลา") {
                return "fa fa-shopping-cart"
            } else {
                return "fa fa-globe"
            }
        }

        $scope.setColorBg = function (obj) {
            if (obj.title == "ทั้งหมด") {
                return "dashboard-blue"
            } else if (obj.title == "เกินกำหนด") {
                return "dashboard-red"
            } else if (obj.title == "ตามเวลา") {
                return "dashboard-green"
            } else {
                return "dashboard-purple"
            }
        }

        $scope.showEngineerlist = function () {
            $ionicModal.fromTemplateUrl('modules/dashboard/dashboard.engineerlist.popver.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
                $scope.openModal();
            });

            $scope.openModal = function () {
                $scope.modal.show();
            };

            $scope.closeModal = function () {
                $scope.modal.hide();
            };

            $scope.$on('$destroy', function () {
                $scope.modal.remove();
            });

        };

    });