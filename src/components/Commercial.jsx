import IMAGES from '../constants/images'

export default function Commercial() {
  return (
    <section id="commercial" className="split-section split-section--commercial">
      <div className="container">
        <div className="split-section__grid split-section__grid--reverse">
          <div className="split-section__image">
            <img
              src={IMAGES.commercial}
              alt="Commercial grounds maintenance"
              className="split-section__img"
            />
          </div>
          <div className="split-section__content">
            <h2 className="section-title">Commercial Grounds Maintenance</h2>
            <p className="split-section__lead">
              First impressions matter. We keep business premises, offices, and commercial
              properties looking sharp and professional all year round.
            </p>
            <ul className="split-section__list">
              <li>Regular scheduled grounds maintenance</li>
              <li>Flexible contracts to suit your business</li>
              <li>Car park and path maintenance</li>
              <li>Communal area and entrance upkeep</li>
              <li>Seasonal displays and planting</li>
              <li>Fully insured and reliable service</li>
            </ul>
            <a href="tel:+447505990485" className="btn btn--primary">
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
