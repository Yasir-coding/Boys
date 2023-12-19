const containerDiv = document.getElementById('container');

function displayTenMovies(movieList){
    containerDiv.innerHTML = '';
    console.log(containerDiv)
    for (let i = 0; i < 10; i++) {
        let divEl = document.createElement('div');
        let imgEl = document.createElement('img');
        let h1El = document.createElement('h1');
        let pEl = document.createElement('p');

        imgEl.src = `https://www.themoviedb.org/t/p/w300${movieList[i].poster_path}`;
        h1El.innerText = movieList[i].title;
        pEl.innerHTML = `Release date: ${movieList[i].release_date}`;

        containerDiv.appendChild(divEl)
        divEl.appendChild(imgEl);
        divEl.appendChild(h1El);
        divEl.appendChild(pEl);
    };
};

export{displayTenMovies};
