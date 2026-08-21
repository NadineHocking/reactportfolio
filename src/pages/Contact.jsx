import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }
  return (
    <section className="section">
      <div className="wrap contact-grid">
        <div className="contact-info">
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
        <div className="contact-card">
          {submitted ? (
            <p className="state-msg">Thanks, {form.name || 'friend'} — message captured. I'll be in touch.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>

    
  )
}
