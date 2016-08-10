'use strict';

var app = angular.module('entertainApp');

app.factory('movieList',['$http', function($http){
	return{
		data: function(){
			return $http.get("http://api.themoviedb.org/3/discover/movie?api_key=f26d8020ab7996e8ae35fa0d465c6732&with_genres=12");
		}
	};
	
}]);

