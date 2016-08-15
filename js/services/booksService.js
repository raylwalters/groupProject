'use strict';

var app = angular.module('entertainApp');

app.factory('bookList', ['$http', function($http){
    var randomId = {};
    function passId(bookId){
        randomId = bookId;
        console.log(randomId);
    }
    function sendData(){
        return $http({
            url:'https://www.googleapis.com/books/v1/volumes?q=subject:' + randomId.id + '&key=AIzaSyCriMrONlAaY3CVEJzBBB-oUZLcOCDAVOA',
            method: 'GET'
        }).then(function(response){
            console.log(response.data.items);
            return response.data.items;
        });
    }
        return {
            passId: passId,
            sendData: sendData
        };
}]);
