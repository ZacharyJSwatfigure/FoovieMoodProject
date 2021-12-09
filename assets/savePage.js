saveList = document.getElementById("saveList");



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
        console.log(result)

        for(i in localStoreRecipes) {
            if(localStoreRecipes.hasOwnProperty(i)) {
                console.log(Object.values(localStoreRecipes[i]));
                
                let currentRecipeInfo = localStoreRecipes[i];
                for(i in currentRecipeInfo) {
                    console.log(Object(currentRecipeInfo[i]));
                    if (currentRecipeInfo[i].value == 0) {
                        var h2 = document.createElement('h2');
                        h2.textContent = currentRecipeInfo[i].textContent;
                        h2.setAttribute('recipeOneName');
                        document.body.appendChild(h2);
                        console.log("It word h2")
                    };
                    if (currentRecipeInfo[i] == 1) {
                        var img = document.createElement('img');
                        img.src = currentRecipeInfo[i] 
                        img.setAttribute('recipeOneName', 'note');
                        document.body.appendChild(img);
                    };
                    if (currentRecipeInfo[i] == 2) {
                        var a = document.createElement('a');
                        a.textContent = "New Heading!!!";
                        a.setAttribute('recipeOneName', 'note');
                        document.body.appendChild(a);
                    };
                }
                
            }
        }
    }    
}

document.getElementById("goBack").addEventListener("click" , () => {
    window.location.assign("index.html");

})
