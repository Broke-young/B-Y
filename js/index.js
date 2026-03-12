const grid = document.querySelector(".grid_1_1_1_1");

const allowedCuisines = [
  "Japanese",
  "Italian",
  "Indian",
  "Pakistani",
  "Thai",
  "Brazilian",
  "Mexican",
  "Greek",
];

fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => {
    const cuisines = [
      ...new Set(
        data.recipes
          .filter((recipe) => allowedCuisines.includes(recipe.cuisine))
          .map((recipe) => recipe.cuisine),
      ),
    ];

    let markup = "";

    cuisines.forEach((cuisine) => {
      markup += `
        <a href="list.html?cuisine=${cuisine}" class="button">
          ${cuisine}
        </a>
      `;
    });

    grid.innerHTML = markup;
  });
