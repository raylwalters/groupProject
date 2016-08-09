"use strict";

var app = angular.module('entertainApp');

app.controller("navCtrl",["$scope", "$location", function($scope, $location){
  $scope.isActive = function(destination){
    return destination === $location.path();
  }
}]);