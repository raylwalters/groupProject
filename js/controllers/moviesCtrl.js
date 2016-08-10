"use strict";

var app = angular.module('entertainApp');

app.controller('moviesCtrl',['$scope','movieList', function($scope,movieList){
	$scope.saveId = function(info){
		var movieId = info;
		console.log($scope.movieId);
		movieList.passId(movieId);
		console.log(movieId);
		getUrl();
	}
	// movieList.data().then(function(response){
	// 		console.log(response);
	// 		$scope.movies = response.data.results;
	// 		});
function getUrl(){
		movieList.sendData().then(function(response){
			console.log(response);
			$scope.movies = response;

		$scope.movies.forEach(function(item,index){
			$scope.imageId = response[index].poster_path;
			$scope.image = "http://image.tmdb.org/t/p/w92/"+$scope.imageId;
		// // 	// $scope.image = "http://image.tmdb.org/t/p/w92/";
			
		console.log($scope.imageId);
		console.log($scope.image);
		});
	});

		
	
}
	$scope.info = {
		    model: null,
		    availableOptions: [
		      {id: '28', name: 'Action'},
		      {id: '12', name: 'Adventure'},
		      {id: '16', name: 'Animation'},
		      {id: '35', name: 'Comedy'},
		      {id: '80', name: 'Crime'},
		      {id: '99', name: 'Documentary'},
		      {id: '10751', name: 'Family'},
		      {id: '14', name: 'Fantasy'},
		      {id: '10769', name: 'Foreign'},
		      {id: '36', name: 'History'},
		      {id: '27', name: 'Horror'},
		      {id: '10402', name: 'Music'},
		      {id: '9648', name: 'Mystery'},
		      {id: '10749', name: 'Romance'},
		      {id: '878', name: 'Science Fiction'},
		      {id: '10770', name: 'TV Movie'},
		      {id: '53', name: 'Thriller'},
		      {id: '10752', name: 'War'},
		      {id: '37', name: 'Western'}
		    ]
		   };
}]);



// Testing image url
		// $scope.imageId1 = response.data.results[0].poster_path;
		// $scope.image1 = "http://image.tmdb.org/t/p/w92/"+$scope.imageId1;
		// $scope.imageId2 = response.data.results[1].poster_path;
		// $scope.image2 = "http://image.tmdb.org/t/p/w92/"+$scope.imageId2;

// This is for the image url
		// $scope.movies.forEach(function(item,index){
		// 	$scope.imageId = response.data.results[index].poster_path;
		// 	$scope.image = "http://image.tmdb.org/t/p/w92/"+$scope.imageId;
		// 	// $scope.image = "http://image.tmdb.org/t/p/w92/";
			
			
		// });
	// }
	
		
		
		// console.log($scope.imageId);
		// console.log($scope.image);
		
	// });
// }]);

// app.controller('selectCtrl',['$scope','movieList', function($scope,movieList){
// 	$scope.saveId = function(info){
// 		// movieList.id = $scope.info.model;
// 		// movieList.id = $scope.info;
// 		movieList.storeId(info);
// 		// $scope.movieId = $scope.info;
// 		// $location.path('/movies');
// 		console.log(movieId);
// 	}


// }]);





