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
        <a href="/" className="brand" onClick={closeMenu}>
			    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none" className="logo">
				<path d="M22.4263 15.5293H18.3029V40.791H22.4263V15.5293Z" />
				<path d="M33.416 20.64C34.8514 22.2674 35.4914 24.7909 35.4914 27.6617V40.8H39.6423V25.3486C39.6423 22.0114 38.3623 19.4971 36.7531 17.7966C34.8423 15.7943 32.52 14.7886 29.7771 14.7886C28.4423 14.7886 27.1349 15.0629 25.864 15.6023C25.6446 15.6937 25.416 15.8034 25.1783 15.9314V20.0731C27.336 19.2869 31.3954 18.3543 33.416 20.64Z"/>
				<path d="M28.9452 56.4526C13.3932 56.4526 0.748596 43.7989 0.748596 28.256C0.748596 12.7131 13.3932 0.050293 28.9452 0.050293C44.4972 0.050293 57.1417 12.704 57.1417 28.2469C57.1417 43.7897 44.488 56.4526 28.9452 56.4526ZM28.9452 4.04572C15.5966 4.04572 4.73488 14.9074 4.73488 28.2469C4.73488 41.5863 15.5966 52.4572 28.9452 52.4572C42.2937 52.4572 53.1554 41.5954 53.1554 28.2469C53.1554 14.8983 42.2846 4.04572 28.9452 4.04572Z"/>
				</svg>
			</a>        </NavLink>

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
