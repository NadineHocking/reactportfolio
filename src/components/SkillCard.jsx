export default function SkillCard({ icon: Icon, name, description }) {
  return (
    <div className="skill-card">
      <Icon className="skill-icon" aria-hidden="true" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}
