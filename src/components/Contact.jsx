import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('nethmisadeesha2002@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__text">
            <p className="section-label">Get in touch</p>
            <h2 className="section-title">Let's work together</h2>
            <div className="divider" />
            <p className="contact__para">
              I'm actively looking for internship opportunities and open to collaborating on
              interesting projects. Whether you have a role in QA, test automation, or full-stack
              development — I'd love to hear from you.
            </p>

            <div className="contact__links">
              <div className="contact__item">
                <span className="contact__item-label">Email</span>
                <div className="contact__email-row">
                  <a href="mailto:nethmisadeesha2002@gmail.com" className="contact__email">
                    nethmisadeesha2002@gmail.com
                  </a>
                  <button className="contact__copy" onClick={copyEmail} title="Copy email">
                    {copied ? '✓ Copied' : '⎘ Copy'}
                  </button>
                </div>
              </div>

              <div className="contact__item">
                <span className="contact__item-label">Phone</span>
                <a href="tel:+94770894978" className="contact__link-value">
                  +94 77 089 4978
                </a>
              </div>

              <div className="contact__item">
                <span className="contact__item-label">Location</span>
                <span className="contact__link-value">Malabe, Colombo, Sri Lanka 🇱🇰</span>
              </div>
            </div>

            <div className="contact__socials">
              <a
                href="https://github.com/NSadeesha"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nethmi-sadeesha-3a9266399"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right decorative panel */}
          <div className="contact__panel">
            <div className="contact__terminal">
              <div className="contact__terminal-header">
                <div className="contact__card-dots">
                  <span style={{background:'#FF5F57'}} />
                  <span style={{background:'#FFBD2E'}} />
                  <span style={{background:'#28C840'}} />
                </div>
                <span>contact.sh</span>
              </div>
              <div className="contact__terminal-body">
                <p><span className="ct-green">$</span> whoami</p>
                <p className="ct-out">Nethmi Sadeesha</p>
                <p><span className="ct-green">$</span> cat status.txt</p>
                <p className="ct-out">✓ Open to internships</p>
                <p className="ct-out">✓ Available for projects</p>
                <p className="ct-out">✓ Based in Sri Lanka</p>
                <p><span className="ct-green">$</span> echo $SKILLS</p>
                <p className="ct-out">QA | MERN | Automation</p>
                <p><span className="ct-green">$</span> <span className="ct-cursor">█</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
