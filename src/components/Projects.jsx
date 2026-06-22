import React, { useState } from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    name: 'MEDIGO',
    subtitle: 'Healthcare Management Microservices',
    description:
      'Developed the Doctor Management Service of a healthcare platform built on microservices architecture. Performed API testing using Postman, validated system functionality, and collaborated through GitHub following Agile practices.',
    tags: ['MERN Stack', 'Docker', 'Kubernetes', 'Nginx', 'JWT', 'Postman'],
    qa: ['API Testing', 'Functional Validation', 'Debugging'],
    color: '#10B981',
    link: 'https://github.com/Senith001/medigo',
  },
  {
    id: 2,
    name: 'EnergyMate',
    subtitle: 'Smart Household Energy Management System',
    description:
      'Built and tested Household Management, Feedback, and Support Ticket modules. Implemented RESTful APIs, CRUD operations, and JWT authentication. Conducted unit testing, frontend testing, and functionality validation throughout.',
    tags: ['MERN Stack', 'JWT', 'Postman', 'GitHub'],
    qa: ['Unit Testing', 'Frontend Testing', 'API Testing', 'Functionality Validation'],
    color: '#F59E0B',
    link: 'https://github.com/Senith001/energymate',
  },
  {
    id: 3,
    name: 'DriveSchool ITP',
    subtitle: 'Driving School Management System',
    description:
      'Full-stack system for managing student registrations, lesson scheduling, vehicle assignments, and instructor management. Built with secure authentication and responsive UI, with thorough functionality testing and validation.',
    tags: ['MERN Stack', 'MongoDB', 'React', 'Node.js'],
    qa: ['Functionality Testing', 'Validation'],
    color: '#7C3AED',
    link: 'https://github.com/ravindu-sliit/RiyaGuru',
  },
  {
    id: 4,
    name: 'InvenTrack',
    subtitle: 'Inventory Management System (OOP)',
    description:
      'Web-based inventory system to manage stock and products efficiently. Features adding, updating, deleting items; quantity tracking; price management; and search/filter operations — built with a user-friendly interface.',
    tags: ['Java', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    qa: ['Manual Testing', 'Validation'],
    color: '#EC4899',
  },
  {
    id: 5,
    name: 'REST Assured API Testing Framework',
    subtitle: 'Java API Automation Framework',
    description:
      'Developed a REST Assured API testing framework to automate RESTful web service validation. Implemented GET, POST, PUT, and DELETE test scenarios with path parameter, query parameter, and response body validation, all executing successfully through Maven with zero failures.',
    tags: ['Java', 'REST Assured', 'TestNG', 'Maven', 'GitHub'],
    qa: [
      'API Automation',
      'Request Validation',
      'Response Validation',
      'TestNG Assertions',
    ],
    color: '#38BDF8',
    link: 'https://github.com/NSadeesha/RESTAssuredDemo',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <p className="section-label">Selected Work</p>

        <h2 className="section-title">Projects I've built</h2>

        <p className="section-subtitle">
          Academic and team projects focused on full-stack development,
          system design, and QA-driven engineering practices.
        </p>

        <div className="divider" />

        <div className="projects__grid">
          {projects.map((p) => (
            <article
              key={p.id}
              className={`project-card ${hovered === p.id ? 'project-card--hovered' : ''}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ '--project-color': p.color }}
            >
              {/* TOP SECTION */}
              <div className="project-card__top">
                <div
                  className="project-card__mark"
                  aria-hidden="true"
                />

                <div className="project-card__number">
                  {String(p.id).padStart(2, '0')}
                </div>
              </div>

              <h3 className="project-card__name">{p.name}</h3>

              <p className="project-card__subtitle">{p.subtitle}</p>

              <p className="project-card__desc">{p.description}</p>

              {/* QA SECTION */}
              {p.qa.length > 0 && (
                <div className="project-card__qa">
                  <span className="project-card__qa-label">
                    QA applied
                  </span>

                  <div className="project-card__qa-tags">
                    {p.qa.map(q => (
                      <span key={q} className="project-card__qa-tag">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* TAGS */}
              <div className="project-card__tags">
                {p.tags.map(t => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                  aria-label={`View ${p.name} project on GitHub`}
                >
                  View Project <span aria-hidden="true">↗</span>
                </a>
              )}

              <div className="project-card__accent" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
