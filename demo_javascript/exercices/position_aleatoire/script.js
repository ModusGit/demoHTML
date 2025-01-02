// window.innerWidth = propriété pour obtenir la largeur de l'écran
// window.innerHeight = propriété pour obtenir la hauteur de l'écran

let btn = document.getElementById("Attrape-moi");

btn.addEventListener("mouseover", updateCoordinatesBtn);

function updateCoordinatesBtn() {
    // Calculate random positions within the window's dimensions
    let randomX = Math.random() * (window.innerWidth - btn.offsetWidth);
    let randomY = Math.random() * (window.innerHeight - btn.offsetHeight);

    // Update the button's position
    btn.style.position = "absolute";
    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
}

// Explanation:

// Event listener: 
// The updateCoordinatesBtn function is called when the mouse hovers over the button.

// Random positions: 
// randomX and randomY are calculated to be within the window's dimensions, taking into account the button's width and height 
// to ensure it stays within the viewport.
// 
// Update position: 
// The button's style.left and style.top properties are updated to the new random positions, and its style.position is set to "absolute" 
// to allow it to move within the window.
// This code will move the button to a new random position within the viewport whenever the mouse hovers over it.



