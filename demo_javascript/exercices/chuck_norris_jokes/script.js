// Etape 1 : créer un bouton qui affiche au hasard une blague de chuck norris quand on clique dessus
// Etape 2 : créer plusieurs boutons (un par catégories disponibles sur le site)
// Etape 3 : quand on clique sur le bouton "animal", on tire une blague au hasard de la catégorie "animal"

// Function to fetch and display a random joke
function fetchAndDisplayJoke(url) {
    fetch(url)
        .then(response => response.json())
        .then(json => displayJoke(json));
}
let p_elem = document.createElement("p");

// Function to display the joke on the webpage
function displayJoke(joke) {
    p_elem.textContent = joke.value;
    document.body.appendChild(p_elem);
}

// Creating the button to fetch a new random joke
let button_elem = document.createElement("button");
button_elem.textContent = "Affiche-moi une autre blague";
button_elem.addEventListener("click", () => fetchAndDisplayJoke("https://api.chucknorris.io/jokes/random"));
document.getElementById("button-container").appendChild(button_elem);

// Fetch and display category buttons
fetch("https://api.chucknorris.io/jokes/categories")
    .then(response => response.json())
    .then(json => displayCategories(json));

function displayCategories(categories) {
    let buttonContainer = document.getElementById("button-container");
    categories.forEach(category => {
        let category_button_elem = document.createElement("button");
        category_button_elem.textContent = category;
        buttonContainer.appendChild(category_button_elem);

        // Adding event listener to fetch and display joke by category
        category_button_elem.addEventListener("click", () => fetchAndDisplayJoke(`https://api.chucknorris.io/jokes/random?category=${category}`));
    });
}

// fetchAndDisplayJoke(url): 
// This function fetches a joke from the given URL and then displays it using the displayJoke function.

// displayJoke(joke): 
// This function creates a paragraph element and sets its text content to the joke's value, then appends it to the document body.

// Button to fetch a new random joke: 
// The button is created and appended to the document body, with an event listener that calls fetchAndDisplayJoke with the random joke URL.

// Fetching and displaying category buttons: 
// The displayCategories function creates a button for each category and appends it to the document body. 
// Each button has an event listener that calls fetchAndDisplayJoke with the URL for a joke from the selected category.