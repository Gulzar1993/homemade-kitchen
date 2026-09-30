import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { features } from '../data/content.js'
import './WhyChooseUs.css'

export default function WhyChooseUs() {
  return (
    <section className="section why" aria-labelledby="why-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<span id="why-heading">The Homemade Difference</span>}
          text="Four promises we keep with every plate that leaves our kitchen."
        />
        <div className="why-grid">
          {features.map((feature, index) => (
            <article key={feature.title} className="why-card">
              <span className="why-number" aria-hidden="true">
                0{index + 1}
              </span>
              <div className="why-icon">
                <Icon name={feature.icon} size={28} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
