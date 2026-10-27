// Liste des réalisations, façon onglet « Repositories » : recherche + filtre par catégorie.
import { useMemo, useState } from 'react'
import Icon from '../components/Icon.jsx'
import { Label, LangDot, Topic, ExternalLink, Empty } from '../components/ui.jsx'
import { useLang } from '../i18n.jsx'
import { byDateDesc, formatMonth } from '../utils/format.js'

const ALL = '__all__'

function AchievementItem({ item }) {
  const { lang, tr } = useLang()
  const main = item.links?.[0]?.url
  const title = tr(item.title)
  const tags = (item.tags ?? []).map(tr)
  return (
    <li className="repo">
      <div className="repo__main">
        <h3 className="repo__title">
          {main ? (
            <a href={main} target="_blank" rel="noreferrer">
              {title}
            </a>
          ) : (
            <span>{title}</span>
          )}
          {item.category && <Label>{tr(item.category)}</Label>}
        </h3>
        {item.description && <p className="repo__desc">{tr(item.description)}</p>}
        {tags.length > 1 && (
          <div className="topics">
            {tags.slice(1).map((tag) => (
              <Topic key={tag}>{tag}</Topic>
            ))}
          </div>
        )}
        <div className="repo__meta">
          <LangDot name={tags[0]} />
          {item.stars != null && (
            <span className="meta-item">
              <Icon name="star" size={14} /> {item.stars}
            </span>
          )}
          {item.date && <span className="meta-item">{formatMonth(item.date, lang)}</span>}
          {item.links?.map((l) => (
            <ExternalLink key={l.url} href={l.url}>
              {tr(l.label)}
            </ExternalLink>
          ))}
        </div>
      </div>
    </li>
  )
}

export default function AchievementSection({ items = [] }) {
  const { lang, t, tr } = useLang()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(ALL)

  // Les catégories sont comparées dans la langue affichée.
  const categories = useMemo(
    () => [...new Set(items.map((i) => tr(i.category)).filter(Boolean))],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items, lang],
  )
  const activeCategory = category === ALL || categories.includes(category) ? category : ALL

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return [...items]
      .filter((i) => activeCategory === ALL || tr(i.category) === activeCategory)
      .filter((i) => {
        if (!q) return true
        const text = [i.title, i.description, ...(i.tags ?? [])]
          .flatMap((v) => (v && typeof v === 'object' ? Object.values(v) : [v])) // cherche dans toutes les langues
          .join(' ')
          .toLowerCase()
        return text.includes(q)
      })
      .sort(byDateDesc((i) => i.date))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, query, activeCategory, lang])

  return (
    <div>
      <div className="filters">
        <label className="search">
          <Icon name="search" size={14} />
          <input
            type="search"
            placeholder={t('searchAchievements')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <div className="segmented" role="group" aria-label={t('category')}>
          {[ALL, ...categories].map((c) => (
            <button
              key={c}
              type="button"
              className={c === activeCategory ? 'is-active' : ''}
              onClick={() => setCategory(c)}
            >
              {c === ALL ? t('all') : c}
            </button>
          ))}
        </div>
      </div>

      {visible.length ? (
        <ul className="repo-list">
          {visible.map((item) => (
            <AchievementItem key={`${item.date}-${tr(item.title)}`} item={item} />
          ))}
        </ul>
      ) : (
        <Empty>{t('noResult')}</Empty>
      )}
    </div>
  )
}
