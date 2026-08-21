import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="wrap not-found">
      <h1 className="mono">404</h1>
      <p>This route doesn't exist yet — maybe next week's challenge.</p>
      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </div>
  )
}
