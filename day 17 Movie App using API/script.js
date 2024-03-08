const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=feafae382b034ff964d466818c94c5f4&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=feafae382b034ff964d466818c94c5f4&query="';


var form = document.getElementById("form");
var search = document.getElementById("search");
var main = document.getElementById("main");

getMovies(API_URL);

async function getMovies(url) {
    var res = await fetch(url);
    var data = await res.json();
    console.log(data.results[3]);
    showMovies(data.results);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_API + searchTerm);
        search.value = "";
    } else {
        window.location.reload();
    }
})

/* this is to display all the movie details dynamically in DOM  */

function showMovies(allMovies) {
    main.innerHTML = "";

    main.createElement

    allMovies.forEach((movies) => {
        const { title, vote_average, overview, poster_path } = movies;

        var movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="Moviess">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getVoteByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            ${overview}
        </div>
        `
        main.appendChild(movieEl);
    });
}

function getVoteByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}