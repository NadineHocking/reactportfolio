import { Link } from 'react-router-dom'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

export default function Home() {

     return (
    <>
    <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow mb-1">available</span>
            <h1>
              Hello, I’m Nadine, a  UX Unicorn
            </h1>
            <p className="hero-lead">
            UI/UX Designer and UI Engineer with 15 years’ experience creating intuitive, user-centred digital experiences. Combining expertise in UX design, psychology, and full-stack development, I bridge design, research and technology to deliver effective, scalable solutions.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                See my projects →
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Get in touch
              </Link>
            </div>
            <div className="hero-social">
              <a href="https://github.com/NadineHocking/" target="_blank" rel="noreferrer">
                <SiGithub className="link-icon" aria-hidden="true" />
                github.com/NadineHocking
              </a>
              <a href="https://linkedin.com/in/nadine-wells/" target="_blank" rel="noreferrer">
                <FaLinkedin className="link-icon" aria-hidden="true" />
                linkedin.com/in/nadine-wells
              </a>
            </div>
            
          </div>
          <div className="terminal-card">
            <div className="terminal-dots">
              <span /><span /><span />
            </div>
            <div className="line"><span className="prompt">$</span> Nadine Hocking</div>          
            <div className="line"><span className="prompt">$</span> UI UX Designer | UI Engineer</div>

            <div className="line"><span className="prompt">$</span> Full-Stack Developer Bootcamp Graduate</div>
            <div className="line"><span className="prompt">$</span> 15 years of experience creating intuitive, user-centred digital experiences</div>
            <div className="line"><span className="prompt">$</span> Bridging design, research and technology to deliver effective, scalable solutions</div>
          </div>
          </div>

      </section>


    </>
     )
}