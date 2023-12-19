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

// fetch(url)
//   .then((res) => res.json())
//   .then(log)
//   .catch((err) => console.error("error:" + err));
// };

// function log(x){
//   console.log(x.results)
// }