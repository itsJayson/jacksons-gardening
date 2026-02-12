const areas = [
  { name: 'Staffordshire', places: ['Stafford', 'Stoke-on-Trent', 'Burton upon Trent', 'Lichfield', 'Tamworth', 'Newcastle-under-Lyme'] },
  { name: 'Cheshire', places: ['Crewe', 'Nantwich', 'Congleton', 'Sandbach', 'Middlewich', 'Alsager'] },
  { name: 'Surrounding Areas', places: ['Shropshire', 'Derbyshire', 'South Manchester', 'Wolverhampton', 'Telford', 'And more...'] },
]

export default function ServiceAreas() {
  return (
    <section id="areas" className="areas">
      <div className="container">
        <h2 className="section-title section-title--center">Service Areas</h2>
        <p className="section-subtitle">
          We proudly serve homes and businesses across Staffordshire, Cheshire and the
          surrounding areas. Not sure if we cover your area? Give us a call!
        </p>
        <div className="areas__grid">
          {areas.map((area) => (
            <div key={area.name} className="area-card">
              <div className="area-card__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="area-card__title">{area.name}</h3>
              <ul className="area-card__list">
                {area.places.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="areas__cta">
          <a href="tel:+447505990485" className="btn btn--outline">
            Call to Check Your Area
          </a>
        </div>
      </div>
    </section>
  )
}
