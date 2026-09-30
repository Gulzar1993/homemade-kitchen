import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { featuredDishes } from '../data/content.js'
import { formatPrice } from '../utils/format.js'
import './FeaturedDishes.css'

export default function FeaturedDishes({ onAdd }) {
  return (
    <section id="featured" className="section featured">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Dishes"
          title="Comfort Food, Done Right"
          text="Our most-loved plates - hearty, honest and cooked fresh in our kitchen every single day."
        />
        <div className="dish-grid">
          {featuredDishes.map((dish) => (
            <article key={dish.id} className="dish-card">
              <div className="dish-media">
                <img src={dish.image} alt={dish.name} loading="lazy" width="700" height="500" />
                {dish.tag && <span className="dish-tag">{dish.tag}</span>}
              </div>
              <div className="dish-body">
                <div className="dish-title-row">
                  <h3>{dish.name}</h3>
                  <span className="dish-price">{formatPrice(dish.price)}</span>
                </div>
                <p>{dish.description}</p>
                <button type="button" className="btn btn-outline btn-block" onClick={() => onAdd(dish)}>
                  <Icon name="plus" size={18} /> Order
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
