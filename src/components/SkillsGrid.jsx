import { useMemo, useState } from 'react'
import SkillCard from './SkillCard.jsx'

const CATEGORY_LABELS = {
  all: 'all',
  development: 'development',
  design: 'ui/ux design',
}

export default function SkillsGrid({ skills }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = useMemo(() => {
    const found = new Set(skills.map((s) => s.category))
    return ['all', ...Array.from(found)]
  }, [skills])

  const visibleSkills = useMemo(() => {
    if (activeCategory === 'all') return skills
    return skills.filter((s) => s.category === activeCategory)
  }, [skills, activeCategory])

  return (
    <div>
      <div className="filter-row" role="group" aria-label="Filter skills by category">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-chip ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {CATEGORY_LABELS[category] || category}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {visibleSkills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  )
}
