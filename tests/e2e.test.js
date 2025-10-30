const request = require('supertest');
const { spawn } = require('child_process');
const path = require('path');

let serverProcess;
const baseUrl = 'http://localhost:3000';

describe('E2E - API caisse', () => {
    beforeAll((done) => {
        serverProcess = spawn('node', [path.join(__dirname, '../server.js')]);
        setTimeout(done, 1000); // attendre que le serveur démarre
    });

    afterAll(() => {
        serverProcess.kill();
    });

    it('retourne le rendu correct via API', async () => {
        const res = await request(baseUrl)
            .post('/calculer')
            .send({ montantValue: 2.5, totalDonnerValue: 5 });
        expect(res.body.rendu).toBeDefined();
        expect(res.body.error).toBeUndefined();
    });

    it('retourne une erreur si montant insuffisant', async () => {
        const res = await request(baseUrl)
            .post('/calculer')
            .send({ montantValue: 10, totalDonnerValue: 5 });
        expect(res.body.error).toBe('Le montant donné est insuffisant');
    });
});
