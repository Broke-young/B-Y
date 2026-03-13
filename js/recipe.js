const urlParams = new URLSearchParams(window.location.search);
const opskriftId = urlParams.get("id");

const breadcrumb = document.querySelector("#dynamic-breadcrumb");
const imageContainer = document.querySelector("#recipe-image-container");
const titleContainer = document.querySelector("#recipe-title-container");
const ingredientsList = document.querySelector("#ingredients-list");
const methodText = document.querySelector("#method-text");

const mainPage = document.querySelector("#recipe-page");
const errorMessage = document.querySelector("#error-message");

function setupRecipePage() {
  if (!opskriftId) {
    showError();
    return;
  }
  getRecipeData();
}

function getRecipeData() {
  fetch(`https://dummyjson.com/recipes/${opskriftId}`)
    .then((res) => res.json())
    .then((recipe) => {
      if (recipe.message) {
        showError();
        return;
      }
      showRecipe(recipe);
    })
    .catch((err) => {
      console.error("Fejl:", err);
      showError();
    });
}

function showRecipe(recipe) {
  mainPage.classList.remove("hide");
  errorMessage.classList.add("hide");

  breadcrumb.innerHTML = `<p><a class="breadcrumb" href="index.html">Forside</a> > <a class="breadcrumb" href="list.html">${recipe.cuisine}</a> > ${recipe.name}</p>`;

  // 3. Indsæt billede
  imageContainer.innerHTML = `<img src="${recipe.image}" alt="${recipe.name}">`;

  // 4. Indsæt titel og undertitel (Køkken + Sværhedsgrad)
  titleContainer.innerHTML = `
        <h1>${recipe.name}</h1>
        <p class="subtitle">${recipe.cuisine} - ${recipe.difficulty} Difficulty</p>
    `;

  // 5. Loop ingredienser igennem og skab <li>
  let ingredientsMarkup = "";
  recipe.ingredients.forEach((ingrediens) => {
    // Wireframen har små cirkler som bullets - det fikser vi i CSS
    ingredientsMarkup += `<li>${ingrediens}</li>`;
  });
  ingredientsList.innerHTML = ingredientsMarkup;

  // 6. Indsæt fremgangsmåde.
  // Dummyjson har instruktionerne som et array. Vi samler dem til tekst.
  const methodMarkup = recipe.instructions
    .map((step) => `<p>${step}</p>`)
    .join("");
  methodText.innerHTML = methodMarkup;
}

function showError() {
  mainPage.classList.add("hide");
  errorMessage.classList.remove("hide");
}

setupRecipePage();
