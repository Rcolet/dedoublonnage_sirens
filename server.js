var fs = require('fs');
var cors = require('cors');
var express = require('express');
var app = express();
app.use(cors());

//Mise en place de la route appelé par le coté client
app.get('/', function(req, res) {
    res.json(dedupe('sirens_fxt.txt'));
});

//Fonction de lecture du fichier
let read_file = (file) => {
    return fs.readFileSync('sirens_fxt.txt', 'utf8').split('\n');
}

//Fonction de dédoublonnage et de recherche des statistique rechercher 
let dedupe = (file) => {
    sirens = read_file(file);
    unique = 0;//Compteur de SIRENs unique
    multiple = 0;//Compteur de SIRENs non unique
    let sirens_tab = {}; //table de dédoublonnage avec nombre de répétition
    sirens.forEach(element => {
        if(sirens_tab[element] != undefined){//Si doublon
            sirens_tab[element]++;
            unique--;//Enlève 1 car le SIRENs selectionné n'est plus unique
            multiple++;
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

app.listen(7777);
console.log('7777 is the magic port');