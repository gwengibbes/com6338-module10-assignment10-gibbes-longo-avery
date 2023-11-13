const edamamKey="fedc606a902ac509ffa30b75cad44f35";
const spoonacularKey="0a62124c70384954a9d43515e0216eb5";
//get wineFamily from localStorage
const wineFamily= "white" // or"white" depending on user choice from homepage 

document.addEventListener("DOMContentLoaded", async (event) => {
    const wines= await fetchWines(wineFamily)
    console.log(wines)
});

async function fetchWines(wineFamily){
    /*
    const redWines= ["bonarda", "bairrada", "primitivo", "nebbiolo", "dolcetto", "rioja", "grenache", "malbec", "zinfandel", "carmenere", "cesanese", "aglianico", "tempranillo", "shiraz", "merlot", "bordeaux"];
    const whiteWines= ["verdicchio", "chardonnay", "frascati", "gavi", "trebbiano", "catarratto", "albarino", "arneis", "verdejo", "vermentino", "soave", "grechetto", "riesling", "sauternes", "sylvaner"];
    */

    const recommendedWines = await fetch(`https://api.spoonacular.com/food/wine/description?apiKey=${spoonacularKey}&wine=merlot&number=2`);
    // in above line I will need to replace merlot with the selection from the user in our search menu
    return await recommendedWines.json();
}

function createSelectOptions(){

}






   
