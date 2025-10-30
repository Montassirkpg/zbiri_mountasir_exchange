const request = require('supertest');
const express = require('express');
const { calculerRendu } = require('../src/changeLogic');

let app;
let etatCaisse;

beforeEach(() => {
    app = express();
    app.use(express.json());
    etatCaisse = { '2': 2, '1': 2, '0.5': 2 };
    app.post('/calculer', (req, res) => {
        const { montantValue, totalDonnerValue } = req.body;
        const resultat = calculerRendu(montantValue, totalDonnerValue, etatCaisse);
        if (!resultat.error) {
            etatCaisse = resultat.etatCaisse;
        }
        res.json(resultat);
    });
});

describe('POST /calculer', () => {
    it('retourne le rendu correct', async () => {
        const res = await request(app)
            .post('/calculer')
            .send({ montantValue: 2.5, totalDonnerValue: 5 });
        expect(res.body.rendu).toEqual({ '2': 1, '0.5': 1 });
        expect(res.body.error).toBeUndefined();
    });

    it('retourne une erreur si montant insuffisant', async () => {
        const res = await request(app)
            .post('/calculer')
            .send({ montantValue: 10, totalDonnerValue: 5 });
        expect(res.body.error).toBe('Le montant donné est insuffisant');
    });
});
