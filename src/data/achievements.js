// ─────────────────────────────────────────────────────────────
//  Tes réalisations perso : projets, prix, certifs, hackathons…
//  Ajoute un objet dans la liste, c'est tout.
//
//  Champs :
//    title       (obligatoire)
//    date        'AAAA-MM' (sert au tri)
//    category    texte libre : 'Projet', 'Hackathon', 'Certification', 'Prix'…
//                Les filtres de l'onglet se créent automatiquement à partir de ces valeurs.
//    description une ou deux phrases
//    tags        technos / mots-clés (le premier prend une pastille de couleur, comme le langage d'un repo)
//    links       [{ label, url }]  ex : code, démo, article
//    stars       nombre affiché en ⭐ (optionnel, ex : étoiles GitHub)
//    pinned      true pour l'épingler dans l'onglet Aperçu
// ─────────────────────────────────────────────────────────────

const achievements = [
  {
    title: 'mon-portfolio',
    date: '2026-10',
    category: 'Projet',
    description: 'Ce site ! Portfolio modulaire en React, inspiré du design de GitHub.',
    tags: ['React', 'Vite', 'CSS'],
    links: [{ label: 'Code', url: 'https://github.com/pseudo/mon-portfolio' }],
    pinned: true,
  },
  {
    title: 'Hackathon Climat — 1re place',
    date: '2025-03',
    category: 'Hackathon',
    description: "Application de suivi d'empreinte carbone réalisée en 48 h en équipe de 4.",
    tags: ['TypeScript', 'Next.js', 'Data viz'],
    links: [{ label: 'Démo', url: 'https://exemple.com' }],
    pinned: true,
  },
  {
    title: 'budget-cli',
    date: '2024-11',
    category: 'Projet',
    description: 'Outil en ligne de commande pour suivre ses dépenses depuis un export bancaire CSV.',
    tags: ['Node.js', 'CLI'],
    links: [{ label: 'Code', url: 'https://github.com/pseudo/budget-cli' }],
    stars: 42,
    pinned: true,
  },
  {
    title: 'Certification AWS Cloud Practitioner',
    date: '2024-06',
    category: 'Certification',
    description: 'Fondamentaux du cloud AWS : services, sécurité, facturation.',
    tags: ['AWS', 'Cloud'],
  },
  {
    title: 'Contribution open source',
    date: '2023-12',
    category: 'Open source',
    description: "Correction d'un bug d'accessibilité dans une bibliothèque de composants populaire.",
    tags: ['Accessibilité', 'React'],
    links: [{ label: 'Pull request', url: 'https://github.com' }],
  },
]

export default achievements
