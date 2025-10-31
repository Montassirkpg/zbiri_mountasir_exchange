# Application de Caisse

Application de gestion de caisse permettant de calculer et rendre la monnaie optimalement.

## Fonctionnalités

- Calcul du montant à rendre
- Optimisation du rendu de monnaie avec les billets/pièces disponibles
- Gestion de l'état de la caisse
- Interface web intuitive

## Structure du projet

```
├── src/           # Logique métier
├── public/        # Fichiers statiques (HTML)
├── scripts/       # JavaScript front-end
├── tests/         # Tests (unit, integration, E2E)
├── .github/       # Configuration GitHub Actions
└── server.js      # Serveur Express
```

## Prérequis

- Node.js 18.x ou supérieur
- npm

## Installation

1. Cloner le repository :
```bash
git clone https://github.com/Montassirkpg/zbiri_mountasir_exchange.git
cd zbiri_mountasir_exchange
```

2. Installer les dépendances :
```bash
npm install
```

3. Configurer l'environnement :
```bash
cp .env.example .env
```

## Développement

Démarrer le serveur de développement :
```bash
npm start
```
L'application sera accessible sur `http://localhost:3000`

## Tests

Exécuter les tests :
```bash
npm test
```

## CI/CD

Le projet utilise GitHub Actions pour :
- Exécuter les tests automatiquement
- Vérifier la compatibilité avec Node.js 18 et 22
- Générer des rapports de test
- Créer des builds minifiés

## Production

Construire l'application pour la production :
```bash
npm run build
```

## Licence

MIT
