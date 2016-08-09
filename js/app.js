var app = angular.module('entertainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'partials/home.html',
		controller:'mainCtrl'
	})
	.when('/movies',{
		templateUrl:'/partials/movies.html',
		controller:'moviesCtrl'
	})
	.when('/books', {
		templateUrl:'/partials/books.html',
		controller:'moviesCtrl'
	})
	.otherwise({
		redirectTo:'/'
	});
});
