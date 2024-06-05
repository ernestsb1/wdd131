





const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = new Date().getFullYear();

// Update the last modification date
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last modification: ${new Date("2024-04-29T11:34:45").toLocaleString()}`;

const recipes = [
    { id: 1, title: 'Grilled Chicken Salad', ingredients: ['chicken', 'lettuce', 'tomatoes', 'avocado'] },
    { id: 2, title: 'Spaghetti Bolognese', ingredients: ['ground beef', 'tomatoes', 'onion', 'garlic', 'pasta'] },
    { id: 3, title: 'Vegetable Stir-Fry', ingredients: ['broccoli', 'carrots', 'bell peppers', 'mushrooms', 'soy sauce'] },
    { id: 4, title: 'Baked Salmon with Lemon', ingredients: ['salmon', 'lemon', 'butter', 'dill'] },
    { id: 5, title: 'Chocolate Chip Cookies', ingredients: ['flour', 'butter', 'sugar', 'chocolate chips', 'eggs'] }
  ];
  
  function searchRecipes() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';
  
    recipes.forEach(recipe => {
      if (recipe.title.toLowerCase().includes(searchInput) || recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput))) {
        const recipeDiv = document.createElement('div');
        recipeDiv.innerHTML = `${recipe.title} - ${recipe.ingredients.join(', ')}`;
        recipeList.appendChild(recipeDiv);
      }
    });
  }
  
  