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
  //isen
  {
    role: { fr: 'Diplôme d\'ingénieur en Informatique', en: 'Computer Science/Engineering Degree' },
    company: 'ISEN Lille, France',
    start: '2020-09',
    end: '2026-08',
    type: { fr: 'Master', en: 'Master Degree' },
    location: { fr: 'Lille, France', en: 'Lille, France' },
    url: 'https://www.isen.fr/campus/ecole-ingenieurs-lille/',
    summary: {
      fr: "Formation en ingénierie informatique au sein de l'ISEN Lille pour un Master accrédité CTI.",
      en: "Computer science engineering program at ISEN Lille for a CTI-accredited Master's degree.",
    },
    highlights: [
      { fr: 'Apprentissage des mathématiques, de la physique et de l\'informatique à un niveau avancé', 
        en: 'Learning mathematics, physics, and computer science at an advanced level' },
      { fr: "Familiarisation avec les outils de développement et les bonnes pratiques d'équipe", 
        en: 'Familiarization with development tools and team best practices' }
    ],
    pinned: true,
  },
  //all level up
  {
    role: { fr: 'Développeur Web/Full Stack', en: 'Full Stack Developer' },
    company: 'All Level Up',
    start: '2024-01',
    end: '2024-01',
    type: { fr: 'Travail secondaire', en: 'Side Job' },
    location: 'Remote',
    summary: {
      fr: 'Site vitrine et application web pour un client PME.',
      en: 'Showcase website and web application for a small business client.',
    },
    highlights: [
      { fr: 'Livraison d\'un site web pour un client', en: 'Delivered a website for a client' },
      { fr: 'Service d\'hébergement et de maintenance', en: 'Hosting and maintenance services' },
      { fr: 'Mise en place d\'une messagerie email', en: 'Implemented an email messaging system' }
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
  },
  //portimao
  {
    role: { fr: 'Stagiaire Développeur·se', en: 'Developer Intern' },
    company: 'Câmara Municipal de Portimão',
    start: '2025-05',
    end: '2025-07',
    type: { fr: 'Stage', en: 'Internship' },
    location: 'Portimão, Portugal',
    url: 'https://www.cm-portimao.pt/',
    summary: {
      fr: "Développement d'une application interne de catalogage des services de la communauté de communes.",
      en: 'Development of an internal application for cataloging the services of the community of communes.',
    },
    highlights: [
      { fr: 'Réalisation d\'un frontend React', en: 'Developed a React frontend' },
      { fr: 'Mise en place d\'un backend Django', en: 'Set up a Django backend' },
      { fr: 'Automatisation Docker pour le déploiement avec un outil d\'administration, de monitoring et d\'une BDD', en: 'Docker automation for deployment' }
    ],
    tags: ['React', 'Django', 'PostgreSQL', 'Docker'],
  },
  //sopra
  {
    role: { fr: 'Développeur Java/Full Stack', en: 'Java/Full Stack Developer' },
    company: 'Sopra Steria',
    start: '2025-09',
    end: '2026-08',
    type: { fr: 'Alternance', en: 'Apprenticeship' },
    location: 'Villeneuve d\'Ascq, France',
    url: 'https://www.soprasteria.fr/',
    summary: {
      fr: "Développement d'une application pour l'ANFSI dans le cadre de ma dernière année d'études.",
      en: 'Development of an application for the ANFSI during my final year of studies.',
    },
    highlights: [
      { fr: 'Maintenance d\'une application existante depuis plus de 4 ans', en: 'Maintenance of an existing application for over 4 years' },
      { fr: 'Développement de nouvelles exigences métiers client', en: 'Development of new client business requirements' },
      { fr: 'Travail sur le Backend/Frontend/Model de données', en: 'Worked on the Backend/Frontend/Data Model' },
      { fr: 'Travail dans des conditions relevant du secret-défense', en: 'Worked in a classified defense environment' },
    ],
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'Docker', 'Liquibase', 'GitLab CI/CD', 'Ansible'],
  },
  //tazio //TODO
  /*
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
  */
]

export default experiences
