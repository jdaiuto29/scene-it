$(document).ready(function() {
    localStorage.getItem('watchlist');
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);

    function renderMovies(movieArray) {
        //var movieArray = movieData.map(movieArray);
           
        var finalHTML = '';
        movieArray.forEach(function(currentMovie) {
          
        finalHTML += '<div class="movie-card">'
        finalHTML += '<img src= "'+ currentMovie.Poster + '" class="posters" />'
        finalHTML += '<div class="card-body">'
        finalHTML += '<h5 class="card-title movieTitle">' + currentMovie.Title + '</h5>'
        finalHTML += '<h6 class="card-subtitle text-muted movieYear"> '+ currentMovie.Year + '</h6>'
        finalHTML += '<button type="button" class="btn btn-primary addButton" data-id= ' +currentMovie.imdbID +'> Add </button>'
        finalHTML += '</div>';
        finalHTML += '</div>';
             
        })

        return finalHTML
             
    }
    
       
          var movieHTML = renderMovies(watchlist);
          $('.movies-container').html(movieHTML);
        
})  
    
      
          
