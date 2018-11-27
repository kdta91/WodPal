'use strict';

var app = angular.module('wod-pal', ['onsen', 'ngSanitize', 'infinite-scroll']);
app.config(function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
});
app.controller('AppController', function($scope) {
    $scope.goToPage = function(url, options) {
        $scope.navi.pushPage('pages/'+url+'.html', options);
    };
})
.controller('BenchmarkController', function(WodPalFactory, $scope, $http) {
    $scope.benchMarkWods = new WodPalFactory();

    $scope.scrollBenchMarkWods = function() {
        $scope.benchMarkWods.getWodList('benchmark_wods');
    };
})
.controller('GirlController', function(WodPalFactory, $scope, $http) {
    $scope.girlWods = new WodPalFactory();

    $scope.scrollGirlWods = function() {
        $scope.girlWods.getWodList('the_girls');
    };
})
.controller('HeroController', function(WodPalFactory, $scope, $http) {
    $scope.heroWods = new WodPalFactory();

    $scope.scrollHeroWods = function() {
        $scope.heroWods.getWodList('hero_wods');
    };
})
.controller('QualifierController', function(WodPalFactory, $scope, $http) {
    $scope.qualifierWods = new WodPalFactory();

    $scope.scrollQualifierWods = function() {
        $scope.qualifierWods.getWodList('qualifiers');
    };
})
.controller('OverviewController', function($scope, $http) {
    var data = $scope.navi.topPage.data;

    $scope.title = data.title;
    $scope.workout = data.workout;
    $scope.workout_title = data.workout_title;
});