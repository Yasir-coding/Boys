const containerDiv = document.getElementById('container');

function displayTenMovies(movieList){
    containerDiv.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        let divEl = document.createElement('div');
        let movieTitleH1El = document.createElement('h1');
        let releaseDateH2El = document.createElement('h2');
        let moviePosterImgEl = document.createElement('img');

        movieTitleH1El.innerText = movieList[i].title;
        releaseDateH2El.innerHTML = `Release date: ${movieList[i].release_date}`;
        moviePosterImgEl.src = `https://www.themoviedb.org/t/p/w300${movieList[i].poster_path}`;

        containerDiv.appendChild(divEl);
        divEl.append(movieTitleH1El, releaseDateH2El, moviePosterImgEl);
    };
};

function displayPageOneMovies(movieList){
    containerDiv.innerHTML = '';
    for(let i = 0; i < movieList.length; i++){
        let divEl = document.createElement('div');
        let movieTitleH1El = document.createElement('h1');
        let releaseDateH2El = document.createElement('h2');
        let overviewPEl = document.createElement('p');
        let moviePosterImgEl = document.createElement('img');

        movieTitleH1El.innerText = movieList[i].title;
        releaseDateH2El.innerHTML = `Release date: ${movieList[i].release_date}`;
        overviewPEl.innerHTML = movieList[i].overview;
        moviePosterImgEl.src = `https://www.themoviedb.org/t/p/w300${movieList[i].poster_path}`;

        containerDiv.appendChild(divEl);
        divEl.append(movieTitleH1El, releaseDateH2El, overviewPEl, moviePosterImgEl);
    };
};

function displayActors(actorList){
    containerDiv.innerHTML = '';
    for(let i = 0; i < actorList.length; i++){
        let divEl = document.createElement('div');
        let actorNameH1El = document.createElement('h1');
        let actorKnownForH2El = document.createElement('h2')
        let paricipatedInPEl = document.createElement('p');
        let actorImgEl = document.createElement('img');

        actorNameH1El.innerText = actorList[i].name;
        actorKnownForH2El.innerText = `Known for: ${actorList[i].known_for_department}`;
        paricipatedInPEl.innerText = actorList[i].known_for[0].title;
        actorImgEl.src = `https://www.themoviedb.org/t/p/w300${actorList[i].profile_path}`;

        containerDiv.appendChild(divEl);
        divEl.append(actorNameH1El, actorKnownForH2El, paricipatedInPEl, actorImgEl);
    };
};

export{displayActors};
export{displayPageOneMovies};
export{displayTenMovies};

// (known_for[array] :: media_type, title)