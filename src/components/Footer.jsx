import { Link } from 'react-router-dom'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <span className="footer-fine">© {year} Nadine Hocking | NDesign</span>
        <ul className="footer-links">
          <li>
            <a href="https://github.com/NadineHocking/" target="_blank" rel="noreferrer">
                <SiGithub className="link-icon" aria-hidden="true" />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nadine-wells/" target="_blank" rel="noreferrer">
              <FaLinkedin className="link-icon" aria-hidden="true" />
              LinkedIn
            </a>
          </li>
          <li>
            <Link to="/contact">Contact
              <MdMail className="link-icon" aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
