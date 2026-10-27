// ─────────────────────────────────────────────────────────────
//  Tes expériences : ajoute un objet dans la liste pour un nouveau job.
//  L'ordre n'a pas d'importance, le site trie par date (plus récent en haut).
//
//  Champs :
//    role        (obligatoire) intitulé du poste
//    company     (obligatoire) nom de l'entreprise
//    start       (obligatoire) 'AAAA-MM'
//    end         'AAAA-MM', ou null si c'est ton poste actuel
//    type        'CDI' | 'CDD' | 'Stage' | 'Alternance' | 'Freelance' | ...
//    location    ville / remote
//    url         site de l'entreprise (optionnel)
//    summary     une phrase de description
//    highlights  liste de réalisations concrètes
//    tags        technos / compétences
//    pinned      true pour l'épingler dans l'onglet Aperçu
// ─────────────────────────────────────────────────────────────

const experiences = [
  {
    role: 'Développeur·se Front-End',
    company: 'Entreprise Actuelle',
    start: '2024-09',
    end: null,
    type: 'CDI',
    location: 'Paris · Hybride',
    url: 'https://exemple.com',
    summary: "Développement de l'interface principale de la plateforme SaaS.",
    highlights: [
      'Refonte du tableau de bord : temps de chargement divisé par 2',
      "Mise en place d'une bibliothèque de composants partagée",
      'Encadrement de 2 stagiaires',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Storybook'],
    pinned: true,
  },
  {
    role: 'Développeur·se Web (Alternance)',
    company: 'Agence Exemple',
    start: '2022-09',
    end: '2024-08',
    type: 'Alternance',
    location: 'Marne-la-Vallée',
    summary: 'Sites vitrines et applications web pour des clients PME.',
    highlights: [
      'Livraison de 12 sites clients',
      'Automatisation des déploiements avec GitHub Actions',
    ],
    tags: ['JavaScript', 'Node.js', 'WordPress', 'CI/CD'],
  },
  {
    role: 'Stagiaire Développeur·se',
    company: 'Startup Exemple',
    start: '2022-04',
    end: '2022-07',
    type: 'Stage',
    location: 'Remote',
    summary: "Prototype d'une application mobile de réservation.",
    highlights: ['Prototype présenté aux investisseurs'],
    tags: ['React Native', 'Firebase'],
  },
]

export default experiences
