const kategori =
  new URLSearchParams(window.location.search).get("category") || "Japanese";
const container = document.querySelector(".productlist-grid");
const header = document.querySelector("#dynamic-header");

let allData;
let udsnit;

function setupPage() {
  // Vi bygger overskriften og brødkrummerne dynamisk
  header.innerHTML = `
        <div class="logo">Broke & Young</div>
        <nav class="breadcrumb">Forside > ${kategori}</nav>
        <div class="category-banner">
            <h2>${kategori.toUpperCase()}</h2>
        </div>
    `;
  getData();
}

function getData() {
  // Erstat med dit rigtige link eller lokale fil
  fetch("https://kea-alt-del.dk/t7/api/recipes")
    .then((res) => res.json())
    .then((data) => {
      // Vi tager udgangspunkt i de data der matcher URL kategorien
      allData = data.filter((item) => item.cuisine === kategori);
      udsnit = allData;
      showData(udsnit);
    });
}

// --- FILTRERING ---
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

// --- SORTERING ---
document.querySelectorAll(".sort-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const sortType = e.target.dataset.sort;
    if (sortType === "az") {
      udsnit.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      udsnit.sort((a, b) => b.name.localeCompare(a.name));
    }
    showData(udsnit);
  });
});

function showData(recipes) {
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

// Kør setup når siden loader
setupPage();
