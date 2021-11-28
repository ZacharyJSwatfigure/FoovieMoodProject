
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
}


    document.getElementById('searchBtn').addEventListener('click',()=>
    {
        let userInput = document.getElementById("userInput").value;
        if (userInput)
            Search(userInput);
    })
