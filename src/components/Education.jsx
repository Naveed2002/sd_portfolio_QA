import React from 'react'
import './Education.css'

const education = [
  {
    degree: 'BSc (Hons) Information Technology',
    field: 'Specializing in Software Engineering',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: '2024 – 2027',
    status: 'In Progress',
    year: 'Third Year',
    highlights: [
      'Software Quality Assurance & Test Automation',
      'Full-Stack Web Development (MERN)',
      'Microservices Architecture',
      'Object-Oriented Programming',
      'Database Management Systems',
    ],
  },
  {
    degree: 'GCE Advanced Level Examinations',
    field: 'Physical Science Stream (3S)',
    institution: 'Southlands College, Galle',
    period: 'Completed',
    status: 'Completed',
    year: 'A/L',
    highlights: [
      'Physics, Chemistry, Mathematics',
      'Analytical & problem-solving foundations',
    ],
  },
  {
    degree: 'Advanced Certificate in English',
    field: 'Advanced Level English Proficiency',
    institution: 'British Way English Academy',
    period: 'Completed',
    status: 'Completed',
    year: 'English',
    highlights: [
      'Advanced written and spoken English',
      'Professional communication skills',
    ],
  },
]

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="section-title">Education</h2>
        <div className="divider" />

        <div className="education__list">
          {education.map((e, i) => (
            <div key={i} className="edu-card">
              <div className="edu-card__left">
                <div className={`edu-card__badge ${e.status === 'In Progress' ? 'edu-card__badge--active' : ''}`}>
                  {e.year}
                </div>
                <div className="edu-card__line" />
              </div>

              <div className="edu-card__right">
                <div className="edu-card__header">
                  <div>
                    <h3 className="edu-card__degree">{e.degree}</h3>
                    <p className="edu-card__field">{e.field}</p>
                    <p className="edu-card__institution">{e.institution}</p>
                  </div>
                  <div className="edu-card__meta">
                    <span className={`edu-card__status ${e.status === 'In Progress' ? 'edu-card__status--active' : ''}`}>
                      {e.status === 'In Progress' && <span className="edu-card__dot" />}
                      {e.status}
                    </span>
                    <span className="edu-card__period">{e.period}</span>
                  </div>
                </div>

                <ul className="edu-card__highlights">
                  {e.highlights.map(h => (
                    <li key={h}>
                      <span>✓</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Reference */}
        
      </div>
    </section>
  )
}
