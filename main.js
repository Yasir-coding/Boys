import { displayActor, displayInfo, displayInfoSearch } from "./module/display.js";
import { fetchTmdb } from "./module/fetchApi.js";

const mainForm = document.querySelector("#mainForm");

const searchForm = document.querySelector("#searchForm");


mainForm.addEventListener("click", async event =>{
  event.preventDefault();

  if(event.target.id == "searchPopularBtn"){
    let popularMovies = await fetchTmdb(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=`);
    displayInfo(popularMovies)
  }
  else if(event.target.id == "searchTopRatedBtn"){
    let topRatedMovies = await fetchTmdb(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=`);
    displayInfo(topRatedMovies)
  }
})

searchForm.addEventListener("submit", async event =>{
  event.preventDefault();

  let rbMovies = document.querySelector("#rbMovies").checked;
  let rbName = document.querySelector("#rbName").checked;
  let textInputSearch = document.querySelector("#textInputSearch").value;


  if(rbMovies === true){
    let movieName = await fetchTmdb(`https://api.themoviedb.org/3/search/movie?query=${textInputSearch}&include_adult=false&language=en-US&page=1&api_key=`);
    displayInfoSearch(movieName);
    searchForm.reset(); 
  }
  else if(rbName === true){
    let actorName = await fetchTmdb(`https://api.themoviedb.org/3/search/person?query=${textInputSearch}&include_adult=false&language=en-US&page=1&api_key=`);
    displayActor(actorName)
    console.log(actorName)

    searchForm.reset();

  }else{
    alert("please select name och movies")
  }


})


