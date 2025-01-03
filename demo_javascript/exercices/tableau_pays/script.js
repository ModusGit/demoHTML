let countries = ["France", "Japon", "Togo", "Suède", "Brésil"];

function byCountries () {
    // Récupérer le tbody du tableau
    const tableBody = document.getElementById("tableaupays").getElementsByTagName("tbody")[0];

    // Boucle à travers le tableau countries
    for (let i=0; i<countries.length; i++) {
            
        // Créer une ligne du tableau
        const row = document.createElement('tr');
        
        // Créer une cellule du tableau
        const cell = document.createElement('td');

        // Ajouter le texte du pays à la cellule
        cell.textContent = countries[i];
            
        // Ajouter la cellule à la ligne du tableau
        row.appendChild(cell);
        
        // Ajouter la ligne au tableau
        tableBody.appendChild(row);
    }
}

byCountries();