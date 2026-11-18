# 📊 Diagramme de Déploiement Vercel

```
┌─────────────────────────────────────────────────────────────────────┐
│                         TON PC LOCAL                                │
│  portfolio-starter                                                   │
│                                                                       │
│  ├── src/ (code Angular)                                             │
│  ├── angular.json                                                    │
│  ├── package.json                                                    │
│  └── vercel.json ✅ (nouveau - Config Vercel)                       │
└─────────────────┬───────────────────────────────────────────────────┘
                  │
                  │ 1. npm run build:vercel
                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      DIST/portfolio/browser                          │
│                                                                       │
│  ├── index.html (ton site)                                           │
│  ├── app/ (composants, pages)                                        │
│  ├── assets/ (images, fonts)                                         │
│  └── styles/ (CSS compilé)                                           │
└─────────────────┬───────────────────────────────────────────────────┘
                  │
                  │ 2. Push sur GitHub (main)
                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        VERCEL                                        │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Dashboard                                                    │   │
│  │  ├── Build automatique (npm install + npm run build)        │   │
│  │  ├── Déploiement automatique                                  │   │
│  │  └── Vérifications HTTPS                                     │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  EDGE NETWORK (CDN Mondial)                                  │   │
│  │  ├── Francfort, Allemagne                                     │   │
│  │  ├── Paris, France                                            │   │
│  │  ├── New York, USA                                            │   │
│  │  ├── Londres, UK                                              │   │
│  │  ├── Tokyo, Japon                                             │   │
│  │  └── Et plus encore...                                        │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
                  │
                  │ 3. Site accessible mondialement
                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        TON VISITEUR                                  │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  https://ton-site.vercel.app (ou ton-domaine.com)           │   │
│  │  ├── HTTPS sécurisé ✅                                        │   │
│  │  ├── Chargement rapide (CDN mondial)                         │   │
│  │  └── Accessible partout                                      │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

## 🔄 Flux de Déploiement Automatique

```
Push sur GitHub (main)
         ↓
    Vercel détecte changement
         ↓
  npm install + npm run build
         ↓
    Vérifications (tests, linting)
         ↓
        ✅ BUILD SUCCÈS
         ↓
Déploiement vers Edge Network
         ↓
┌─────────────────────┐
│ Site en ligne !     │
│ URL publique active │
└─────────────────────┘
```

## 🎯 Points Clés

| Étape | Temps | Description |
|-------|-------|-------------|
| Build initial | 2-5 min | npm install + compilation Angular |
| Déploiement | 30 sec | Copie vers Edge Network |
| Premiers visiteurs | < 1s | CDN mondial distribue depuis serveur proche |

## 💡 Avantages

- **HTTPS automatique** - Certificat Let's Encrypt gratuit
- **SSL/TLS** - Cryptage chiffré partout
- **CDN** - Contenu servi depuis serveur géographique le plus proche
- **Cache intelligent** - Static assets cachés au bon endroit
- **Uptime élevé** - Infrastructure redondante
