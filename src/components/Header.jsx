import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'home' },
  { to: '/projects', label: 'projects' },
  { to: '/contact', label: 'contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="wrap">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          Jordan Ellis
          <span className="brand-tag">dev.log</span>
        </NavLink>

        <nav aria-label="Primary">
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="nav-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
        </button>
      </div>
    </header>
  )
}
