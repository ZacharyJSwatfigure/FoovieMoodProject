let theList = document.getElementById("theList")


let  localStoreRecipes = JSON.parse( localStorage.getItem('savedFoodArr') );
console.log(localStoreRecipes)
let count = 0;

window.onload = () => {
    addRecipe()
}


function addRecipe () {
    const result = Object.keys(localStoreRecipes).length;
    console.log(result);
    for (let i = 0; i < result; i++) {

        for(i in localStoreRecipes) {
            if(localStoreRecipes.hasOwnProperty(i)) {
                console.log(Object.values(localStoreRecipes[i]));
                
                let currentRecipeInfo = localStoreRecipes[i];

                for(i in currentRecipeInfo) {
                    console.log(Object(currentRecipeInfo[i]));
                    if (i == 0) {
                        var listItem = document.createElement('h2');

                        //Set the text of the list element to the JSON response's .html_url property
                        listItem.textContent = currentRecipeInfo[i];
                
                        listItem.appendChild(theList);
                        //Append the li element to the id associated with the ul element.
                        console.log("It reads me 0")
                    };
                    if (i == 1) {
                        var listItem = document.createElement('h2');

                        //Set the text of the list element to the JSON response's .html_url property
                        listItem.textContent = currentRecipeInfo[i].textContent;
                
                        listItem.appendChild(theList);
                        //Append the li element to the id associated with the ul element.
                        console.log("It reads me 1")
        
                    };
                    if (i == 2) {
                        console.log("It reads me 2")
            
                    };
                }
                
            }
        }
    }    
}

document.getElementById("goBack").addEventListener("click" , () => {
    window.location.assign("index.html");

})
