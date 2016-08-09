"use strict";

var app = angular.module('entertainApp');

app.controller('moviesCtrl',['$scope','movieList', function($scope,movieList){
// app.controller('moviesCtrl', function($scope,movieList){
	movieList.data().then(function(response){
		console.log(response);
		// console.log("hello");
	});
}]);