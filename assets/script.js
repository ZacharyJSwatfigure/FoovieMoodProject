
let MovieApi = 'db3a630e';
let searchQ;
let countryArr = [];
let foodType;
let FoodApi = '2b9e76ada8e917607dc4fd6bd442e887';
let RMovieApi= '6e733cd10602b7fcb720eb58e6da2350';
let searchFood;
let foodListArr = [];
let savedFoodArr = [];
let currentRecipeData = [recipeOneName, recipeOneImage ,recipeOneURL];

window.onload = () => {
    currentRecipeData = JSON.parse( localStorage.getItem('savedFoodArr'));
    console.log(currentRecipeData);
}

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


function getFood(foodType) {
    searchFood= 'cuisineType';
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

function rMovie() {
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${RMovieApi}`)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response);
            let nR = Math.floor(Math.random() * 25);

          if (response.results[nR].original_title) {
            document.getElementById('movieTitle').innerText = response.results[nR].original_title;
            }
            else
              document.getElementById('movieTitle').innerText = response.results[nR].original_name;


            document.getElementById('movieDescription').innerText = response.results[nR].overview;
            document.getElementById('Poster').src = 'https://image.tmdb.org/t/p/w500' + response.results[nR].poster_path;

            let countryOrigin = document.getElementById('movieCountry');


            switch (response.results[nR].original_language) {
                case 'en':
                    foodType = 'American';
                    console.log(foodType);
                    countryOrigin.textContent= ('United States');
                    break;
                case 'ko':
                    foodType = 'Asian';
                    console.log(foodType);
                    countryOrigin.textContent= ('Korean');
                    break;
                case 'ja':
                    foodType = 'Japanese';
                    console.log(foodType);
                    countryOrigin.textContent= ('Japan');
                    break;
                case 'fr':
                    foodType = 'French';
                    console.log(foodType);
                    countryOrigin.textContent= ('France');
                    break;
                case 'es':
                    foodType = 'Eastern Europe';
                    console.log(foodType);
                    countryOrigin.textContent= ('Spain, Mexico');
                    break;
                default:

                    break;
            }
            getRecipe(foodType);
        })
}

function getRecipe(foodType) {
    {
        getFood(foodType);

        fetch(`https://api.edamam.com/api/recipes/v2?app_id=fea86a91&app_key=${FoodApi}&dishType=Main_course&type=public&${searchFood}=${foodType}`)
            .then(response => {
                return response.json();
            })
            .then(response => {
                food(response);
            })
    }
    function food(response) {
        console.log(response);

        let nR = Math.floor(Math.random() * 19);
        let recipeName = document.getElementById('recipeOneName');
        let recipeImage =  document.getElementById('recipeOneImage');
        let recipeURL =  document.getElementById('recipeOneURL');


        recipeName.innerText = response.hits[nR].recipe.label;
        recipeImage.src = response.hits[nR].recipe.image;
        recipeURL.textContent = ("View Recipe");
        recipeURL.href = response.hits[nR].recipe.url;

        // setting current recipe as ready to save to array
        currentRecipeData = [recipeName.innerText, recipeImage.src ,recipeURL.href];
    }
}

function init(result) {
    console.log(result);
    let movieT = document.getElementById('movieTitle');
    let countryOrigin = document.getElementById('movieCountry');
    let moviePlot = document.getElementById('movieDescription');
    let mPoster = document.getElementById('Poster');

    movieT.innerText = result.Title;
    countryOrigin.innerText = result.Country;
    moviePlot.innerText = result.Plot;
    let posterURL = result.Poster;
    mPoster.src = `${posterURL}`;
    displayAll();

    let countryArr = result.Country.split(",").map(function (value) {
        return value.trim();
    });
    console.log(countryArr);

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
            console.log("European Dish");
            foodType = "British";
            break;
        case 'France':
            console.log("WeeWee monanmee");
            foodType = "French";
            break;
        case 'Italy':
            foodType = "Italian";
            console.log("Who wants Pasta?");
            break;
        case 'North Korea':
        case 'South Korea':
            console.log('ASIAN POWAA');
            foodType = "Asian";
            break;
        case "China":
            foodType = "Chinese";
            console.log('Kung Fu');
            break;
        case "Japan":
            foodType = "Japanese";
            console.log('Omaye wa Shindeiru');
            break;
        default:
            break;
    }
    getRecipe(foodType);
}

function saveCurrentRecipe () {
    savedFoodArr.push(currentRecipeData);
    console.log(savedFoodArr)

    localStorage.setItem("savedFoodArr", JSON.stringify(savedFoodArr));
}


document.getElementById('searchBtn').addEventListener('click', () => {
    let userInput = document.getElementById("userInput").value;
    if (userInput)
        Search(userInput);
})

document.getElementById('randomMovie').addEventListener('click',()=>
{
    rMovie();
})


document.getElementById("recipeOneSave").addEventListener("click" , () =>
{
    saveCurrentRecipe();
})

document.getElementById("userSaves").addEventListener("click" , () =>
{
    window.location.assign("savePage.html");

})

