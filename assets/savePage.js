let theList = document.getElementById("theList")

let createRecipeName = document.createElement("h2")
let createRecipeNameText = "";
let createRecipeImg = document.createElement("img")
let createRecipeLink = document.createElement("a")



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
                        
                        createRecipeNameText = document.createTextNode(currentRecipeInfo[0]);
                        createRecipeName.appendChild(createRecipeNameText);
                        document.body.appendChild(createRecipeName)
                    
                        console.log("It reads the name")
                    }
                    if (i == 1) {

                        createRecipeImg.src = (currentRecipeInfo[1]);
                        document.body.appendChild(createRecipeImg);
                        
                        console.log("It reads an image")
        
                    }
                    if (i == 2) {
                        createRecipeLink.href = (currentRecipeInfo[2]);
                        createRecipeLink.innerHTML = ("Link To Recipe");
                        document.body.appendChild(createRecipeLink);
                        
                        console.log("It reads a link")
            
                    } else {
                        console.log("done with loop")
                    }
                }
                
            }
        }
    }    
}

document.getElementById("goBack").addEventListener("click" , () => {
    window.location.assign("index.html");

})
