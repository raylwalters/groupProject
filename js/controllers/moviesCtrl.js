"use strict";

var app = angular.module('entertainApp');

app.controller('moviesCtrl',['$scope','movieList', function($scope,movieList){
	movieList.data().then(function(response){
		console.log(response);
		$scope.movies = response.data.results;
		// console.log($scope.movies);
		// $scope.movies.forEach(function(index){

		// });
	});
}]);