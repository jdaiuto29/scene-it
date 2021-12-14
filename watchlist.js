let watchlist = JSON.parse(localStorage.getItem('watchlist'));


function renderMovies(watchlist) {

    const savedMovieArray = watchlist.map(function (currentMovie) {

        return `
    <div class = 'col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4' id = 'movie-div'>
    <img class = 'w-100 border border-white' id = 'movie-poster' src='${currentMovie.Poster}'/>
    <div class = 'movie-info'>
    <div class = 'd-flex justify-content-between'><h6>${currentMovie.Title}</h6>
    <div id = 'movie-year'>${currentMovie.Year}</div>
    </div>
    <div class = "mt-3"><button class = 'add-movie btn btn-primary btn-sm d-flex justify-content-start' data-imdbid= ${currentMovie.imdbID}>Remove Movie</button></div>
    </div>
    </div>
    `

    });
    const savedMovies = document.querySelector('#movie-container');
    savedMovies.innerHTML = savedMovieArray.join('');
}

renderMovies(watchlist);