'use strict';

var app = angular.module('entertainApp');

app.factory('booksService',function($http){
return {
	data:function() {
		return $http.get('https://www.googleapis.com/books/v1/volumes?q=search+terms:comedy&key=AIzaSyBYgMe4rhHaREeA8Z38sDKe-_iOJrIo--w');
	}
};
});
