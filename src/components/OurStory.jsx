import Icon from './Icon.jsx'
import { images } from '../data/content.js'
import './OurStory.css'

export default function OurStory() {
  return (
    <section id="about" className="section story">
      <div className="container story-inner">
        <div className="story-media">
          <img
            className="story-main"
            src={images.story}
            alt="Family cooking together in a bright home kitchen"
            loading="lazy"
            width="1100"
            height="800"
          />
          <img
            className="story-detail"
            src={images.storyDetail}
            alt="Fresh vegetables and eggs on a wooden cutting board"
            loading="lazy"
            width="600"
            height="450"
          />
          <div className="story-since">
            <strong>Since 2012</strong>
            <span>Family owned &amp; operated</span>
          </div>
        </div>
        <div className="story-content">
          <p className="eyebrow">Our Story</p>
          <h2>Food That Feels Like Home</h2>
          <p>
            Homemade Kitchen started with a simple idea: everyone deserves a meal that tastes like
            it came from their own family table. Every morning our cooks arrive early to roast,
            braise, bake and simmer - preparing fresh meals from scratch with quality ingredients.
          </p>
          <p>
            Our recipes are inspired by traditional family cooking - the pot roasts, lasagnas and
            chicken dinners our grandparents made for Sunday supper. No shortcuts, no heat-and-serve.
            Just real food, made with care and served with love.
          </p>
          <ul className="story-list">
            <li>
              <Icon name="check" size={18} /> Locally sourced produce and meats
            </li>
            <li>
              <Icon name="check" size={18} /> Breads, sauces and desserts baked in-house
            </li>
            <li>
              <Icon name="check" size={18} /> Small batches cooked fresh throughout the day
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
