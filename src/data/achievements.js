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

//categories exemple : PROJECT, HACKATHON, CERTIFICATION, OPEN_SOURCE ...

const achievements = [
  {
    title: 'Portfolio-Thorgrim',
    category: PROJECT,
    description: {
      fr: 'Ce site ! Portfolio modulaire en React, inspiré du design de GitHub.',
      en: 'This website! A modular React portfolio inspired by GitHub’s design.',
    },
    tags: ['TypeScript', 'React', 'Vite'],
    links: [{ label: CODE, url: 'https://github.com/LeThorgrim/Portfolio-Thorgrim' }],
  },
  {
    title: 'Thorgrim-Map-Maker',
    category: PROJECT,
    description: {
      fr: 'Ce site ! Portfolio modulaire en React, inspiré du design de GitHub.',
      en: 'This website! A modular React portfolio inspired by GitHub’s design.',
    },
    tags: ['TypeScript', 'React', 'Vite'],
    links: [
      { label: CODE, url: 'https://github.com/LeThorgrim/Thorgrim-Map-Maker' },
      { label: DEMO, url: 'https://thorgrim-map-maker.thorgrim-marco-pro.workers.dev/' }
    ],
    pinned: true,
  },
  {
    title: 'Grim Chat (Discord Bot)',
    category: PROJECT,
    description: {
      fr: 'Un bot discord pour nettoyer les messages et canaux. (Le lien de démo est le lien d’invitation du bot sur un serveur Discord.)',
      en: 'A discord bot for cleaning up messages and channels. (The demo link is the bot invitation link on a Discord server.)',
    },
    tags: ['Python', 'Discord.py'],
    links: [
      { label: CODE, url: 'https://github.com/LeThorgrim/GrimChatBot' },
      { label: DEMO, url: 'https://discord.com/oauth2/authorize?client_id=1553499832121954404&permissions=2064&integration_type=0&scope=bot+applications.commands' }
    ],
    pinned: true,
  },
  {
    title: 'Grim Utilities (Discord Bot)',
    category: PROJECT,
    description: {
      fr: 'Un bot discord qui utilise des webhooks pour proxy des messages dans un cannal discord. Plusieurs triggers sont disponibles pour envoyer des messages automatiquement. (Le lien de démo est le lien d’invitation du bot sur un serveur Discord.)',
      en: 'A discord bot that uses webhooks to proxy messages in a discord channel. Several triggers are available to send messages automatically. (The demo link is the bot invitation link on a Discord server.)',
    },
    tags: ['Python', 'Discord.py'],
    links: [
      { label: CODE, url: 'https://github.com/LeThorgrim/GrimUtilitiesBot' },
      { label: DEMO, url: 'https://discord.com/oauth2/authorize?client_id=1553934378680193116&permissions=536914944&integration_type=0&scope=bot' }
    ],
    pinned: true,
  },
  {
    title: 'BashCrossrefSearch',
    category: PROJECT,
    description: {
      fr: "Projet d'école, un script bash qui utilise l'API Crossref pour rechercher des articles scientifiques.",
      en: 'A bash script that uses the Crossref API to search for scientific articles.',
    },
    tags: ['Bash', 'Crossref API'],
    links: [
      { label: CODE, url: 'https://github.com/LeThorgrim/BashCrossrefSearch' },
    ],
  },

  /* exemple for later
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
    stars: 42,
    pinned: true,
  },
  */
]

export default achievements
