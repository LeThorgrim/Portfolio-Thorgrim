// Graphe d'activité façon « contributions » GitHub, mais par mois :
// une ligne par année, une case par mois, plus c'est foncé plus il s'est passé de choses.
import { useLang } from '../i18n.jsx'
import { MONTH_INITIALS, MONTH_NAMES } from '../utils/format.js'

function level(v) {
  if (!v) return 0
  if (v <= 1) return 1
  if (v <= 3) return 2
  if (v <= 4) return 3
  return 4
}

export default function ActivityGraph({ entries }) {
  const { lang, t } = useLang()
  const initials = MONTH_INITIALS[lang] ?? MONTH_INITIALS.fr
  const names = MONTH_NAMES[lang] ?? MONTH_NAMES.fr

  const totals = {}
  for (const { month, weight } of entries) totals[month] = (totals[month] ?? 0) + weight

  const years = Object.keys(totals).map((k) => Number(k.slice(0, 4)))
  const now = new Date()
  const maxYear = Math.max(now.getFullYear(), ...years)
  const minYear = Math.min(...years)
  const rows = []
  for (let y = maxYear; y >= minYear; y--) rows.push(y)

  return (
    <div className="box activity">
      <div className="activity__grid" role="table" aria-label={t('activityLabel')}>
        <div className="activity__row" role="row">
          <span className="activity__year" />
          {initials.map((m, i) => (
            <span key={i} className="activity__month" role="columnheader">
              {m}
            </span>
          ))}
        </div>
        {rows.map((y) => (
          <div key={y} className="activity__row" role="row">
            <span className="activity__year" role="rowheader">
              {y}
            </span>
            {initials.map((_, m) => {
              const key = `${y}-${String(m + 1).padStart(2, '0')}`
              const future = y > now.getFullYear() || (y === now.getFullYear() && m > now.getMonth())
              const v = totals[key] ?? 0
              return (
                <span
                  key={m}
                  role="cell"
                  className={`activity__cell lvl-${future ? 'x' : level(v)}`}
                  title={`${names[m]} ${y}`}
                />
              )
            })}
          </div>
        ))}
      </div>
      <div className="activity__legend">
        {t('less')}
        {[0, 1, 2, 3, 4].map((l) => (
          <span key={l} className={`activity__cell lvl-${l}`} />
        ))}
        {t('more')}
      </div>
    </div>
  )
}
