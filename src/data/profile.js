// ─────────────────────────────────────────────────────────────
//  Ton profil : modifie simplement les valeurs ci-dessous.
// ─────────────────────────────────────────────────────────────

const profile = {
  name: 'Prénom Nom',
  username: 'pseudo',
  // Mets ta photo dans /public (ex: 'avatar.jpg'). Laisse vide pour afficher tes initiales.
  avatar: '',
  title: 'Développeur·se Full-Stack',
  bio: 'Passionné·e par le web, les outils bien conçus et les projets qui servent à quelque chose.',
  location: 'Île-de-France, France',
  status: { emoji: '🚀', text: 'Ouvert·e aux opportunités' },

  links: [
    { type: 'email', label: 'moi@exemple.com', url: 'mailto:moi@exemple.com' },
    { type: 'github', label: 'github.com/pseudo', url: 'https://github.com/pseudo' },
    { type: 'linkedin', label: 'linkedin.com/in/pseudo', url: 'https://linkedin.com/in/pseudo' },
    { type: 'website', label: 'mon-site.fr', url: 'https://mon-site.fr' },
  ],

  // Fichier à placer dans /public. Laisse vide pour masquer le bouton.
  cvFile: 'cv.pdf',

  // Le « README » affiché dans l'onglet Aperçu (markdown léger : **gras**, `code`, listes « - »).
  about: `Salut 👋 Je suis **Prénom**, développeur·se basé·e en Île-de-France.

J'aime construire des interfaces rapides et accessibles, et je m'intéresse à l'architecture front-end, au design system et à l'open source.

- 🔭 Actuellement : en poste chez **Entreprise**
- 🌱 J'apprends : \`TypeScript\` avancé et le testing
- 💬 Parle-moi de : React, UX, café`,

  skills: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'CSS', 'Git', 'Figma'],
}

export default profile
