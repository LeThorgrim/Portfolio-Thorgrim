import profile from '../data/profile.js'
import Markdown from '../components/Markdown.jsx'
import ActivityGraph from '../components/ActivityGraph.jsx'
import Icon from '../components/Icon.jsx'
import { Box, LangDot, Label } from '../components/ui.jsx'
import { useLang } from '../i18n.jsx'

function PinnedCard({ item }) {
  const Title = item.href ? 'a' : 'span'
  return (
    <article className="pinned">
      <header className="pinned__head">
        <Icon name={item.icon} className="muted" />
        <Title className="pinned__title" {...(item.href && { href: item.href, target: '_blank', rel: 'noreferrer' })}>
          {item.title}
        </Title>
        {item.subtitle && <Label>{item.subtitle}</Label>}
      </header>
      {item.description && <p className="pinned__desc">{item.description}</p>}
      <footer className="pinned__meta">
        <LangDot name={item.lang} />
        {item.stars != null && (
          <span className="meta-item">
            <Icon name="star" size={14} /> {item.stars}
          </span>
        )}
        {item.meta && <span className="meta-item">{item.meta}</span>}
      </footer>
    </article>
  )
}

export default function Overview({ sections }) {
  const { lang, t, tr } = useLang()

  const pinned = sections.flatMap((s) =>
    s.toPinned
      ? (s.items ?? [])
          .filter((i) => i.pinned)
          .map((i, idx) => ({ ...s.toPinned(i, lang), key: `${s.id}-${idx}` }))
      : [],
  )

  const activity = sections.flatMap((s) => (s.toActivity ? (s.items ?? []).flatMap(s.toActivity) : []))

  return (
    <div className="stack">
      <Box
        className="readme"
        title={
          <>
            {profile.username} / <strong>README</strong>.md
          </>
        }
      >
        <Markdown source={tr(profile.about)} />
      </Box>

      {pinned.length > 0 && (
        <div>
          <h2 className="section-heading">{t('pinned')}</h2>
          <div className="pinned-grid">
            {pinned.map((p) => (
              <PinnedCard key={p.key} item={p} />
            ))}
          </div>
        </div>
      )}

      {activity.length > 0 && (
        <div>
          <h2 className="section-heading">{t('activity')}</h2>
          <ActivityGraph entries={activity} />
        </div>
      )}
    </div>
  )
}
