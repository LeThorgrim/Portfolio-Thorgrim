const MONTHS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']

/** 'AAAA-MM' -> { y, m } (m de 0 à 11) */
export function parseMonth(value) {
  if (!value) return null
  const [y, m = '1'] = String(value).split('-')
  return { y: Number(y), m: Number(m) - 1 }
}

export function nowMonth() {
  const d = new Date()
  return { y: d.getFullYear(), m: d.getMonth() }
}

export function formatMonth(value) {
  const p = parseMonth(value)
  return p ? `${MONTHS[p.m]} ${p.y}` : ''
}

export function formatRange(start, end) {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : "aujourd'hui"}`
}

/** Durée lisible entre deux mois (bornes incluses) : « 1 an 3 mois » */
export function formatDuration(start, end) {
  const a = parseMonth(start)
  const b = end ? parseMonth(end) : nowMonth()
  if (!a || !b) return ''
  const total = Math.max(1, (b.y - a.y) * 12 + (b.m - a.m) + 1)
  const years = Math.floor(total / 12)
  const months = total % 12
  const parts = []
  if (years) parts.push(`${years} an${years > 1 ? 's' : ''}`)
  if (months) parts.push(`${months} mois`)
  return parts.join(' ')
}

/** Liste des mois 'AAAA-MM' entre deux bornes incluses (fin absente = aujourd'hui). */
export function monthsBetween(start, end) {
  const a = parseMonth(start)
  const b = end ? parseMonth(end) : nowMonth()
  if (!a || !b) return []
  const out = []
  for (let y = a.y, m = a.m; y < b.y || (y === b.y && m <= b.m); m === 11 ? (y++, (m = 0)) : m++) {
    out.push(`${y}-${String(m + 1).padStart(2, '0')}`)
  }
  return out
}

/** Clé de tri : plus récent d'abord (un poste en cours passe en premier). */
export function byDateDesc(getDate) {
  return (x, y) => String(getDate(y) ?? '9999').localeCompare(String(getDate(x) ?? '9999'))
}

/** Couleur stable dérivée d'un texte (pastille « langage » façon GitHub). */
const DOT_COLORS = ['#3178c6', '#f1e05a', '#e34c26', '#563d7c', '#3fb950', '#a371f7', '#db61a2', '#f0883e', '#00add8', '#e5534b']
export function colorFor(text = '') {
  let h = 0
  for (const ch of text.toLowerCase()) h = (h * 31 + ch.charCodeAt(0)) >>> 0
  return DOT_COLORS[h % DOT_COLORS.length]
}

export function initials(name = '') {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
}
