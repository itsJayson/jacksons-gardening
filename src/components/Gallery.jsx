import { useState } from 'react'
import IMAGES from '../constants/images'

const categories = ['All', 'Lawns', 'Hedges', 'Planting', 'Landscaping', 'Clearance', 'Pressure Washing']

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? IMAGES.gallery
    : IMAGES.gallery.filter((item) => item.category === activeFilter)

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title section-title--center">Our Work</h2>
        <p className="section-subtitle">
          Take a look at some of our recent projects across Staffordshire and Cheshire.
        </p>
        <div className="gallery__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery__filter-btn${activeFilter === cat ? ' gallery__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="gallery__grid">
          {filtered.map((item, i) => (
            <div key={`${item.label}-${i}`} className="gallery__item">
              <img src={item.src} alt={item.label} />
              <div className="gallery__overlay">
                <span className="gallery__label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
