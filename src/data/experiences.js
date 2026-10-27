// ─────────────────────────────────────────────────────────────
//  Tes expériences : ajoute un objet dans la liste pour un nouveau job.
//  L'ordre n'a pas d'importance, le site trie par date (plus récent en haut).
//
//  Textes traduits : { fr: '…', en: '…' }. Une simple chaîne marche aussi.
//
//  Champs :
//    role        (obligatoire) intitulé du poste
//    company     (obligatoire) nom de l'entreprise
//    start       (obligatoire) 'AAAA-MM'
//    end         'AAAA-MM', ou null si c'est ton poste actuel
//    type        CDI, Stage, Alternance, Freelance…
//    location    ville / remote
//    url         site de l'entreprise (optionnel)
//    summary     une phrase de description
//    highlights  liste de réalisations concrètes
//    tags        technos / compétences (pas traduites)
//    pinned      true pour l'épingler dans l'onglet Aperçu
// ─────────────────────────────────────────────────────────────

const experiences = [
  {
    role: { fr: 'Développeur·se Front-End', en: 'Front-End Developer' },
    company: 'Entreprise Actuelle',
    start: '2024-09',
    end: null,
    type: { fr: 'CDI', en: 'Full-time' },
    location: { fr: 'Paris · Hybride', en: 'Paris · Hybrid' },
    url: 'https://exemple.com',
    summary: {
      fr: "Développement de l'interface principale de la plateforme SaaS.",
      en: "Building the main interface of the company's SaaS platform.",
    },
    highlights: [
      { fr: 'Refonte du tableau de bord : temps de chargement divisé par 2', en: 'Dashboard rewrite: load time cut in half' },
      { fr: "Mise en place d'une bibliothèque de composants partagée", en: 'Set up a shared component library' },
      { fr: 'Encadrement de 2 stagiaires', en: 'Mentored 2 interns' },
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Storybook'],
    pinned: true,
  },
  {
    role: { fr: 'Développeur·se Web (Alternance)', en: 'Web Developer (Work-study)' },
    company: 'Agence Exemple',
    start: '2022-09',
    end: '2024-08',
    type: { fr: 'Alternance', en: 'Work-study' },
    location: 'Marne-la-Vallée',
    summary: {
      fr: 'Sites vitrines et applications web pour des clients PME.',
      en: 'Websites and web apps for small-business clients.',
    },
    highlights: [
      { fr: 'Livraison de 12 sites clients', en: 'Delivered 12 client websites' },
      { fr: 'Automatisation des déploiements avec GitHub Actions', en: 'Automated deployments with GitHub Actions' },
    ],
    tags: ['JavaScript', 'Node.js', 'WordPress', 'CI/CD'],
  },
  {
    role: { fr: 'Stagiaire Développeur·se', en: 'Developer Intern' },
    company: 'Startup Exemple',
    start: '2022-04',
    end: '2022-07',
    type: { fr: 'Stage', en: 'Internship' },
    location: 'Remote',
    summary: {
      fr: "Prototype d'une application mobile de réservation.",
      en: 'Prototype of a mobile booking app.',
    },
    highlights: [{ fr: 'Prototype présenté aux investisseurs', en: 'Prototype pitched to investors' }],
    tags: ['React Native', 'Firebase'],
  },
]

export default experiences
