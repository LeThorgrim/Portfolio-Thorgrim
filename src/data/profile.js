// ─────────────────────────────────────────────────────────────
//  Ton profil : modifie simplement les valeurs ci-dessous.
//
//  Les textes traduits s'écrivent { fr: '…', en: '…' }.
//  Une simple chaîne (ex : ton nom) s'affiche pareil dans les deux langues.
// ─────────────────────────────────────────────────────────────

const profile = {
  name: 'Marco',
  username: 'Thorgrim',
  // Mets ta photo dans /public (ex: 'avatar.jpg'). Laisse vide pour afficher tes initiales.
  avatar: '',
  title: { fr: 'Ingénieur Logiciel', en: 'Software Engineer' },
  bio: {
    fr: 'Passionné·e par le web, les outils bien conçus et les projets qui servent à quelque chose.',
    en: 'Passionate about the web, well-crafted tools and projects that actually matter.',
  },
  location: { fr: 'Île-de-France, France', en: 'Paris area, France' },
  status: { emoji: '🚀', text: { fr: 'Ouvert aux opportunités', en: 'Open to opportunities' } },

  links: [
    { type: 'email', label: 'thorgrim.marco.pro@gmail.com', url: 'mailto:thorgrim.marco.pro@gmail.com' },
    { type: 'github', label: 'github.com/LeThorgrim', url: 'https://github.com/LeThorgrim' },
    //{ type: 'website', label: 'mon-site.fr', url: 'https://mon-site.fr' },
  ],

  // Fichier(s) à placer dans /public. Une seule chaîne = même CV pour les deux langues.
  // Laisse vide pour masquer le bouton.
  cvFile: { fr: 'cv_fr.pdf', en: 'cv_en.pdf' },

  // Le « README » affiché dans l'onglet Aperçu (markdown léger : **gras**, `code`, listes « - »).
  about: {
    fr: `Salut, je suis **Marco** connu sous le pseudonyme de **Thorgrim**, développeur français actuellement en Île-de-France 
    (mais ouvert à la mobilité).

    J'ai récemment terminé mes études d'ingénieur en développement logiciel et suis bilingue en français et en anglais, mais j'ai aussi de solides bases en espagnol. 

    J'aime construire des outils et des apps, apprendre de nouvelles technologies et publier mes créations en ligne :)`,

    en: `Hi, I'm **Marco** known as **Thorgrim**, a French developer currently based in the Paris area (but open to moving).

    I recently graduated as a software engineer and am bilingual in French and English, but also have a solid foundation in Spanish.

    I enjoy building tools and apps, learning new technologies and publishing my creations online :)`,
  },

  skills: ['HTML5', 'JavaScript', 'TypeScript', "React", 'Node.js', 'Java', 'Spring Boot', 'Python', 'Django', 'C++', 'SQL', 'Git', 'Docker', 'Claude Code'],
}

export default profile
