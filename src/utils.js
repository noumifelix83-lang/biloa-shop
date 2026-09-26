import { useEffect } from 'react';
import { STORE } from './config.js';

// Every photo in public/images has a lighter "-sm" copy (450px for products,
// 800px for lifestyle photos) so phones on slow connections download less.
export const smallImage = (src) => src.replace('.webp', '-sm.webp');

export function imgSet(src, { small = 450, large = 900 } = {}) {
  return { src: smallImage(src), srcSet: `${smallImage(src)} ${small}w, ${src} ${large}w` };
}

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${STORE.shortName} Holistic Care & Wellness` : `${STORE.name} | Herbal Teas, Botanical Oils & Wellness Coaching`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }
  }, [title, description]);
}

// Sends a form either to Formspree (if configured) or opens the visitor's email app.
// Resolves to 'sent' or 'mailto'.
export async function submitForm(subject, fields) {
  if (STORE.formspreeId) {
    const res = await fetch(`https://formspree.io/f/${STORE.formspreeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _subject: subject, ...fields }),
    });
    if (!res.ok) throw new Error('Could not send message');
    return 'sent';
  }
  const body = Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');
  window.location.href = `mailto:${STORE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return 'mailto';
}
