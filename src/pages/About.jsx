import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from '../components/Icons.jsx';
import { usePageMeta } from '../utils.js';

const CREDENTIALS = [
  'Doctor of Occupational Safety and Health',
  'Certified Nutrition & Wellness Consultant',
  'Holistic Nutritionist',
  'Certified Health & Wellness Coach',
  'Certified Weight Management Specialist',
  'Certified Sports Nutrition Consultant',
  'Certified Safety Professional',
  'Construction Health and Safety Technician',
];

const SECTIONS = [
  { id: 'journey', label: 'My journey' },
  { id: 'why', label: 'Why Biloa' },
  { id: 'approach', label: 'Our approach' },
  { id: 'values', label: 'Our values' },
  { id: 'begin', label: 'Begin' },
];

const SMALL_STEPS = [
  'Adding a vegetable to a familiar meal',
  'Trying a new whole grain',
  'Drinking more water',
  'Preparing food at home more often',
  'Improving sleep habits',
  'Introducing movement that fits your abilities',
];

const VALUES = [
  {
    name: 'Commitment',
    text: [
      'We believe lasting wellness begins with commitment — not perfection. We are committed to offering respectful, practical, and consistent support while helping each individual remain actively involved in the pace and direction of their journey.',
    ],
  },
  {
    name: 'Contribution',
    text: [
      'We contribute meaningful education, encouragement, products, and resources that help individuals and families make more informed wellness choices. We believe small, positive actions can contribute to meaningful long-term change.',
    ],
  },
  {
    name: 'Expertise',
    text: [
      'Our work is guided by professional education, continuing development, lived experience, and respect for cultural wellness traditions. We help individuals understand the appropriate boundaries of nutrition, wellness coaching, and physical activity, including when support from a licensed medical, dietary, or mental-health professional may be needed.',
      'We will never shy away from collaborating with your healthcare professionals. With your permission, we welcome the opportunity to work alongside your physician, licensed dietitian, mental-health provider, or other qualified healthcare professional. This collaborative approach helps us better understand your needs, remain within the appropriate scope of our services, and ensure that your wellness goals complement — not conflict with — your professional care.',
    ],
  },
  {
    name: 'Excellence',
    text: [
      'We strive for excellence in the quality of our services, educational resources, products, communication, and client experience. Every offering is developed with care, purpose, and attention to the individuals and families it is intended to serve.',
    ],
  },
  {
    name: 'Impact',
    text: [
      'We measure impact through meaningful and observable changes in everyday life — greater confidence, deeper self-awareness, more balanced routines, increased appreciation for nourishing choices, and a stronger commitment to personal well-being.',
      'For us, impact is not defined by how quickly someone changes. It is reflected in whether those changes are realistic, supportive, and sustainable.',
    ],
  },
  {
    name: 'Excitement',
    text: [
      'We believe wellness can be joyful, creative, and inspiring. Discovering nourishing foods, allowing your palate to explore new flavors, developing a routine that feels good, enjoying a cup of herbal tea, or creating space to rest can bring excitement and renewed appreciation to everyday living.',
    ],
  },
];

export default function About() {
  usePageMeta(
    'Our Story',
    'Meet Dr. Paola Biloa Njandja, founder of Biloa Holistic Care & Wellness — her journey, our mission, vision and values, and our approach to holistic health.',
  );
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  return (
    <>
      {/* ── Meet Dr. Paola ─────────────────────────── */}
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div>
            <p className="eyebrow">Our story</p>
            <h1>Meet Dr. Paola Biloa Njandja</h1>
            <p className="about-role">Wellness is not simply something I schedule — it is part of how I live.</p>
            <p className="about-lead">
              Welcome — I’m Dr. Njandja, founder of Biloa Holistic Care &amp; Wellness. I hold a Doctorate in Occupational Safety and Health and
              certifications as a Nutrition &amp; Wellness Consultant, Holistic Nutritionist, Health &amp; Wellness Coach, Weight Management
              Specialist, and Sports Nutrition Consultant.
            </p>
            <p className="about-lead">
              I believe that we are holistic beings. Our physical health, emotional well-being, environments, relationships, and daily habits are
              interconnected. My education and professional experience have helped me understand how work demands, social interactions, major life
              changes, and prolonged stress can affect sleep, energy, eating habits, digestion, concentration, and overall well-being.
            </p>
          </div>
          <div className="about-logo">
            <img src="/images/logo.webp" alt="Biloa Holistic Care & Wellness logo" width="420" height="418" />
          </div>
        </div>
        <nav className="container about-jump" aria-label="On this page">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.label}
            </a>
          ))}
        </nav>
      </section>

      {/* ── My personal journey ────────────────────── */}
      <section className="section" id="journey">
        <div className="container prose">
          <h2>My personal journey</h2>
          <p>
            My connection to wellness is deeply personal. At age 25, after the birth of my first child, I experienced postpartum depression while
            also managing digestive-health concerns and food allergies. At the same time, I was balancing motherhood, school, and the demands of
            building my professional career.
          </p>
          <blockquote className="pull-quote">
            That season taught me that caring for everyone else can make it easy to overlook your own needs.
          </blockquote>
          <p>
            Moving forward required more than simply pushing through. I needed to pause, seek appropriate support, listen to myself, and become more
            intentional about the choices and routines shaping my well-being.
          </p>
          <p>
            Holistic living helped me reconnect with myself through nourishment, rest, movement, reflection, cultural traditions, and supportive
            relationships. It was not an instant solution or a replacement for professional care. It became a way of moving through life with
            greater purpose, gratitude, self-awareness, and appreciation.
          </p>
          <p>
            My African heritage also shaped my understanding of wellness. I come from a family tradition in which herbs, spices, nourishing foods,
            rest, and community care have long been incorporated into everyday life. These practices were shared through stories, preparation,
            observation, and knowledge passed from one generation to the next.
          </p>
        </div>
      </section>

      {/* ── Meaning of the name ────────────────────── */}
      <section className="meaning">
        <div className="container meaning-inner">
          <p className="eyebrow eyebrow-light">The meaning behind Biloa</p>
          <blockquote>
            <span className="meaning-big">Biloa</span> means <em>grass</em>.
          </blockquote>
          <div className="meaning-long">
            <p className="meaning-text">
              To us, grass represents nourishment, resilience, renewal, and a deep connection to the earth. It bends without losing its roots,
              adapts to changing conditions, and continues to grow — even after difficult seasons.
            </p>
            <p>
              Grass responds differently as the seasons change. It may flourish in warmth, slow its growth during colder months, or appear dormant
              when conditions become harsh. Yet beneath the surface, its roots remain present, conserving strength and preparing for renewal. With
              time, nourishment, and the right environment, it rises again.
            </p>
            <p>
              Our lives move through seasons, too. Changes in health, work, relationships, motherhood, stress, aging, and personal responsibilities
              can affect how we eat, sleep, move, think, and care for ourselves. During challenging periods, growth may look different or feel less
              visible — but that does not mean it has stopped. Sometimes wellness means flourishing, while at other times it means resting,
              adapting, rebuilding, or simply remaining rooted.
            </p>
            <p>
              This is the spirit of Biloa Holistic Care &amp; Wellness. We help you recognize your current season, reconnect with your needs, and
              develop realistic wellness practices that can evolve with your life. Through personalized education, practical guidance,
              encouragement, and thoughtfully selected products, we support you in creating a stronger foundation for lasting well-being.
            </p>
            <p className="meaning-close">
              Like grass, you do not have to remain unshaken by difficult conditions to be resilient. You can bend, rest, adapt, and still rise
              again. At Biloa, your wellness journey is not about perfection — it is about remaining connected to your roots and continuing to grow,
              regardless of the season.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Biloa / What to expect ─────────────── */}
      <section className="section" id="why">
        <div className="container about-two">
          <div>
            <h2>Why I created Biloa</h2>
            <p>
              I created Biloa because wellness guidance can sometimes feel restrictive, overwhelming, or disconnected from the realities of everyday
              life. I wanted to offer a more welcoming and personalized approach — one that values education, culture, personal preferences,
              self-awareness, and practical choices.
            </p>
            <p>
              Through nutrition education, meal-planning support, wellness coaching, accessible resources, and thoughtfully selected products, I help
              individuals make informed choices that reflect their goals, schedules, budgets, cultural traditions, and changing seasons of life.
            </p>
            <p>
              I believe holistic living is about far more than weight loss. If weight wellness is one of your goals, your journey should not be
              driven by shame, punishment, deprivation, or constant stress. It should be supported by patience, balance, and sustainable choices.
              Caring for yourself is an act of self-love — and a recognition that your health, your needs, and your overall well-being matter.
            </p>
          </div>
          <div>
            <h2>What you can expect</h2>
            <p>
              When you work with us, you can expect to be heard, respected, and supported without judgment. We provide practical education,
              encouragement, and accountability to help you create balanced habits that feel realistic and sustainable.
            </p>
            <p>
              Support may include nutrition education, meal planning, wellness coaching, weight-wellness guidance, goal-setting, grocery and
              food-label education, pantry organization, and everyday support for hydration, movement, sleep, and stress management.
            </p>
            <p>
              Your journey is unique. What works for someone else may not work for you — and that is okay. You do not have to pursue perfection. You
              can begin with one compassionate and thoughtful choice at a time.
            </p>
            <p className="scope-note">
              Biloa does not diagnose or treat medical or mental-health conditions, including anxiety, depression, digestive disorders, or food
              allergies. When your needs extend beyond general wellness education and coaching, we will encourage you to seek care from an
              appropriately licensed professional.
            </p>
            <p>
              If you are ready to begin or continue your wellness journey, we will be honored to support you in creating a path that feels
              informed, intentional, and uniquely yours.
            </p>
          </div>
        </div>
      </section>

      {/* ── About Biloa: reimagined, mission, vision, legacy ── */}
      <section className="section section-tint" id="approach">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">About Biloa Holistic Care &amp; Wellness</p>
            <h2>Holistic health, reimagined</h2>
          </div>
          <div className="prose prose-center">
            <p>
              At Biloa Holistic Care &amp; Wellness, we see health and wellness as more than a number on a scale, a restrictive diet plan, or a
              collection of occasional self-care activities. We believe wellness is an ongoing relationship with the whole person — body, mind,
              environment, culture, relationships, and everyday life.
            </p>
            <p>
              Our approach brings together practical nutrition education, wellness coaching, mindful living, cultural wisdom, and intentional
              self-care. We help individuals introduce healthier foods, routines, and activities gradually, allowing the palate, digestive system,
              and everyday life time to adjust. Our goal is to make holistic wellness understandable, enjoyable, and realistic enough to become a
              lasting part of daily life.
            </p>
          </div>

          <div className="mv-grid">
            <article className="mv-card">
              <p className="eyebrow">Our mission</p>
              <h3>To help individuals develop a more informed, holistic, and compassionate approach to wellness.</h3>
              <p>
                Through practical education, personalized support, and thoughtfully selected wellness products, we encourage people to understand
                their needs, respect their boundaries, and build sustainable habits that reflect their goals, values, culture, health
                considerations, and circumstances.
              </p>
              <p>
                We are not here to promote perfection or abrupt change. We are here to support meaningful progress through self-awareness, patience,
                and a consistent commitment to personal well-being.
              </p>
            </article>
            <article className="mv-card">
              <p className="eyebrow">Our vision</p>
              <h3>To reimagine holistic health as something accessible, culturally respectful, evidence-informed, and deeply personal.</h3>
              <p>
                We envision a community in which people feel empowered to participate actively in their well-being, recognize their individual
                needs, and make informed choices without shame, fear, or unrealistic expectations.
              </p>
              <p>
                We want holistic living to feel less like another obligation and more like a meaningful commitment to oneself. This means replacing
                extreme or abrupt changes with a thoughtful process that allows the body, palate, mindset, and daily routine to adapt over time.
              </p>
            </article>
          </div>

          <div className="legacy">
            <h3>History and the legacy we are building</h3>
            <p>
              Biloa was inspired by the connection between professional knowledge, personal experience, African heritage, and traditions of caring
              for the whole person. For generations, food, herbs, spices, rest, movement, and community have been woven into everyday wellness
              practices. Biloa honors that foundation while connecting it with modern wellness education and practical guidance.
            </p>
            <p>
              The legacy we are building is one of knowledge, intention, and care. We want individuals and families to develop healthier
              relationships with nourishment, self-care, and their overall well-being. By encouraging gradual and realistic change, we hope that the
              wellness choices made today will become sustainable practices that can be shared with and carried forward by future generations.
            </p>
          </div>
        </div>
      </section>

      {/* ── What makes us different ────────────────── */}
      <section className="section">
        <div className="container different">
          <div className="different-media">
            <img
              src="/images/sunlit-rest-sm.webp"
              srcSet="/images/sunlit-rest-sm.webp 600w, /images/sunlit-rest.webp 1122w"
              sizes="(max-width: 900px) 92vw, 460px"
              alt="A woman sitting at ease on the floor of a calm, sunlit room"
              width="1122"
              height="1402"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <p className="eyebrow">What makes our approach different</p>
            <h2>Wellness does not look the same for everyone</h2>
            <p>
              Your culture, responsibilities, schedule, budget, environment, preferences, health history, food allergies or sensitivities, physical
              abilities, and season of life all influence what is practical and appropriate for you.
            </p>
            <p>
              Rather than focusing only on weight or prescribing one version of healthy living, we consider the everyday factors that shape
              well-being. We emphasize education, self-awareness, realistic planning, and sustainable routines.
            </p>
            <p>
              We also recognize that abruptly eliminating familiar foods, changing an entire diet, or beginning an overly demanding activity routine
              can feel restrictive and may be difficult to maintain. Instead, we encourage gradual, intentional changes that give your palate an
              opportunity to develop new preferences and allow your digestive system and daily routine time to adjust.
            </p>
            <p className="steps-intro">Progress might begin with:</p>
            <ul className="check-list small-steps">
              {SMALL_STEPS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p>
              These manageable steps create opportunities to observe how your body responds and make informed adjustments along the way.
            </p>
            <p className="different-close">
              Nutrition is not simply about restriction, and wellness is not achieved through perfection. Holistic health is about learning to
              nourish yourself, understand your boundaries, manage everyday demands, reconnect with your needs, and make thoughtful choices that
              support the life you want to live.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────── */}
      <section className="section section-tint" id="values">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What guides us</p>
            <h2>Our values</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <article key={v.name} className="value-card">
                <span className="value-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.name}</h3>
                {v.text.map((t) => (
                  <p key={t.slice(0, 24)}>{t}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credentials ────────────────────────────── */}
      <section className="section">
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

      {/* ── Commitment / CTA ───────────────────────── */}
      <section className="commit" id="begin">
        <div className="container commit-inner">
          <p className="eyebrow eyebrow-light">How committed are you to your holistic journey?</p>
          <p className="commit-text">
            Your wellness journey does not require you to change everything at once. Lasting progress often begins with one manageable decision and
            grows through patience, consistency, and self-awareness.
          </p>
          <p className="commit-text">
            Understanding your personal boundaries is part of that commitment. Your nutrition and activity choices should reflect your health needs,
            abilities, culture, schedule, budget, and current season of life. Wellness should support your life — not become another source of
            pressure.
          </p>
          <p className="commit-ask">Ask yourself:</p>
          <h2 className="commit-question">Am I ready to make my well-being a meaningful priority?</h2>
          <p className="commit-text">
            If your answer is yes — or even, “I’m ready to try” — Biloa Holistic Care &amp; Wellness is here to support you with education,
            encouragement, practical guidance, and resources designed for real life.
          </p>
          <div className="hero-ctas center">
            <Link to="/services" className="btn btn-gold btn-lg">
              Explore coaching packages <ArrowRight size={18} />
            </Link>
            <Link to="/shop" className="btn btn-outline-light btn-lg">
              Shop wellness products
            </Link>
          </div>
          <p className="commit-close">
            Your journey is personal. Your pace is valid. Your progress is meaningful. <em>Your commitment begins with you.</em>
          </p>
        </div>
      </section>
    </>
  );
}
