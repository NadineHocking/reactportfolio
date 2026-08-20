export default function SkillCard({ icon, name, description }) {
  return (
    <div className="skill-card">
      <span className="material-symbols-outlined skill-icon" aria-hidden="true">
        {icon}
      </span>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}
