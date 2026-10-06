import './Skills.css'

const stack = [
  'TypeScript',
  'Node.js',
  'React',
  'React Native',
  'Expo',
  'NestJS',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Git',
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="section-label">// tech stack</p>
        <h2 className="section-title">
          Com o que <span className="gradient-text">trabalho.</span>
        </h2>

        <div className="skills-grid">
          {stack.map(name => (
            <div key={name} className="skill-item">
              <div className="skill-dot" />
              <span className="skill-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
