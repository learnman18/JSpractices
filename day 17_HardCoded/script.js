const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=feafae382b034ff964d466818c94c5f4&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=feafae382b034ff964d466818c94c5f4&query="';


var form = document.getElementById("form");
var search = document.getElementById("search");

getMovies(API_URL);

async function getMovies(url) {
    var res = await fetch(url);
    var data = await res.json();
    console.log(data.results);
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
