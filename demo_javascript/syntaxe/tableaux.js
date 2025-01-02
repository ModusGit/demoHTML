let prenoms = ["Abdel","Mickael", "Clara", "Nadège"];
prenoms.push("Valentin");
prenoms[2] = "Clément";

console.log(prenoms);
prenoms[9] = "Clara";
console.log(prenoms);

// Syntaxe du forEach en JS
prenoms.forEach(prenom => {
    console.log(prenom);
});

// Syntaxe du for...of en JS
for (let prenom of prenoms) {
    console.log(prenom);
}