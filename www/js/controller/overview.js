(function () {
    'use strict';

    angular.module('wod-pal')
        .controller('OverviewController', ['$scope', function ($scope) {
            $scope.data = $scope.navi.topPage.data;
            console.log($scope.data);

            $scope.doWorkout = function() {
                console.log($scope.data);

                var workoutType = $scope.data.score_types.toLowerCase();
                console.log(workoutType);



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