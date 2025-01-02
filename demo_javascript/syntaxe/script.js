// Définition d'une constance, on ne peut pas la modifier
const URL_GOOGLE = "https://www.google.com";

// Déclaration de variable locale
let phrase = "Bonne année 2025!";

// Affichage en javascript de la variable phrase 
console.log(phrase);

// Déclaration de variable globale (dangeureux)
var pasbien = "Ceci est une variable mal déclarée!";

// Appel de la fonction toto
toto();

// Définition de la fonction toto
function toto () {
    var phrase = "test";
    console.log(phrase);
}

// Définition de la variable "somme" qui contient une fonction, peut être utilisé comme paramètre dans une autre fonction
const somme = (param1, param2) => {
    return param1 + param2;
}

// Appel et affichage de la fonction "somme"
console.log(somme(1,2));

//Exemples de bizarreries ave JS

//Possibilité daltérer le types des variables
let age = 32; //number
age = "trente-deux"; //string

// Changement de typage dynamique pour correspondre aux opérations disponibles
console.log("10" + 1 - 1) // affiche 100
console.log("10" + (1 - 1)) // affiche 100

