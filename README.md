# Portfolio — style GitHub

Site vitrine en React (Vite), 100 % front-end : profil, **Expériences**, **Réalisations**, thème clair/sombre, responsive.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # génère le site statique dans dist/
```

## Modifier le contenu (aucun code React à toucher)

| Fichier | Ce qu'il contient |
|---|---|
| `src/data/profile.js` | nom, bio, liens, compétences, texte « README » de l'aperçu |
| `src/data/experiences.js` | tes jobs (timeline) |
| `src/data/achievements.js` | projets perso, hackathons, certifs, prix… |
| `public/` | ta photo (`avatar.jpg`) et ton CV (`cv.pdf`) |

**Ajouter un job** : copie un objet dans `experiences.js` et change les valeurs. Mets `end: null` pour un poste en cours.
**Ajouter une réalisation** : pareil dans `achievements.js`. Une nouvelle `category` crée automatiquement un nouveau filtre.
**Épingler** un élément dans l'aperçu : `pinned: true`.

Le tri par date, les compteurs des onglets, les durées et le graphe d'activité se calculent tout seuls.

## Ajouter une nouvelle section (ex : Formations)

1. Crée `src/data/formations.js` qui exporte une liste.
2. Ajoute une entrée dans `src/sections.config.js` :

```js
import formations from './data/formations.js'

{
  id: 'formations',
  label: 'Formations',
  icon: 'book',
  component: ExperienceSection,   // réutilise la timeline…
  items: formations,              // …ou crée ton composant dans src/sections/
},
```

Pour réutiliser `ExperienceSection`, garde les mêmes champs (`role` = diplôme, `company` = école, `start`, `end`…).

## Structure

```
src/
  data/               ← ton contenu
  sections.config.js  ← liste des onglets
  sections/           ← un composant par type de section
  components/         ← briques d'interface (cartes, labels, icônes, graphe…)
  styles/theme.css    ← couleurs (clair / sombre)
  styles/app.css      ← mise en page
```

## Mettre en ligne gratuitement (GitHub Pages)

1. Crée un dépôt GitHub et pousse ce dossier.
2. Dans le dépôt : **Settings → Pages → Source : GitHub Actions**.
3. Chaque `git push` sur `main` redéploie le site (workflow déjà inclus dans `.github/workflows/deploy.yml`).

Le site sera à `https://<pseudo>.github.io/<nom-du-depot>/`. Nomme le dépôt `<pseudo>.github.io` pour l'avoir à la racine.
Netlify ou Vercel marchent aussi : commande de build `npm run build`, dossier `dist`.
