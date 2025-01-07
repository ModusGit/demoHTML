let foreground_elem = document.getElementById("foreground");
let background_elem = document.getElementById("background");
let run_elem = document.getElementById("run");

run_elem.addEventListener("click", run);

function run() {
    run_elem.removeEventListener("click", run);
    loadData(updateProgess);
}

function updateProgess(progress) {
    foreground_elem.style.width = `${progress}%`;
    if (progress === 100) {
        run_elem.addEventListener("click", run);
    }
}

function loadData(callback) {
    let cpt = 0;
    
    let idInterval = setInterval(() => {
        cpt++;
        console.log("chargement des données");
        callback(cpt);

        if (cpt === 100) {
            clearInterval(idInterval);
        }
    }, 100);
}