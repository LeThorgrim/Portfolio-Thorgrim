// ─────────────────────────────────────────────────────────────
//  Traductions FR / EN
//
//  • Textes de l'interface : dictionnaire UI ci-dessous.
//  • Dans tes fichiers de données, un texte peut être :
//      - une simple chaîne  → affichée telle quelle dans les deux langues
//      - un objet { fr: '…', en: '…' } → la bonne langue est choisie
//    (s'il manque une langue, l'autre est utilisée.)
//
//  Pour ajouter une langue : ajoute-la dans LANGS et dans UI.
// ─────────────────────────────────────────────────────────────
import { createContext, useContext, useEffect, useState } from 'react'

export const LANGS = ['fr', 'en']

const UI = {
  fr: {
    downloadCv: 'Télécharger mon CV',
    skills: 'Compétences',
    pinned: 'Épinglés',
    activity: 'Activité',
    activityLabel: 'Activité par mois',
    less: 'Moins',
    more: 'Plus',
    current: 'En poste',
    present: "aujourd'hui",
    noExperience: "Aucune expérience pour l'instant.",
    searchAchievements: 'Rechercher une réalisation…',
    all: 'Tout',
    category: 'Catégorie',
    noResult: 'Aucun résultat.',
    sections: 'Sections',
    themeToLight: 'Passer en thème clair',
    themeToDark: 'Passer en thème sombre',
    theme: 'Changer de thème',
    language: 'Langue',
  },
  en: {
    downloadCv: 'Download my resume',
    skills: 'Skills',
    pinned: 'Pinned',
    activity: 'Activity',
    activityLabel: 'Activity by month',
    less: 'Less',
    more: 'More',
    current: 'Current',
    present: 'present',
    noExperience: 'No experience yet.',
    searchAchievements: 'Find an achievement…',
    all: 'All',
    category: 'Category',
    noResult: 'No results.',
    sections: 'Sections',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    theme: 'Toggle theme',
    language: 'Language',
  },
}

/** Résout un texte de données : chaîne simple ou { fr, en }. */
export function tr(value, lang) {
  if (value == null || typeof value !== 'object' || Array.isArray(value)) return value
  return value[lang] ?? value.fr ?? value.en ?? Object.values(value)[0]
}

/** Français si le navigateur est en français, anglais sinon (un choix manuel est mémorisé). */
function detectLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (LANGS.includes(saved)) return saved
  } catch {
    /* stockage indisponible */
  }
  const browser = (navigator.languages?.[0] || navigator.language || 'en').toLowerCase()
  return browser.startsWith('fr') ? 'fr' : 'en'
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l) => {
    setLangState(l)
    try {
      localStorage.setItem('lang', l)
    } catch {
      /* stockage indisponible */
    }
  }

  const value = {
    lang,
    setLang,
    t: (key) => UI[lang]?.[key] ?? UI.fr[key] ?? key,
    tr: (v) => tr(v, lang),
  }
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
