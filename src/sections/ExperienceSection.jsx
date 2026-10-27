// Timeline verticale des expériences, comme le fil d'activité GitHub.
import Icon from '../components/Icon.jsx'
import { Label, Topic, Empty } from '../components/ui.jsx'
import { byDateDesc, formatDuration, formatRange } from '../utils/format.js'

function ExperienceItem({ exp }) {
  const current = !exp.end
  return (
    <li className="timeline__item">
      <span className={`timeline__badge ${current ? 'is-current' : ''}`}>
        <Icon name="briefcase" size={14} />
      </span>
      <article className="box timeline__card">
        <header className="xp__head">
          <div>
            <h3 className="xp__role">{exp.role}</h3>
            <div className="xp__company">
              {exp.url ? (
                <a href={exp.url} target="_blank" rel="noreferrer">
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </div>
          </div>
          <div className="xp__labels">
            {current && <Label variant="success">En poste</Label>}
            {exp.type && <Label>{exp.type}</Label>}
          </div>
        </header>

        <div className="xp__meta">
          <span className="meta-item">
            <Icon name="calendar" size={14} />
            {formatRange(exp.start, exp.end)} · {formatDuration(exp.start, exp.end)}
          </span>
          {exp.location && (
            <span className="meta-item">
              <Icon name="location" size={14} />
              {exp.location}
            </span>
          )}
        </div>

        {exp.summary && <p className="xp__summary">{exp.summary}</p>}

        {exp.highlights?.length > 0 && (
          <ul className="xp__highlights">
            {exp.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        {exp.tags?.length > 0 && (
          <div className="topics">
            {exp.tags.map((t) => (
              <Topic key={t}>{t}</Topic>
            ))}
          </div>
        )}
      </article>
    </li>
  )
}

export default function ExperienceSection({ items = [] }) {
  if (!items.length) return <Empty>Aucune expérience pour l'instant.</Empty>
  const sorted = [...items].sort(byDateDesc((e) => e.end ?? '9999-12'))
  return (
    <ol className="timeline">
      {sorted.map((exp) => (
        <ExperienceItem key={`${exp.company}-${exp.start}`} exp={exp} />
      ))}
    </ol>
  )
}
