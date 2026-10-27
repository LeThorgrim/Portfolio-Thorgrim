// ─────────────────────────────────────────────────────────────
//  Tes réalisations perso : projets, prix, certifs, hackathons…
//  Ajoute un objet dans la liste, c'est tout.
//
//  Textes traduits : { fr: '…', en: '…' }. Une simple chaîne marche aussi.
//
//  Champs :
//    title       (obligatoire)
//    date        'AAAA-MM' (sert au tri)
//    category    'Projet', 'Hackathon', 'Certification', 'Prix'…
//                Les filtres de l'onglet se créent automatiquement à partir de ces valeurs.
//                Astuce : réutilise les constantes ci-dessous pour garder des catégories identiques.
//    description une ou deux phrases
//    tags        technos / mots-clés (le premier prend une pastille de couleur, comme le langage d'un repo)
//    links       [{ label, url }]  ex : code, démo, article
//    stars       nombre affiché en ⭐ (optionnel, ex : étoiles GitHub)
//    pinned      true pour l'épingler dans l'onglet Aperçu
// ─────────────────────────────────────────────────────────────

const PROJECT = { fr: 'Projet', en: 'Project' }
const HACKATHON = 'Hackathon'
const CERTIFICATION = 'Certification'
const OPEN_SOURCE = 'Open source'

const CODE = { fr: 'Code', en: 'Code' }
const DEMO = { fr: 'Démo', en: 'Demo' }

const achievements = [
  {
    title: 'mon-portfolio',
    date: '2026-10',
    category: PROJECT,
    description: {
      fr: 'Ce site ! Portfolio modulaire en React, inspiré du design de GitHub.',
      en: 'This website! A modular React portfolio inspired by GitHub’s design.',
    },
    tags: ['React', 'Vite', 'CSS'],
    links: [{ label: CODE, url: 'https://github.com/pseudo/mon-portfolio' }],
    pinned: true,
  },
  {
    title: { fr: 'Hackathon Climat — 1re place', en: 'Climate Hackathon — 1st place' },
    date: '2025-03',
    category: HACKATHON,
    description: {
      fr: "Application de suivi d'empreinte carbone réalisée en 48 h en équipe de 4.",
      en: 'Carbon footprint tracking app built in 48 hours with a team of 4.',
    },
    tags: ['TypeScript', 'Next.js', 'Data viz'],
    links: [{ label: DEMO, url: 'https://exemple.com' }],
    pinned: true,
  },
  {
    title: 'budget-cli',
    date: '2024-11',
    category: PROJECT,
    description: {
      fr: 'Outil en ligne de commande pour suivre ses dépenses depuis un export bancaire CSV.',
      en: 'Command-line tool to track spending from a bank CSV export.',
    },
    tags: ['Node.js', 'CLI'],
    links: [{ label: CODE, url: 'https://github.com/pseudo/budget-cli' }],
    stars: 42,
    pinned: true,
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    date: '2024-06',
    category: CERTIFICATION,
    description: {
      fr: 'Fondamentaux du cloud AWS : services, sécurité, facturation.',
      en: 'AWS cloud fundamentals: services, security, billing.',
    },
    tags: ['AWS', 'Cloud'],
  },
  {
    title: { fr: 'Contribution open source', en: 'Open source contribution' },
    date: '2023-12',
    category: OPEN_SOURCE,
    description: {
      fr: "Correction d'un bug d'accessibilité dans une bibliothèque de composants populaire.",
      en: 'Fixed an accessibility bug in a popular component library.',
    },
    tags: [{ fr: 'Accessibilité', en: 'Accessibility' }, 'React'],
    links: [{ label: 'Pull request', url: 'https://github.com' }],
  },
]

export default achievements
