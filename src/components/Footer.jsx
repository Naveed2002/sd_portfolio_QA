import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <a href="#hero" className="footer__logo">
            <span className="footer__logo-check">✓</span>
            nethmi.dev
          </a>
          <p className="footer__tagline">QA Engineer & Software Developer</p>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Nethmi Sadeesha.
        </p>
      </div>
    </footer>
  )
}
