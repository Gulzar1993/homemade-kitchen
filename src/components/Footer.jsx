import Icon from './Icon.jsx'
import Logo from './Logo.jsx'
import { business } from '../data/content.js'
import './Footer.css'

const quickLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#catering', label: 'Catering' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { name: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
  { name: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/' },
  { name: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <Logo />
            <span className="brand-name">
              Homemade <em>Kitchen</em>
            </span>
          </a>
          <p>
            Fresh homemade meals prepared daily using simple ingredients and family-inspired
            recipes. Made from scratch, served with love.
          </p>
          <div className="socials">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Homemade Kitchen on ${social.label}`}
              >
                <Icon name={social.name} size={20} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3>Visit</h3>
          <address>
            {business.street}
            <br />
            {business.city}
          </address>
          <a href={business.phoneHref}>{business.phone}</a>
        </div>

        <div>
          <h3>Hours</h3>
          <ul>
            {business.hours.map((row) => (
              <li key={row.days}>
                <span>{row.days}</span>
                <br />
                {row.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; 2026 Homemade Kitchen. All rights reserved.</p>
        <p>Made from scratch in Chicago, IL.</p>
      </div>
    </footer>
  )
}
