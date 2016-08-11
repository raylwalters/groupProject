var app = angular.module('entertainApp');

app.controller('musicCtrl', function($scope, musicFactory){
  musicFactory.data().then(function(response){
    console.log(response);
  })


});

//
// app.controller('moviesCtrl',['$scope','movieList', function($scope,movieList){
// 	movieList.data().then(function(response){
// 		console.log(response);
// 		// console.log("hello");
// 		$scope.movies = response.data.results;
// 	});
// }]);
