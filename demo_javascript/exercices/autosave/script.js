// Sélectionner les éléments
let textarea_elem = document.getElementById("saisitext");
let table_elem = document.getElementById("affichertext").getElementsByTagName("tbody")[0];
let array_text = [];

let cpm_elem = document.getElementById("cpm");
let startTime = null;
let charCount = 0;

// Ajouter un écouteur d'événements à la saisi
textarea_elem.addEventListener("input", function () {
    // Mettre à jour array_text avec la valeur actuelle du textarea
    array_text.push(textarea_elem.value);
});
 
// Appeler afficherText toutes les 10 secondes
setInterval(afficherText, 10000);

function afficherText() {
    // Récupérer le dernier texte saisi
    //let text = array_text[array_text.length - 1];
        
    // Créer une ligne du tableau
    const row = document.createElement('tr');
        
    // Créer une cellule du tableau
    const cell = document.createElement('td');

    // Ajouter le texte à la cellule
    cell.textContent = textarea_elem.value;
        
    // Ajouter la cellule à la ligne du tableau
    row.appendChild(cell);
    
    // Ajouter la ligne au tableau
    table_elem.appendChild(row);
};


// L'écouteur d'événements input met à jour array_text avec la valeur actuelle du textarea chaque fois que l'utilisateur tape quelque chose. 
// La fonction afficherText vérifie si array_text contient des valeurs et ajoute le dernier texte saisi dans une nouvelle ligne du tableau 
// toutes les 10 secondes.


// Ajouter un écouteur d'événements à la saisi
textarea_elem.addEventListener("input", function () {
    if (startTime === null) {
        // Démarrer le chrono à la première entrée
        startTime = Date.now();
    }
    // Mettre à jour le nombre de caractères saisis
    charCount = textarea_elem.value.length;
});

// Calculer les caractères par minute toutes les secondes
setInterval(function () {
    if (startTime !== null) {
        // Calculer le temps écoulé en minutes
        let elapsedTime = (Date.now() - startTime) / 60000;
        // Calculer les caractères par minute
        let cpm = parseInt((charCount / elapsedTime).toFixed(2));
        console.log(cpm)
        // Mettre à jour l'affichage
        cpm_elem.textContent = "Caractères par minute: " + cpm;
    }
}, 10000);

// La variable startTime enregistre le moment où l'utilisateur commence à taper.
// La variable charCount garde une trace du nombre de caractères saisis.
// Un intervalle de 10 seconde est utilisé pour calculer et afficher le nombre de caractères par minute (CPM) en fonction du temps écoulé.
