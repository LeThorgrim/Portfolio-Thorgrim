import Icon from './Icon.jsx'
import { Counter } from './ui.jsx'

export default function Tabs({ sections, active }) {
  return (
    <nav className="tabs" aria-label="Sections">
      <div className="tabs__inner">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`tabs__item ${s.id === active ? 'is-active' : ''}`}
            aria-current={s.id === active ? 'page' : undefined}
          >
            <Icon name={s.icon} className="muted" />
            {s.label}
            {Array.isArray(s.items) && <Counter>{s.items.length}</Counter>}
          </a>
        ))}
      </div>
    </nav>
  )
}
