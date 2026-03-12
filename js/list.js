// 1. Ret "category" til "cuisine", så det matcher linket fra index.html
const kategori =
  new URLSearchParams(window.location.search).get("cuisine") || "Japanese";

const container = document.querySelector(".productlist-grid");
const header = document.querySelector("#dynamic-header");

let allData;
let udsnit;

function setupPage() {
  if (header) {
    header.innerHTML = `

        <div class="category-banner">
            <h2>${kategori.toUpperCase()}</h2>
        </div>
    `;
  }
  getData();
}

function getData() {
  // Brug den korrekte API-url (den samme som du brugte i index.js)
  fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((data) => {
      // Dummyjson pakker det ind i et "recipes" objekt
      allData = data.recipes.filter((item) => item.cuisine === kategori);
      udsnit = allData;
      showData(udsnit);
    })
    .catch((err) => console.error("Fejl ved hentning af data:", err));
}

// ... resten af din filter og sorter kode er fin! ...

function showData(recipes) {
  if (!recipes || recipes.length === 0) {
    container.innerHTML = "<p>Ingen opskrifter fundet i denne kategori.</p>";
    return;
  }

  const markup = recipes
    .map(
      (recipe) => `
        <article class="recipe-card">
            <div class="img-box">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>
            <h3>${recipe.name}</h3>
            <p class="difficulty-text">${recipe.difficulty} Difficulty</p>
            <p class="recipe-desc">Lorem ipsum dolor sit amet.</p>
        </article>
    `,
    )
    .join("");

  container.innerHTML = markup;
}

setupPage();
