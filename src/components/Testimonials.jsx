import IMAGES from '../constants/images'

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Stafford',
    text: "Absolutely fantastic service! Jackson transformed our overgrown garden into a beautiful space. Punctual, professional, and great value. Highly recommend!",
  },
  {
    name: 'David T.',
    location: 'Crewe',
    text: "We use Jackson's Gardening for our office grounds maintenance. Always reliable, always immaculate. The team is friendly and nothing is ever too much trouble.",
  },
  {
    name: 'Emma L.',
    location: 'Stoke-on-Trent',
    text: 'Had our patio and driveway pressure washed - what a difference! Looks brand new. Jackson was prompt, tidy, and very reasonably priced. Will definitely be using again.',
  },
]

function Stars() {
  return (
    <div className="testimonial__stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#ffc107" stroke="#ffc107" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      className="testimonials"
      style={{ backgroundImage: `url(${IMAGES.testimonials})` }}
    >
      <div className="testimonials__overlay" />
      <div className="container testimonials__inner">
        <h2 className="section-title section-title--center">What Our Customers Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - here's what our clients have to say.
        </p>
        <div className="testimonials__grid">
          {reviews.map((review) => (
            <div key={review.name} className="testimonial-card">
              <Stars />
              <p className="testimonial-card__text">"{review.text}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {review.name[0]}
                </div>
                <div>
                  <strong>{review.name}</strong>
                  <span className="testimonial-card__location">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
