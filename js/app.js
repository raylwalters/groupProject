var app = angular.module('entertainApp', ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'index.html',
		controller:'mainCtrl'
	})
	.when('/movies',{
		templateUrl:'partials/movies.html',
		controller:'moviesCtrl'
	})
	.otherwise({
		redirect:'/'
	});
});
