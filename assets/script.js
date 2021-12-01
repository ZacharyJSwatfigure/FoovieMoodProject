
let MovieApi = 'db3a630e';
let searchQ;
let countryArr = []
let foodType = ""

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
    let mPoster = document.getElementById('Poster');

    let countryArr = result.Country.split(",").map(function (value) {
        return value.trim();
    });
    console.log (countryArr);


    //let movPoster = new Image(300,450);


    
    switch (countryArr[1]) {
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
        fetch(`https://api.edamam.com/api/recipes/v2?app_id=fea86a91&app_key=2b9e76ada8e917607dc4fd6bd442e887&type=public&cuisineType=${foodType}`)
            .then( response => {
                return response.json();
            })
            .then( response => {
                food(response);
            })
            function food(response) {
                console.log(response);
                for (let i = 0; i < 3; i++) {
                    myRandomNum = Math.floor(Math.random() * 500)
                    console.log("myRandomNum")
                    response.keys[myRandomNum];
                    console.log(`response.keys[myRandomNum]`)

                }
            }
        



    movieT.innerText=result.Title;
    countryOrigin.innerText= result.Country;
    moviePlot.innerText= result.Plot;
    posterURL= result.Poster;
    mPoster.src= `${posterURL}`;
    //document.getElementById('moviePoster').append(movPoster);

};





    document.getElementById('searchBtn').addEventListener('click',()=>
    {
        let userInput = document.getElementById("userInput").value;
        if (userInput)
            Search(userInput);
    })
