"use strict";

var app = angular.module('entertainApp');

app.controller('moviesCtrl',['$scope','movieList', function($scope,movieList){
$scope.saveId = function(info){
        var movieId = info.id;
        movieList.data(movieId);
        console.log(movieId);
    }
}]);

app.controller('idCtrl',['$scope','movieList', function($scope,movieList){
        movieList.data().then(function(response){
            console.log(response);
            $scope.movies = response.data.results;
        });
 }]);
