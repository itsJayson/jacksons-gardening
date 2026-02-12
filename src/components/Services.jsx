import IMAGES from '../constants/images'

const services = [
  {
    image: IMAGES.services.lawn,
    title: 'Lawn Mowing & Maintenance',
    desc: 'Regular mowing, edging, feeding, and lawn treatments to keep your grass lush and healthy all year round.',
  },
  {
    image: IMAGES.services.pressure,
    title: 'Hedge Trimming & Topiary',
    desc: 'Expert hedge cutting and shaping to maintain neat borders and stunning topiary features.',
  },
  {
    image: IMAGES.services.clearance,
    title: 'Garden Clearance & Cleanup',
    desc: 'Complete garden waste removal, overgrown area clearing, and thorough seasonal cleanups.',
  },
  {
    image: IMAGES.services.planting,
    title: 'Seasonal Planting',
    desc: 'Thoughtful planting designs using seasonal flowers, shrubs, and plants for year-round colour.',
  },
  {
    image: IMAGES.services.lawn,
    title: 'Landscaping Services',
    desc: 'Full landscaping solutions including patios, pathways, turf laying, and complete garden redesigns.',
  },
  {
    image: IMAGES.services.pressure,
    title: 'Pressure Washing',
    desc: 'Professional pressure washing for patios, driveways, decking, and exterior surfaces to restore their original look.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title section-title--center">Our Services</h2>
        <p className="section-subtitle">
          From routine lawn care to full garden transformations, we offer a comprehensive
          range of professional gardening services.
        </p>
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-card__image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="services__cta">
          <a href="tel:+447505990485" className="btn btn--primary">
            Get a Free Quote Today
          </a>
        </div>
      </div>
    </section>
  )
}
