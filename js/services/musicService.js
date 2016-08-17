var app = angular.module('entertainApp');

app.factory('musicService',['$http', function($http){
  var singing = {};
  
  function passId(query){
    singing = query;
    console.log(singing);
  };
//ATTEMPT AT MAKING ANGULAR CALL TO API USING LAB 18 NOTES//
  // function searchAlbums(userInfo){
  //   return {
  //     data: function() {
  //       return $http.get("https://api.spotify.com/v1/search");
  //     }
  //   };
//END CODE BLOCK//
// function searchAlbums(userInfo){
//   singing = userInfo;
// }

  // };
  function sendData(){
      return $.ajax({
            url: 'https://api.spotify.com/v1/search',
            data: {
                q: singing.id,
                type: 'playlist'
              }
            }).then(function(response){
              return response.playlists.items;
            });

            // success: function (response) {
                // resultsPlaceholder.innerHTML = template(response);
                // $scope.musicCall = response.playlists.items;
                console.log(response);
                console.log($scope.musicCall);

            // }
          }
        // });

//Code below returns object id: artist_name//
    //   return $http ({
    //     url: "https://api.spotify.com/v1/search?q=" + singing.id,
    //     method: 'GET'
    // }).then(function(response){
    //   return response.playlists.items;
    // });
  // }
    return {
      passId: passId,
      sendData: sendData
    };
}]);
