// burger menu - open and close
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});

// burger menu inside
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
        <a href="list.html?cuisine=${cuisine}" class="menu_button">
          ${cuisine}
        </a>
      `;
    });

    menu.innerHTML = markup;
  });
