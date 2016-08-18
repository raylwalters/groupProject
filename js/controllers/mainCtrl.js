'use strict';

var app = angular.module('entertainApp');

app.controller('mainCtrl',['$scope','mainMovies','mainBooks','mainMusic', function($scope,mainMovies,mainBooks,mainMusic){
	mainMovies.data().then(function(response){
		$scope.movieShort = response.data.results;
		$scope.image = "https://image.tmdb.org/t/p/w92/";
		console.log(response);
		console.log($scope.movieShort);
	});

	mainBooks.data().then(function(response){
		$scope.bookShort = response.data.items;
		console.log(response);
	});

	mainMusic.data().then(function(response){
		$scope.musicShort = response.data.artists.items;
		console.log($scope.musicShort);
		console.log(response);
	});

	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	$scope.active = 0;
	var slides = $scope.slides = [];
	var currIndex = 0;

}]);