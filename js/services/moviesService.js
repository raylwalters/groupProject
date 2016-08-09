'use strict';

var app = angular.module('entertainApp');

// app.factory('movieList',['$http', function($http){
app.factory('movieList', function($http){
	return{
		data: function(){
			return $http.get("https://api.themoviedb.org/3/genre/28/movies?api_key=f26d8020ab7996e8ae35fa0d465c6732");
			console.log(data);
		}
	};
	// $http({
	// 	method: 'GET',
	// 	url: "https://api.themoviedb.org/3/genre/28/movies?api_key=f26d8020ab7996e8ae35fa0d465c6732/"
	// }).then(function(response){
	// 	// console.log(response);
	// }, function(response){
	// 	// console.log("nope");
	// });
	// $http.get('/https://api.themoviedb.org/3/genre/28/movies?api_key=f26d8020ab7996e8ae35fa0d465c6732/', config).then(successCallback, errorCallback);
});
