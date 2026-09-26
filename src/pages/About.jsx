import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/Icons.jsx';
import { usePageMeta } from '../utils.js';

const CREDENTIALS = [
  'Doctor of Occupational Safety and Health',
  'Certified Nutrition & Wellness Consultant',
  'Holistic Nutritionist',
  'Certified Health & Wellness Coach',
  'Certified Safety Professional',
  'Construction Health and Safety Technician',
];

export default function About() {
  usePageMeta('Our Story', 'Meet Dr. Paola Biloa Njandja, founder of Biloa Holistic Care & Wellness, and discover the meaning behind the name Biloa.');

  return (
    <>
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div>
            <p className="eyebrow">Our story</p>
            <h1>Meet Dr. Paola Biloa Njandja</h1>
            <p className="about-role">Founder of Biloa Holistic Care &amp; Wellness</p>
            <p className="about-lead">
              Welcome — I’m Dr. Paola Biloa Njandja, a Certified Nutrition &amp; Wellness Consultant, Holistic Nutritionist, Certified Health &amp;
              Wellness Coach, Weight Management Specialist, Sports Nutrition Consultant, and the founder of Biloa Holistic Care &amp; Wellness.
            </p>
          </div>
          <div className="about-logo">
            <img src="/images/logo.webp" alt="Biloa Holistic Care & Wellness logo" width="420" height="418" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <p>
            My interest in wellness grew from the connection between my professional education, personal experiences, motherhood, and African
            heritage. I was raised with an appreciation for the ways food, herbs, rest, movement, community, and simple self-care practices can
            become meaningful parts of everyday life.
          </p>
          <p>
            Over time, I also came to recognize that wellness advice can sometimes feel restrictive, overwhelming, or disconnected from the realities
            of people’s lives. I created Biloa to offer a more welcoming approach — one that values education, cultural traditions, personal
            preferences, and practical choices.
          </p>
        </div>
      </section>

      <section className="meaning">
        <div className="container meaning-inner">
          <p className="eyebrow eyebrow-light">The meaning behind Biloa</p>
          <blockquote>
            <span className="meaning-big">Biloa</span> means <em>grass</em>.
          </blockquote>
          <p className="meaning-text">
            To me, grass represents nourishment, resilience, renewal, and connection to the earth. It bends without losing its roots, adapts to
            changing conditions, and returns after difficult seasons. That meaning reflects the spirit of Biloa: creating space for people to grow,
            reconnect with themselves, and develop wellness practices that can evolve with their lives.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-two">
          <div>
            <h2>Why I created Biloa</h2>
            <p>
              Biloa was created to make holistic wellness feel more approachable and relevant to everyday living. Through nutrition education,
              meal-planning support, wellness coaching, and thoughtfully selected products, I want to help individuals bring greater knowledge and
              intention into the choices they make for themselves and their families.
            </p>
            <p>
              Biloa’s herbal teas, body and scalp oils, bath soaks, facial-care products, and wellness tools were inspired by the belief that
              meaningful self-care can begin with simple rituals — a thoughtfully prepared meal, a warm cup of tea, a quiet moment, or time
              intentionally set aside for yourself.
            </p>
          </div>
          <div>
            <h2>What you can expect</h2>
            <p>
              When you work with me, you can expect to be heard, respected, and supported without judgment. I take time to understand your goals,
              preferences, schedule, culture, budget, and the realities that shape your daily life.
            </p>
            <p>
              My role is to provide education, encouragement, accountability, and practical guidance that helps you make informed wellness choices
              with greater confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container credentials">
          <div>
            <p className="eyebrow">Education &amp; credentials</p>
            <h2>Professional background</h2>
            <p className="fine-print">
              My doctorate is in Occupational Safety and Health. I am not presenting myself as a medical doctor, registered dietitian, or licensed
              healthcare provider.
            </p>
          </div>
          <ul className="cred-list">
            {CREDENTIALS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <h2>Let’s begin</h2>
          <p>
            Your wellness story is uniquely yours. Explore Biloa’s services and products and discover practical ways to bring nature, knowledge, and
            intention into your everyday routine.
          </p>
          <div className="hero-ctas center">
            <Link to="/shop" className="btn btn-primary btn-lg">
              Shop wellness products <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg">
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
