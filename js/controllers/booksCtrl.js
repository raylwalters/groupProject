'use strict';

var app = angular.module('entertainApp');

app.controller('booksCtrl', ['$scope', 'bookList', function($scope, bookList) {
    $scope.saveId = function(info) {
	    var bookId = info;
	    console.log($scope.bookId);
	    bookList.passId(bookId);
	    console.log(bookId);
	    getUrl();
    };
    function getUrl() {
        bookList.sendData().then(function(response){
            $scope.books = response;
            //$scope.image = ' ' ;//stuff;
        });
}
    $scope.info = {
        model:null,
        availableOptions: [
        {id: 'Action', name: 'Action'},
        {id:'Adventure', name: 'Adventure'},
        {id:'Biography', name: 'Biography'},
        {id:'Comedy', name: 'Comedy'},
        {id:'Crime', name: 'Crime'},
        {id:'Family', name: 'Family'},
        {id:'Fantasy', name: 'Fantasy'},
        {id:'Fiction', name: 'Fiction'},
        {id:'History', name: 'History'},
        {id:'Horror', name: 'Horror'},
        {id:'Music', name: 'Music'},
        {id:'Mystery', name: 'Mystery'},
        {id:'Romance', name: 'Romance'},
        {id:'Science Fiction', name: 'Science Fiction'},
        {id:'Thriller', name: 'Thriller'},
        {id:'War', name: 'War'},
        {id:'Western', name: 'Western'}
        
        ]
};

    }]);