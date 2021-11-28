let userInput = document.getElementById("userInput").value;
let search = document.getElementById('searchBtn');

const searchMe = function () {
    fetch('http://www.omdbapi.com/?apikey=db3a630e&t=${userInput}', {
        method: 'GET', //GET is the default.
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
})
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data);
    });



    
}



fetch('https://api.edamam.com/api/recipes/v2?app_id=fea86a91&app_key=2b9e76ada8e917607dc4fd6bd442e887&type=public&cuisineType=Nordic', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data);
    });


    search.addEventListener("click", searchMe);
