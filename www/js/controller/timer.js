(function() {
    'use strict';

    angular.module('wod-pal')
        .controller('TimerController', ['$scope', function ($scope) {
            $scope.data = $scope.navi.topPage.data;

            $scope.timerStatus = '';
            $scope.toggleTimer = function () {
                switch ($scope.timerStatus) {
                    case 'stopped':
                        $scope.$broadcast('timer-resume');
                        $scope.timerStatus = 'started';
                        break;
                    case 'started':
                        $scope.$broadcast('timer-stop');
                        $scope.timerStatus = 'stopped';
                        break;
                    default:
                        $scope.$broadcast('timer-start');
                        $scope.timerStatus = 'started';
                        break;
                }
            };

            $scope.resetTimer = function () {
                $scope.$broadcast('timer-reset');
                $scope.timerStatus = '';
            };
        }]);
}());