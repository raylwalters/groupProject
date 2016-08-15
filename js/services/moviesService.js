'use strict';

var app = angular.module('entertainApp');

app.factory('movieList',['$http', function($http){

	var randomId = {};

	function passId(movieId){
		randomId = movieId;
		console.log(randomId);
	}
// Attempting to add page numbers to switch to
	// function getEventTarget(e) {
	//     e = e || window.event;
	//     return e.target || e.srcElement;
	// }

	// var ul = document.getElementById('pageNum');
	// ul.onclick = function(event) {
	//     var target = getEventTarget(event);
	//     target = target.innerText;
	//     console.log(target);
	//     return target;

	// };

	function sendData(){
		var target = Math.floor(Math.random() * (21-1)+1);
		console.log(target);
			return $http({
				url: "http://api.themoviedb.org/3/discover/movie?api_key=xxxx&release_date.lte=2016-05-01&with_genres="+ randomId.id + "&page=" + target,
				method: "GET"
			}).then(function(response){
				console.log(response.data.results);
				return response.data.results;
			});
		}

		return {
			passId: passId,
			sendData: sendData
		};






}]);
