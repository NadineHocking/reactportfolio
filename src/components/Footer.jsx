import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <span className="footer-fine">© {year} Nadine Hocking</span>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/NadineHocking/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nadine-wells/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
