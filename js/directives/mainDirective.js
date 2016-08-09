'use strict';

var app = angular.module('entertainApp');

app.directive('mainDirective',function(){
	return{
		restrict: 'AE',
		templateUrl: 'partials/home.html',
		replace: false
	};
});