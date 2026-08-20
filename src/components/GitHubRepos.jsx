import { useEffect, useState } from 'react'

// Swap this for your real GitHub username to make the section live.
const GITHUB_USERNAME = 'NadineHocking'

export default function GitHubRepos({ username = GITHUB_USERNAME, limit = 6 }) {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  useEffect(() => {
    let cancelled = false

    async function fetchRepos() {
      setStatus('loading')
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`
        )
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`)
        const data = await res.json()
        if (!cancelled) {
          setRepos(data)
          setStatus('success')
        }
      } catch (err) {
        if (!cancelled) setStatus('error')
      }
    }

    fetchRepos()
    return () => {
      cancelled = true
    }
  }, [username, limit])

  if (status === 'loading' || status === 'idle') {
    return <p className="state-msg">Fetching latest repos from GitHub…</p>
  }

  if (status === 'error') {
    return (
      <p className="state-msg">
        Couldn't reach the GitHub API right now — set <code>GITHUB_USERNAME</code> in{' '}
        <code>GitHubRepos.jsx</code> to your own account and try again.
      </p>
    )
  }

  if (repos.length === 0) {
    return <p className="state-msg">No public repos found for this account yet.</p>
  }

  return (
    <div className="repo-grid">
      {repos.map((repo) => (
        <div className="repo-card" key={repo.id}>
          <h4>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </h4>
          <p>{repo.description || 'No description provided.'}</p>
          <div className="repo-meta">
            <span>{repo.language || '—'}</span>
            <span>★ {repo.stargazers_count}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
