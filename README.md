# TEKNISK DOKUMENTATION - B&Y 

## Kort om projektet

Dette projekt har vi lavet i forbindelse med Tema 8, hvor vi har udviklet et dynamisk site ved at bruge hendholdsvis HTML, CSS samt Javascript. Indholdet til hjemmesiden bliver indhentet fra et rest API.


## Links:

- GitHub Pages: [indsæt link]

- Projektets GitHub Repository:
https://github.com/Broke-young/B-Y

- Figma: https://www.figma.com/design/RTBt56D6OUkZQBpn7uTntB/B-Y?node-id=0-1&t=vGPSKitB8rEtnA0I-1

- Trello Board:
https://trello.com/invite/b/69aec440b3dae8b2326eb4e9/ATTI90b23426bd81d0e715407848079bc459CE92D6E7/by


## Gruppemedlemmer:
- Luna Victoria Bungkird Christiansen - luch0005@stud.ek.dk
- Ophélie Breit Zoungrana Bedsted - opbe0001@stud.ek.dk
- Ida Dam - Idda0001@stud.ek.dk
- Yvonne Yuna Quach - yvqu0001@stud.ek.dk
- Sofia Nguyen - song002@stud.ek.dk

# Projektstruktur
```
B-Y/
├── index.html
├── list.html
├── recipe.html
├── css/
│   └── general.css
│   └── index.css
│   └── list.css
│   └── recipe.css
│   └── reset.css
├── js/
│   ├── general.js
│   ├── index.js
│   ├── list.js
│   ├── recipe.js
└── README.md
```

## Filbeskrivelser
-  **index.html** – Forsiden
-  **list.html** – viser en liste med data fra API'et
-  **recipe.html** – viser detaljer om den valgte opskrift samt indeholder formularen
-  **genereal.css** – styling globale elementer
-  **index.css** - styling af forsiden
-  **list.css**- styling af listen over de forskellige opskrifter
-  **recipe.css** - styling af den valgte opskrift
-  **reset.css** - så vi kan style fra bunden af uden de automatiske presets fra browseren
-  **JavaScript-filer** – styrer det dynamiske indhold på de forskellige sider

## Hvordan koden fungerer
Vi har opddelt vores js således at alle sider har hver sin fil.

## index.js
Bliver brugt på forsiden. Indholder bliver vist dynamisk, såsom kategorier.

## list.js
Henter data fra Rest API'et og viser derefter en liste med opskrifter på siden.

**Flow:**

- Siden loader
- JavaScript kører
- Data hentes fra Rest API
- Data bliver gennemgået med loop
- HTML bliver indsat i DOM'en
- Brugeren kan klikke på en opskrift


## recipe.js
Bruges til detaljesiden altså siden man kommer ind på, når man klikker på en opskrift. 
Den læser et id fra URL'en og henter derefter den rigtige opskrift fra Rest API'et.
På den måde kan man genbruge den samme HTML-side til alle opskrifterne.
I stedet for at lave én side per opskrift, bruger vi ét id i URL'en til at vise det rigtige indhold.
Derudover har vi tilføjet en formular, hvor folk har mulighed for at indsende en kommentar. 

## Navngivning

Vi har navngivet vores filer, variabler og funktioner for at det lettest muligt giver mening ift. hvad koden gør.
### Eksempler på variabler

```javascript
const grid;
const kategori;
const breadcrumb;
```

### Eksempler på funktioner

```javascript
function setupPage();
function showRecipe(recipe);
function getData();
```
Vi har brugt camelCase i JavaScript, fordi det gør koden mere ensartet og lettere at læse.

## Data og JSON-struktur

Vi henter data fra et API i JSON-format.

**Et objekt kan fx se sådan ud:**

```json
[
    {
      "id": 1,
      "name": "Classic Margherita Pizza",
      "ingredients": [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
      ],
      "prepTimeMinutes": 20,
      "cookTimeMinutes": 15,
      "servings": 4,
      "difficulty": "Easy",
      "cuisine": "Italian",
      "caloriesPerServing": 300,
      "tags": [
        "Pizza",
        "Italian"
      ],
      "userId": 166,
      "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
      "rating": 4.6,
      "reviewCount": 98,
      "mealType": [
        "Dinner"
      ]

```

### Felter vi bruger

- **id** – bruges til at sende brugeren videre til detaljesiden
- **name** – Navnet på opskriften
- **ingredients** - Ingredienserne der skal bruges
- **instructions** – Instruktioner til hvordan man laver retten
- **prepTimeMinutes** – Forberedelsestiden i minutter
- **cookTimeMinutes** – Tilberedningstid i minutter
- **difficulty** – Sværhedsgrad
- **rating** – Bedømmelse af retten
- **image** – Billede af retten

# Formular og validering
......

# Git og branches
Vi har brugt GitHub til at kode denne hjemmeside sammen. 
Vi har dertil arbjedet med branches så vi kunne være flere om at kode på samme tid. 

### Eksempler på branches
- `header!`
- `mobile-vers+extra`
- `mobile-vers`

### Workflow

1. Lave en branch med et navn der stemmer overens med den opgave man er gået igang med
2. Kode en feature
3. Committe ændringer
4. Pushe til GitHub
5. Merge til main når det virkede

## Bæredygtighed

Vi har tænkt bæredygtighed ind i projektet ved at holde page weight under 250 kb samt en enkel informationasarkitektur.

**Tiltag:**

- Ingen frameworks
- Ingen videoer
- Genbruge af kode
- Optimerede billeder: svg + webp

## Udfordringer undervejs
Der har selvfølgelig været småfejl undervejs eksempelvis som.....


**Løsninger:**

- .....


## Mulige forbedringer

Hvis vi skulle arbejde videre med projektet, kunne vi forbedre det ved at tilføje:

- At få søgefunktion til at virke, lige nu er det bare implementeret på sitet af æstetiske årsager
- Error handling - 404 side



