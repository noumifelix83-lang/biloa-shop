// ─────────────────────────────────────────────────────────────
//  Store settings — edit these to match your business.
//  Values marked TODO still need your real information.
// ─────────────────────────────────────────────────────────────

export const STORE = {
  name: 'Biloa Holistic Care & Wellness',
  shortName: 'Biloa',
  tagline: 'Rooted in nature. Grown with intention.',
  location: 'Pasadena, Maryland',
  email: 'hello@biloaholisticcare.com', // TODO: replace with your real email
  phone: '', // optional, e.g. '(410) 555-0123'
  social: {
    instagram: '', // e.g. 'https://instagram.com/biloawellness'
    facebook: '',
    tiktok: '',
  },
  // Optional: create a free form at https://formspree.io and paste its ID here
  // (or set VITE_FORMSPREE_ID in .env). Without it, the contact form opens the
  // visitor's email app instead.
  formspreeId: import.meta.env?.VITE_FORMSPREE_ID || '',
};
