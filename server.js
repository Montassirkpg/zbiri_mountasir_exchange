
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { calculerRendu } = require('./src/changeLogic');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/scripts', express.static('scripts'));

let etatCaisse = {
    "0.05": 20,
    "0.10": 30,
    "2": 10,
    "5": 5,
    "10": 3,
    "20": 2,
    "50": 2,
    "100": 3,
    "200": 3,
    "500": 0
};

app.post('/calculer', (req, res) => {
    const { montantValue, totalDonnerValue } = req.body;
    const resultat = calculerRendu(montantValue, totalDonnerValue, etatCaisse);
    if (!resultat.error) {
        etatCaisse = resultat.etatCaisse;
    }
    res.json(resultat);
});

// Route pour obtenir l'état de la caisse
app.get('/etat-caisse', (req, res) => {
    res.json(etatCaisse);
});

app.listen(port, () => {
    console.log(`Environnement: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Serveur démarré sur http://localhost:${port}`);
});