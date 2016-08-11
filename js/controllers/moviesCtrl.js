"use strict";

var app = angular.module('entertainApp');

app.controller('moviesCtrl',['$scope','movieList', function($scope,movieList){
	$scope.saveId = function(info){
		var movieId = info;
		console.log($scope.movieId);
		movieList.passId(movieId);
		console.log(movieId);
		getUrl();
	}
	function getUrl(){
		movieList.sendData().then(function(response){
			$scope.movies = response;
			// Build image url and store in variable 
			$scope.image = "http://image.tmdb.org/t/p/w92/";
	});

		
	
}
	$scope.info = {
		    model: null,
		    availableOptions: [
		      {id: '28', name: 'Action'},
		      {id: '12', name: 'Adventure'},
		      {id: '16', name: 'Animation'},
		      {id: '35', name: 'Comedy'},
		      {id: '80', name: 'Crime'},
		      {id: '99', name: 'Documentary'},
		      {id: '10751', name: 'Family'},
		      {id: '14', name: 'Fantasy'},
		      {id: '10769', name: 'Foreign'},
		      {id: '36', name: 'History'},
		      {id: '27', name: 'Horror'},
		      {id: '10402', name: 'Music'},
		      {id: '9648', name: 'Mystery'},
		      {id: '10749', name: 'Romance'},
		      {id: '878', name: 'Science Fiction'},
		      {id: '10770', name: 'TV Movie'},
		      {id: '53', name: 'Thriller'},
		      {id: '10752', name: 'War'},
		      {id: '37', name: 'Western'}
		    ]
		   };
}]);






