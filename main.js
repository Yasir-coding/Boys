import {fetchTmdb} from './module/fetchAPI.js';
import {displayTenMovies, displayPageOneMovies, displayActors} from './module/display.js';

const searchBar = document.getElementById('searchForm')
const topTenMovies = document.getElementById('topTenMovies');

searchBar.addEventListener('submit', async event => {
    event.preventDefault();

    let textSearch = document.getElementById('textSearch').value;
    let btnMovie = document.getElementById('movieBtn').checked;
    let btnActor = document.getElementById('actorBtn').checked;

    if(btnMovie === true){
        let movieList = await fetchTmdb(`https://api.themoviedb.org/3/search/movie?query=${textSearch}&include_adult=false&language=en-US&api_key=`);
        displayPageOneMovies(movieList);
        searchBar.reset();
    }
    else if(btnActor === true){
        let actorList = await fetchTmdb(`https://api.themoviedb.org/3/search/person?query=${textSearch}&include_adult=false?language=en-US&api_key=`);
        displayActors(actorList);
        searchBar.reset();
    }
    else{
        alert('Please choose Movie or Actor!');
    };
});

topTenMovies.addEventListener('click', async event => {
    event.preventDefault();

    if(event.target.id == 'popularBtn'){
        let popularMovieArray = await fetchTmdb(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=`);
        displayTenMovies(popularMovieArray);
    }
    else if(event.target.id == 'topRatedBtn'){
        let topRatedMovieArray = await fetchTmdb(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=`);
        displayTenMovies(topRatedMovieArray);
    };
});