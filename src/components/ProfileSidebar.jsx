import Icon from './Icon.jsx'
import { Topic } from './ui.jsx'
import { initials } from '../utils/format.js'

export default function ProfileSidebar({ profile }) {
  return (
    <aside className="profile">
      <div className="profile__id">
        <div className="profile__avatar">
          {profile.avatar ? <img src={profile.avatar} alt={profile.name} /> : <span>{initials(profile.name)}</span>}
          {profile.status && (
            <span className="profile__status" title={profile.status.text}>
              <span>{profile.status.emoji}</span>
              <span className="profile__status-text">{profile.status.text}</span>
            </span>
          )}
        </div>
        <div>
          <h1 className="profile__name">{profile.name}</h1>
          <p className="profile__username">{profile.username}</p>
        </div>
      </div>

      {profile.title && <p className="profile__title">{profile.title}</p>}
      {profile.bio && <p className="profile__bio">{profile.bio}</p>}

      {profile.cvFile && (
        <a className="btn btn--block" href={profile.cvFile} download>
          <Icon name="download" /> Télécharger mon CV
        </a>
      )}

      <ul className="profile__details">
        {profile.location && (
          <li>
            <Icon name="location" className="muted" />
            {profile.location}
          </li>
        )}
        {profile.links?.map((l) => (
          <li key={l.url}>
            <Icon name={l.type} className="muted" />
            <a href={l.url} target={l.url.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {profile.skills?.length > 0 && (
        <div className="profile__block">
          <h2 className="profile__heading">Compétences</h2>
          <div className="topics">
            {profile.skills.map((s) => (
              <Topic key={s}>{s}</Topic>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}
