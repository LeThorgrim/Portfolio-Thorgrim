import { useEffect, useState } from 'react'

/** Onglet actif lu depuis l'URL (#experiences), pour que les liens soient partageables. */
export function useHashTab(validIds, fallback) {
  const read = () => {
    const id = window.location.hash.slice(1)
    return validIds.includes(id) ? id : fallback
  }
  const [tab, setTab] = useState(read)
  useEffect(() => {
    const onChange = () => {
      setTab(read())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return tab
}

/** Thème clair / sombre : suit le système, mémorise le choix manuel. */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
    } catch {
      /* stockage indisponible */
    }
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* stockage indisponible */
    }
  }, [theme])

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}
