const API_KEY = 'e260aeb962197fce7f389cbc57692172';

async function fetchTmdb(urlApi){
const url = urlApi + API_KEY;

// fetch(url)
//   .then((res) => res.json())
//   .then((json) => {
//     return json;
//   })
//   .catch((err) => console.error("error:" + err));
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