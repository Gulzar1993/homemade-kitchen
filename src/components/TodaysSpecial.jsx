import Icon from './Icon.jsx'
import { images, specialDish } from '../data/content.js'
import { formatPrice } from '../utils/format.js'
import './TodaysSpecial.css'

export default function TodaysSpecial({ onAdd }) {
  return (
    <section id="special" className="special" aria-labelledby="special-heading">
      <div className="container special-inner">
        <div className="special-media">
          <img src={images.special} alt="Slow-cooked beef pot roast with vegetables" loading="lazy" width="1100" height="800" />
          <div className="special-price-badge">
            <span>Only</span>
            <strong>{formatPrice(specialDish.price)}</strong>
          </div>
        </div>
        <div className="special-content">
          <p className="eyebrow eyebrow-light">Limited time · While it lasts</p>
          <h2 id="special-heading">Today&rsquo;s Homemade Special</h2>
          <h3>{specialDish.name}</h3>
          <p className="special-desc">{specialDish.description}</p>
          <div className="special-pricing">
            <span className="special-now">{formatPrice(specialDish.price)}</span>
            <span className="special-was">Regularly {formatPrice(specialDish.regularPrice)}</span>
          </div>
          <button
            type="button"
            className="btn btn-light btn-lg"
            onClick={() => onAdd({ ...specialDish, name: `${specialDish.name} (Today's Special)` })}
          >
            Order Today&rsquo;s Special <Icon name="arrow" size={18} />
          </button>
          <p className="special-note">
            <Icon name="clock" size={16} /> Served from 11 AM until sold out
          </p>
        </div>
      </div>
    </section>
  )
}
