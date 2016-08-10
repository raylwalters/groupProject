"use strict";

var app = angular.module('entertainApp');

app.controller('moviesCtrl',['$scope','movieList', function($scope,movieList){
	movieList.data().then(function(response){
		console.log(response);
		$scope.movies = response.data.results;
		$scope.movies.forEach(function(item,index){
			$scope.imageId = response.data.results[index].poster_path;
			$scope.image = "http://image.tmdb.org/t/p/w92/"+$scope.imageId;
		});
		
		console.log($scope.imageId);
		console.log($scope.image);
		
	});
}]);
