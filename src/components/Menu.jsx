import { useState } from 'react'
import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { menuCategories } from '../data/content.js'
import { formatPrice } from '../utils/format.js'
import './Menu.css'

const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-')

export default function Menu({ onAdd }) {
  const [activeId, setActiveId] = useState(menuCategories[0].id)
  const category = menuCategories.find((c) => c.id === activeId)

  return (
    <section id="menu" className="section menu">
      <div className="container">
        <SectionHeading
          eyebrow="Our Menu"
          title="Something for Every Appetite"
          text="From starters to sweet endings - all made from scratch in our kitchen."
        />

        <div className="menu-tabs" role="tablist" aria-label="Menu categories">
          {menuCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={c.id === activeId}
              aria-controls={`panel-${c.id}`}
              className={`menu-tab ${c.id === activeId ? 'is-active' : ''}`}
              onClick={() => setActiveId(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div
          className="menu-panel"
          role="tabpanel"
          id={`panel-${category.id}`}
          aria-labelledby={`tab-${category.id}`}
          key={category.id}
        >
          <div className="menu-feature">
            <img src={category.image} alt={category.label} loading="lazy" width="700" height="900" />
            <div className="menu-feature-caption">
              <h3>{category.label}</h3>
              <p>{category.note}</p>
            </div>
          </div>
          <ul className="menu-list">
            {category.items.map((item) => (
              <li key={item.name} className="menu-item">
                <div className="menu-item-text">
                  <div className="menu-item-head">
                    <h4>{item.name}</h4>
                    <span className="menu-dots" aria-hidden="true" />
                    <span className="menu-price">{formatPrice(item.price)}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
                <button
                  type="button"
                  className="icon-btn"
                  aria-label={`Add ${item.name} to order`}
                  onClick={() => onAdd({ id: `${category.id}-${slug(item.name)}`, ...item })}
                >
                  <Icon name="plus" size={18} />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <p className="menu-footnote">
          Please let us know about any allergies. Gluten-free and vegetarian options available on
          request.
        </p>
      </div>
    </section>
  )
}
