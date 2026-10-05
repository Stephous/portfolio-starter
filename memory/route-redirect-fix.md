---
name: route-redirect-fix
description: Correction de la redirection infinie dans app.routes.ts
metadata:
  type: project
---

**Problème identifié :** Erreur `NG04016: Detected possible infinite redirect when redirecting from '/accueil' to '/accueil'`

**Cause :** La configuration des routes contenait :
```typescript
{ path: '', redirectTo: '/accueil', pathMatch: 'full' },
{ path: '**', redirectTo: '/accueil' },
```

Lorsqu'un utilisateur accédait à `/accueil`, cela créait une boucle de redirection car le routeur tentait de rediriger de `/accueil` vers lui-même.

**Solution appliquée :** Simplification de la configuration `app.routes.ts` :
- Suppression des redirections infinies
- Utilisation directe du composant `AccueilComponent` pour les paths `'/'` et `'/accueil'`
- Configuration finale :
```typescript
export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  // ... autres routes
];
```

**Impact :** L'application fonctionne maintenant sans erreur de redirection infinie. Les deux paths `'/'` et `'/accueil'` affichent désormais directement la page d'accueil.

Lien : [[angular-check]]
