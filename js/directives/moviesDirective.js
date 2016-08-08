'use strict';

var app = angular.module('entertainApp');

app.directive('movies',function(){
	return{
		restrict: 'AE',
		templateUrl: 'partials/movies.html',
		replace: false
	};
});