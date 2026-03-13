const urlParams = new URLSearchParams(window.location.search);
const kategori = urlParams.get("cuisine");

const container = document.querySelector(".productlist-grid");
const headerContainer = document.querySelector("#dynamic-header");

let allData; //
let udsnit;

function setupPage() {
  if (!kategori) {
    window.location.href = "index.html";
    return;
  }
  if (headerContainer) {
    headerContainer.innerHTML = `
        <p class="breadcrumb"><a class="breadcrumb" href="index.html">Forside</a> > ${kategori}</p>
        <div class="category-banner">
            <h2>${kategori.toUpperCase()}</h2>
        </div>
    `;
  }
  getData();
}

function getData() {
  fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((data) => {
      allData = data.recipes.filter(
        (item) => item.cuisine.toLowerCase() === kategori.toLowerCase(),
      );
      udsnit = allData;
      showData(udsnit);
    });
}

document.querySelectorAll(".sort-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const sortType = e.target.dataset.sort;
    if (sortType === "az") {
      udsnit.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "za") {
      udsnit.sort((a, b) => b.name.localeCompare(a.name));
    }
    showData(udsnit);
  });
});

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const diff = e.target.dataset.diff;
    if (diff === "all") {
      udsnit = allData;
    } else {
      udsnit = allData.filter((item) => item.difficulty === diff);
    }
    showData(udsnit);
  });
});

function showData(recipes) {
  if (!recipes || recipes.length === 0) {
    container.innerHTML = "<p>Ingen opskrifter fundet.</p>";
    return;
  }

  const markup = recipes
    .map(
      (recipe) => `
        <a href="recipe.html?id=${recipe.id}" class="recipe-link">
            <article class="recipe-card">
                <div class="img-box">
                    <img src="${recipe.image}" alt="${recipe.name}">
                </div>
                <h3>${recipe.name}</h3>
                <p class="difficulty-text">${recipe.difficulty} Difficulty</p>
                <p class="recipe-desc">Preptime: ${recipe.prepTimeMinutes} | Cooktime: ${recipe.cookTimeMinutes}</p>
                 <p class="recipe-desc">Ratings: ${recipe.rating}</p>
            </article>
        </a>
    `,
    )
    .join("");

  container.innerHTML = markup;
}

setupPage();
