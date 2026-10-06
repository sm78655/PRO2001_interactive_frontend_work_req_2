import { NavLink, Outlet } from 'react-router-dom'
import usePreferences from './hooks/usePreferences'

export default function AppLayout() {
  const preferenceState = usePreferences()

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">PRO2001 · Work Requirement 2</p>
          <h1>Personal Preference Dashboard</h1>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Settings
          </NavLink>
          <NavLink
            to="/preview"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Preview
          </NavLink>
        </nav>
      </header>

      <main className="page-container">
        <Outlet context={preferenceState} />
      </main>

      <footer>
        Built with React, TypeScript, Vite and React Router
      </footer>
    </div>
  )
}
