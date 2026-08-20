import { Link } from 'react-router-dom'
import projects from '../data/projects.js'

export default function Home() {

     return (
    <>
    <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">available for UI UX Design / UI Engineer opportunities</span>
            <h1>
              Hello, I’m Nadine, a  <span className="accent">UX Unicorn</span>
            </h1>
            <p className="hero-lead">
            UI/UX Designer and UI Engineer with 15 years’ experience creating intuitive, user-centred digital experiences. Combining expertise in UX design, Psychology, and full-stack development, I bridge design, research and technology to deliver effective, scalable solutions.
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
                github.com/NadineHocking
              </a>
              <a href="https://linkedin.com/in/nadine-wells/" target="_blank" rel="noreferrer">
                linkedin.com/in/nadine-wells
              </a>
            </div>
          </div>
          </div>

      </section>


    </>
     )
}