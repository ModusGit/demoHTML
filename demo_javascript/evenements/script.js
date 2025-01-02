// 1- Evenement standard de clic sur un bouton

let clickmebutton_elem = document.getElementById("clickmebutton");
clickmebutton_elem.addEventListener("click", afficherMessage);

// Ou 
// clickmebutton.addEventListener("click", afficherMessage); sans déclarer la variable

// Ou
// document
//     .getElementById("clickmebutton");
//     .addEventListener("click", afficherMessage);

function afficherMessage() {
    alert("Hi everybody !");
}

// 2- Evenement d'écoute des touches du clavier sur la page (window)
window.addEventListener("keydown", moveCharacter);

function moveCharacter(event) {
    switch(event.keyCode) {
        case 37 :
            console.log("I go to the left");
            break;
        case 38 :
            console.log("I go up");
            break;
        case 39 :
            console.log("I go to the right");
            break;
        case 40 :
            console.log("I go down");
            break;
        default:
            console.log("I can't move !");
            break;
    }
}

// 3- Ecoute d'un évènement input

let saisie_elem = document.getElementById("saisie");
let recopie_elem = document.getElementById("recopie");

saisie_elem.addEventListener("input", actualiserRecopie);

function actualiserRecopie() {
    recopie_elem.innerHTML = saisie_elem.value;
}

// OU
// saisie.addEventListener("input", actualiserRecopie);

// function actualiserRecopie() {
//     recopie_elem.innerHTML = saisie.value;
// }

// 4 - Ajout et retrait d'une classe sur un élément

choixcouleur.addEventListener("input", changerCouleur);

function changerCouleur() {
    document.body.className ="";
    document.body.classList.add(choixcouleur.value);
}