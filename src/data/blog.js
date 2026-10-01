// Blog posts by Dr. Paola Biloa Njandja.
// Each post is a list of blocks: p (paragraph), h2/h3 (headings), img, list,
// lead (large intro paragraph), close (closing line), refs (references), note (disclaimer).
// To add a post, copy one below, give it a new `slug`, and put its photos in public/images/blog/.

export const POSTS = [
  {
    slug: 'who-would-have-thought',
    title: 'Who Would Have Thought?',
    date: '2026-10-01',
    excerpt:
      'Kimchi, seaweed, olives, pickles, pomegranate, and kiwi were not foods I once imagined choosing intentionally — much less discussing as part of my wellness journey.',
    cover: '/images/blog/who-would-have-thought.webp',
    coverAlt: 'Small bowls of kimchi, seaweed salad, olives with tomatoes and pickles, and pomegranate with kiwi on a sunlit counter',
    tags: ['My journey', 'Gut health', 'Nutrition'],
    blocks: [
      { type: 'lead', text: 'Who would have thought I would be eating any of these foods? Not me — not in a million years.' },
      {
        type: 'p',
        text: 'Kimchi, seaweed, olives, pickles, pomegranate, and kiwi were not foods I once imagined choosing intentionally, much less discussing as part of my wellness journey. But sometimes our bodies find ways to get our attention after we have overlooked the warning signs too many times.',
      },
      {
        type: 'p',
        text: 'For me, the message came through digestive discomfort, food sensitivities, stress, and the realization that some of my familiar routines were no longer supporting me in the way I needed. I had to pause, become curious about what my body was communicating, and reconsider my relationship with food.',
      },
      {
        type: 'p',
        text: 'The change did not happen overnight. I did not suddenly replace everything I enjoyed or force myself to love unfamiliar flavors. I began gradually — trying small portions, observing how I felt, and allowing my palate, digestive system, and daily habits time to adapt.',
      },
      {
        type: 'p',
        text: 'These foods are not miracle cures, and my experience will not be the same as everyone else’s. They represent something more meaningful: my willingness to listen, learn, and make intentional choices that support my holistic well-being.',
      },
      { type: 'h2', text: 'Kimchi and Seaweed: Supporting the Gut and Expanding the Palate' },
      { type: 'img', src: '/images/blog/kimchi-seaweed.webp', alt: 'A bowl of kimchi beside a bowl of seaweed salad' },
      {
        type: 'p',
        text: 'Kimchi is traditionally prepared through fermentation. Varieties containing live cultures may help support microbial diversity in the gut when enjoyed as part of a balanced diet. Kimchi also provides vegetables, fiber, and bold flavors that can make meals more interesting and satisfying.',
      },
      {
        type: 'p',
        text: 'Research published in Cell found that participants who followed a diet rich in fermented foods experienced increased gut-microbiome diversity and reductions in several markers of inflammation. Other research suggests that regularly consuming fermented vegetables may produce beneficial changes in the composition of the gut microbiome. These findings are encouraging, but the effects of fermented foods can vary depending on the food, its preparation, the amount consumed, and the individual.',
      },
      {
        type: 'p',
        text: 'Seaweed provides fiber and naturally occurring minerals, including iodine, which the body needs for normal thyroid function. However, iodine and sodium levels can vary considerably among varieties and products. Seaweed is therefore best enjoyed in moderate portions, particularly by individuals with thyroid conditions or medically restricted diets.',
      },
      {
        type: 'p',
        text: 'Together, kimchi and seaweed encouraged me to explore new textures and flavors while becoming more intentional about variety. Holistic wellness is not only about the nutrients a food provides; it is also about remaining curious, expanding your palate, and developing a healthier relationship with nourishment.',
      },
      { type: 'h2', text: 'Pomegranate and Kiwi: Colorful Nourishment' },
      { type: 'img', src: '/images/blog/pomegranate-kiwi.webp', alt: 'A glass bowl of pomegranate seeds and sliced kiwi' },
      {
        type: 'p',
        text: 'Pomegranate provides fiber and colorful plant compounds, including polyphenols and anthocyanins, known for their antioxidant activity. Research reviews have identified pomegranate as a source of several bioactive plant compounds. While researchers continue to study their effects on human health, enjoying the whole fruit can contribute fiber, nutrients, color, and variety to a balanced diet.',
      },
      {
        type: 'p',
        text: 'Kiwi provides vitamin C, fiber, potassium, and other naturally occurring nutrients. The National Institutes of Health identifies kiwi as a good food source of vitamin C. Vitamin C supports normal immune function, helps protect cells from oxidative stress, and is required for collagen production. Collagen is an important structural component of the skin and connective tissues.',
      },
      {
        type: 'p',
        text: 'Reviews of kiwifruit research also identify its vitamin C, dietary fiber, potassium, and other plant compounds as contributors to its nutritional value. Its fiber can support digestive function as part of an overall fiber-rich eating pattern.',
      },
      {
        type: 'p',
        text: 'Together, pomegranate and kiwi create a refreshing combination that contributes to nutrient variety, digestive wellness, and overall nourishment. Their vibrant colors also remind me that food can be both beneficial and enjoyable.',
      },
      { type: 'h2', text: 'Tomatoes, Olives, and Pickles: Simple Foods with Bold Flavor' },
      { type: 'img', src: '/images/blog/tomatoes-olives-pickles.webp', alt: 'A plate of green olives, cherry tomatoes, and pickle slices' },
      {
        type: 'p',
        text: 'Tomatoes provide vitamin C, potassium, and lycopene — a naturally occurring plant pigment with antioxidant properties. They add freshness, color, and flavor to meals without requiring complicated preparation.',
      },
      {
        type: 'p',
        text: 'Olives provide monounsaturated fats and naturally occurring plant compounds. Their rich flavor can make a simple meal feel more satisfying while contributing to a varied and balanced eating pattern.',
      },
      {
        type: 'p',
        text: 'Pickles add crunch, acidity, and variety. However, not every pickle is fermented. Naturally fermented pickles may contain live microorganisms, while products made only with vinegar or exposed to pasteurization may not offer the same live-culture potential.',
      },
      {
        type: 'p',
        text: 'Look for terms such as naturally fermented, unpasteurized, or contains live cultures when choosing a product for its fermentation qualities. Because olives, pickles, kimchi, and seasoned seaweed can be high in sodium, portion awareness remains important.',
      },
      {
        type: 'p',
        text: 'This savory combination demonstrates that supporting wellness does not always require elaborate recipes. Sometimes it begins with making simple foods more colorful, flavorful, and enjoyable.',
      },
      { type: 'h2', text: 'The Holistic Lesson' },
      {
        type: 'p',
        text: 'Each of these foods contributes something different — fiber, vitamins, minerals, beneficial fats, plant compounds, fermentation byproducts, flavor, texture, or variety. Their greatest value does not come from eating one food in isolation, but from how they fit into an overall pattern of nourishment, movement, rest, hydration, emotional well-being, and intentional self-care.',
      },
      {
        type: 'p',
        text: 'My journey has taught me that holistic living is not about finding one perfect food. It is about developing the awareness to recognize what supports you, respecting your personal boundaries, and remaining willing to make gradual adjustments.',
      },
      {
        type: 'close',
        text: 'Sometimes a wellness journey begins with a dramatic decision. Other times, it begins quietly — with one unfamiliar food, one small taste, and a willingness to listen.',
      },
      {
        type: 'refs',
        items: [
          {
            text: 'Wastyk, H. C., et al. (2021). Gut-microbiota-targeted diets modulate human immune status. Cell, 184(16), 4137–4153.',
            link: 'View the study on PubMed',
            href: 'https://pubmed.ncbi.nlm.nih.gov/34256014/',
          },
          {
            text: 'Galena, A. E., et al. (2022). The effects of fermented vegetable consumption on the composition of the intestinal microbiota and levels of inflammatory markers in women.',
            link: 'View the study on PubMed',
            href: 'https://pubmed.ncbi.nlm.nih.gov/36201455/',
          },
          {
            text: 'Leeuwendaal, N. K., Stanton, C., O’Toole, P. W., and Beresford, T. P. (2022). Fermented foods, health and the gut microbiome. Nutrients, 14(7), 1527.',
            link: 'View the review through PubMed Central',
            href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9003261/',
          },
          {
            text: 'National Institutes of Health, Office of Dietary Supplements. Vitamin C: Fact Sheet for Health Professionals.',
            link: 'Read the NIH fact sheet',
            href: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
          },
          {
            text: 'Richardson, D. P., Ansell, J., and Drummond, L. N. (2018). The nutritional and health attributes of kiwifruit: A review. European Journal of Nutrition, 57, 2659–2676.',
            link: 'View the review through PubMed Central',
            href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6267416/',
          },
          {
            text: 'Viuda-Martos, M., Fernández-López, J., and Pérez-Álvarez, J. A. (2010/2019 record). Composition and potential health benefits of pomegranate: A review.',
            link: 'View the review on PubMed',
            href: 'https://pubmed.ncbi.nlm.nih.gov/31298147/',
          },
        ],
      },
      {
        type: 'note',
        text: 'This article provides general nutrition and wellness education. It is not medical nutrition therapy and not intended to diagnose, treat, cure, or prevent any disease. Consult a qualified healthcare professional regarding allergies, digestive conditions, thyroid concerns, sodium restrictions, medications, or other individualized health needs.',
      },
    ],
  },
  {
    slug: 'tomato-bell-pepper-beet-drink',
    title: 'Tomato, Bell Pepper, and Beet Drink: Colorful Nourishment in a Glass',
    date: '2026-10-01',
    excerpt:
      'Who would have thought I would be sipping a blend of tomatoes, red bell peppers, and beets — and genuinely enjoying it? Not me — not in a million years!',
    cover: '/images/blog/tomato-pepper-beet-drink.webp',
    coverAlt: 'A glass of ruby-red tomato, bell pepper, and beet drink beside a tomato, a red bell pepper, and a beet',
    tags: ['Recipes', 'Nutrition'],
    blocks: [
      {
        type: 'lead',
        text: 'Look at me drinking this delightful, ruby-red, vibrant drink! Who would have thought I would be sipping a blend of tomatoes, red bell peppers, and beets — and genuinely enjoying it? Not me — not in a million years!',
      },
      {
        type: 'p',
        text: 'There was a time when this combination would never have made it into my glass. But as I began paying closer attention to my body, I became more willing to explore foods that once seemed unfamiliar. I learned that a wellness journey does not require us to change everything overnight. Sometimes it begins with one new ingredient, one curious taste, or one nourishing choice at a time.',
      },
      {
        type: 'p',
        text: 'As we gradually introduce new foods, our palates can adapt, our confidence can grow, and flavors we once avoided may become enjoyable parts of our routines. This colorful drink reminds me that holistic living is not about following trends, forcing yourself to accept every “healthy” food, or searching for a miracle ingredient. It is about remaining curious, learning what different foods offer, and patiently discovering what works for you.',
      },
      { type: 'p', text: 'Your first sip may surprise you — and it may be the beginning of a transformation you never imagined.' },
      { type: 'h2', text: 'What Each Ingredient Brings' },
      { type: 'h3', text: 'Beets: Natural Nitrates and Vibrant Color' },
      {
        type: 'p',
        text: 'Beets contain naturally occurring dietary nitrates. The body can convert these nitrates into nitric oxide, a compound involved in blood-vessel relaxation and circulation.',
      },
      {
        type: 'p',
        text: 'Research reviews have found that nitrate-rich beetroot juice may modestly reduce systolic blood pressure in some adults, particularly those with elevated blood pressure. However, individual responses vary, and beetroot juice should never replace prescribed medication or professional medical care.',
      },
      { type: 'p', text: 'Beets also provide folate, potassium, colorful pigments called betalains, and other naturally occurring plant compounds.' },
      { type: 'h3', text: 'Red Bell Pepper: A Colorful Source of Vitamin C' },
      {
        type: 'p',
        text: 'Red bell peppers are rich in vitamin C, an essential nutrient that supports normal immune function, collagen production, wound healing, and antioxidant protection.',
      },
      {
        type: 'p',
        text: 'Vitamin C also helps the body absorb nonheme iron — the form of iron found in plant-based foods. Including bell peppers in a varied eating pattern can therefore contribute to nutrient intake, colorful meals, and greater dietary variety.',
      },
      { type: 'h3', text: 'Tomatoes: Lycopene and Everyday Nutrition' },
      {
        type: 'p',
        text: 'Tomatoes provide vitamin C, potassium, folate, and lycopene. Lycopene is the naturally occurring pigment responsible for the tomato’s familiar red color and has been widely studied for its antioxidant properties.',
      },
      {
        type: 'p',
        text: 'Research suggests that tomatoes and lycopene-containing foods may contribute to cardiovascular and overall health when included as part of a balanced dietary pattern. However, researchers continue to investigate the extent of these effects, and the quality of the evidence varies depending on the health outcome being studied.',
      },
      { type: 'h2', text: 'How This Drink May Support Holistic Well-Being' },
      {
        type: 'p',
        text: 'Together, tomatoes, red bell peppers, and beets provide a colorful combination of vitamins, minerals, natural nitrates, and plant compounds.',
      },
      { type: 'p', text: 'As part of a balanced eating pattern, this drink may contribute to:' },
      {
        type: 'list',
        items: [
          'Greater vegetable variety',
          'Vitamin C intake',
          'Antioxidant-rich nourishment',
          'Normal immune and collagen function',
          'Hydration as part of daily fluid intake',
          'Circulatory support from naturally occurring beet nitrates',
          'A more colorful and intentional approach to nutrition',
        ],
      },
      {
        type: 'p',
        text: 'The most meaningful benefit comes from how this drink fits into your overall lifestyle — not from expecting one glass to transform your health. Nourishment works alongside balanced meals, adequate hydration, regular movement, restorative sleep, stress management, and appropriate medical care.',
      },
      { type: 'h2', text: 'Juice or Blend?' },
      { type: 'p', text: 'How you prepare your drink matters.' },
      {
        type: 'p',
        text: 'A juicer separates much of the liquid from the pulp, which can reduce the amount of fiber remaining in the final drink. A high-powered blender generally retains more of the whole vegetables and their fiber.',
      },
      {
        type: 'p',
        text: 'Fiber supports digestive function, fullness, and the gut microbiome. If you prefer to juice these ingredients, consider enjoying the drink alongside a balanced meal containing fiber, protein, and healthy fats rather than using it as a complete meal replacement.',
      },
      { type: 'h2', text: 'When Should You Drink It?' },
      {
        type: 'p',
        text: 'There is no universal best time to enjoy this drink. It can be served with breakfast, alongside lunch, or as part of a balanced snack.',
      },
      {
        type: 'p',
        text: 'Drinking it earlier in the day may give you more time to notice how your digestive system and energy respond. If the acidity of tomatoes or the volume of vegetable juice contributes to reflux or discomfort, avoid drinking it close to bedtime.',
      },
      {
        type: 'p',
        text: 'Begin with a small serving and allow your palate and digestive system time to adjust. Holistic change does not have to be abrupt to be meaningful. More is not always better, and consistency often matters more than intensity.',
      },
      { type: 'h2', text: 'Important Considerations' },
      {
        type: 'p',
        text: 'Beetroot can temporarily turn urine or stool pink or red. This generally harmless effect is sometimes called beeturia.',
      },
      {
        type: 'p',
        text: 'Because beetroot contains nitrates, potassium, and oxalates, individuals with low blood pressure, kidney disease, a history of certain kidney stones, or medically restricted diets should consult a qualified healthcare professional before consuming concentrated beet drinks regularly.',
      },
      {
        type: 'p',
        text: 'People taking blood-pressure medication should also discuss frequent beetroot-juice consumption with their healthcare professional because of its potential blood-pressure-lowering effect.',
      },
      {
        type: 'p',
        text: 'Tomatoes may aggravate reflux in some individuals. Anyone with a known allergy, intolerance, or sensitivity to one of the ingredients should avoid it or seek appropriate professional guidance.',
      },
      { type: 'h2', text: 'The Holistic Lesson' },
      {
        type: 'p',
        text: 'This drink is not a cure, a quick fix, or a shortcut. It is simply one possible way to introduce greater vegetable variety into your routine.',
      },
      {
        type: 'p',
        text: 'My wellness journey continues to teach me that change does not have to happen all at once. Sometimes it begins with one unfamiliar combination, one small serving, and a willingness to pay attention.',
      },
      {
        type: 'p',
        text: 'You do not have to force your palate to change overnight. Give yourself time to explore, taste, adjust, and decide what feels appropriate for you. A flavor that seems unusual today may become one you genuinely enjoy tomorrow.',
      },
      {
        type: 'p',
        text: 'Your body deserves nourishment, but it also deserves patience. Listen, learn, and allow your wellness practices to grow with you — one colorful sip at a time.',
      },
      { type: 'close', text: 'So, what is one new flavor you are willing to try today?' },
      {
        type: 'refs',
        items: [
          {
            text: 'Zamani, H., et al. (2021). The benefits and risks of beetroot juice consumption: A systematic review.',
            link: 'View the article on PubMed',
            href: 'https://pubmed.ncbi.nlm.nih.gov/32292042/',
          },
          {
            text: 'Siervo, M., et al. (2013). Inorganic nitrate and beetroot juice supplementation reduces blood pressure in adults: A systematic review and meta-analysis.',
            link: 'View the article on PubMed',
            href: 'https://pubmed.ncbi.nlm.nih.gov/23596162/',
          },
          {
            text: 'National Institutes of Health, Office of Dietary Supplements. Vitamin C: Fact Sheet for Health Professionals.',
            link: 'Read the NIH fact sheet',
            href: 'https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/',
          },
          {
            text: 'Story, E. N., et al. (2010). An update on the health effects of tomato lycopene.',
            link: 'View the article through PubMed Central',
            href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3850026/',
          },
          {
            text: 'Li, N., et al. (2021). Tomato and lycopene and multiple health outcomes: An umbrella review.',
            link: 'View the article on PubMed',
            href: 'https://pubmed.ncbi.nlm.nih.gov/33131949/',
          },
        ],
      },
      {
        type: 'note',
        text: 'This article provides general nutrition and wellness education. It is not medical nutrition therapy and is not intended to diagnose, treat, cure, or prevent disease. Consult a qualified healthcare professional regarding medications, blood-pressure concerns, kidney conditions, allergies, or individualized dietary needs.',
      },
    ],
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}

// "2026-10-01" -> "October 1, 2026" (read as a calendar date, so no time-zone shift)
export function formatPostDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function readingMinutes(post) {
  const words = post.blocks
    .flatMap((b) => (b.text ? [b.text] : b.items ? b.items.map((i) => (typeof i === 'string' ? i : i.text)) : []))
    .join(' ')
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
