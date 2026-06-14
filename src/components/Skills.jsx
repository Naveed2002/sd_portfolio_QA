import React, { useState } from 'react'
import './Skills.css'

const categories = [
  {
    id: 'qa',
    label: '🧪 QA & Testing',
    skills: [
      'Manual Testing', 'Test Case Design', 'Bug Reporting',
      'Functional Testing', 'Regression Testing', 'API Testing (Postman)',
      'Selenium', 'JUnit', 'Playwright', 'Jira',
    ],
  },
  {
    id: 'languages',
    label: '💻 Languages',
    skills: ['Python', 'Java', 'JavaScript', 'Kotlin', 'PHP', 'C', 'C++', 'R'],
  },
  {
    id: 'web',
    label: '🌐 Web Dev',
    skills: [
      'React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS',
      'Tailwind CSS', 'XML', 'MERN Stack', '.NET',
    ],
  },
  {
    id: 'tools',
    label: '🛠 Tools & Platforms',
    skills: [
      'GitHub', 'Git', 'Jira', 'VS Code', 'Postman', 'Docker',
      'Kubernetes', 'SQL Workbench', 'Android Studio', 'Figma',
    ],
  },
  {
    id: 'db',
    label: '🗄 Databases',
    skills: ['SQL', 'MongoDB', 'MySQL'],
  },
]

export default function Skills() {
  const [active, setActive] = useState('qa')

  const current = categories.find(c => c.id === active) || categories[0]

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <p className="section-label">Technical skills</p>
        <h2 className="section-title">What I work with</h2>

        <div className="divider" />

        <div className="skills__layout">
          {/* Tabs */}
          <nav className="skills__tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`skills__tab ${active === cat.id ? 'skills__tab--active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.label}
                {active === cat.id && <span className="skills__tab-bar" />}
              </button>
            ))}
          </nav>

          {/* Skills panel */}
          <div className="skills__panel">
            <div className="skills__tags">
              {current.skills.map((skill, i) => (
                <span
                  key={skill}
                  className="skills__skill-tag"
                  style={{ animationDelay: `${i * 0.04}s` }}
                >
                  <span className="skills__check">✓</span>
                  {skill}
                </span>
              ))}
            </div>

            {active === 'qa' && (
              <div className="skills__highlight">
                <p className="skills__highlight-label">Core specialization</p>
                <p className="skills__highlight-text">
                  My QA toolkit covers manual testing, automation testing,
                  API testing, and structured bug tracking using industry tools.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}