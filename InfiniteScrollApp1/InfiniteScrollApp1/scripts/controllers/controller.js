(function () {
  'use strict';

    angular
      .module('infiniteScrollApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('infiniteController', function ($scope, $http) {
          this.infiniteItems = {
                numLoaded_: 0,
                toLoad_: 0,

                // Required.
                getItemAtIndex: function(index) {
                    if (index > this.numLoaded_) {
                        this.fetchMoreItems_(index);
                        return null;
                    }
                    return index;
                },

                getLength: function() {
                    return this.numLoaded_ + 5;
                },

                fetchMoreItems_: function(index) {
                    if (this.toLoad_ < index) {
                        this.toLoad_ += 20;
                        $http({
                            method: 'GET',
                            url: '/api/DataAPI'
                        }).then(angular.bind(this, function (response) {
                            console.log("Response is: " + JSON.parse(response.data));
                            var respData = JSON.parse(response.data);
                            this.numLoaded_ = respData;
                            console.log("Num loaded: " + this.numLoaded_);
                        }));
                    }
                }
            };
      });
})();