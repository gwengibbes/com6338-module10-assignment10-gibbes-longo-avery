/* JS constants */

const apiKey = "f61be50c9040c3f95ea07adbb8a3454e";
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const recipeResultsContainer = document.getElementById('recipeResults');

/* Search bar and local storage for search bar */
const savedSearchTerm = localStorage.getItem('savedSearchTerm');
if (savedSearchTerm) {
  searchInput.value = savedSearchTerm;
}

/* Search button */
searchButton.onclick = function () {
  searchRecipes();
};

/* Edamam API search instructions (and more local storage functions.)*/

async function searchRecipes() {
  const searchTerm = searchInput.value;
  localStorage.setItem('savedSearchTerm', searchTerm);
  const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=108faad6&app_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayResults(data);
  } catch (error) {
    console.error('Fetch error:', error);
    displayError();
  }
}

/*Food results container*/

function displayResults(data) {
  recipeResultsContainer.innerHTML = '';

  if (data.hits && data.hits.length > 0) {
    data.hits.forEach(hit => {
      const recipe = hit.recipe;
      const recipeElement = document.createElement('div');
      recipeElement.innerHTML = `<h2>${recipe.label}</h2>
                                 <p>${recipe.source}</p>
                                 <img src="${recipe.image}" alt="${recipe.label}">
                                 <button class="view-recipe-btn">View Recipe</button>`;
/* Food results button */

      const viewRecipeBtn = recipeElement.querySelector('.view-recipe-btn');
      viewRecipeBtn.addEventListener('click', () => {
        window.open(recipe.url, '_blank');
      });
      recipeResultsContainer.appendChild(recipeElement);
    });
  } else {
    recipeResultsContainer.innerHTML = '<p>No recipes found.</p>';
  }
}

/* Search error caught */

function displayError() {
  recipeResultsContainer.innerHTML = '<p>Please try again later.</p>';
}
