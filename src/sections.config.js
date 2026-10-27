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
//    label      texte de l'onglet ({ fr, en } ou simple chaîne)
//    icon       nom d'icône (voir components/Icon.jsx)
//    component  composant qui affiche la section ; il reçoit { items, section }
//    items      les données
//    toPinned   (optionnel) (item, lang) -> carte épinglée de l'Aperçu (si item.pinned)
//    toActivity (optionnel) item -> [{ month: 'AAAA-MM', weight }] pour le graphe
// ─────────────────────────────────────────────────────────────

import experiences from './data/experiences.js'
import achievements from './data/achievements.js'
import Overview from './sections/Overview.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import AchievementSection from './sections/AchievementSection.jsx'
import { formatRange, monthsBetween } from './utils/format.js'
import { tr } from './i18n.jsx'

export const sections = [
  {
    id: 'overview',
    label: { fr: 'Aperçu', en: 'Overview' },
    icon: 'book',
    component: Overview,
  },
  {
    id: 'experiences',
    label: { fr: 'Expériences', en: 'Experience' },
    icon: 'briefcase',
    component: ExperienceSection,
    items: experiences,
    toPinned: (e, lang) => ({
      icon: 'briefcase',
      title: tr(e.role, lang),
      subtitle: tr(e.company, lang),
      description: tr(e.summary, lang),
      lang: tr(e.tags?.[0], lang),
      meta: formatRange(e.start, e.end, lang),
    }),
    toActivity: (e) => monthsBetween(e.start, e.end).map((month) => ({ month, weight: 1 })),
  },
  {
    id: 'achievements',
    label: { fr: 'Réalisations', en: 'Achievements' },
    icon: 'trophy',
    component: AchievementSection,
    items: achievements,
    toPinned: (a, lang) => ({
      icon: 'trophy',
      title: tr(a.title, lang),
      subtitle: tr(a.category, lang),
      description: tr(a.description, lang),
      lang: tr(a.tags?.[0], lang),
      stars: a.stars,
      href: a.links?.[0]?.url,
    }),
    toActivity: (a) => (a.date ? [{ month: a.date, weight: 3 }] : []),
  },
]
