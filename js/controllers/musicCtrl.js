var app = angular.module('entertainApp');

app.controller('musicCtrl', function($scope){
  
// find template and compile it
var templateSource = document.getElementById('results-template').innerHTML,

    template = Handlebars.compile(templateSource),
    resultsPlaceholder = document.getElementById('results'),
    playingCssClass = 'playing',
    audioObject = null;

//PLAYS SONGS ACCORDING TO ALBUM//
var fetchTracks = function (albumId, callback) {
    $.ajax({
        url: 'https://api.spotify.com/v1/albums/' + albumId,
        success: function (response) {
            callback(response);
        }
    });
};

//FINDS ALBUMS ACCORDING TO USER INPUT//
var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'album'
        },
        success: function (response) {
            resultsPlaceholder.innerHTML = template(response);
        }
    });
};


//WHEN RESULTS ARE GENERATED AND ALBUM COVERS APPEAR//
results.addEventListener('click', function(e) {
    var target = e.target;
    if (target !== null && target.classList.contains('cover')) {
        if (target.classList.contains(playingCssClass)) {
            audioObject.pause();
        } else {
            if (audioObject) {
                audioObject.pause();
            }
            //WHEN YOU CLICK ON AN ALBUM COVER AND RANDOM SONG PLAYS//
            fetchTracks(target.getAttribute('data-album-id'), function(data) {
                audioObject = new Audio(data.tracks.items[0].preview_url);
                audioObject.play();
                target.classList.add(playingCssClass);
                audioObject.addEventListener('ended', function() {
                    target.classList.remove(playingCssClass);
                });
                audioObject.addEventListener('pause', function() {
                    target.classList.remove(playingCssClass);
               });
            });
        }
    }
});

document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    //'searchAlbums' variable added to page here -- use variable for playlist//
    searchAlbums(document.getElementById('query').value);
}, false);


});
