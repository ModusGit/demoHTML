let countries = document.createElement("tableaupays");
countries.innerHTML = ["France", "Japon", "Togo", "Suède", "Brésil"]; 
document.body.appendChild(countries);

function byCountries () {
    for (let i=0; i<countries.length; i++) {
        if ([i] % 2 === 0) {
            console.log(countries[i]);
        }
        else {
            console.log(countries[i]+' ok')
        }
    }
}

console.log(byCountries());