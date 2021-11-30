
let MovieApi = 'db3a630e';
let searchQ;

function getSearchQ(SearchMovie) {
    searchQ= 't';
}

function Search(SearchMovie){
    getSearchQ(SearchMovie);
    fetch (`https://www.omdbapi.com/?apikey=${MovieApi}&${searchQ}=${SearchMovie}`)
        .then(result=> {
            return result.json();
        })
        .then(result=> {
            init(result);
        })

}

function init(result) {
    console.log (result);
    let movieT = document.getElementById('movieTitle');
    let countryOrigin = document.getElementById('movieCountry');
    let moviePlot= document.getElementById('movieDescription');


    let movPoster = new Image(300,450);


    movieT.innerText=result.Title;
    countryOrigin.innerText= result.Country;
    moviePlot.innerText= result.Plot;

    posterURL= result.Poster;
    movPoster.src= `${posterURL}`;
    document.getElementById('moviePoster').append(movPoster);

}


    document.getElementById('searchBtn').addEventListener('click',()=>
    {
        let userInput = document.getElementById("userInput").value;
        if (userInput)
            Search(userInput);
    })
