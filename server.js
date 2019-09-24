const cors = require('cors');
const express = require('express');
const app = express();
const { dedupe } = require('./worker/workers.js');
app.use(cors());

//Mise en place de la route appelé par le coté client
app.get('/', function(req, res) {
    res.json(dedupe('sirens_fxt.txt'));
});

app.listen(7777);
console.log('7777 is the magic port');