import PageHero from '../components/PageHero'
import Gallery from '../components/Gallery'
import CTABanner from '../components/CTABanner'
import IMAGES from '../constants/images'

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Browse our portfolio of garden transformations"
        image={IMAGES.pageHero.gallery}
      />
      <Gallery />
      <CTABanner />
    </>
  )
}
