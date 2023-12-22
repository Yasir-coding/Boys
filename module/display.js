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
        if(movieList[i].poster_path === null){
            moviePosterImgEl.src = './Images/ImageNotFound.jpeg';
        }
        else{
            moviePosterImgEl.src = `https://www.themoviedb.org/t/p/w300${movieList[i].poster_path}`;
        };

        containerDiv.appendChild(divEl);
        divEl.append(movieTitleH1El, releaseDateH2El, overviewPEl, moviePosterImgEl);
    };
};

function displayActors(actorList){
    containerDiv.innerHTML = '';
    for(let i = 0; i < actorList.length; i++){
        let divEl = document.createElement('div');
        let actorNameH1El = document.createElement('h1');
        let actorImgEl = document.createElement('img');
        let actorKnownForH2El = document.createElement('h2')
        let participatedInDiv = document.createElement('div');

        actorNameH1El.innerText = actorList[i].name;
        if(actorList[i].profile_path === null){
            actorImgEl.src = './Images/ImageNotFound.jpeg';
        }
        else{
            actorImgEl.src = `https://www.themoviedb.org/t/p/w300${actorList[i].profile_path}`;
        };
        actorKnownForH2El.innerText = `Known for: ${actorList[i].known_for_department}`;
        for(let j = 0; j < actorList[i].known_for.length; j++){
            let participatedInPEl = document.createElement('p');
            if(actorList[i].known_for[j] == undefined){
                participatedInPEl.innerText = '';
            }
            else if(actorList[i].known_for[j].title == undefined){
                participatedInPEl.innerText = `${actorList[i].known_for[j].media_type}: ${actorList[i].known_for[j].name}`;
            }
            else{
                participatedInPEl.innerText = `${actorList[i].known_for[j].media_type}: ${actorList[i].known_for[j].title}`;
            };
            participatedInDiv.appendChild(participatedInPEl);
        };

        containerDiv.appendChild(divEl);
        divEl.append(actorNameH1El, actorImgEl, actorKnownForH2El, participatedInDiv);
    };
};

export{displayActors, displayPageOneMovies, displayTenMovies};