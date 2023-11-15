/*
    This is specifically for the wine pairing page
*/
document.addEventListener("DOMContentLoaded", async (event) => {
    const wineFamily = getWineFamilyPreference();

    if(!wineFamily) {
        alert(`No wine selection has been mande as yet`);
        return;
    }

    const wines= await fetchWines(wineFamily)
    console.log(wines)

    // Populate the drop downlist with the list of wines from the API 
    /* 
        When the user selects the wine from the list
        1. Save the selected wine to localstorage
        2. Send the users to the /recipe-generator page
    */
});

