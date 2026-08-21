import ProjectLog from '../components/ProjectLog.jsx'
import projects from '../data/projects.js'
import GitHubRepos from '../components/GitHubRepos.jsx'


export default function Projects() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Projects</span>
          <h2>My Bootcamp Projects over 9 Weeks</h2>
          <p>
            Filter by technology or click any entry to open its repo and demo links. 
          </p>
        </div>

        <ProjectLog projects={projects} />

        <div className="section-head" style={{ marginTop: 64 }}>
          <span className="eyebrow">live from GitHub</span>
          <h2>Latest repositories</h2>
        </div>
            <GitHubRepos />
      </div>
    </section>
  )
}
