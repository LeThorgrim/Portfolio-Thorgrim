import profile from './data/profile.js'
import { sections } from './sections.config.js'
import Header from './components/Header.jsx'
import ProfileSidebar from './components/ProfileSidebar.jsx'
import Tabs from './components/Tabs.jsx'
import { useHashTab, useTheme } from './hooks.js'

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const active = useHashTab(
    sections.map((s) => s.id),
    sections[0].id,
  )
  const current = sections.find((s) => s.id === active)
  const Section = current.component

  return (
    <>
      <Header profile={profile} theme={theme} onToggleTheme={toggleTheme} />
      <Tabs sections={sections} active={active} />
      <main className="layout">
        <ProfileSidebar profile={profile} />
        <div className="content">
          <Section items={current.items} section={current} sections={sections} />
        </div>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  )
}
