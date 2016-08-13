var app = angular.module('entertainApp');

app.controller('musicCtrl', function($scope, musicService){
  // musicService.data().then(function(response){
  //   $scope.musicCall = response.playlists.items;
  // })


  $scope.searchAlbums = function(userInfo) {
    // var query = userInfo;
    musicService.passId(userInfo);
    singing = userInfo;
    console.log(singing);
    getUrl();
  };
function getUrl(){
  musicService.sendData().then(function(response){
    $scope.musicCall = response;
    console.log(response);
  });
}
});
// find template and compile it
// var templateSource = document.getElementById('results-template').innerHTML,
//     template = Handlebars.compile(templateSource),
//     // resultsPlaceholder = document.getElementById('results'),
//     playingCssClass = 'playing',
//     audioObject = null;
    // $scope.resultsPlaceholder = '';
//
// var fetchTracks = function (albumId, callback) {
//     $.ajax({
//         url: 'https://api.spotify.com/v1/albums/' + albumId,
//         success: function (response) {
//             callback(response);
//             console.log(response);
//         }
//     });
// };



// var searchAlbums = function (query) {
//
//
//     $.ajax({
//         url: 'https://api.spotify.com/v1/search',
//         data: {
//             q: query,
//             type: 'playlist'
//         },
//         success: function (response) {
//             // resultsPlaceholder.innerHTML = template(response);
//             $scope.musicCall = response.playlists.items;
//             console.log(response);
//             console.log($scope.musicCall);
//         }
//     });
//
// };

// results.addEventListener('click', function(e) {
//     var target = e.target;
//     if (target !== null && target.classList.contains('cover')) {
//         if (target.classList.contains(playingCssClass)) {
//             audioObject.pause();
//         } else {
//             if (audioObject) {
//                 audioObject.pause();
//             }
//             fetchTracks(target.getAttribute('data-album-id'), function(data) {
//                 audioObject = new Audio(data.tracks.items[0].preview_url);
//                 audioObject.play();
//                 target.classList.add(playingCssClass);
//                 audioObject.addEventListener('ended', function() {
//                     target.classList.remove(playingCssClass);
//                 });
//                 audioObject.addEventListener('pause', function() {
//                     target.classList.remove(playingCssClass);
//                });
//             });
//         }
//     }
// });

// document.getElementById('search-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     searchAlbums(document.getElementById('query').value);
// }, false);
//
//
// });
