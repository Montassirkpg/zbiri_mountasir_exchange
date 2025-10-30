const { calculerRendu } = require('../src/changeLogic');

describe('calculerRendu', () => {
    it('rend la monnaie correctement', () => {
        const etat = { '2': 2, '1': 2, '0.5': 2 };
        const res = calculerRendu(2.5, 5, etat);
        expect(res.error).toBeUndefined();
        expect(res.rendu).toEqual({ '2': 1, '0.5': 1 });
        expect(res.montantARendre).toBeCloseTo(2.5);
    });

    it('retourne une erreur si montant donné insuffisant', () => {
        const etat = { '2': 2 };
        const res = calculerRendu(10, 5, etat);
        expect(res.error).toBe('Le montant donné est insuffisant');
    });

    it('retourne une erreur si monnaie impossible', () => {
        const etat = { '2': 0, '1': 0, '0.5': 0 };
        const res = calculerRendu(2, 5, etat);
        expect(res.error).toBe('Impossible de rendre la monnaie exacte');
    });

    it('retourne une erreur si entrée invalide', () => {
        const etat = { '2': 2 };
        const res = calculerRendu('a', 5, etat);
        expect(res.error).toBe('Veuillez entrer des montants valides');
    });
});
