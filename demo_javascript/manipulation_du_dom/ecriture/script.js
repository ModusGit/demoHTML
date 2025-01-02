setTimeout(() => {

// ajout d'un nouvel élément dans le body de la page html
let nouvel_element = document.createElement("p");
nouvel_element.innerHTML = "<b>Bonne année 2025</b>";
document.body.appendChild(nouvel_element);
// modifier un élément du body de la page html
let salutation_elem = document.getElementById("salutations");
salutation_elem.innerHTML = "Hi everyyyybodyyyy!" 

}, 5000);
