import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { reviews } from '../data/content.js'
import './Reviews.css'

export default function Reviews() {
  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Loved by Our Neighbors"
          text="Rated 4.9 out of 5 by more than 1,200 happy guests across Chicagoland."
        />
        <div className="review-grid">
          {reviews.map((review) => (
            <figure key={review.name} className="review-card">
              <Icon name="quote" size={34} className="review-quote" />
              <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }, (_, i) => (
                  <Icon key={i} name="star" size={16} />
                ))}
              </div>
              <blockquote>
                <p>&ldquo;{review.text}&rdquo;</p>
              </blockquote>
              <figcaption>
                <span className="review-avatar" aria-hidden="true">
                  {review.name.charAt(0)}
                </span>
                <span>
                  <strong>{review.name}</strong>
                  <small>{review.location}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
