// ─────────────────────────────────────────────────────────────
//  Ton profil : modifie simplement les valeurs ci-dessous.
//
//  Les textes traduits s'écrivent { fr: '…', en: '…' }.
//  Une simple chaîne (ex : ton nom) s'affiche pareil dans les deux langues.
// ─────────────────────────────────────────────────────────────

const profile = {
  name: 'Prénom Nom',
  username: 'pseudo',
  // Mets ta photo dans /public (ex: 'avatar.jpg'). Laisse vide pour afficher tes initiales.
  avatar: '',
  title: { fr: 'Développeur·se Full-Stack', en: 'Full-Stack Developer' },
  bio: {
    fr: 'Passionné·e par le web, les outils bien conçus et les projets qui servent à quelque chose.',
    en: 'Passionate about the web, well-crafted tools and projects that actually matter.',
  },
  location: { fr: 'Île-de-France, France', en: 'Paris area, France' },
  status: { emoji: '🚀', text: { fr: 'Ouvert·e aux opportunités', en: 'Open to opportunities' } },

  links: [
    { type: 'email', label: 'moi@exemple.com', url: 'mailto:moi@exemple.com' },
    { type: 'github', label: 'github.com/pseudo', url: 'https://github.com/pseudo' },
    { type: 'linkedin', label: 'linkedin.com/in/pseudo', url: 'https://linkedin.com/in/pseudo' },
    { type: 'website', label: 'mon-site.fr', url: 'https://mon-site.fr' },
  ],

  // Fichier(s) à placer dans /public. Une seule chaîne = même CV pour les deux langues.
  // Laisse vide pour masquer le bouton.
  cvFile: { fr: 'cv.pdf', en: 'resume.pdf' },

  // Le « README » affiché dans l'onglet Aperçu (markdown léger : **gras**, `code`, listes « - »).
  about: {
    fr: `Salut 👋 Je suis **Prénom**, développeur·se basé·e en Île-de-France.

J'aime construire des interfaces rapides et accessibles, et je m'intéresse à l'architecture front-end, au design system et à l'open source.

- 🔭 Actuellement : en poste chez **Entreprise**
- 🌱 J'apprends : \`TypeScript\` avancé et le testing
- 💬 Parle-moi de : React, UX, café`,

    en: `Hi 👋 I'm **Firstname**, a developer based near Paris.

I love building fast, accessible interfaces, and I'm into front-end architecture, design systems and open source.

- 🔭 Currently: working at **Company**
- 🌱 Learning: advanced \`TypeScript\` and testing
- 💬 Ask me about: React, UX, coffee`,
  },

  skills: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'CSS', 'Git', 'Figma'],
}

export default profile
