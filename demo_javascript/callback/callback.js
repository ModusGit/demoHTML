console.log("Début du traitement");
traitementLong(() => console.log("Hi everybody!!"));
console.log("Fin du traitement");

function traitementLong(callback) {
    console.log("Début du traitement très long");

    setTimeout(() => {
        console.log("Fin du traitement long");
        callback();
    }, 5000);
    console.log("?")
}

// callback car traitement long
setTimeout(() => {
    console.log("pouet");
}, timeout);