import Icon from './Icon.jsx'
import { initials } from '../utils/format.js'

export default function Header({ profile, theme, onToggleTheme }) {
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a className="topbar__brand" href="#overview">
          <span className="topbar__logo">{initials(profile.name)}</span>
          <span className="topbar__crumb">{profile.username}</span>
        </a>
        <button
          type="button"
          className="btn btn--icon"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Passer en thème clair' : 'Passer en thème sombre'}
          title="Changer de thème"
        >
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
        </button>
      </div>
    </header>
  )
}
