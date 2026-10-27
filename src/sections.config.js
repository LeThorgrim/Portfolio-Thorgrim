// ─────────────────────────────────────────────────────────────
//  Registre des onglets du site.
//
//  Pour ajouter une section (ex : « Formations », « Publications ») :
//    1. crée src/data/formations.js qui exporte une liste
//    2. réutilise un composant existant (ExperienceSection = timeline,
//       AchievementSection = grille de cartes) ou crée le tien dans src/sections/
//    3. ajoute une entrée ci-dessous. C'est tout : onglet, compteur,
//       éléments épinglés et graphe d'activité suivent automatiquement.
//
//  Clés d'une entrée :
//    id         identifiant d'URL (#experiences)
//    label      texte de l'onglet
//    icon       nom d'icône (voir components/Icon.jsx)
//    component  composant qui affiche la section ; il reçoit { items, section }
//    items      les données
//    toPinned   (optionnel) item -> carte épinglée de l'Aperçu (si item.pinned)
//    toActivity (optionnel) item -> [{ month: 'AAAA-MM', weight }] pour le graphe
// ─────────────────────────────────────────────────────────────

import experiences from './data/experiences.js'
import achievements from './data/achievements.js'
import Overview from './sections/Overview.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import AchievementSection from './sections/AchievementSection.jsx'
import { formatRange, monthsBetween } from './utils/format.js'

export const sections = [
  {
    id: 'overview',
    label: 'Aperçu',
    icon: 'book',
    component: Overview,
  },
  {
    id: 'experiences',
    label: 'Expériences',
    icon: 'briefcase',
    component: ExperienceSection,
    items: experiences,
    toPinned: (e) => ({
      icon: 'briefcase',
      title: e.role,
      subtitle: e.company,
      description: e.summary,
      lang: e.tags?.[0],
      meta: formatRange(e.start, e.end),
    }),
    toActivity: (e) => monthsBetween(e.start, e.end).map((month) => ({ month, weight: 1 })),
  },
  {
    id: 'achievements',
    label: 'Réalisations',
    icon: 'trophy',
    component: AchievementSection,
    items: achievements,
    toPinned: (a) => ({
      icon: 'trophy',
      title: a.title,
      subtitle: a.category,
      description: a.description,
      lang: a.tags?.[0],
      stars: a.stars,
      href: a.links?.[0]?.url,
    }),
    toActivity: (a) => (a.date ? [{ month: a.date, weight: 3 }] : []),
  },
]
