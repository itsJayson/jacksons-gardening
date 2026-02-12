export default function PageHero({ title, subtitle, image }) {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="page-hero__overlay" />
      <div className="page-hero__content">
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}
