import { Link } from 'react-router-dom'
import SkillCard from '../components/SkillCard.jsx'

const SKILLS = [
  { icon: 'code', name: 'HTML & CSS', description: 'Semantic, accessible markup with responsive Flexbox and Grid layouts.', category: 'development' },
  { icon: 'javascript', name: 'JavaScript (ES6+)', description: 'DOM manipulation, async/await, array and object methods.', category: 'development' },
  { icon: 'account_tree', name: 'React', description: 'Component architecture, hooks, props/state, and React Router.', category: 'development' },
  { icon: 'api', name: 'REST APIs', description: 'Consuming and building RESTful services with fetch and Express.', category: 'development' },
  { icon: 'storage', name: 'Databases', description: 'CRUD operations and schema design with MongoDB.', category: 'development' },
  { icon: 'rocket_launch', name: 'Git & Deployment', description: 'Version control workflows and shipping live apps on Render.', category: 'development' },
  { icon: 'design_services', name: 'Figma', description: 'Wireframes, high-fidelity mockups, component libraries, and interactive prototypes.', category: 'design' },
  { icon: 'palette', name: 'UI/UX Design', description: 'User flows, information architecture, and usability-first interface decisions.', category: 'design' },
  { icon: 'grid_view', name: 'Design Systems', description: 'Reusable tokens and component patterns that keep a product visually consistent.', category: 'design' },
  { icon: 'accessibility_new', name: 'Accessibility', description: 'Designing and building for keyboard, screen-reader, and contrast-aware use.', category: 'design' },
]

export default function About() {

     return (
    <>
    <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">About Me</span>
            <h2>UI/UX Designer and UI Engineer with 15 years of experience</h2>
            <p>I am a UI/UX Designer and UI Engineer with 15 years of experience creating intuitive, user-centred digital experiences across web and mobile. Combining expertise in UX design, Psychology, and full-stack development, I bridge the gap between understanding user needs and delivering effective technical solutions.
            My skills span user research, interaction design, wire-framing, prototyping, usability testing, and full-stack development. I recently completed a Full-Stack Developer Bootcamp, strengthening my technical capabilities across HTML, CSS, JavaScript, React, Node.js, Express, REST APIs, databases, SQL, Git/GitHub, and responsive web development.
            My Psychology background brings valuable insight into human behaviour, research methodologies, and user decision-making, helping me design experiences that are intuitive, engaging, accessible, and psychologically informed.
            I excel at translating complex requirements into elegant, scalable digital solutions that balance user needs, technical feasibility, and business goals.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">My Skills</span>
            <h2>What I bring to a team</h2>
          </div>
          <div className="skills-grid">
            {SKILLS.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

    </>
     )
}