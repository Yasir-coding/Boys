import { fetchMovieDB } from "./modules/fetchAPI.js";
import { displaySearchResultsMovie } from "./modules/display.js";
import { displaySearchResultsPerson } from "./modules/display.js";
import { displayErrorMsg } from "./modules/fetchAPI.js";
import { displayMovieList } from "./modules/display.js";
import { removePrevSearchResult } from "./modules/display.js";
// const popularMovies = await fetchMovieDB(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=`);
// const topTenMovies = await fetchMovieDB(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=`);
// console.log(popularMovies);
// console.log(topTenMovies);


const form = document.querySelector('form')

form.addEventListener('submit', searchHandler)

async function searchHandler(event) {
    event.preventDefault();
    // removePrevSearchResult();
    const searchInput = document.querySelector('#input').value;
    const searchType = document.querySelector('input[type="radio"]:checked').value;
    if (searchType === 'movie') {
        await fetchMovieDB(searchInput, searchType).then(displaySearchResultsMovie).catch(displayErrorMsg)
    }
    else if (searchType === 'person') {
        await fetchMovieDB(searchInput, searchType).then(displaySearchResultsPerson).catch(displayErrorMsg)
    }
    form.reset();
}




