
export async function fetchMovieDB(input, type) {
    const apiKey = '4021077fc612c9d61ceebc0521cd97dc';
    const apiBaseUrl = `https://api.themoviedb.org/3/search/${type}?query=${input}&include_adult=false&language=en-US&page=1&api_key=`
    const url = apiBaseUrl + apiKey;


    const response = await fetch(url)
    console.log(response);
    if (response.ok) {
        const result = await response.json();
        return result;
    }
    else if (response.status === 404) {
        if (type === 'movie') throw '404 movie search error';
        else if (type === 'person') throw '404 actor search error';
    }
    else throw 'error';
};

export function displayErrorMsg(error) {
    console.log(error);
    let msg;
    if (error === '404 movie search error') msg = 'thats not a valid movie name...try again pls'
    else if (error === '404 actor search error') msg = 'thats not a valid actor name... please try again'
    else msg = 'something went wrong... please try again later'

    const errorMsgEl = document.querySelector('#error-msg')
    errorMsgEl.innerText = msg;

    const errorContainer = document.querySelector('#error-container')
    errorContainer.classList.remove('hidden')
}