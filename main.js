import { fetchTmdb } from './module/fetchAPI.js';
import { displayTenMovies } from './module/display.js';

const form = document.querySelector('form');
form.addEventListener('click', async event => {
    event.preventDefault();
    if(event.target.id == 'searchBtn'){
        console.log('cat');
    }
    else if(event.target.id == 'popularBtn'){
        let popularMovieArray = await fetchTmdb(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=`);
        displayTenMovies(popularMovieArray);
        console.log(popularMovieArray)
    }
    else if(event.target.id == 'topRatedBtn'){
        let topRatedMovieArray = await fetchTmdb(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=`);
        displayTenMovies(topRatedMovieArray);
        console.log(topRatedMovieArray)
    };
});

// function log(x){
//     console.log(x)
// }

// async function test(){
//     const x = await fetchTmdb(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=`);
//     console.log(x);
// }
// test();