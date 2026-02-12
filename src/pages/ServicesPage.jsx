import PageHero from '../components/PageHero'
import Services from '../components/Services'
import Residential from '../components/Residential'
import Commercial from '../components/Commercial'
import CTABanner from '../components/CTABanner'
import IMAGES from '../constants/images'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive gardening solutions for homes and businesses"
        image={IMAGES.pageHero.services}
      />
      <Services />
      <Residential />
      <Commercial />
      <CTABanner />
    </>
  )
}
