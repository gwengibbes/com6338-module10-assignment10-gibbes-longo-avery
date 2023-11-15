/*
    This is specifically for the wine pairing page
*/
const spoonacularKey="0a62124c70384954a9d43515e0216eb5";
const redWines= ["bonarda", "bairrada", "primitivo", "nebbiolo", "dolcetto", "rioja", "grenache", "malbec", "zinfandel", "carmenere", "cesanese", "aglianico", "tempranillo", "shiraz", "merlot", "bordeaux"];
const whiteWines= ["verdicchio", "chardonnay", "frascati", "gavi", "trebbiano", "catarratto", "albarino", "arneis", "verdejo", "vermentino", "soave", "grechetto", "riesling", "sauternes", "sylvaner"];
let selectElement;
document.addEventListener("DOMContentLoaded", async (event) => {
    let wineFamily = window.getWineFamilyPreference();

    if(!wineFamily) {
        // this has to be a redirect to home instead of an alert
        alert(`No wine selection has been made as yet`);
        wineFamily = "white";
    }

    selectElement = document.getElementById("wine-select")
    createSelectOptions()
    selectElement.addEventListener("change", (event) => {
        fetchWines(selectElement.value);
    })

    // Populate the drop downlist with the list of wines from the API 
    /* 
        When the user selects the wine from the list
        1. Save the selected wine to localstorage
        2. Send the users to the /recipe-generator page
    */
});



// this fetch function has to run on select change (once that user chooses a specific wine)
// selectEl.addEventListener("change", (event) => {});
async function fetchWines(wineFamily){  
    const recommendedWines = await fetch(`https://api.spoonacular.com/food/wine/dishes?wine=${wineFamily}&apiKey=${spoonacularKey}`);
    const wines = await recommendedWines.json();
    const elementToAppend = document.getElementById('text-content');
    const paragraph = document.createElement('p');
    paragraph.textContent = wines.text;
    const listContainer = document.createElement('ul');
    wines.pairings?.forEach(el => {
        const listEl = document.createElement('li');
        listEl.textContent = el;
        listContainer.appendChild(listEl)
    })
    
    elementToAppend.appendChild(paragraph);
    elementToAppend.appendChild(listContainer);
    console.log(wines)
}

function createSelectOptions(){

    let winesArray;
    if(wineFamily === "white"){
        winesArray = whiteWines;  
    } else {
        winesArray = redWines;  
    }
    winesArray.sort().forEach(wine =>{
        const option = document.createElement("option");
        option.value = wine;
        option.text = wine;
        selectElement.appendChild(option)
    })
}
