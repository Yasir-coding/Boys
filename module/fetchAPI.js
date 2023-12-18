const API_KEY = 'e260aeb962197fce7f389cbc57692172';

function fetchTmdb(urlApi){
const url = urlApi + API_KEY;

fetch(url)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
};

export{fetchTmdb};