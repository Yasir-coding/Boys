let resultDiv = document.querySelector("#resultDiv");

function displayInfo(movieList){
  resultDiv.innerHTML = "";
  for(let i = 0; i < 10; i++){
    let imgEl = document.createElement("img");
    imgEl.src = `https://image.tmdb.org/t/p/w500/${movieList[i].poster_path}`;
    
    let titleH1 = document.createElement("h1");
    titleH1.innerText = movieList[i].title;

    let releaseDateH3 = document.createElement("h3");
    releaseDateH3.innerText = movieList[i].release_date;

    document.querySelector("#resultDiv").append(titleH1, releaseDateH3, imgEl);
    console.log(movieList[0])
  }
}

function displayInfoSearch(movieList){
  resultDiv.innerHTML = "";
  for(let i = 0; i < movieList.length; i++){
    let imgEl = document.createElement("img");
    imgEl.src = `https://image.tmdb.org/t/p/w500/${movieList[i].poster_path}`;
    
    let titleH1 = document.createElement("h1");
    titleH1.innerText = movieList[i].title;

    let releaseDateH3 = document.createElement("h3");
    releaseDateH3.innerText = movieList[i].release_date;

    let descriptionP = document.createElement("p");
    descriptionP.innerText = movieList[i].overview;

    document.querySelector("#resultDiv").append(titleH1, releaseDateH3, descriptionP, imgEl);
    console.log(movieList[0])
  }
}

function displayActor(actorInfo){
  resultDiv.innerHTML = "";
  for(let i = 0; i < actorInfo.length; i++){
    let imgEl = document.createElement("img");
    imgEl.src = `https://image.tmdb.org/t/p/w500/${actorInfo[i].profile_path}`;
    
    let actorNameH1 = document.createElement("h1");
    actorNameH1.innerText = actorInfo[i].name;

    let knownForDepartmentH3 = document.createElement("h3");
    knownForDepartmentH3.innerText = actorInfo[i].known_for_department;
    let participatedIn;
    if(actorInfo[i].known_for[0] == undefined){
      participatedIn = ""
    }else{
    participatedIn = document.createElement("p");
    participatedIn.innerText = actorInfo[i].known_for[0].title;
    }
    document.querySelector("#resultDiv").append(actorNameH1, knownForDepartmentH3,participatedIn , imgEl);
    console.log(actorInfo[0])
  }
}




export{displayInfo, displayInfoSearch, displayActor}