import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { business } from '../data/content.js'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading
          eyebrow="Visit Us"
          title="Come Hungry, Leave Happy"
          text="Dine in, pick up, or stop by to say hello - there’s always something fresh coming out of the oven."
        />
        <div className="contact-grid">
          <div className="contact-card">
            <h3>{business.name}</h3>
            <ul className="contact-list">
              <li>
                <span className="contact-icon">
                  <Icon name="pin" size={20} />
                </span>
                <div>
                  <strong>Address</strong>
                  <address>
                    {business.street}
                    <br />
                    {business.city}
                  </address>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <Icon name="phone" size={20} />
                </span>
                <div>
                  <strong>Phone</strong>
                  <a href={business.phoneHref}>{business.phone}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <Icon name="mail" size={20} />
                </span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <Icon name="clock" size={20} />
                </span>
                <div>
                  <strong>Hours</strong>
                  <dl className="hours">
                    {business.hours.map((row) => (
                      <div key={row.days}>
                        <dt>{row.days}</dt>
                        <dd>{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            </ul>
            <div className="contact-actions">
              <a className="btn btn-primary" href={business.directionsUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="pin" size={18} /> Get Directions
              </a>
              <a className="btn btn-outline" href={business.phoneHref}>
                <Icon name="phone" size={18} /> Call Us
              </a>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              title="Map showing Homemade Kitchen at 123 Main Street, Chicago"
              src="https://maps.google.com/maps?q=123%20Main%20Street%2C%20Chicago%2C%20IL&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
