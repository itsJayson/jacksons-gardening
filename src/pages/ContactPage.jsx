import PageHero from '../components/PageHero'
import Contact from '../components/Contact'
import IMAGES from '../constants/images'

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Contact us today for a free, no-obligation quote"
        image={IMAGES.pageHero.contact}
      />
      <Contact />
    </>
  )
}
