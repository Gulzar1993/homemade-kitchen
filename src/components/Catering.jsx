import { useState } from 'react'
import Icon from './Icon.jsx'
import { cateringEvents, images } from '../data/content.js'
import './Catering.css'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  date: '',
  guests: '',
  message: '',
}

const validate = (form) => {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Please enter a valid email.'
  if (!form.eventType) errors.eventType = 'Please choose an event type.'
  if (!form.date) errors.date = 'Please choose a date.'
  if (!form.guests || Number(form.guests) < 10) errors.guests = 'Catering starts at 10 guests.'
  return errors
}

export default function Catering() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSubmitted(true)
  }

  const fieldProps = (name) => ({
    id: `catering-${name}`,
    name,
    value: form[name],
    onChange: handleChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `catering-${name}-error` : undefined,
  })

  const errorFor = (name) =>
    errors[name] && (
      <span className="field-error" id={`catering-${name}-error`}>
        {errors[name]}
      </span>
    )

  return (
    <section id="catering" className="section catering">
      <div className="container catering-inner">
        <div className="catering-content">
          <p className="eyebrow">Catering</p>
          <h2>Let Us Cook For Your Next Event</h2>
          <p className="section-text">
            From intimate family dinners to office lunches for a hundred, we bring the same
            homemade flavor to your table. Hot buffets, family-style platters, boxed lunches and
            dessert trays - delivered and set up with care.
          </p>
          <div className="catering-events">
            {cateringEvents.map((event) => (
              <div key={event.title} className="catering-event">
                <span className="catering-icon">
                  <Icon name={event.icon} size={22} />
                </span>
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.text}</p>
                </div>
              </div>
            ))}
          </div>
          <img
            className="catering-image"
            src={images.catering}
            alt="Catering buffet with warm dishes"
            loading="lazy"
            width="1100"
            height="700"
          />
        </div>

        <div className="catering-form-card">
          {submitted ? (
            <div className="form-success" role="status">
              <span className="success-icon">
                <Icon name="check" size={28} strokeWidth={2.4} />
              </span>
              <h3>Thank you, {form.name.split(' ')[0]}!</h3>
              <p>
                We&rsquo;ve received your catering request for {form.guests} guests on{' '}
                {new Date(`${form.date}T12:00:00`).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
                . Our catering team will reach out within one business day.
              </p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  setForm(initialForm)
                  setSubmitted(false)
                }}
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3>Request a Catering Quote</h3>
              <p className="form-intro">Tell us about your event and we&rsquo;ll build a menu around it.</p>
              <div className="form-grid">
                <label className="field field-full" htmlFor="catering-name">
                  <span>Full name *</span>
                  <input type="text" autoComplete="name" {...fieldProps('name')} />
                  {errorFor('name')}
                </label>
                <label className="field" htmlFor="catering-email">
                  <span>Email *</span>
                  <input type="email" autoComplete="email" {...fieldProps('email')} />
                  {errorFor('email')}
                </label>
                <label className="field" htmlFor="catering-phone">
                  <span>Phone</span>
                  <input type="tel" autoComplete="tel" {...fieldProps('phone')} />
                </label>
                <label className="field" htmlFor="catering-eventType">
                  <span>Event type *</span>
                  <select {...fieldProps('eventType')}>
                    <option value="">Select an event</option>
                    {cateringEvents.map((event) => (
                      <option key={event.title} value={event.title}>
                        {event.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                  {errorFor('eventType')}
                </label>
                <label className="field" htmlFor="catering-date">
                  <span>Event date *</span>
                  <input type="date" min={today} {...fieldProps('date')} />
                  {errorFor('date')}
                </label>
                <label className="field field-full" htmlFor="catering-guests">
                  <span>Number of guests *</span>
                  <input type="number" min="10" step="1" inputMode="numeric" {...fieldProps('guests')} />
                  {errorFor('guests')}
                </label>
                <label className="field field-full" htmlFor="catering-message">
                  <span>Tell us more</span>
                  <textarea rows="4" placeholder="Favorite dishes, dietary needs, delivery address..." {...fieldProps('message')} />
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block">
                Request Catering
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
