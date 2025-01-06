let etudiant1 = {"nom": "Gauthier", "prénom": "Maud", "notes" : [18, 16, 14]};
let etudiant2 = {"nom": "Marion", "prénom": "Valentin", "notes" : [15, 13, 12]};

let etudiants = [
    {"nom": "Gauthier Marion", "prénom": "Malo", "notes" : [18, 16, 14], "adresse" : {
        "numero" : 6,
        "voie" : "Rue des Acacias",
        "ville" : "Paris",
        "codepostal" : 75000,
        "vraieadresse" : false
    }},
    {"nom": "Gauthier", "prénom": "Gaël", "notes" : [18, 16, 14]},
    etudiant2
];

etudiant1.note = 16;
console.log(etudiant1.note);
console.log(etudiant2.notes);
console.log(etudiant2.nom);

console.log(etudiants);
console.log(etudiants[0].adresse.ville);

etudiants = etudiants.sort((a, b) => {
    return a.nom.localeCompare(b.nom);
});
console.log(etudiants);
