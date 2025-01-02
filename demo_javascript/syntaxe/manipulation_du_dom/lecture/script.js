//Identifier par l'id
let description_elem = document.getElementById("description");
console.log(description_elem.innerHTML)

// Identifier par le selecteur CSS
let description_elem_bis = document.querySelector("#description");
console.log(description_elem_bis.innerHTML)

let description_elem_ter = document.querySelector("p");
console.log(description_elem_ter.innerHTML)

let description_elem_quinter = document.querySelector("html>body>p");
console.log(description_elem_quinter.innerHTML)

let description_elem_quater = document.querySelectorAll("p")[0];
console.log(description_elem_quater.innerHTML)