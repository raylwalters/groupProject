'use strict';

var app = angular.module('entertainApp');

app.controller('booksCtrl', function($scope,$http) {
	$http ({
		method: 'GET',
		url: 'https://www.googleapis.com/books/v1/volumes?q=search+terms:jane+austen&key=AIzaSyBYgMe4rhHaREeA8Z38sDKe-_iOJrIo--w'
	}).then(function successCallback(response) {
		console.log(response.data.items[0].volumeInfo.authors);
		$scope.id=response.data.items[0].volumeInfo.authors;
	}, function errorCallback(response) {
		console.log('oops');	
	});
});


/*var app = angular.module('myModule');

app.controller('myController', function($scope,$http) {
	$http ({
		method: 'GET',
		url: 'https://www.googleapis.com/books/v1/volumes?q=search+terms:jane+austen&key=AIzaSyBYgMe4rhHaREeA8Z38sDKe-_iOJrIo--w'
	}).then(function successCallback(response) {
		console.log(response.data.items[0].volumeInfo.authors);
		$scope.id=response.data.items[0].volumeInfo.authors;
	}, function errorCallback(response) {
		console.log('oops');	
	});
});*/