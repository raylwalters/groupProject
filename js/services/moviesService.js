'use strict';

var app = angular.module('entertainApp');

app.factory('movieList',['$http', function($http){

	var randomId = {};

	function passId(movieId){
		randomId = movieId;
		console.log(randomId);
	}

	function sendData(){
			return $http({
				url: "http://api.themoviedb.org/3/discover/movie?api_key=f26d8020ab7996e8ae35fa0d465c6732&release_date.lte=2016-05-01&with_genres="+ randomId.id,
				method: "GET"
			}).then(function(response){
				console.log(response.data.results);
				return response.data.results;
			});
		}

		return {
			passId: passId,
			sendData: sendData
		};
		

		
	
	

}]);

