const API_KEY = "b28c2f405afdf59587eddb70dbd37781"; 

function fetchTmdb(urlApi){
const url = urlApi + API_KEY;


fetch(url)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));

}

export{fetchTmdb}