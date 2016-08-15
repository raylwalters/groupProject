var app = angular.module('entertainApp');

app.factory('mainMovies',['$http', function($http){
	return{
		data: function(){

			return $http.get("http://api.themoviedb.org/3/discover/movie?api_key=xxxxxx&with_genres=28");
			}
		};
}]);

app.factory('mainBooks',['$http', function($http){
	return{
		data: function(){
			return $http.get("https://www.googleapis.com/books/v1/volumes?q=subject:Adventure&key=xxx");

			}
		};
}]);

app.factory('mainMusic',['$http', function($http){
	return{
		data: function(){
			return $http.get("https://api.spotify.com/v1/search?q=nsync&type=artist");
			}
		};
}]);
