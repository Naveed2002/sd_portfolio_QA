import React, { useEffect, useState } from 'react'
import { useScrollReveal, useMouseParallax } from './ScrollAnimations'
import './Hero.css'

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
  const { ref: scrollRef, isVisible } = useScrollReveal()
  const { ref: parallaxRef, offset } = useMouseParallax()

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
    <section className="hero" id="hero" ref={scrollRef}>
      {/* Animated grid background */}
      <div className="hero__grid fade-up" aria-hidden="true" />
      
      {/* Floating orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      <div className="hero__inner container" ref={parallaxRef} style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
        <div className="hero__badge fade-up stagger-1">
          <span className="hero__badge-dot" />
          <span className="gradient-text">Available for opportunities</span>
        </div>

        <div className="hero__title fade-up stagger-2">
          <h1>
            Build, Test & Deploy
            <br />
            <span className="gradient-text">with Excellence</span>
          </h1>
        </div>

        <p className="hero__subtitle fade-up stagger-3">
          QA Engineer & Full-Stack Developer crafting robust solutions through automated testing & modern web technologies
        </p>

        <div className="hero__roles fade-up stagger-4">
          <span className="hero__role-label">Currently:</span>
          <div className="hero__role-display">
            <span className="gradient-text hero__role-text">{displayed}</span>
            <span className="hero__cursor" />
          </div>
        </div>

        <div className="hero__cta fade-up stagger-5">
          <a href="#projects" className="btn btn--primary hover-lift hover-glow">
            View My Work
          </a>
          <a href="#contact" className="btn btn--secondary hover-lift">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll fade-up stagger-5">
        <span>Scroll to explore</span>
        <div className="scroll-indicator">
          <div className="scroll-indicator__wheel" />
        </div>
      </div>
    </section>
  )
}
