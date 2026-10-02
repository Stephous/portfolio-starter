# Portfolio de Stéphane Dacheux

Portfolio personnel développé avec **Angular** (frontend) et **Express** (backend API).

## 🚀 Démarrage rapide

### Installation des dépendances

```bash
npm install
```

### Lancement en mode développement

Le projet démarre deux services simultanément :
- **Port 4200** : Angular (frontend, serveur de développement)
- **Port 3001** : Express API (backend avec données JSON)

```bash
npm start
# ou
npm run concurrently
```

### Build pour production

```bash
npm run build
```

Le dossier `dist/portfolio/` contient l'application compilée prête pour le déploiement.

## 📁 Structure du projet

```
portfolio-starter/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── acueil/          # Page d'accueil
│   │   │   ├── projets/         # Page des projets
│   │   │   ├── experiences/     # Timeline expériences
│   │   │   ├── formations/      # Timeline formations
│   │   │   ├── competences/     # Compétences
│   │   │   └── contact/        # Contact
│   │   ├── shared/
│   │   │   └── services/
│   │   └── app.component.ts    # Composant root
│   ├── styles.scss              # Styles globaux
│   ├── proxy.conf.json          # Proxy configuration
│   └── index.html               # Template principal
├── .git/                        # Historique Git
├── package.json                 # Dépendances Node.js
└── tsconfig*.json               # Configuration TypeScript
```

## 🌐 Technologies utilisées

### Frontend - Angular 19
- **@angular/core** : Framework principal
- **@angular/router** : Navigation SPA
- **SCSS** : Préprocesseur CSS
- **Reactive Forms** : Gestionnaires de formulaires

### Backend - Express + Node.js
- **express** : Serveur web léger
- **cors** : Cross-origin资源共享
- Données JSON statiques (simulant une API)

## 📝 Contenu du portfolio

Le portfolio présente :
- ✅ **Expériences professionnelles** avec timeline interactive
- ✅ **Projets académiques** (DDCN, Escape Game, MAP IHM)
- ✅ **Parcours de formation** du DUT au Master 2 MIAGE
- ✅ **Compétences techniques** contextualisées
- ✅ **Formation BAFA** en animation
- ✅ **Liens professionnels** (LinkedIn, GitHub)

## 🔒 Confidentialité

Conformément aux consignes :
- Aucune donnée personnelle non souhaitée n'est publiée
- L'adresse email peut être activée/désactivée via le code
- Les liens vers GitLab vérifient leur disponibilité avant inclusion

## 📄 Licence

MIT License - Libre à utiliser, modifier et distribuer.

## 👤 À propos de Stéphane

Développeur web full stack passionné par les applications métiers et l'analyse des besoins. Actuellement disponible pour de nouvelles opportunités professionnelles.

---

*Portfolio généré avec Claude Code 🤖*  
*Pseudo : @SteelBeamY | GitHub : [@Stephous](https://github.com/Stephous)*
