

/* Spoonacular API: this app will provide the list of recommended wines, we will need to filter by red / white
*/
SpoonacularKey = "*****************************";

const RecommendedWines = await fetch ('https://api.spoonacular.com/food/wine/recommendation?Spoonacularkey')
const WinesData = await RecommendedWines.json();
console log (WinesData)
const RecommendedRed =
const RecommendedWhite =

/* Edamam API: this is the API to get recipes
Access Point: https://api.edamam.com/api/recipes/v2

Application ID:

22b25df1

This is the application ID, you should send with each API request.
Application Keys
fedc606a902ac509ffa30b75cad44f35 —
*/
