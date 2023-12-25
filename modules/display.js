const mainResultContainer = document.querySelector('#result-container');

export function displayMovieList(movieList) {
    console.log(mainResultContainer)
    for (let i = 0; i < 10; i++) {
        let divEl = document.createElement('div');
        let imgEl = document.createElement('img');
        let h1El = document.createElement('h1');
        let pEl = document.createElement('p');

        imgEl.src = `https://www.themoviedb.org/t/p/w300${movieList[i].poster_path}`;
        h1El.innerText = movieList[i].title;
        pEl.innerHTML = `Release date: ${movieList[i].release_date}`;

        mainResultContainer.appendChild(divEl)
        divEl.appendChild(imgEl);
        divEl.appendChild(h1El);
        divEl.appendChild(pEl);
    };
};

export function createAndAppendElement(element, content, container) {
    const el = document.createElement(element)
    container.append(el)

    if (element === 'img') el.src = content
    else el.innerText = content

    if (el.src === 'https://image.tmdb.org/t/p/w300null') {
        el.src = 'https://i.stack.imgur.com/34AD2.jpg'
    }

    return el;
}

export function displaySearchResultsMovie(fetchdata) {
    for (const movie of fetchdata.results) {
        const movieResultDiv = document.createElement('div')
        movieResultDiv.classList.add('card-style')
        createAndAppendElement('h1', movie.title, movieResultDiv)
        createAndAppendElement('h2', `Release date: ${movie.release_date}`, movieResultDiv)
        createAndAppendElement('p', `Overview: ${movie.overview}`, movieResultDiv)
        createAndAppendElement('img', `https://image.tmdb.org/t/p/w300${movie.poster_path}`, movieResultDiv)
        console.log(movie.poster_path);
        mainResultContainer.append(movieResultDiv)
    }
}
export function displaySearchResultsPerson(fetchdata) {
    for (const actor of fetchdata.results) {
        const actorResultDiv = document.createElement('div')
        const actorWorkList = document.createElement('ul')
        actorResultDiv.classList.add('card-style')
        createAndAppendElement('img', `https://image.tmdb.org/t/p/w300${actor.profile_path}`, actorResultDiv)
        createAndAppendElement('h1', actor.name, actorResultDiv)
        createAndAppendElement('h2', `Department: ${actor.known_for_department}`, actorResultDiv)
        for (const value of actor.known_for) {
            if (value.media_type === 'movie') {
                createAndAppendElement('li', `Movie: ${value.title}`, actorWorkList)
            }
            else if (value.media_type === 'tv') {
                createAndAppendElement('li', `TV: ${value.name}`, actorWorkList)
            }
        }
        actorResultDiv.append(actorWorkList)
        mainResultContainer.append(actorResultDiv)
    }
}


export function removePrevSearchResult() {
    const mainResultContainer = document.querySelector('#result-container');
    mainResultContainer.innerHTML = '';

    const errorContainer = document.querySelector('#error-container');
    errorContainer.classList.add('hidden');
}


