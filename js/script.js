const API_KEY = "e260aeb962197fce7f389cbc57692172"; 
const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=${API_KEY}`;

fetch(url)
  .then((res) => res.json())
  .then((json) => {})
  .catch((err) => console.error("error:" + err));