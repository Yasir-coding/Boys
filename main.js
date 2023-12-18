import { fetchTmdb } from "./module/fetchApi.js";

const mainForm = document.querySelector("#mainForm");


mainForm.addEventListener("click", event =>{
  event.preventDefault();

  if(event.target.id == "searchPopularBtn"){
    fetchTmdb(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=`)
  }

})


