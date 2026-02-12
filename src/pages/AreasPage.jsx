import PageHero from '../components/PageHero'
import ServiceAreas from '../components/ServiceAreas'
import WhyChooseUs from '../components/WhyChooseUs'
import CTABanner from '../components/CTABanner'
import IMAGES from '../constants/images'

export default function AreasPage() {
  return (
    <>
      <PageHero
        title="Service Areas"
        subtitle="Proudly serving Staffordshire, Cheshire and surrounding areas"
        image={IMAGES.pageHero.areas}
      />
      <ServiceAreas />
      <WhyChooseUs />
      <CTABanner />
    </>
  )
}
