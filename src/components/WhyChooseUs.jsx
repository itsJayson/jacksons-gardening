const features = [
  {
    icon: '\u2B50',
    title: '5-Star Reviews',
    desc: 'Consistently rated 5 stars by our happy customers. Quality you can trust.',
  },
  {
    icon: '\uD83D\uDCB0',
    title: 'Free Quotes',
    desc: 'No obligation quotes with transparent, competitive pricing. No hidden fees.',
  },
  {
    icon: '\uD83D\uDCAA',
    title: 'Experienced Team',
    desc: 'Skilled professionals with years of experience in all aspects of gardening.',
  },
  {
    icon: '\u23F1',
    title: 'Reliable & Punctual',
    desc: 'We show up on time, every time. Dependable service you can count on.',
  },
  {
    icon: '\uD83C\uDFE0',
    title: 'Residential & Commercial',
    desc: 'Expert care for both home gardens and commercial properties.',
  },
  {
    icon: '\uD83E\uDD1D',
    title: 'Personal Service',
    desc: 'A local, friendly service that treats every garden as if it were our own.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <h2 className="section-title section-title--center section-title--white">
          Why Choose Jackson's Gardening?
        </h2>
        <p className="section-subtitle section-subtitle--white">
          We go above and beyond to deliver exceptional results for every client.
        </p>
        <div className="why-us__grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <span className="feature-card__icon">{feature.icon}</span>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
