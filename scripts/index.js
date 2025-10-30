let montant = document.getElementById("Montant");
let totalDonner = document.getElementById("totalDonner");
let button = document.getElementById("Calculer");

button.addEventListener("click", async function() {
    const montantValue = parseFloat(montant.value);
    const totalDonnerValue = parseFloat(totalDonner.value);

    try {
        const response = await fetch('http://localhost:3000/calculer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                montantValue,
                totalDonnerValue
            })
        });

        const data = await response.json();

        if (data.error) {
            document.getElementById("montantARendre").innerText = "Erreur : " + data.error;
            document.getElementById("rendu").innerText = "";
            return;
        }

        document.getElementById("montantARendre").innerText = "Le résultat est : " + data.montantARendre.toFixed(2);
        document.getElementById("rendu").innerText = "Le rendu est : " + JSON.stringify(data.rendu) + 
            "\nÉtat de la caisse : " + JSON.stringify(data.etatCaisse);
    } catch (error) {
        document.getElementById("montantARendre").innerText = "Erreur de connexion au serveur";
        document.getElementById("rendu").innerText = "";
    }
});
