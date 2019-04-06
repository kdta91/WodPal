(function() {
    'use strict';

    angular.module('wod-pal')
        .controller('TimerController', ['$scope', function ($scope) {
            $scope.data = $scope.navi.topPage.data;
        }]);
}());