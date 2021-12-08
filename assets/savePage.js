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
        
}

document.getElementById("goBack").addEventListener("click" , () => {
    window.location.assign("index.html");

})
}
