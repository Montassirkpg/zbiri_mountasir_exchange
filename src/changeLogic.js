function calculerRendu(montantValue, totalDonnerValue, etatCaisse) {
    const rendu = {};
    if (isNaN(montantValue) || isNaN(totalDonnerValue)) {
        return { error: "Veuillez entrer des montants valides" };
    }
    const montant = Math.round(montantValue * 100) / 100;
    const totalDonne = Math.round(totalDonnerValue * 100) / 100;
    if (totalDonne < montant) {
        return { error: "Le montant donné est insuffisant" };
    }
    let montantARendre = (totalDonne - montant).toFixed(2);
    const valeurs = Object.keys(etatCaisse).map(parseFloat).sort((a, b) => b - a);
    const etatCaisseCopy = { ...etatCaisse };
    for (const valeur of valeurs) {
        let nbPossible = Math.min(Math.floor(montantARendre / valeur), etatCaisseCopy[valeur]);
        if (nbPossible > 0) {
            rendu[valeur] = nbPossible;
            montantARendre = (montantARendre - nbPossible * valeur).toFixed(2);
            etatCaisseCopy[valeur] -= nbPossible;
        }
    }
    if (parseFloat(montantARendre) > 0.001) {
        return { error: "Impossible de rendre la monnaie exacte" };
    }
    return {
        montantARendre: totalDonne - montant,
        rendu,
        etatCaisse: etatCaisseCopy
    };
}

module.exports = { calculerRendu };
