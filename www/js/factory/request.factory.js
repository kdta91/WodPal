'use strict';

angular.module('wod-pal').factory('WodPalFactory', function ($http) {
    var WodPalFactory = function () {
        this.items = [];
        this.busy = false;
    };

    WodPalFactory.prototype.getWodList = function (wod) {
        var self = this;

        if (self.busy) return;
        self.busy = true;

        $http.get('data/' + wod + '.json')
            .then(function (res) {
                angular.forEach(res.data, function (values) {
                    self.items.push(values);
                });

                self.busy = false;
            });
    };

    return WodPalFactory;
});