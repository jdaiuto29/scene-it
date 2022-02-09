const results = document.querySelector('#results');

function renderMovies(movies) {

    const movieHtmlArray = movies.map(function(currentMovie) {
        return `
    <div class = 'col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4' id = 'movie-div'>
    <img class = 'w-100 border border-white' id = 'movie-poster' src='${currentMovie.Poster}'/>
    <div class = 'movie-info'>
    <div class = 'd-flex justify-content-between'><h6>${currentMovie.Title}</h6>
    <div id = 'movie-year'>${currentMovie.Year}</div>
    </div>
    <div class = "mt-3"><button class = 'add-movie btn btn-primary btn-sm d-flex justify-content-start' data-imdbid= ${currentMovie.imdbID}>Add Movie</button></div>
    </div>
    </div>
    `

    });

    results.innerHTML = movieHtmlArray.join('');
}

function saveToWatchList(movieID) {
    const movie = movieData.find(function(currentMovie) {
        return currentMovie.imdbID == movieID;
    });
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);

    if (watchlist === null) {
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}

document.addEventListener('DOMContentLoaded', function() {

    const myForm = document.getElementById('search-form');

    myForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchString = document.querySelector('.search-bar').value
        const urlEncodedSearchString = encodeURIComponent(searchString);
        fetch(`https://www.omdbapi.com/?apikey=59354c85&s=${urlEncodedSearchString}`)
            .then((res) => res.json())
            .then((data) => {
                renderMovies(data.Search);
                movieData = data.Search
            });
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains("add-movie")) {
            saveToWatchList(e.target.dataset.imdbid)
        }
    });
});