(function () {
    'use strict';

    angular.module('wod-pal')
        .controller('OverviewController', ['$scope', function ($scope) {
            $scope.data = $scope.navi.topPage.data;

            $scope.doWorkout = function() {
                $scope.navi.pushPage('pages/timer.html', {
                    data: {
                        title: $scope.data.title,
                        workout: $scope.data.workout,
                        workout_title: $scope.data.workout_title
                    }
                });
            };
        }]);
}());