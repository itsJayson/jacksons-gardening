import IMAGES from '../constants/images'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__image">
            <img
              src={IMAGES.about}
              alt="Professional gardener at work"
              className="about__img"
            />
          </div>
          <div className="about__text">
            <h2 className="section-title">Welcome to Jackson's Gardening Services</h2>
            <p className="about__lead">
              We are a professional gardening company dedicated to creating and maintaining
              beautiful outdoor spaces for homes and businesses across Staffordshire, Cheshire
              and the surrounding areas.
            </p>
            <p>
              Whether you need regular lawn maintenance, a complete garden overhaul, or reliable
              commercial grounds care, our experienced team delivers outstanding results every time.
              We take pride in our 5-star reputation and the lasting relationships we build with
              our clients.
            </p>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">5&#11088;</span>
                <span className="about__stat-label">Rated Service</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">100%</span>
                <span className="about__stat-label">Satisfaction</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">Free</span>
                <span className="about__stat-label">Quotes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
