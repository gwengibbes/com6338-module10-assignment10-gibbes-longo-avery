/* 
    This file will only define the variables and functions that we need that will be used
    by the JavaScript file on all pages.
*/

const lsWinePrefKey = 'sml.winePref'
const edamamKey="fedc606a902ac509ffa30b75cad44f35";
//get wineFamily from localStorage
const wineFamily= getWineFamilyPreference(); // or"white" depending on user choice from homepage 

// fix: added by me
window.lsWinePrefKey = lsWinePrefKey;
// putting variables in window object is considered a BAD PRACTICE! 
// we should create an utility file to import function from the files
window.getWineFamilyPreference = getWineFamilyPreference;

function getWineFamilyPreference() {
    // get wine family from localStorage
    return localStorage.getItem(lsWinePrefKey);
}

// Call the API to get the list of food pairings based on the selected wine
