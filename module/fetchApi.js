const API_KEY = "b28c2f405afdf59587eddb70dbd37781"; 

async function fetchTmdb(urlApi){
const url = urlApi+API_KEY;


try{
  const result = await fetch(url);
  const data = await result.json();
  return data.results;
}
catch(error){
  console.log(error)
}

}

export{fetchTmdb}