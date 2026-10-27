// Liste des réalisations, façon onglet « Repositories » : recherche + filtre par catégorie.
import { useMemo, useState } from 'react'
import Icon from '../components/Icon.jsx'
import { Label, LangDot, Topic, ExternalLink, Empty } from '../components/ui.jsx'
import { byDateDesc, formatMonth } from '../utils/format.js'

function AchievementItem({ item }) {
  const main = item.links?.[0]?.url
  return (
    <li className="repo">
      <div className="repo__main">
        <h3 className="repo__title">
          {main ? (
            <a href={main} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          ) : (
            <span>{item.title}</span>
          )}
          {item.category && <Label>{item.category}</Label>}
        </h3>
        {item.description && <p className="repo__desc">{item.description}</p>}
        {item.tags?.length > 1 && (
          <div className="topics">
            {item.tags.slice(1).map((t) => (
              <Topic key={t}>{t}</Topic>
            ))}
          </div>
        )}
        <div className="repo__meta">
          <LangDot name={item.tags?.[0]} />
          {item.stars != null && (
            <span className="meta-item">
              <Icon name="star" size={14} /> {item.stars}
            </span>
          )}
          {item.date && <span className="meta-item">{formatMonth(item.date)}</span>}
          {item.links?.map((l) => (
            <ExternalLink key={l.url} href={l.url}>
              {l.label}
            </ExternalLink>
          ))}
        </div>
      </div>
    </li>
  )
}

export default function AchievementSection({ items = [] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Tout')

  const categories = useMemo(() => ['Tout', ...new Set(items.map((i) => i.category).filter(Boolean))], [items])

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return [...items]
      .filter((i) => category === 'Tout' || i.category === category)
      .filter((i) => !q || [i.title, i.description, ...(i.tags ?? [])].join(' ').toLowerCase().includes(q))
      .sort(byDateDesc((i) => i.date))
  }, [items, query, category])

  return (
    <div>
      <div className="filters">
        <label className="search">
          <Icon name="search" size={14} />
          <input
            type="search"
            placeholder="Rechercher une réalisation…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <div className="segmented" role="group" aria-label="Catégorie">
          {categories.map((c) => (
            <button key={c} type="button" className={c === category ? 'is-active' : ''} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {visible.length ? (
        <ul className="repo-list">
          {visible.map((item) => (
            <AchievementItem key={`${item.title}-${item.date}`} item={item} />
          ))}
        </ul>
      ) : (
        <Empty>Aucun résultat.</Empty>
      )}
    </div>
  )
}
