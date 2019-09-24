const fs = require('fs');

//Fonction de lecture du fichier
const read_file = (file) => {
    return fs.readFileSync(file, 'utf8').split('\n');
}

//Fonction de dédoublonnage et de recherche des statistique rechercher 
const dedupe = (file) => {
    sirens = read_file(file);
    unique = 0;//Compteur de SIRENs unique
    multiple = 0;//Compteur de SIRENs non unique
    let sirens_tab = {}; //table de dédoublonnage avec nombre de répétition
    sirens.forEach(element => {
        if(sirens_tab[element] != undefined){//Si doublon
            if(sirens_tab[element] == 1) {
                sirens_tab[element]++;
                unique--;//Enlève 1 car le SIRENs selectionné n'est plus unique
                multiple++;
            } else {
                sirens_tab[element]++;
            }
        } else {//Si le SIRENs viens d'être trouvé pour la première fois
            sirens_tab[element] = 1;
            unique++;
        }
    });
    return {
        sirens_tab,
        unique,
        multiple
    }
}

module.exports = {
    read_file,
    dedupe
}