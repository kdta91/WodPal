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
.controller('BenchmarkController', function(WodPalFactory, $scope) {
    $scope.benchMarkWods = new WodPalFactory();

    $scope.scrollBenchMarkWods = function() {
        $scope.benchMarkWods.getWodList('benchmarks');
    };
})
.controller('GirlController', function(WodPalFactory, $scope) {
    $scope.girlWods = new WodPalFactory();

    $scope.scrollGirlWods = function() {
        $scope.girlWods.getWodList('girls');
    };
})
.controller('HeroController', function(WodPalFactory, $scope) {
    $scope.heroWods = new WodPalFactory();

    $scope.scrollHeroWods = function() {
        $scope.heroWods.getWodList('heroes');
    };
})
.controller('QualifierController', function(WodPalFactory, $scope) {
    $scope.qualifierWods = new WodPalFactory();

    $scope.scrollQualifierWods = function() {
        $scope.qualifierWods.getWodList('qualifiers');
    };
});