
let MovieApi = 'db3a630e';
let searchQ;
let countryArr = [];
let foodType = "";
let foodListArr = [];


function movieAlert() {
    window.alert("Oh no! Something went wrong. Please ensure you have entered a valid movie.");
}

function displayAll() {
    document.getElementById("movieTitle").style.visibility = "visible";
    document.getElementById("movieCountry").style.visibility = "visible";
    document.getElementById("Poster").style.visibility = "visible";
    document.getElementById("movieDescription").style.visibility = "visible";

    document.getElementById("recipeOneName").style.visibility = "visible";
    document.getElementById("recipeOneImage").style.visibility = "visible";
    document.getElementById("recipeOneURL").style.visibility = "visible";
    document.getElementById("recipeOneSave").style.visibility = "visible";
}

function getSearchQ(SearchMovie) {
    searchQ = 't';
}

function Search(SearchMovie) {
    getSearchQ(SearchMovie);
    fetch(`https://www.omdbapi.com/?apikey=${MovieApi}&${searchQ}=${SearchMovie}`)
        .then(result => {
            return result.json();
        })
        .then(result => {
            init(result);
        })
        .catch((error) => {
            console.error('Error:', movieAlert());
        })

}

function init(result) {
    console.log(result);
    let movieT = document.getElementById('movieTitle');
    let countryOrigin = document.getElementById('movieCountry');
    let moviePlot = document.getElementById('movieDescription');
    let mPoster = document.getElementById('Poster');

    let countryArr = result.Country.split(",").map(function (value) {
        return value.trim();
    });
    console.log(countryArr);


    //let movPoster = new Image(300,450);



    switch (countryArr[0]) {
        case 'United States':
        case 'Canada':
            foodType = "American";
            console.log("American")
            break;
        case 'Poland':
        case 'United Kingdom':
        case 'Germany':
        case 'Ukraine':
            console.log("Europe Dish");
            foodType = "Central Europe";
            break;
        case 'France':
        case 'Italy':
            foodType = "Italian";
            console.log("Who wants Pasta");
            break;
        case 'North Korea':
        case 'South Korea':
            console.log();
            foodType = "Asian";
            break;
        case "China":
            foodType = "Chinese";
            break;
        case "Japan":
            foodType = "Japanese";
        default:
            break;
    }
    fetch(`https://api.edamam.com/api/recipes/v2?app_id=fea86a91&app_key=2b9e76ada8e917607dc4fd6bd442e887&type=public&dishType=Main_course&cuisineType=${foodType}`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            food(response);
        })
    function food(response) {
        console.log(response);
        for (let i = 0; i < 3; i++) {                                                                               
            // foodListArr.push(response.hits[Math.floor(Math.random() * 19)]);

            // console.log(foodListArr, "here is log");

            recipeOneName = document.getElementById("recipeOneName")
            recipeOneImage = document.getElementById("recipeOneImage")
            recipeOneURL = document.getElementById("recipeOneURL")

            myRandNum = Math.floor(Math.random() * 19)
            recipeOneName.innerText = response.hits[myRandNum].recipe.label;
            recipeOneImage.src = response.hits[myRandNum].recipe.image;
            recipeOneURL.href = response.hits[myRandNum].recipe.shareAs;
            recipeOneURL.textContent = ("Link to Recipe");

            
        

        }
    }
    movieT.innerText = result.Title;
    countryOrigin.innerText = result.Country;
    moviePlot.innerText = result.Plot;
    posterURL = result.Poster;
    mPoster.src = `${posterURL}`;
    displayAll()
    

};

document.getElementById('searchBtn').addEventListener('click', () => {
    let userInput = document.getElementById("userInput").value;
    if (userInput)
        Search(userInput);
})

document.getElementById("recipeOneSave").addEventListener("click" , () => {
    localStorage.setItem()
})

