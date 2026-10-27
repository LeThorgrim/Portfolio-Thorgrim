import Icon from './Icon.jsx'
import { initials } from '../utils/format.js'
import { LANGS, useLang } from '../i18n.jsx'

function LangSwitch() {
  const { lang, setLang, t } = useLang()
  return (
    <div className="segmented segmented--sm" role="group" aria-label={t('language')}>
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          className={l === lang ? 'is-active' : ''}
          aria-pressed={l === lang}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Header({ profile, theme, onToggleTheme }) {
  const { t } = useLang()
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <a className="topbar__brand" href="#overview">
          <span className="topbar__logo">{initials(profile.name)}</span>
          <span className="topbar__crumb">{profile.username}</span>
        </a>
        <div className="topbar__actions">
          <LangSwitch />
          <button
            type="button"
            className="btn btn--icon"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? t('themeToLight') : t('themeToDark')}
            title={t('theme')}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
        </div>
      </div>
    </header>
  )
}
