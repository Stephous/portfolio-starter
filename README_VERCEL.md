# 🚀 Déploiement sur Vercel

## Préparation du projet (fait une fois pour toutes)

Les fichiers suivants ont été créés pour faciliter le déploiement :

- ✅ `vercel.json` - Configuration Vercel
- ✅ `.vercel/config.json` - Config Vercel alternative
- ✅ `.env.example` - Template variables d'environnement

## Étapes pour déployer sur Vercel

### Option 1: Déploiement via Interface Web (Recommandé pour débuter)

1. **Va sur [vercel.com](https://vercel.com)**

2. **Clique sur "Add New..." → "Project"**

3. **Importe ton repository GitHub/GitLab/Bitbucket**
   - Choisis le repo `portfolio-starter`
   - Vercel détectera automatiquement Angular

4. **Configure les paramètres :**
   - **Framework Preset :** Angular
   - **Build Command :** `npm run build`
   - **Output Directory :** `dist/portfolio`
   - **Install Command :** `npm install`

5. **Ajoute un domaine personnalisé (optionnel)**
   - Va dans Settings → Domains
   - Ajoute ton domaine (ex: `stephane.dacheux.com`)

6. **Clique sur "Deploy"**

7. **Attends la construction** (2-5 minutes)
   - Vercel va installer les dépendances et build ton projet

8. **Ton site est en ligne !** 🎉

### Option 2: Déploiement automatique via Git (Recommandé)

1. **Connecte ton repo à Vercel :**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

2. **À chaque push sur GitHub :**
   - Vercel détecte automatiquement les changements
   - Le site se rebuild et redéploye tout seul

## Configuration du domaine personnalisé

### Pour avoir ton propre nom de domaine :

1. **Récupère tes DNS auprès de ton registrar** (OVH, GoDaddy, etc.)

2. **Configure les enregistrements DNS :**
   
   **Si tu utilises ton propre domaine :**
   ```
   Type: CNAME
   Name: @
   Value: vercel.app (ou ton sous-domaine)
   
   Type: CNAME  
   Name: www
   Value: vercel.app
   ```

3. **Ajoute le domaine dans Vercel :**
   - Project Settings → Domains → Add Domain
   - Vercel vérifiera automatiquement les DNS

## Variables d'environnement (si nécessaire)

Si ton projet utilise des API externes :

1. Dans Vercel Dashboard → Environment Variables
2. Ajoute tes variables :
   - `VITE_API_URL` - URL de ton API backend
   - `API_KEY` - Clés d'API si nécessaire

## Vérifications post-déploiement

✅ **Test sur le site :**
- https://ton-repo.vercel.app
- http://localhost:3000 (pour dev)

✅ **Checklist :**
- [ ] Site accessible sans HTTPS ? → Problème !
- [ ] Images chargées correctement ?
- [ ] Navigation fonctionne (pas de 404) ?
- [ ] Formulaires fonctionnent (si applicable) ?
- [ ] SEO : balises méta présentes ?

## Résolution de problèmes courants

### ❌ Build échoue
```bash
# Vérifie ton package.json
# Nettoie le cache npm
rm -rf node_modules
npm install
vercel --prod
```

### ❌ Assets manquant (favicon, images)
Assure-toi que `angular.json` inclut tous les assets :
```json
"assets": [
  { "glob": "**/*", "input": "public" },
  { "glob": "**/*", "input": "src/assets" }
]
```

### ❌ Redirections HTTP → HTTPS non appliquées
Vercel le fait automatiquement, pas de config nécessaire.

## Commandes utiles

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer manuellement
vercel --prod

# Voir les logs en temps réel
vercel logs [deployment-url]

# Nouvelle deployment après modification
git add .
git commit -m "Update"
git push origin main
```

## Coûts

- ✅ **Gratuit** : Déploiement public, HTTPS, CDN mondial
- ✅ **Domaine personnalisé** : Gratuit (sous-domaine) ou payant (propre domaine)
- ✅ **Analytics** : Vercel Analytics gratuit (limité)
- ❌ **Très gros projet** : Plus de 130GB/mois (très rare pour un portfolio)

## Support

- [Documentation Vercel](https://vercel.com/docs)
- [Déploiement Angular](https://vercel.com/guides/angular-deploy-guide)

---
**Bon déployment ! 🚀**
