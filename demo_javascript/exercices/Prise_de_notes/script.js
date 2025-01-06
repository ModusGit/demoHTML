// Sélectionner les éléments input, bouton et div pour afficher les notes
const titleInput = document.getElementById("title");
const textInput = document.getElementById("note");
const colorInput = document.getElementById("color");
const submitButton = document.getElementById("submit");
const displayNote = document.getElementById("displayNote");

// Ajouter un écouteur d'événements pour le bouton de soumission
submitButton.addEventListener("click", function(event) {
    
    // Empêcher le formulaire de se soumettre et de recharger la page
    event.preventDefault(); //le comportement par défaut est annulé

    // Récupérer la valeur des inputs
    const title = titleInput.value;
    const note = textInput.value;
    const color = colorInput.value;

    // Créer un nouvel élément div pour afficher la note
    const noteDiv = document.createElement("div");
    noteDiv.className = "noteStyle"; // Ajouter la classe 'note' pour le style
    //noteDiv.classList.add("noteStyle")
    noteDiv.style.backgroundColor = color; // Appliquer la couleur choisie

    // Ajouter le titre et la note à la div
    const noteTitle = document.createElement("h3");
    noteTitle.textContent = title;
    const noteContent = document.createElement("p");
    noteContent.textContent = note;

    // Créer un bouton de suppression à la note
    const deleteNote = document.createElement("button");
    deleteNote.innerHTML = "&#10008";
    deleteNote.className = "deleteNote";

    // Ajouter un écouteur d'événements pour le bouton de suppression
    deleteNote.addEventListener("click", function() {
        // Affiche une boîte de confirmation
        if (confirm("Confirmes-tu la suppression de ta note ?")) {
            // Si l'utilisateur confirme, supprimez la note
            noteDiv.remove();
        } 
    });

    // Ajouter les éléments à la div de la note
    noteDiv.appendChild(noteTitle);
    noteDiv.appendChild(noteContent);
    noteDiv.appendChild(deleteNote);

    // Ajouter la div de la note à l'élément displayNote
    displayNote.appendChild(noteDiv);
  
    // Réinitialiser les champs du formulaire
        titleInput.value = "";
        textInput.value = "";
        colorInput.value = "#000000"; // Rétablir la couleur par défaut

});

// Explications :

// Empêcher la soumission du formulaire : 
// event.preventDefault(); empêche le comportement par défaut de soumission du formulaire, ce qui éviterait le rechargement de la page.

// Récupérer les valeurs des inputs : 
// Les valeurs des inputs sont récupérées et utilisées pour créer une nouvelle note.

// Créer et styliser une nouvelle div pour chaque note : 
// Une nouvelle div est créée pour chaque note, avec le titre et le contenu de la note, et est ajoutée à l'élément displayNote.

// Réinitialiser les champs du formulaire : 
// Les champs du formulaire sont réinitialisés après avoir ajouté la note.

// Avec ce code, lorsque vous saisissez un titre, une note et une couleur, puis cliquez sur le bouton "Enregistrer", 
// la note sera affichée dans le div displayNote avec les informations saisies et la couleur choisie.