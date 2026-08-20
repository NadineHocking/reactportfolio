import ProjectLog from '../components/ProjectLog.jsx'
import projects from '../data/projects.js'

export default function Projects() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Projects</span>
          <h2>9 weeks, 9 challenges</h2>
          <p>
            Filter by technology or click any entry to open its repo and demo links. Each week
            builds on the one before it.
          </p>
        </div>

        <ProjectLog projects={projects} />

        <div className="section-head" style={{ marginTop: 64 }}>
          <span className="eyebrow">bonus · live from GitHub</span>
          <h2>Latest repositories</h2>
          <p>Pulled directly from the GitHub REST API, so this list stays current automatically.</p>
        </div>
      </div>
    </section>
  )
}
