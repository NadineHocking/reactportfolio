mport { useMemo, useState } from 'react'

function getAllTags(projects) {
  const tags = new Set()
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return ['all', ...Array.from(tags)]
}

export default function ProjectLog({ projects }) {
  const [activeTag, setActiveTag] = useState('all')
  const [expandedWeek, setExpandedWeek] = useState(null)

  const tags = useMemo(() => getAllTags(projects), [projects])

  const visibleProjects = useMemo(() => {
    if (activeTag === 'all') return projects
    return projects.filter((p) => p.tags.includes(activeTag))
  }, [projects, activeTag])

  const toggleExpanded = (week) => {
    setExpandedWeek((current) => (current === week ? null : week))
  }

  return (
    <div>
      <div className="filter-row" role="group" aria-label="Filter projects by technology">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-chip ${activeTag === tag ? 'active' : ''}`}
            onClick={() => setActiveTag(tag)}
            aria-pressed={activeTag === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      {visibleProjects.length === 0 ? (
        <p className="state-msg">No entries match that filter yet.</p>
      ) : (
        <div className="build-log">
          {visibleProjects.map((project) => {
            const isOpen = expandedWeek === project.week
            return (
              <div className="log-entry" key={project.week}>
                <article
                  className="log-card"
                  onClick={() => toggleExpanded(project.week)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleExpanded(project.week)
                    }
                  }}
                >
                  <div className="log-card-top">
                    <span className="log-week mono">WK.{String(project.week).padStart(2, '0')}</span>
                    <span className="log-tech mono">{project.tech}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="log-summary">{project.summary}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {isOpen && (
                    <div className="log-card-expanded">
                      {project.repo && (
                        <a
                          className="btn btn-ghost"
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View source →
                        </a>
                      )}
                      {project.demo && (
                        <a
                          className="btn btn-primary"
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live demo →
                        </a>
                      )}
                    </div>
                  )}
                </article>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
