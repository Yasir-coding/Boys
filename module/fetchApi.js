import { displayFetchError } from "./display.js";

const API_KEY = "b28c2f405afdf59587eddb70dbd37781";

async function fetchTmdb(urlApi) {
  const url = urlApi + API_KEY;


  try {
    const result = await fetch(url);
    // console.log(result);

    const data = await result.json();


    if (data.results.length === 0) {
      return "not found"
    } else {
      return data.results;
    }
  }
  catch (error) {
    return displayFetchError(error)
  }

}


export { fetchTmdb }