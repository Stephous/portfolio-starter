# Portfolio de Stéphane Dacheux

Portfolio personnel développé avec **Angular** (frontend) et **Express** (backend API).

## 🚀 Démarrage rapide

### Installation des dépendances

```bash
npm install
```

### ⚠️ Correction importante appliquée

Le problème `File 'src\app\main.ts' is missing` a été corrigé dans le fichier `tsconfig.app.json`. Le chemin du fichier principal a été mis à jour vers `src/app/main.ts`.

**Si vous avez des erreurs de compilation :**
1. Vérifiez que `npm install` a bien exécuté (les dépendances Angular sont critiques)
2. Lancez `npm start` depuis la racine du projet

### Lancement en mode développement

Le projet démarre un service Angular qui :
- Compile le frontend sur **Port 4200**
- Utilise le proxy configuré vers l'API backend sur **Port 3001**

```bash
npm start
# ou explicitement
ng serve --proxy-config proxy.conf.json
```

### Lancement séparé (backend uniquement)

Si vous souhaitez tester l'API sans Angular :
```bash
cd backend
npx ts-node server.ts
```

### Build pour production

```bash
npm run build
```

Le dossier `dist/portfolio/` contient l'application compilée prête pour le déploiement.

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
│   │   │   ├── accueil/          # Page d'accueil
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

*Pseudo : @SteelBeamY | GitHub : [@Stephous](https://github.com/Stephous)*

---

## 🚀 DÉPLOIEMENT VERCEL - PRÊT !

**✅ Configuration Vercel terminée !** Ton projet est prêt à être déployé gratuitement.

### 📦 Fichiers de configuration créés :

| ✅ | Fichier | Description |
|-----|---------|-------------|
| 1️⃣ | `vercel.json` | Config principale (build, output, headers) |
| 2️⃣ | `.vercel/config.json` | Config alternative Vercel |
| 3️⃣ | `.gitignore` | Mis à jour - exclut `/dist` sauf production |
| 4️⃣ | `.env.example` | Template variables d'environnement |
| 5️⃣ | `README_VERCEL.md` | Guide complet de déploiement |
| 6️⃣ | `.deployment-checklist.md` | Checklist avant/après déploiement |
| 7️⃣ | `SUMMAIRE_DEPLOIEMENT.md` | **GUIDE EXPRESS - Lis-moi !** ⭐ |

### 🎯 ÉTAPE UNIQUE : Déployer en 3 minutes

1. **Ouvre** [vercel.com/new](https://vercel.com/new)
2. **Connecte-toi** avec GitHub
3. **Importe** `portfolio-starter` → Clique **"Deploy"**
4. **Prêt !** Ton site est en ligne en 2-5 minutes 🎉

**Ton URL :** `https://ton-repo.vercel.app`

### 🌟 Avantages Vercel (Gratuit) :

- ✅ HTTPS automatique
- ✅ CDN mondial (rapide partout)
- ✅ Déploiements automatiques après push
- ✅ 100GB/mois de trafic
- ✅ Domaine personnalisé gratuit

### 📚 Documentation Complète

- **Guide Express** : `SUMMAIRE_DEPLOIEMENT.md` ⭐
- **Guide Détaillé** : `README_VERCEL.md`
- **Diagramme** : `DEPLOIEMENT_DIAGRAMME.md`

---
