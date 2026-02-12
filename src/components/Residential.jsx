import IMAGES from '../constants/images'

export default function Residential() {
  return (
    <section id="residential" className="split-section split-section--residential">
      <div className="container">
        <div className="split-section__grid">
          <div className="split-section__image">
            <img
              src={IMAGES.residential}
              alt="Beautiful residential garden"
              className="split-section__img"
            />
          </div>
          <div className="split-section__content">
            <h2 className="section-title">Residential Garden Care</h2>
            <p className="split-section__lead">
              Your garden is an extension of your home. We help homeowners across Staffordshire
              and Cheshire create outdoor spaces they love spending time in.
            </p>
            <ul className="split-section__list">
              <li>Regular lawn mowing and treatment programmes</li>
              <li>Seasonal planting and flower bed maintenance</li>
              <li>Hedge trimming and border upkeep</li>
              <li>Garden clearance and waste removal</li>
              <li>Patio and driveway pressure washing</li>
              <li>One-off garden makeovers</li>
            </ul>
            <a href="tel:+447505990485" className="btn btn--primary">
              Get Your Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
