"use strict";

var app = angular.module('entertainApp');

app.controller('moviesCtrl',['$scope','movieList', function($scope,movieList){
	movieList.data().then(function(response){
		console.log(response);
		$scope.movies = response.data.results;
		// $scope.imageId1 = response.data.results[0].poster_path;
		// $scope.image1 = "http://image.tmdb.org/t/p/w92/"+$scope.imageId1;
		// $scope.imageId2 = response.data.results[1].poster_path;
		// $scope.image2 = "http://image.tmdb.org/t/p/w92/"+$scope.imageId2;


		$scope.movies.forEach(function(item,index){
			$scope.imageId = response.data.results[index].poster_path;
			$scope.image = "http://image.tmdb.org/t/p/w92/"+$scope.imageId;
			// $scope.image = "http://image.tmdb.org/t/p/w92/";
			
			
		});
		
		
		console.log($scope.imageId);
		console.log($scope.image);
		
	});
}]);
