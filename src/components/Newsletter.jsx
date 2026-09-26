import { useState } from 'react';
import { submitForm } from '../utils.js';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const how = await submitForm('Newsletter sign-up', { email });
      setStatus(how === 'sent' ? 'done' : 'mailto');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <img src="/images/emblem.png" alt="" width="110" className="newsletter-emblem" />
        <p className="eyebrow">The Biloa Circle</p>
        <h2>Simple rituals, delivered to your inbox</h2>
        <p className="newsletter-lead">Seasonal wellness tips, new product releases and gentle reminders to take time for yourself.</p>
        {status === 'done' || status === 'mailto' ? (
          <p className="form-success">
            {status === 'done' ? 'Thank you for joining — welcome to the Biloa Circle.' : 'Your email app has opened — just press send to join the Biloa Circle.'}
          </p>
        ) : (
          <form className="newsletter-form" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="nl-email">
              Email address
            </label>
            <input id="nl-email" type="email" required placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            <button className="btn btn-gold" disabled={status === 'sending'}>
              {status === 'sending' ? 'Joining…' : 'Join'}
            </button>
          </form>
        )}
        {status === 'error' && <p className="form-error">Something went wrong. Please try again.</p>}
      </div>
    </section>
  );
}
