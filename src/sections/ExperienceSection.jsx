// Timeline verticale des expériences, comme le fil d'activité GitHub.
import Icon from '../components/Icon.jsx'
import { Label, Topic, Empty } from '../components/ui.jsx'
import { useLang } from '../i18n.jsx'
import { byDateDesc, formatDuration, formatRange } from '../utils/format.js'

function ExperienceItem({ exp }) {
  const { lang, t, tr } = useLang()
  const current = !exp.end
  const company = tr(exp.company)
  return (
    <li className="timeline__item">
      <span className={`timeline__badge ${current ? 'is-current' : ''}`}>
        <Icon name="briefcase" size={14} />
      </span>
      <article className="box timeline__card">
        <header className="xp__head">
          <div>
            <h3 className="xp__role">{tr(exp.role)}</h3>
            <div className="xp__company">
              {exp.url ? (
                <a href={exp.url} target="_blank" rel="noreferrer">
                  {company}
                </a>
              ) : (
                company
              )}
            </div>
          </div>
          <div className="xp__labels">
            {current && <Label variant="success">{t('current')}</Label>}
            {exp.type && <Label>{tr(exp.type)}</Label>}
          </div>
        </header>

        <div className="xp__meta">
          <span className="meta-item">
            <Icon name="calendar" size={14} />
            {formatRange(exp.start, exp.end, lang)} · {formatDuration(exp.start, exp.end, lang)}
          </span>
          {exp.location && (
            <span className="meta-item">
              <Icon name="location" size={14} />
              {tr(exp.location)}
            </span>
          )}
        </div>

        {exp.summary && <p className="xp__summary">{tr(exp.summary)}</p>}

        {exp.highlights?.length > 0 && (
          <ul className="xp__highlights">
            {exp.highlights.map((h, i) => (
              <li key={i}>{tr(h)}</li>
            ))}
          </ul>
        )}

        {exp.tags?.length > 0 && (
          <div className="topics">
            {exp.tags.map((tag, i) => (
              <Topic key={i}>{tr(tag)}</Topic>
            ))}
          </div>
        )}
      </article>
    </li>
  )
}

export default function ExperienceSection({ items = [] }) {
  const { t } = useLang()
  if (!items.length) return <Empty>{t('noExperience')}</Empty>
  const sorted = [...items].sort(byDateDesc((e) => e.end ?? '9999-12'))
  return (
    <ol className="timeline">
      {sorted.map((exp) => (
        <ExperienceItem key={`${exp.start}-${exp.end}`} exp={exp} />
      ))}
    </ol>
  )
}
