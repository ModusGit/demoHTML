// Get references to the existing input elements and result element
let saisie1_elem = document.getElementById("saisien1");
let saisie2_elem = document.getElementById("saisien2");
let resultat = document.getElementById("resultat");

// Add event listeners to the input elements
saisie1_elem.addEventListener("input", additionner);
saisie2_elem.addEventListener("input", additionner);

function additionner() {
    // Parse the input values as floats and calculate the sum
    let sum = parseFloat(saisie1_elem.value) + parseFloat(saisie2_elem.value);
    
    // Check if the sum is a valid number before displaying it
    if (!isNaN(sum)) {
        resultat.innerHTML = sum;
    } else {
        resultat.innerHTML = "";
    }
}

// Explanation:

// Get references to existing elements: 
// Use document.getElementById to get references to the input elements (saisien1 and saisien2) and the resultat element.

// Add event listeners: Attach the additionner function as an event listener for the input event on both input elements.

// Calculate the sum: 
// Use parseFloat to convert the input values to numbers and add them together.

// Display the result: 
// Update the innerHTML of the resultat element with the calculated sum if it's a valid number.
// This code will correctly update the resultat element with the sum of the values entered in the two input fields every time the input changes.