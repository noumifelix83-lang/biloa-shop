// Product & service catalog.
// This file is shared by the website AND the payment server (api/), so the
// price a customer pays always comes from here — never from the browser.
// Prices are in US cents (1900 = $19.00).

const TEA_BREWING =
  'Add one tea bag to 8 fl oz of freshly boiled water. Cover and steep for 5–7 minutes. Remove the tea bag before drinking. For iced tea, allow it to cool and serve over ice.';
const TEA_CAUTION =
  'Do not use if you are allergic or sensitive to any ingredient. Discontinue use if discomfort or an adverse reaction occurs. Consult a healthcare professional before use if you are pregnant, nursing, taking medication, or managing a medical condition. Keep out of reach of children.';
const OIL_HOW_TO = 'Apply a small amount to the body or scalp and massage gently until absorbed.';
const OIL_CAUTION =
  'For external use only. Perform a patch test before first use. Avoid contact with the eyes and other sensitive areas. Discontinue use if irritation occurs. Keep out of reach of children. Consult a healthcare professional before use if pregnant, nursing, or under medical care.';

export const CATEGORIES = [
  {
    id: 'teas',
    name: 'Herbal Teas',
    blurb: 'Organic, caffeine-free blends for every season of the day.',
    image: '/images/relaxation-tea.webp',
  },
  {
    id: 'oils',
    name: 'Body & Scalp Oils',
    blurb: 'Ready-to-use botanical blends for a soothing massage.',
    image: '/images/lavender-eucalyptus-oil.webp',
  },
  {
    id: 'bath-skin',
    name: 'Bath & Skincare',
    blurb: 'Earth-inspired rituals for face, body and bath.',
    image: '/images/jamaican-limestone.webp',
  },
];

export const PRODUCTS = [
  {
    id: 'relaxation-tea',
    type: 'product',
    category: 'teas',
    name: 'Relaxation Tea',
    subtitle: 'Rooibos · Lemon Balm · Lavender · Eucalyptus',
    price: 2000,
    image: '/images/relaxation-tea.webp',
    accent: '#e9e4f1',
    tagline: 'Slow down, settle in, and relax your way.',
    badges: ['Caffeine-free', 'Organic herbs', '20 tea bags'],
    description: [
      'Who said relaxation had to be boring? Biloa Relaxation Tea is a naturally caffeine-free herbal blend made with organic rooibos, lemon balm, lavender, and eucalyptus.',
      'Sip it hot from your favorite mug or serve it chilled in a wine glass for a refreshing alcohol-free experience. However you pour it, slow down, settle in, and relax your way.',
    ],
    details: [
      { label: 'Ingredients', text: 'Organic rooibos, organic lemon balm, organic lavender, organic eucalyptus leaf' },
      { label: 'Includes', text: '20 tea bags · Net weight 0.85 oz (24 g)' },
      { label: 'Brewing instructions', text: TEA_BREWING },
      { label: 'Caution', text: TEA_CAUTION },
    ],
    fdaNote: true,
  },
  {
    id: 'winter-warm-tea',
    type: 'product',
    category: 'teas',
    name: 'Winter Warm Tea',
    subtitle: 'Star Anise · Cinnamon · Clove · Peppermint',
    price: 2000,
    image: '/images/winter-warm-tea.webp',
    accent: '#f3e0d8',
    tagline: 'Cozy your way from fall into winter.',
    badges: ['Caffeine-free', 'Organic herbs', '20 tea bags'],
    description: [
      'Cozy your way from fall into winter with Biloa Winter Warm Tea — a naturally caffeine-free herbal blend made with organic star anise, cinnamon, clove, and peppermint.',
      'Enjoy it hot in your favorite mug or chilled over ice whenever you want a warm, flavorful moment.',
    ],
    details: [
      { label: 'Ingredients', text: 'Organic star anise, organic cinnamon, organic clove, organic peppermint' },
      { label: 'Includes', text: '20 individually packaged tea bags · Net weight 0.85 oz (24 g)' },
      { label: 'Brewing instructions', text: TEA_BREWING },
      { label: 'Caution', text: TEA_CAUTION },
    ],
    fdaNote: true,
  },
  {
    id: 'gentle-regularity-tea',
    type: 'product',
    category: 'teas',
    name: 'Gentle Regularity Tea',
    subtitle: 'Peppermint · Chicory · Alfalfa',
    price: 2000,
    image: '/images/gentle-regularity-tea.webp',
    accent: '#e4ecdc',
    tagline: 'Everyday digestive comfort, gently.',
    badges: ['Caffeine-free', 'Organic herbs', '20 tea bags'],
    description: [
      'A naturally caffeine-free herbal blend thoughtfully crafted to support digestive comfort and everyday regularity as part of a balanced wellness routine.',
      'Made with organic peppermint, chicory, and alfalfa.',
    ],
    details: [
      { label: 'Ingredients', text: 'Organic peppermint, organic chicory, organic alfalfa' },
      { label: 'Includes', text: '20 tea bags · Net weight 0.85 oz (24 g)' },
      { label: 'Brewing instructions', text: TEA_BREWING },
      { label: 'Caution', text: TEA_CAUTION },
    ],
    fdaNote: true,
  },
  {
    id: 'lavender-eucalyptus-oil',
    type: 'product',
    category: 'oils',
    name: 'Lavender & Eucalyptus Essential Oil Blend',
    shortName: 'Lavender & Eucalyptus Oil',
    subtitle: 'Body & Scalp · 1 fl oz (30 mL)',
    price: 1900,
    image: '/images/lavender-eucalyptus-oil.webp',
    accent: '#e8e5f0',
    tagline: 'Breathe in calm. Massage in care.',
    badges: ['Ready to use', 'Sweet almond oil base', '1 fl oz'],
    description: [
      'Turn everyday self-care into a refreshing botanical ritual. This ready-to-use body and scalp oil pairs the soft floral aroma of lavender with the crisp, clean character of eucalyptus.',
      'Expertly diluted in lightweight sweet almond oil, it glides smoothly onto the body and scalp for a soothing massage without feeling heavy.',
    ],
    details: [
      { label: 'Ingredients', text: 'Sweet almond oil, lavender essential oil, eucalyptus essential oil' },
      { label: 'Size', text: '1 fl oz (30 mL)' },
      { label: 'How to use', text: OIL_HOW_TO },
      { label: 'Caution', text: OIL_CAUTION + ' Contains tree nut oil (sweet almond).' },
    ],
  },
  {
    id: 'sage-rosemary-oil',
    type: 'product',
    category: 'oils',
    name: 'Sage & Rosemary Essential Oil Blend',
    shortName: 'Sage & Rosemary Oil',
    subtitle: 'Body & Scalp · 1 fl oz (30 mL)',
    price: 1900,
    image: '/images/sage-rosemary-oil.webp',
    accent: '#e3ead9',
    tagline: 'Root your ritual in nature.',
    badges: ['Ready to use', 'Non-greasy', '1 fl oz'],
    description: [
      'Refresh your body and scalp with the earthy aroma of sage and the crisp, herbaceous character of rosemary.',
      'Expertly diluted in lightweight fractionated coconut oil, this ready-to-use blend glides smoothly onto the body and scalp for an uplifting botanical massage without feeling heavy or greasy.',
    ],
    details: [
      { label: 'Ingredients', text: 'Fractionated coconut oil, sage essential oil, rosemary essential oil' },
      { label: 'Size', text: '1 fl oz (30 mL)' },
      { label: 'How to use', text: OIL_HOW_TO },
      { label: 'Caution', text: OIL_CAUTION },
    ],
  },
  {
    id: 'sage-rosemary-soak',
    type: 'product',
    category: 'bath-skin',
    name: 'Sage & Rosemary Sea Salt Soak',
    shortName: 'Sage & Rosemary Soak',
    subtitle: 'Mineral Bath Soak',
    price: 1500,
    image: '/images/sage-rosemary-soak.webp',
    accent: '#e6ebe0',
    tagline: 'Soak. Breathe. Return to yourself.',
    badges: ['Mineral-rich sea salt', 'Bath or foot soak'],
    description: [
      'Transform an ordinary bath into an earthy botanical escape. Mineral-rich sea salt is paired with the grounding aroma of sage and the fresh, herbaceous character of rosemary.',
      'Fractionated coconut oil leaves the skin feeling soft and conditioned.',
    ],
    details: [
      { label: 'Ingredients', text: 'Sea salt, fractionated coconut oil, sage essential oil, rosemary essential oil' },
      {
        label: 'How to use',
        text: 'Add the recommended amount to warm bathwater and stir until dispersed. Soak, relax, and rinse the body with clean water afterward. May also be used as a foot soak.',
      },
      {
        label: 'Caution',
        text: 'For external use only. Do not use on broken, irritated, or freshly shaved skin. Avoid contact with the eyes and other sensitive areas. Discontinue use if irritation occurs. Use caution when entering or exiting the tub, as the oils may make surfaces slippery. Keep out of reach of children. Consult a healthcare professional before use if pregnant, nursing, or under medical care.',
      },
    ],
  },
  {
    id: 'jamaican-limestone-mask',
    type: 'product',
    category: 'bath-skin',
    name: 'Jamaican Limestone Face & Body Mask',
    shortName: 'Jamaican Limestone Mask',
    subtitle: 'Dry Powder · Face & Body',
    price: 3000,
    image: '/images/jamaican-limestone.webp',
    accent: '#efe8dc',
    tagline: 'A simple, earth-inspired skincare ritual.',
    badges: ['Single ingredient', 'Mix fresh each use'],
    description: [
      'Experience a simple, earth-inspired skincare ritual featuring naturally occurring Jamaican limestone sourced from the Ralf River area.',
      'This dry powder is mixed fresh for each use, allowing you to customize the consistency for your face or body.',
    ],
    details: [
      { label: 'Ingredient', text: 'Jamaican limestone' },
      {
        label: 'How to use',
        text: 'Mix a small amount with water in a clean bowl to form a smooth paste. Apply a thin, even layer to clean skin, avoiding the eyes and lips. Allow the mask to dry to your desired consistency, then rinse thoroughly with lukewarm water.',
      },
      {
        label: 'Caution',
        text: 'For external use only. Patch test before first use. Do not apply to broken, irritated, or freshly shaved skin. Avoid contact with the eyes. Rinse immediately if contact occurs. Discontinue use if irritation or discomfort develops. Keep out of reach of children.',
      },
    ],
  },
  {
    id: 'gua-sha-tool',
    type: 'product',
    category: 'bath-skin',
    name: 'Gua Sha Jade Facial Massage Tool',
    shortName: 'Gua Sha Facial Tool',
    subtitle: 'Seashell-inspired facial massage',
    price: 1100,
    image: '/images/gua-sha.webp',
    accent: '#f4e9dd',
    tagline: 'Let your natural glow flow.',
    badges: ['Pairs with any facial oil', 'Reusable'],
    description: [
      'Turn your skincare routine into a calming moment of self-care. Inspired by the graceful curves and natural tones of a seashell, this smooth facial massage tool glides comfortably across the skin to provide a refreshing, soothing massage experience.',
      'Use it alone or pair it with your favorite facial oil or serum for effortless movement across the skin.',
    ],
    details: [
      {
        label: 'How to use',
        text: 'Begin with clean skin and apply a few drops of facial oil or serum. Using light pressure, glide the tool upward and outward across the face and along the jawline. Use the curved edges to follow the natural contours of the face. Avoid repeatedly massaging the same area if sensitivity develops.',
      },
      {
        label: 'Care instructions',
        text: 'Wash with mild soap and lukewarm water after every use. Dry thoroughly with a soft cloth and store in a clean, dry place. Handle carefully to prevent chips or breakage.',
      },
      {
        label: 'Caution',
        text: 'For external use only. Do not use on broken, inflamed, sunburned, or irritated skin. Avoid excessive pressure and discontinue use if discomfort or irritation occurs. This product is not intended to diagnose, treat, cure, or prevent any medical condition.',
      },
    ],
  },
];

export const SERVICES = [
  {
    id: 'nutrition-wellness-consultation',
    type: 'service',
    group: 'session',
    name: 'Nutrition & Wellness Consultation',
    price: 9500,
    duration: 'Single session',
    summary:
      'At Biloa Holistic Care & Wellness, we begin where you are and build a wellness routine that works for your life. Through a personalized conversation about your eating habits, lifestyle, goals, and challenges, we help you identify meaningful opportunities for change.',
    includesTitle: 'You’ll leave with',
    includes: [
      'Practical nutrition education',
      'Realistic guidance',
      'Clear next steps for creating a more balanced and intentional everyday routine',
    ],
  },
  {
    id: 'wellness-coaching-session',
    type: 'service',
    group: 'session',
    name: 'Health and Wellness Coaching',
    price: 8500,
    duration: 'Single session',
    summary:
      'Receive personalized encouragement, accountability, and practical support as you work toward your wellness goals.',
    includesTitle: 'Coaching may focus on',
    includes: [
      'Nutrition and hydration',
      'Movement and sleep',
      'Stress management',
      'Goal-setting',
      'Other everyday habits that contribute to a more balanced lifestyle',
    ],
  },
  {
    id: 'wellness-foundations',
    type: 'service',
    group: 'package',
    name: 'Wellness Foundations',
    price: 29500,
    headline: 'Build a stronger foundation for everyday wellness',
    duration: '4 sessions',
    summary:
      'Designed for clients who want personalized guidance, practical goals, and a clear place to begin. Together, we will explore your current routines, priorities, and challenges before developing realistic next steps that fit your everyday life.',
    includes: [
      'One 60-minute Nutrition and Wellness Consultation',
      'Three 45-minute follow-up coaching sessions',
      'Personalized wellness goals and educational resources',
      'Limited email check-ins between sessions',
      'Nutrition, hydration, movement, sleep, and stress-management education',
    ],
    idealFor:
      'Anyone ready to create more balanced and sustainable wellness habits without restrictive or unrealistic expectations.',
  },
  {
    id: 'holistic-living',
    type: 'service',
    group: 'package',
    name: 'Holistic Living',
    price: 42500,
    headline: 'Create routines that work with your life',
    duration: '5 sessions',
    featured: true,
    image: '/images/holistic-living.webp',
    summary:
      'Expanded support for clients who want to improve their everyday nutrition and wellness routines. This package combines personalized coaching with practical meal-planning, grocery, and kitchen guidance to help make healthy choices feel more manageable.',
    includes: [
      'One 60-minute Nutrition and Wellness Consultation',
      'Four 50-minute wellness-coaching sessions',
      'General meal-planning support',
      'Grocery-shopping or pantry guidance',
      'Personalized goals and educational resources',
      'Limited email check-ins between sessions',
    ],
  },
  {
    id: 'three-month-partnership',
    type: 'service',
    group: 'package',
    name: 'Three-Month Wellness Partnership',
    price: 79500,
    headline: 'Personalized support for meaningful, sustainable change',
    duration: '3 months · 9 sessions',
    summary:
      'Ongoing guidance, education, and accountability for clients who are ready to make wellness a consistent part of their lives. Over three months, we will establish realistic goals, strengthen everyday routines, and adjust your plan as your needs evolve.',
    includes: [
      'One comprehensive Nutrition and Wellness Consultation',
      'Eight personalized coaching sessions',
      'General meal-planning education',
      'Grocery-shopping and food-label guidance',
      'Goal tracking and accountability support',
      'Personalized wellness resources',
      'Scheduled email check-ins between sessions',
    ],
  },
  {
    id: 'meal-prep-support',
    type: 'service',
    group: 'session',
    name: 'Holistic Meal Prep Support',
    price: 9500,
    headline: 'Take the stress out of deciding what to eat',
    duration: 'Single session',
    summary:
      'Together, we will develop practical meal ideas, organize grocery lists, simplify food preparation, and create balanced routines that reflect your preferences, schedule, budget, and general wellness goals.',
    includes: [
      'Practical meal ideas tailored to your needs',
      'Organized grocery lists',
      'Simplified food-preparation plan',
      'Balanced routines that fit your schedule and budget',
    ],
  },
];

const ALL = [...PRODUCTS, ...SERVICES];

export function getItem(id) {
  return ALL.find((item) => item.id === id);
}

export function displayName(item) {
  return item.shortName || item.name;
}

export function formatPrice(cents) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}

export function formatPriceExact(cents) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
}
