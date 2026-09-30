import Icon from './Icon.jsx'
import { images } from '../data/content.js'
import { scrollToSection } from '../utils/format.js'
import './Hero.css'

export default function Hero({ onOrder }) {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${images.hero})` }} aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-badge">
            <Icon name="leaf" size={16} /> Homemade Kitchen · Chicago, IL
          </p>
          <h1>
            Made From Scratch.
            <br />
            <span>Served With Love.</span>
          </h1>
          <p className="hero-sub">
            Fresh homemade meals prepared daily using simple ingredients and family-inspired
            recipes.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary btn-lg" onClick={() => scrollToSection('menu')}>
              View Our Menu
            </button>
            <button type="button" className="btn btn-light btn-lg" onClick={onOrder}>
              Order Now <Icon name="arrow" size={18} />
            </button>
          </div>
          <ul className="hero-stats">
            <li>
              <strong>25+</strong>
              <span>Family recipes</span>
            </li>
            <li>
              <strong>4.9★</strong>
              <span>1,200+ reviews</span>
            </li>
            <li>
              <strong>Daily</strong>
              <span>Cooked fresh</span>
            </li>
          </ul>
        </div>

        <aside className="hero-card" aria-label="Open hours">
          <img src={images.heroSide} alt="Golden roast chicken in a cast iron pan" width="700" height="520" />
          <div className="hero-card-body">
            <span className="status-dot" aria-hidden="true" /> Open today
            <p>Mon–Fri 11 AM – 9 PM · Sat–Sun 10 AM – 10 PM</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
