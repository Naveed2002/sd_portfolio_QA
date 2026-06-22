import React, { useEffect, useState } from 'react'
import './Hero.css'
import cvPdf from '../assets/cv-pdf/Nethmi_Sadeesha_CV 2.pdf'

const roles = [
  'QA Engineer',
  'Test Automation',
  'Software Developer',
  'MERN Stack Dev',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = roles[roleIdx]
    let timeout

    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIdx(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  return (
    <section className="hero" id="hero">
      {/* Ambient grid */}
      <div className="hero__grid" aria-hidden="true" />
      {/* Glow orb */}
      <div className="hero__orb" aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__badge fade-up">
          <span className="hero__badge-dot" />
          Available for internships & opportunities
        </div>

        <h1 className="hero__name fade-up" style={{ animationDelay: '0.1s' }}>
          Nethmi<br />
          <span className="hero__name-accent">Sadeesha</span>
        </h1>

        <p className="hero__role fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="hero__role-prefix">$ role = </span>
          <span className="hero__role-text">"{displayed}</span>
          <span className="hero__cursor">|</span>
          <span className="hero__role-text">"</span>
        </p>

        <p className="hero__bio fade-up" style={{ animationDelay: '0.3s' }}>
          Third-year Software Engineering undergraduate at SLIIT, passionate about
          delivering reliable software through QA, test automation, and full-stack
          development. Based in Colombo, Sri Lanka.
        </p>

        <div className="hero__actions fade-up" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a
            href={cvPdf}
            download="Nethmi_Sadeesha_CV.pdf"
            className="btn btn--ghost"
          >
            Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/nethmi-sadeesha-3a9266399"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="hero__stats fade-up" style={{ animationDelay: '0.5s' }}>
          {[
            { value: '5+', label: 'Projects Built' },
            { value: '7+', label: 'Languages' },
            { value: '2027', label: 'Expected Grad' },
            { value: 'SLIIT', label: 'University' },
          ].map(s => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
