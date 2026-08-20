import { useState } from 'react'

export default function Contact() {
  

  return (
    <section className="section">
      <div className="wrap contact-grid">
        <div>
          <span className="eyebrow">get in touch</span>
          <h2>Let's talk about opportunities</h2>
          <p>
            I'm currently open to new opportunities and would love to hear from you. Whether you have a question, a project idea, or just want to connect, feel free to reach out via email or through my social profiles below.
          </p>
          <ul className="footer-links" style={{ marginTop: 20, flexDirection: 'column', gap: 10 }}>
            <li>
              <a href="mailto:nadinehocking@gmail.com">nadinehocking@gmail.com</a>
            </li>
            <li>
              <a href="https://github.com/NadineHocking" target="_blank" rel="noreferrer">
                github.com/NadineHocking
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/nadine-wells" target="_blank" rel="noreferrer">
                linkedin.com/in/nadine-wells
              </a>
            </li>
          </ul>
        </div>

        </div>
    </section>
  )
}
