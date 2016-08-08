'use strict';

var app = angular.module('entertainApp');

app.factory('movieList',['$http', function($http){
	return{
		data: function(){
			return $http.get('https://api.themoviedb.org/3/genre/28/movies?api_key=f26d8020ab7996e8ae35fa0d465c6732');
		}
	};
}]);
