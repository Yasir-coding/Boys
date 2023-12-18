import { fetchTmdb } from './module/fetchAPI.js';

const form = document.querySelector('form');
form.addEventListener('click', event => {
    event.preventDefault();
    if(event.target.id == 'popularBtn'){
        let cat = fetchTmdb(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=`).then();
        console.log(cat);
    }
    else if(event.target.id == 'topRatedBtn'){
        fetchTmdb(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=`);
    }
});