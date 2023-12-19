const API_KEY = 'e260aeb962197fce7f389cbc57692172';

async function fetchTmdb(urlApi){
const url = urlApi + API_KEY;

try {
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}
catch(err){
  console.error("error:" + err)
};
};

export{fetchTmdb};