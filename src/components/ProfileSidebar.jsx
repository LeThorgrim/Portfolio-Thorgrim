import Icon from './Icon.jsx'
import { Topic } from './ui.jsx'
import { initials } from '../utils/format.js'
import { useLang } from '../i18n.jsx'

export default function ProfileSidebar({ profile }) {
  const { t, tr } = useLang()
  const status = profile.status && { emoji: profile.status.emoji, text: tr(profile.status.text) }
  const cv = tr(profile.cvFile)

  return (
    <aside className="profile">
      <div className="profile__id">
        <div className="profile__avatar">
          {profile.avatar ? <img src={profile.avatar} alt={profile.name} /> : <span>{initials(profile.name)}</span>}
          {status && (
            <span className="profile__status" title={status.text}>
              <span>{status.emoji}</span>
              <span className="profile__status-text">{status.text}</span>
            </span>
          )}
        </div>
        <div>
          <h1 className="profile__name">{profile.name}</h1>
          <p className="profile__username">{profile.username}</p>
        </div>
      </div>

      {profile.title && <p className="profile__title">{tr(profile.title)}</p>}
      {profile.bio && <p className="profile__bio">{tr(profile.bio)}</p>}

      {cv && (
        <a className="btn btn--block" href={cv} download>
          <Icon name="download" /> {t('downloadCv')}
        </a>
      )}

      <ul className="profile__details">
        {profile.location && (
          <li>
            <Icon name="location" className="muted" />
            {tr(profile.location)}
          </li>
        )}
        {profile.links?.map((l) => (
          <li key={l.url}>
            <Icon name={l.type} className="muted" />
            <a href={l.url} target={l.url.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
              {tr(l.label)}
            </a>
          </li>
        ))}
      </ul>

      {profile.skills?.length > 0 && (
        <div className="profile__block">
          <h2 className="profile__heading">{t('skills')}</h2>
          <div className="topics">
            {profile.skills.map((s, i) => (
              <Topic key={i}>{tr(s)}</Topic>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}
