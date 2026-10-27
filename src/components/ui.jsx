// Briques d'interface réutilisables, façon Primer (le design system de GitHub).
import Icon from './Icon.jsx'
import { colorFor } from '../utils/format.js'

export function Label({ children, variant = 'default' }) {
  return <span className={`label label--${variant}`}>{children}</span>
}

export function Topic({ children }) {
  return <span className="topic">{children}</span>
}

export function LangDot({ name }) {
  if (!name) return null
  return (
    <span className="lang">
      <span className="lang__dot" style={{ background: colorFor(name) }} />
      {name}
    </span>
  )
}

export function Counter({ children }) {
  return <span className="counter">{children}</span>
}

export function Box({ title, action, children, className = '' }) {
  return (
    <section className={`box ${className}`}>
      {title && (
        <header className="box__header">
          <h2 className="box__title">{title}</h2>
          {action}
        </header>
      )}
      <div className="box__body">{children}</div>
    </section>
  )
}

export function ExternalLink({ href, children, icon = 'external' }) {
  return (
    <a className="ext-link" href={href} target="_blank" rel="noreferrer">
      <Icon name={icon} size={14} />
      {children}
    </a>
  )
}

export function Empty({ children }) {
  return <p className="empty">{children}</p>
}
