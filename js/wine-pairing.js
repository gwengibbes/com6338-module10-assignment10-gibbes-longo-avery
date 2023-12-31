//This is specifically for the wine pairing page//

//get wineFamily from localStorage
const wineFamily = getWineFamilyPreference(); // or"white" depending on user choice from homepage 
document.getElementById("wine-select").classList.add(wineFamily);
const spoonacularKey = "0a62124c70384954a9d43515e0216eb5";

const redWines = ["zweigelt", "barbera_wine", "primitivo", "pinot_noir", "nebbiolo", "rioja", "grenache", "malbec", "zinfandel", "sangiovese", "cabernet_sauvignon", "tempranillo", "shiraz", "merlot", "bordeaux", "gamay", "dornfelder", "pinotage", "agiorgitiko"];
const whiteWines = ["assyrtiko", "moschofilero", "muscadet", "viognier", "verdicchio", "white_burgundy", "chardonnay", "gruener_veltliner", "gavi", "trebbiano", "sauvignon_blanc", "albarino", "verdejo", "vermentino", "pinot_grigio", "gewurztraminer", "chenin_blanc", "riesling"];

let selectElement;
//function to display selected wine-family image//
function displaySelectedWineFamilyImage(){
    const featuredImageEl = document.querySelector('#featuredImage');
    if (wineFamily==='white'){
         //update the image to show a white wine//
         featuredImageEl.setAttribute('src','../images/Wine being poured - white .jpg')
    } else {
        //update the image to show a red wine//
        featuredImageEl.setAttribute('src','../images/Wine being poured - red .jpg')
    }
}
document.addEventListener("DOMContentLoaded", async (event) => {
    let wineFamily = getWineFamilyPreference();

    if (!wineFamily) {
        alert(`No wine selection has been made as yet`);
        wineFamily = "white";
    }
    //call function to display selected wine-family image//
    displaySelectedWineFamilyImage();

    selectElement = document.getElementById("wine-select")
    createSelectOptions()
    selectElement.addEventListener("change", (event) => {
        fetchWines(selectElement.value);
    })

});

// This fetch function has to run once that user chooses a specific wine

async function fetchWines(wineFamily) {
    const recommendedWines = await fetch(`https://api.spoonacular.com/food/wine/dishes?wine=${wineFamily}&apiKey=${spoonacularKey}`);
    const wines = await recommendedWines.json();
    const elementToAppend = document.getElementById('text-content');
    const paragraph = document.createElement('p');
    paragraph.textContent = wines.text;
    const listContainer = document.createElement('ul');
    listContainer.classList.add("pairing-list");
    wines.pairings?.forEach(el => {
        const listEl = document.createElement('li');
        listEl.textContent = el;
        listContainer.appendChild(listEl)
    })
    elementToAppend.innerHTML = "";
    elementToAppend.appendChild(paragraph);
    elementToAppend.appendChild(listContainer);
    console.log(wines)
}

function createSelectOptions() {

    let winesArray;
    if (wineFamily === "white") {
        winesArray = whiteWines;
    } else {
        winesArray = redWines;
    }
    winesArray.sort().forEach(wine => {
        const option = document.createElement("option");
        option.value = wine;
        option.text = wine.replace(/_/g, " ");
        selectElement.appendChild(option)
    })

}


// function moved here from index.js because it is where we need it
function getWineFamilyPreference() {
    // get wine family from localStorage
    return localStorage.getItem('sml.winePref');
}