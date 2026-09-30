import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import Logo from './Logo.jsx'
import { navLinks } from '../data/content.js'
import './Header.css'

const sectionMap = {
  home: 'home',
  featured: 'menu',
  about: 'about',
  menu: 'menu',
  special: 'menu',
  catering: 'catering',
  reviews: 'catering',
  contact: 'contact',
}

export default function Header({ itemCount, onOrder }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = Object.keys(sectionMap)
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(sectionMap[entry.target.id])
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Homemade Kitchen home">
          <Logo />
          <span className="brand-name">
            Homemade <em>Kitchen</em>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <ul id="primary-menu">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? 'is-active' : ''}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn-primary nav-order-mobile"
            onClick={() => {
              closeMenu()
              onOrder()
            }}
          >
            <Icon name="cart" size={18} /> Order Online
          </button>
        </nav>

        <div className="header-actions">
          <button type="button" className="btn btn-primary header-order" onClick={onOrder}>
            <Icon name="cart" size={18} />
            <span>Order Online</span>
            {itemCount > 0 && (
              <span className="cart-badge" aria-label={`${itemCount} items in order`}>
                {itemCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
