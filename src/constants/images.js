// Centralized Unsplash image URLs for the entire site
const IMAGES = {
  // Hero
  hero: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=80',

  // About
  about: '../../public/main.jpg',

  // Services cards
  services: {
    lawn: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=600&q=80',
    hedge: 'https://images.unsplash.com/photo-1558635924-b60e7d0a1086?auto=format&fit=crop&w=600&q=80',
    clearance: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
    planting: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80',
    landscaping: 'https://images.unsplash.com/photo-1598902108854-d1446236c4fe?auto=format&fit=crop&w=600&q=80',
    pressure: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=600&q=80',
  },

  // Residential & Commercial
  residential: '../../public/residential.jpg',
  commercial: '../../public/commercial.jpg',

  // Gallery
  gallery: [
    { src: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80', label: 'Lawn Transformation', category: 'Lawns' },
    { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80', label: 'Hedge Shaping', category: 'Hedges' },
    { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80', label: 'Garden Clearance', category: 'Clearance' },
    { src: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80', label: 'Patio Pressure Wash', category: 'Pressure Washing' },
    { src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80', label: 'Seasonal Planting', category: 'Planting' },
    { src: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80', label: 'Full Garden Makeover', category: 'Landscaping' },
    { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80', label: 'Garden Design', category: 'Landscaping' },
    { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80', label: 'Border Planting', category: 'Planting' },
    { src: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80', label: 'Residential Garden', category: 'Lawns' },
  ],

  // Testimonials background
  testimonials: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=80',

  // Page hero backgrounds
  pageHero: {
    services: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=80',
    gallery: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=80',
    areas: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=80',
    contact: 'https://images.unsplash.com/photo-1598902108854-d1446236c4fe?auto=format&fit=crop&w=1920&q=80',
  },
}

export default IMAGES
