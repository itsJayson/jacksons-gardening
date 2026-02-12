import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__logo">
              <span>&#127793;</span> Jackson's Gardening Services
            </h3>
            <p>
              Professional gardening services across Staffordshire, Cheshire and surrounding
              areas. Call today for your free quote.
            </p>
          </div>

          <div className="footer__links">
            <h4>Quick Links</h4>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/areas">Areas</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer__contact">
            <h4>Contact Us</h4>
            <a href="tel:+447505990485">07505 990485</a>
            <a href="mailto:zackkjackson99@gmail.com">zackkjackson99@gmail.com</a>
            <a href="https://wa.me/447505990485" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Jackson's Gardening Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
