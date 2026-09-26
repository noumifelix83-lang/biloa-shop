import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MailIcon, PinIcon } from '../components/Icons.jsx';
import { STORE } from '../config.js';
import { SERVICES } from '../data/catalog.js';
import { submitForm, usePageMeta } from '../utils.js';

const TOPICS = ['A product question', 'An order I placed', ...SERVICES.map((s) => s.name), 'Wholesale or partnerships', 'Something else'];

export default function Contact() {
  usePageMeta('Contact', 'Get in touch with Biloa Holistic Care & Wellness about products, orders or wellness coaching.');
  const [params] = useSearchParams();
  const initialTopic = TOPICS.includes(params.get('topic')) ? params.get('topic') : TOPICS[0];
  const [form, setForm] = useState({ name: '', email: '', topic: initialTopic, message: '' });
  const [status, setStatus] = useState('idle');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const how = await submitForm(`Website message: ${form.topic}`, {
        Name: form.name,
        Email: form.email,
        Topic: form.topic,
        Message: form.message,
      });
      setStatus(how);
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span aria-current="page">Contact</span>
          </nav>
          <h1>We’d love to hear from you</h1>
          <p>Questions about a product, an order or coaching? Send a note and we’ll reply as soon as we can.</p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container contact-grid">
          <div className="panel">
            {status === 'sent' || status === 'mailto' ? (
              <div className="form-done">
                <h2>{status === 'sent' ? 'Message sent — thank you!' : 'Almost there'}</h2>
                <p>
                  {status === 'sent'
                    ? 'We’ll get back to you by email shortly.'
                    : 'Your email app opened with your message ready. Just press send and we’ll reply shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="contact-form">
                <div className="field-row">
                  <label className="field">
                    <span>Name</span>
                    <input required value={form.name} onChange={set('name')} autoComplete="name" />
                  </label>
                  <label className="field">
                    <span>Email</span>
                    <input required type="email" value={form.email} onChange={set('email')} autoComplete="email" />
                  </label>
                </div>
                <label className="field">
                  <span>I’m asking about</span>
                  <span className="select-wrap select-full">
                    <select value={form.topic} onChange={set('topic')}>
                      {TOPICS.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </span>
                </label>
                <label className="field">
                  <span>Message</span>
                  <textarea required rows={6} value={form.message} onChange={set('message')} />
                </label>
                <button className="btn btn-primary btn-lg" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                {status === 'error' && <p className="form-error">Something went wrong. Please email us directly at {STORE.email}.</p>}
              </form>
            )}
          </div>
          <aside className="contact-aside">
            <div className="contact-item">
              <MailIcon />
              <div>
                <h3>Email</h3>
                <a href={`mailto:${STORE.email}`}>{STORE.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <PinIcon />
              <div>
                <h3>Based in</h3>
                <p>{STORE.location}, USA</p>
                <p className="muted">Shipping across the US and worldwide</p>
              </div>
            </div>
            <div className="panel panel-soft">
              <h3>Looking for quick answers?</h3>
              <p>
                Shipping times, returns and product care are covered in our <Link to="/faq">FAQ</Link>.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
