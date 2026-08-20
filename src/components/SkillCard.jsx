export default function SkillCard({ icon, name, description }) {
  return (
    <div className="skill-card">
      <span className="skill-icon">{icon}</span>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}
