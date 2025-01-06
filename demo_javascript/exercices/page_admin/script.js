let utilisateurs = [
    {"nom" : "Skywalker", "prenom" : "Luke", "camp" : "Jedi"},
    {"nom" : "Skywalker", "prenom" : "Anakin", "camp" : "Jedi (?)"},
    {"nom" : "Jin", "prenom" : "Qui Gon", "camp" : "Jedi"},
    {"nom" : "Palpatine", "prenom" : "Chancelier", "camp" : "Sith"},
    {"nom" : "Maul", "prenom" : "Dark", "camp" : "Sith"},
    {"nom" : "Tano", "prenom" : "Ahsoka", "camp" : "Gris"},
    ]
    
function byUsers () {
    
    // Récupérer le thead du tableau
    let tableHead = document.getElementById("tableusers").getElementsByTagName("thead")[0];

    // Créer une ligne du tableau
    let rowHead = document.createElement('tr');
        
    // Créer les cellules du tableau
    let cellHead_name = document.createElement('th');
    let cellHead_surname = document.createElement('th');
    let cellHead_camp = document.createElement('th');

    // Ajouter le texte de la valeur de l'objet correspondant à la cellule
    cellHead_name.textContent = "Nom";
    cellHead_surname.textContent = "Prénom";
    cellHead_camp.textContent = "Camp";
            
    // Ajouter les cellule à la ligne du tableau
    rowHead.appendChild(cellHead_name);
    rowHead.appendChild(cellHead_surname);
    rowHead.appendChild(cellHead_camp);
        
    // Ajouter la ligne au tableau
    tableHead.appendChild(rowHead);

    // Récupérer le tbody du tableau
    let tableBody = document.getElementById("tableusers").getElementsByTagName("tbody")[0];

    // Boucle à travers le tableau utilisateurs
    for (let i=0; i<utilisateurs.length; i++) {
            
        // Créer une ligne du tableau
        let row = document.createElement('tr');
        
        // Créer les cellules pour une ligne utilisateur du tableau
        let cell_name = document.createElement('td');
        let cell_surname = document.createElement('td');
        let cell_camp = document.createElement('td');

        // Ajouter le texte de la valeur de l'objet correspondant à la cellule
        cell_name.textContent = utilisateurs[i].nom;
        cell_surname.textContent = utilisateurs[i].prenom;
        cell_camp.textContent = utilisateurs[i].camp;
            
        // Ajouter la cellule à la ligne du tableau
        row.appendChild(cell_name);
        row.appendChild(cell_surname);
        row.appendChild(cell_camp);
        
        // Ajouter la ligne au tableau
        tableBody.appendChild(row);
    }
};

byUsers();

// Sélectionner les éléments input pour ajouter un utilisateur au tableau
let name_input = document.getElementById("name");
let surname_input = document.getElementById("surname");
let camp_input = document.getElementById("camp");
let submitButton = document.getElementById("submit");
let tableBody = document.getElementById("tableusers").getElementsByTagName("tbody")[0];

// Ajouter un écouteur d'événements pour le bouton de soumission
submitButton.addEventListener("click", function(event) {
    
    // Empêcher le formulaire de se soumettre et de recharger la page
    event.preventDefault(); //le comportement par défaut est annulé

    // Récupérer la valeur des inputs
    let name = name_input.value;
    let surname = surname_input.value;
    let camp = camp_input.value;
       
    // Créer une ligne du tableau
    let row = document.createElement('tr');
        
    // Créer les cellules pour une ligne utilisateur du tableau
    let cell_name = document.createElement('td');
    let cell_surname = document.createElement('td');
    let cell_camp = document.createElement('td');

    // Ajouter le texte de la valeur de l'input
    cell_name.textContent = name;
    cell_surname.textContent = surname;
    cell_camp.textContent = camp;
           
    // Ajouter la cellule à la ligne du tableau
    row.appendChild(cell_name);
    row.appendChild(cell_surname);
    row.appendChild(cell_camp);
       
    // Ajouter la ligne au tableau
    tableBody.appendChild(row);
  
    // Réinitialiser les champs du formulaire
    name_input.value = "";
    surname_input.value = "";
    camp_input.value = "";

});

// //Trier le tableau par la clé Nom de l'objet
let utilisateurs_nom = utilisateurs.sort((a, b) => {
    return a.nom.localeCompare(b.nom);
});
console.log(utilisateurs_nom);

//Trier le tableau par la clé Prénom de l'objet
// let utilisateurs_prenom = utilisateurs.sort((a, b) => {
//     return a.prenom.localeCompare(b.prenom);
// });
// console.log(utilisateurs_prenom);

//   utilisateurs.sort(function compare(a, b) {
//     if (a.nom < b.nom)
//        return -1;
//     if (a.nom > b.nom )
//        return 1;
//     return 0;
//   });
  