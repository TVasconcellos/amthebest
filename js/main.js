/* ================================================================
   A&M — Main JavaScript  (main.js)

   ★ QUICK TWEAK GUIDE:

   PRODUCTS:      Edit PRODUCTS array (section 1).
                  Images go in images/products/
   
   COLOR VARIANTS: Each product can have a `colors` array (section 1).
                   Each color entry: { label, hex, image }
                   Products without colors skip the swatch UI.
   
   INSTAGRAM:     Set BEHOLD_FEED_ID (section 2) to your Behold.so Feed ID.
                  If blank, falls back to ig1.jpg–ig6.jpg placeholder images.
   
   CANVAS FX:     Edit CANVAS_CONFIG (section 7) for particle tweaks.
                  mouseInfluence: how strongly particles are attracted to cursor.
   
   TRANSLATIONS:  Edit TRANSLATIONS object (section 13) for EN/PT text.
   
   FORMSPREE:     Set FORMSPREE_ID (section 11) after signing up at formspree.io

   ================================================================

   FILE STRUCTURE:
   1.  PRODUCT DATA (with color variants)
   2.  INSTAGRAM / BEHOLD CONFIG
   3.  CUSTOM CURSOR
   4.  NAVIGATION
   5.  SCROLL REVEAL
   6.  RENDER PRODUCTS
   7.  HERO CANVAS (constellation + mouse follow)
   8.  PRODUCT FILTERS
   9.  PRODUCT MODAL (with color swatches)
   10. RENDER INSTAGRAM (Behold.so or fallback)
   11. CONTACT FORM
   12. FOOTER YEAR
   13. TRANSLATIONS
   14. LANGUAGE SWITCHER
   15. INIT
================================================================ */


/* ================================================================
   1. PRODUCT DATA

   ★ FIELD REFERENCE:
   id          → Unique number, never repeat.
   name        → Display name (card + modal).
   family      → Human-readable group label. Shown in modal header.
   category    → Must match a filter button's data-filter in index.html.
                 Values: "tshirt" | "tshirt-nolog" | "hoodie" | "sweatshirt"
                         | "shorts" | "bottle" | "cap" | "socks" | "tote" | "pack"
   price       → Display string: "€15"
   badge       → Small label or null.
   image       → Default/primary image path (images/products/...)
   description → Text shown in modal.
   sizes       → Array of size strings. ["One Size"] for non-sized items.
   colors      → Optional array of color variant objects:
                 { label: "Bordeaux", hex: "#5C1A1A", image: "images/products/shirt1.jpg" }
                 label = shown as tooltip on hover
                 hex   = the circle colour shown as swatch
                 image = the product image to display when this colour is selected
                 If colors is absent or empty, no swatch UI is shown.

   ★ COLOR GROUPING:
   Products in the same "family" (e.g. T-Shirt Logo) share the same
   color family. The colors array on each product points to the image
   for THAT colour — so shirt1.jpg is Bordeaux for Logo Tee,
   and also Bordeaux for the No-Logo Tee (shirt6.jpg vs shirt1.jpg).

   ★ HOW TO ADD A PRODUCT:
   Copy an existing entry, paste before the final ], update all values.
================================================================ */

/* Reusable colour definitions (hex values) */
const COLORS = {
  bordeaux:     { label: 'Bordeaux',     hex: '#5C1A1A' },
  navy:         { label: 'Navy',         hex: '#1B2A4A' },
  forestGreen:  { label: 'Forest Green', hex: '#2D4A2D' },
  black:        { label: 'Black',        hex: '#111111' },
  white:        { label: 'White',        hex: '#F0F0F0' },
};

const PRODUCTS = [

  /* ── T-SHIRTS (with logo) ── */
  {
    id: 1,
    name: "T-Shirt Bordeaux",
    family: "T-Shirt",
    category: "tshirt",
    price: "€15",
    badge: null,
    image: "images/products/shirt1.jpg",
    description: "Classic A&M logo tee in a rich bordeaux. 100% organic cotton, 200gsm, relaxed unisex fit. Printed with water-based inks.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { ...COLORS.bordeaux,    image: "images/products/shirt1.jpg" },
      { ...COLORS.navy,        image: "images/products/shirt2.jpg" },
      { ...COLORS.forestGreen, image: "images/products/shirt3.jpg" },
      { ...COLORS.black,       image: "images/products/shirt4.jpg" },
      { ...COLORS.white,       image: "images/products/shirt5.jpg" },
    ]
  },
  {
    id: 2,
    name: "T-Shirt Navy",
    family: "T-Shirt",
    category: "tshirt",
    price: "€15",
    badge: null,
    image: "images/products/shirt2.jpg",
    description: "Classic A&M logo tee in deep navy. 100% organic cotton, 200gsm, relaxed unisex fit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { ...COLORS.bordeaux,    image: "images/products/shirt1.jpg" },
      { ...COLORS.navy,        image: "images/products/shirt2.jpg" },
      { ...COLORS.forestGreen, image: "images/products/shirt3.jpg" },
      { ...COLORS.black,       image: "images/products/shirt4.jpg" },
      { ...COLORS.white,       image: "images/products/shirt5.jpg" },
    ]
  },
  {
    id: 3,
    name: "T-Shirt Forest Green",
    family: "T-Shirt",
    category: "tshirt",
    price: "€15",
    badge: null,
    image: "images/products/shirt3.jpg",
    description: "Classic A&M logo tee in muted forest green. 100% organic cotton, 200gsm.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { ...COLORS.bordeaux,    image: "images/products/shirt1.jpg" },
      { ...COLORS.navy,        image: "images/products/shirt2.jpg" },
      { ...COLORS.forestGreen, image: "images/products/shirt3.jpg" },
      { ...COLORS.black,       image: "images/products/shirt4.jpg" },
      { ...COLORS.white,       image: "images/products/shirt5.jpg" },
    ]
  },
  {
    id: 4,
    name: "T-Shirt Black",
    family: "T-Shirt",
    category: "tshirt",
    price: "€15",
    badge: "Best Seller",
    image: "images/products/shirt4.jpg",
    description: "The essential black logo tee. Goes with everything. 100% organic cotton, 200gsm.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { ...COLORS.bordeaux,    image: "images/products/shirt1.jpg" },
      { ...COLORS.navy,        image: "images/products/shirt2.jpg" },
      { ...COLORS.forestGreen, image: "images/products/shirt3.jpg" },
      { ...COLORS.black,       image: "images/products/shirt4.jpg" },
      { ...COLORS.white,       image: "images/products/shirt5.jpg" },
    ]
  },
  {
    id: 5,
    name: "T-Shirt White",
    family: "T-Shirt",
    category: "tshirt",
    price: "€15",
    badge: null,
    image: "images/products/shirt5.jpg",
    description: "Clean white logo tee. The summer staple. 100% organic cotton, 200gsm.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { ...COLORS.bordeaux,    image: "images/products/shirt1.jpg" },
      { ...COLORS.navy,        image: "images/products/shirt2.jpg" },
      { ...COLORS.forestGreen, image: "images/products/shirt3.jpg" },
      { ...COLORS.black,       image: "images/products/shirt4.jpg" },
      { ...COLORS.white,       image: "images/products/shirt5.jpg" },
    ]
  },

  /* ── T-SHIRTS (no logo) ── */
  {
    id: 6,
    name: "T-Shirt No Logo Bordeaux",
    family: "T-Shirt No Logo",
    category: "tshirt-nolog",
    price: "€15",
    badge: null,
    image: "images/products/shirt6.jpg",
    description: "The clean version. No logo, no noise. Just great cotton in bordeaux. 200gsm organic.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { ...COLORS.bordeaux,    image: "images/products/shirt6.jpg" },
      { ...COLORS.navy,        image: "images/products/shirt7.jpg" },
      { ...COLORS.forestGreen, image: "images/products/shirt8.jpg" },
      { ...COLORS.black,       image: "images/products/shirt9.jpg" },
      { ...COLORS.white,       image: "images/products/shirt10.jpg" },
    ]
  },
  {
    id: 7,
    name: "T-Shirt No Logo Navy",
    family: "T-Shirt No Logo",
    category: "tshirt-nolog",
    price: "€15",
    badge: null,
    image: "images/products/shirt7.jpg",
    description: "The clean version in navy. No logo, just premium cotton.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { ...COLORS.bordeaux,    image: "images/products/shirt6.jpg" },
      { ...COLORS.navy,        image: "images/products/shirt7.jpg" },
      { ...COLORS.forestGreen, image: "images/products/shirt8.jpg" },
      { ...COLORS.black,       image: "images/products/shirt9.jpg" },
      { ...COLORS.white,       image: "images/products/shirt10.jpg" },
    ]
  },
  {
    id: 8,
    name: "T-Shirt No Logo Forest Green",
    family: "T-Shirt No Logo",
    category: "tshirt-nolog",
    price: "€15",
    badge: null,
    image: "images/products/shirt8.jpg",
    description: "The clean version in forest green. Minimal and wearable.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { ...COLORS.bordeaux,    image: "images/products/shirt6.jpg" },
      { ...COLORS.navy,        image: "images/products/shirt7.jpg" },
      { ...COLORS.forestGreen, image: "images/products/shirt8.jpg" },
      { ...COLORS.black,       image: "images/products/shirt9.jpg" },
      { ...COLORS.white,       image: "images/products/shirt10.jpg" },
    ]
  },
  {
    id: 9,
    name: "T-Shirt No Logo Black",
    family: "T-Shirt No Logo",
    category: "tshirt-nolog",
    price: "€15",
    badge: "Best Seller",
    image: "images/products/shirt9.jpg",
    description: "The clean version in black. Pairs with everything.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { ...COLORS.bordeaux,    image: "images/products/shirt6.jpg" },
      { ...COLORS.navy,        image: "images/products/shirt7.jpg" },
      { ...COLORS.forestGreen, image: "images/products/shirt8.jpg" },
      { ...COLORS.black,       image: "images/products/shirt9.jpg" },
      { ...COLORS.white,       image: "images/products/shirt10.jpg" },
    ]
  },
  {
    id: 10,
    name: "T-Shirt No Logo White",
    family: "T-Shirt No Logo",
    category: "tshirt-nolog",
    price: "€15",
    badge: null,
    image: "images/products/shirt10.jpg",
    description: "The clean version in white. A timeless blank canvas.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { ...COLORS.bordeaux,    image: "images/products/shirt6.jpg" },
      { ...COLORS.navy,        image: "images/products/shirt7.jpg" },
      { ...COLORS.forestGreen, image: "images/products/shirt8.jpg" },
      { ...COLORS.black,       image: "images/products/shirt9.jpg" },
      { ...COLORS.white,       image: "images/products/shirt10.jpg" },
    ]
  },

  /* ── HOODIES ── */
  {
    id: 11,
    name: "Hoodie White",
    family: "Hoodie",
    category: "hoodie",
    price: "€20",
    badge: "New",
    image: "images/products/hoodie1.jpg",
    description: "Heavyweight fleece hoodie in white. Kangaroo pocket, ribbed cuffs, dropped shoulders. 380gsm.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { ...COLORS.white, image: "images/products/hoodie1.jpg" },
      { ...COLORS.black, image: "images/products/hoodie2.jpg" },
    ]
  },
  {
    id: 12,
    name: "Hoodie Black",
    family: "Hoodie",
    category: "hoodie",
    price: "€20",
    badge: null,
    image: "images/products/hoodie2.jpg",
    description: "Heavyweight fleece hoodie in black. Kangaroo pocket, ribbed cuffs. The essential layer.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { ...COLORS.white, image: "images/products/hoodie1.jpg" },
      { ...COLORS.black, image: "images/products/hoodie2.jpg" },
    ]
  },

  /* ── SWEATSHIRTS ── */
  {
    id: 13,
    name: "Sweatshirt White",
    family: "Sweatshirt",
    category: "sweatshirt",
    price: "€16",
    badge: null,
    image: "images/products/sweatshirt1.jpg",
    description: "Classic crewneck sweatshirt in white. Medium-weight french terry, boxy fit. A wardrobe staple.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { ...COLORS.white, image: "images/products/sweatshirt1.jpg" },
      { ...COLORS.black, image: "images/products/sweatshirt2.jpg" },
    ]
  },
  {
    id: 14,
    name: "Sweatshirt Black",
    family: "Sweatshirt",
    category: "sweatshirt",
    price: "€16",
    badge: null,
    image: "images/products/sweatshirt2.jpg",
    description: "Classic crewneck sweatshirt in black. The one you'll reach for every morning.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { ...COLORS.white, image: "images/products/sweatshirt1.jpg" },
      { ...COLORS.black, image: "images/products/sweatshirt2.jpg" },
    ]
  },

  /* ── SHORTS ── */
  {
    id: 15,
    name: "Shorts Black",
    family: "Shorts",
    category: "shorts",
    price: "€15",
    badge: null,
    image: "images/products/shorts1.jpg",
    description: "A&M shorts in black. Lightweight, elastic waistband, side pockets. Built for summer.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: null /* Single colour — no swatch UI */
  },

  /* ── WATER BOTTLES ── */
  {
    id: 16,
    name: "Water Bottle White",
    family: "Water Bottle A&M",
    category: "bottle",
    price: "€15",
    badge: null,
    image: "images/products/bottle1.jpg",
    description: "A&M branded stainless steel water bottle in white. 500ml, double-wall insulated, keeps cold 24h / hot 12h.",
    sizes: ["One Size"],
    colors: [
      { ...COLORS.white, image: "images/products/bottle1.jpg" },
      { ...COLORS.black, image: "images/products/bottle2.jpg" },
    ]
  },
  {
    id: 17,
    name: "Water Bottle Black",
    family: "Water Bottle A&M",
    category: "bottle",
    price: "€15",
    badge: null,
    image: "images/products/bottle2.jpg",
    description: "A&M branded stainless steel water bottle in black. 500ml, double-wall insulated.",
    sizes: ["One Size"],
    colors: [
      { ...COLORS.white, image: "images/products/bottle1.jpg" },
      { ...COLORS.black, image: "images/products/bottle2.jpg" },
    ]
  },

  /* ── CAPS ── */
  {
    id: 18,
    name: "Caps Collection",
    family: "Caps",
    category: "cap",
    price: "€8",
    badge: null,
    image: "images/products/cap1.jpg",
    description: "A&M caps collection. Structured 6-panel, adjustable strap, embroidered logo. One size fits most.",
    sizes: ["One Size"],
    colors: null
  },

  /* ── SOCKS ── */
  {
    id: 19,
    name: "Socks Pack",
    family: "Socks",
    category: "socks",
    price: "€5",
    badge: null,
    image: "images/products/socks1.jpg",
    description: "A&M logo socks in a ribbed cotton blend. Mid-calf height, woven logo at the ankle. Sold individually.",
    sizes: ["One Size"],
    colors: null
  },

  /* ── TOTEBAG ── */
  {
    id: 20,
    name: "Totebag",
    family: "Totebag",
    category: "tote",
    price: "€8",
    badge: null,
    image: "images/products/tote1.jpg",
    description: "Heavy canvas totebag with A&M print. Reinforced handles, natural cotton, holds everything.",
    sizes: ["One Size"],
    colors: null
  },

  /* ── PACKS ── */
  {
    id: 21,
    name: "Summer Pack",
    family: "Packs",
    category: "pack",
    price: "€25",
    badge: "Value",
    image: "images/products/summerpack1.jpg",
    description: "The Summer Pack: T-Shirt + Shorts + Socks. Everything you need for the warm months, bundled at a saving.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: null
  },
  {
    id: 22,
    name: "Winter Pack",
    family: "Packs",
    category: "pack",
    price: "€41",
    badge: "Value",
    image: "images/products/winterpack1.jpg",
    description: "The Winter Pack: Hoodie + Sweatshirt + Socks. Stay warm, stay fresh.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: null
  },
  {
    id: 23,
    name: "Essential Pack",
    family: "Packs",
    category: "pack",
    price: "€28",
    badge: "Value",
    image: "images/products/essentialpack1.jpg",
    description: "The Essential Pack: T-Shirt + Totebag + Socks. The perfect starter kit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: null
  },
  {
    id: 24,
    name: "Complete Pack",
    family: "Packs",
    category: "pack",
    price: "€45",
    badge: "Best Value",
    image: "images/products/completepack1.jpg",
    description: "The Complete Pack: T-Shirt + Hoodie + Shorts + Socks + Totebag. The full A&M experience.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: null
  },
];


/* ================================================================
   2. INSTAGRAM / BEHOLD CONFIG

   ★ HOW TO CONNECT LIVE INSTAGRAM (@sofiavalequaresma):

   Step 1: Go to https://behold.so and sign up (free).
   Step 2: Connect your Instagram account.
   Step 3: Create a Feed widget.
   Step 4: In the Behold dashboard, find your Feed ID (looks like:
           "abcDEF123456" — a short alphanumeric string).
   Step 5: Paste it into BEHOLD_FEED_ID below.

   The site will then call the Behold API and display your actual
   latest 6 Instagram posts automatically — no manual uploads needed.

   If BEHOLD_FEED_ID is empty (''), the grid falls back to showing
   placeholder squares (or ig1.jpg–ig6.jpg if those files exist).

   ★ FALLBACK IMAGES (optional):
   If you want placeholder images before Behold is set up,
   put ig1.jpg through ig6.jpg in the images/ folder.
================================================================ */
const BEHOLD_FEED_ID = ''; /* ← paste your Behold Feed ID here */

const IG_FALLBACK = [
  { image: "images/ig1.jpg", likes: "1.2k", comments: "34" },
  { image: "images/ig2.jpg", likes: "843",  comments: "21" },
  { image: "images/ig3.jpg", likes: "2.1k", comments: "67" },
  { image: "images/ig4.jpg", likes: "654",  comments: "18" },
  { image: "images/ig5.jpg", likes: "1.8k", comments: "45" },
  { image: "images/ig6.jpg", likes: "922",  comments: "29" },
];


/* ================================================================
   3. CUSTOM CURSOR — GPU-Accelerated

   Uses CSS transform (GPU composited) instead of left/top (slow).
   The dot follows the mouse instantly.
   The ring chases the dot with lerp for the trailing effect.

   ★ LERP FACTOR: 0.12 = current. Higher = snappier. Range 0.05–0.25
================================================================ */
function initCursor() {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  const LERP = 0.12;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function tick() {
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    ringX += (mouseX - ringX) * LERP;
    ringY += (mouseY - ringY) * LERP;
    follower.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(tick);
  }
  tick();

  const hoverTargets = 'a, button, .product-card, .ig-card, .filter-btn, .size-btn, .lang-btn, .color-swatch';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) follower.classList.add('is-hovering');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) follower.classList.remove('is-hovering');
  });
}


/* ================================================================
   4. NAVIGATION — Scroll Detection
================================================================ */
function initNav() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}


/* ================================================================
   5. SCROLL REVEAL
   
   IntersectionObserver fires when elements enter the viewport.
   Product cards get a staggered delay based on column position.
================================================================ */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

  function revealCards() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.product-card:not(.is-hidden)').forEach((card, i) => {
            card.style.setProperty('--delay', `${(i % 4) * 80}ms`);
            card.classList.add('is-revealed');
          });
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    cardObserver.observe(grid);
  }

  window.revealProductCards = revealCards;
  revealCards();
}


/* ================================================================
   6. RENDER PRODUCTS

   Builds product cards from the PRODUCTS array.
   Cards show a small row of color dots if the product has colors.
   Clicking a card opens the full modal with color swatches.
================================================================ */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(product => {
    /* Show up to 5 color dots on the card preview */
    const colorDotsHtml = (product.colors && product.colors.length > 0)
      ? `<div class="product-card__color-dots">
           ${product.colors.slice(0, 5).map(c =>
             `<span class="color-dot" style="background:${c.hex}" title="${c.label}"></span>`
           ).join('')}
           ${product.colors.length > 5 ? `<span class="color-dot-more">+${product.colors.length - 5}</span>` : ''}
         </div>`
      : '';

    return `
      <div
        class="product-card"
        data-category="${product.category}"
        data-id="${product.id}"
        role="button"
        tabindex="0"
        aria-label="View ${product.name}"
      >
        <div class="product-card__image-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'" />
          <div class="product-card__overlay">
            <span class="product-card__overlay-btn" data-i18n="product.view">View Product</span>
          </div>
        </div>
        <div class="product-card__body">
          ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}
          <p class="product-card__name">${product.name}</p>
          <p class="product-card__family">${product.family}</p>
          <div class="product-card__footer">
            <p class="product-card__price">${product.price}</p>
            ${colorDotsHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const product = PRODUCTS.find(p => p.id === parseInt(card.dataset.id));
      if (product) openModal(product);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });
  });
}


/* ================================================================
   7. HERO CANVAS — Constellation + Mouse Follow

   ★ CANVAS_CONFIG values you'll most likely want to tweak:

   particleCount:   Number of floating dots. Default: 80.
                    More = denser. Range: 40–150.

   speed:           Drift speed of particles. Default: 0.35.
                    Range: 0.1 (slow/calm) to 1.0 (chaotic).

   lineDistance:    Max distance to draw a connecting line. Default: 160.
                    Higher = more lines. Range: 100–250.

   mouseInfluence:  How strongly particles near the cursor are attracted
                    to it. Default: 0.018.
                    0 = no mouse effect. 0.05 = very strong pull.
                    Higher values make the constellation cluster around
                    the cursor; lower values make it a gentle drift.

   mouseRadius:     How far away a particle needs to be to feel the
                    mouse attraction. Default: 220 (pixels).
                    Increase for a wider influence zone.

   dotSize:         Dot radius in pixels. Default: 1.5.
   lineOpacity:     Max opacity of lines (fade with distance). Default: 0.15.
   dotOpacity:      Opacity of dots. Default: 0.5.
   dotColor / lineColor: RGB string, "255,255,255" = white.

   ★ HOW MOUSE FOLLOW WORKS:
   Each frame, if the mouse is inside the hero section, we calculate
   the distance from each particle to the mouse. Particles within
   mouseRadius get a gentle nudge toward the cursor position.
   The nudge force scales with proximity: closer = stronger pull.
   This creates the organic "constellation breathing toward the cursor"
   effect without teleporting particles or distorting the network.
================================================================ */

const CANVAS_CONFIG = {
  particleCount:  80,
  speed:          0.35,
  lineDistance:   160,
  dotSize:        1.5,
  lineOpacity:    0.15,
  dotOpacity:     0.5,
  dotColor:       '255,255,255',
  lineColor:      '255,255,255',
  mouseInfluence: 0.018,  /* ← 0 to disable, 0.05 for strong pull */
  mouseRadius:    220,    /* ← pixels around cursor that feel the pull */
};

function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  const hero   = document.getElementById('hero');
  if (!canvas || !hero) return;

  const ctx = canvas.getContext('2d');

  /* Mouse position relative to the canvas, and whether cursor is in hero */
  let mouse = { x: -9999, y: -9999, inHero: false };

  /* Track mouse position when inside the hero section */
  hero.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.inHero = true;
  }, { passive: true });

  hero.addEventListener('mouseleave', () => {
    mouse.inHero = false;
    /* Gradually move the influence point off-screen so particles drift back */
    mouse.x = -9999;
    mouse.y = -9999;
  });

  class Particle {
    constructor(w, h) { this.reset(w, h); }

    reset(w, h) {
      this.x  = Math.random() * w;
      this.y  = Math.random() * h;
      this.vx = (Math.random() - 0.5) * CANVAS_CONFIG.speed * 2;
      this.vy = (Math.random() - 0.5) * CANVAS_CONFIG.speed * 2;
    }

    update(w, h) {
      /* ── Mouse attraction ── */
      if (mouse.inHero) {
        const dx   = mouse.x - this.x;
        const dy   = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CANVAS_CONFIG.mouseRadius && dist > 0) {
          /*
            Force scales with proximity: particles very close to cursor
            are pulled more strongly. We normalise the direction vector
            (dx/dist, dy/dist) and scale by the influence factor and 
            a proximity ratio so nearby particles respond more.
          */
          const proximity = 1 - dist / CANVAS_CONFIG.mouseRadius;
          const force     = CANVAS_CONFIG.mouseInfluence * proximity;
          this.vx += (dx / dist) * force;
          this.vy += (dy / dist) * force;
        }
      }

      /*
        Speed cap — prevents particles from accelerating indefinitely
        when the mouse influence accumulates over many frames.
        maxSpeed clamps velocity to a reasonable range.
      */
      const maxSpeed = CANVAS_CONFIG.speed * 3;
      const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (currentSpeed > maxSpeed) {
        this.vx = (this.vx / currentSpeed) * maxSpeed;
        this.vy = (this.vy / currentSpeed) * maxSpeed;
      }

      this.x += this.vx;
      this.y += this.vy;

      /* Bounce off walls */
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
      this.x = Math.max(0, Math.min(w, this.x));
      this.y = Math.max(0, Math.min(h, this.y));
    }
  }

  let particles = [];
  let W = 0, H = 0;
  let animFrameId;

  function resize() {
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width  = W;
    canvas.height = H;
    particles = Array.from({ length: CANVAS_CONFIG.particleCount }, () => new Particle(W, H));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => p.update(W, H));

    const cfg = CANVAS_CONFIG;

    /* Connecting lines */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < cfg.lineDistance) {
          const alpha = cfg.lineOpacity * (1 - dist / cfg.lineDistance);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${cfg.lineColor},${alpha})`;
          ctx.lineWidth   = 0.6;
          ctx.stroke();
        }
      }
    }

    /* Dots */
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, cfg.dotSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${cfg.dotColor},${cfg.dotOpacity})`;
      ctx.fill();
    });

    animFrameId = requestAnimationFrame(draw);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(animFrameId);
    else draw();
  });

  new ResizeObserver(resize).observe(canvas);
  resize();
  draw();
}


/* ================================================================
   8. PRODUCT FILTERS
================================================================ */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.product-card').forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !match);
        if (match) {
          card.classList.remove('is-revealed');
          card.style.setProperty('--delay', '0ms');
        }
      });
      if (window.revealProductCards) window.revealProductCards();
    });
  });
}


/* ================================================================
   9. PRODUCT MODAL — with Color Swatches

   openModal(product) builds the panel HTML dynamically.

   ★ COLOR SWATCH BEHAVIOUR:
   If the product has a `colors` array, a row of circular swatches
   appears in the modal. Each swatch is a button with:
     - background colour = the color hex
     - white border when selected (.selected class)
     - title tooltip on hover = color label
   
   Clicking a swatch:
   1. Marks it .selected (adds white ring)
   2. Fades the main product image out, swaps the src to the
      color's image, then fades back in
   3. Updates a small "selected colour" text label below the swatches
   
   The initial selected swatch is the one that matches the product's
   current image (i.e., the colour the card was showing when clicked).

   ★ ADD TO CART:
   Replace the alert() in the modalAddBtn click handler with your 
   cart system (Shopify, Snipcart, etc.).
================================================================ */
let selectedSize  = null;
let selectedColor = null;

function openModal(product) {
  const modal   = document.getElementById('productModal');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  const lang = document.documentElement.dataset.lang || 'en';
  const t    = TRANSLATIONS[lang];

  /* ── Build sizes HTML ── */
  const sizesHTML = product.sizes.map(size => `
    <button class="size-btn" data-size="${size}" aria-label="${t['modal.size'] || 'Size'} ${size}">${size}</button>
  `).join('');

  /* ── Build color swatches HTML ── */
  let colorsHTML = '';
  if (product.colors && product.colors.length > 0) {
    /* Find which color is currently active (match by image path) */
    const activeIdx = product.colors.findIndex(c => c.image === product.image) ?? 0;
    selectedColor   = product.colors[activeIdx >= 0 ? activeIdx : 0];

    const swatchesHTML = product.colors.map((color, idx) => `
      <button
        class="color-swatch${idx === (activeIdx >= 0 ? activeIdx : 0) ? ' selected' : ''}"
        data-color-idx="${idx}"
        style="background: ${color.hex}"
        title="${color.label}"
        aria-label="${t['modal.color'] || 'Colour'}: ${color.label}"
      ></button>
    `).join('');

    colorsHTML = `
      <div class="modal__colors">
        <div class="modal__colors-header">
          <span class="modal__sizes-label">${t['modal.colour'] || 'Colour'}</span>
          <span class="modal__color-selected" id="modalColorSelected">${selectedColor.label}</span>
        </div>
        <div class="modal__color-swatches">${swatchesHTML}</div>
      </div>
    `;
  }

  /* ── Assemble full modal content ── */
  content.innerHTML = `
    <img
      class="modal__image"
      id="modalProductImage"
      src="${product.image}"
      alt="${product.name}"
      onerror="this.style.background='var(--color-navy-mid)'; this.removeAttribute('src')"
    />
    <div class="modal__meta">
      <p class="modal__family">${product.family}</p>
      <h2 class="modal__title">${product.name}</h2>
      <p class="modal__price">${product.price}</p>
    </div>
    <p class="modal__desc">${product.description}</p>

    ${colorsHTML}

    <div class="modal__sizes">
      <span class="modal__sizes-label">${t['modal.selectSize'] || 'Select Size'}</span>
      ${sizesHTML}
    </div>

    <button class="btn btn--primary btn--full" id="modalAddBtn" style="margin-top:1.5rem">
      ${t['modal.addToCart'] || 'Add to Cart'}
    </button>
    <p class="modal__shipping-note">
      ${t['modal.shipping'] || 'Free shipping on orders over €50'}
    </p>
  `;

  /* ── Color swatch interactions ── */
  if (product.colors && product.colors.length > 0) {
    const modalImage     = content.querySelector('#modalProductImage');
    const colorSelected  = content.querySelector('#modalColorSelected');

    content.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        /* Update active swatch */
        content.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
        swatch.classList.add('selected');

        const idx   = parseInt(swatch.dataset.colorIdx);
        const color = product.colors[idx];
        selectedColor = color;

        /* Update the label text */
        if (colorSelected) colorSelected.textContent = color.label;

        /* Crossfade the product image to the new colour */
        modalImage.style.opacity = '0';
        setTimeout(() => {
          modalImage.src = color.image;
          modalImage.style.opacity = '1';
        }, 180);
      });
    });
  }

  /* ── Size button interactions ── */
  content.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      content.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSize = btn.dataset.size;
    });
  });

  /* ── Add to Cart ── */
  content.querySelector('#modalAddBtn')?.addEventListener('click', () => {
    if (!selectedSize && product.sizes.length > 1) {
      alert(t['modal.selectSizeAlert'] || 'Please select a size first.');
      return;
    }
    const colorNote = selectedColor ? ` — ${selectedColor.label}` : '';
    alert(`${product.name}${colorNote} (${selectedSize || 'One Size'}) added to cart!\n\nConnect this to your checkout system.`);
  });

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  selectedSize  = null;
  selectedColor = product.colors?.[0] ?? null;
}

function closeModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModal() {
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.getElementById('modalBackdrop')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}


/* ================================================================
   10. RENDER INSTAGRAM FEED

   If BEHOLD_FEED_ID is set: fetches live posts from Behold API.
   If not: uses IG_FALLBACK array (local placeholder images).

   Behold API returns an array of post objects. We take the first 6.
   Each post has: mediaSizes.medium.url (image URL), permalink, caption.
================================================================ */
async function renderInstagram() {
  const grid = document.getElementById('instagramGrid');
  if (!grid) return;

  let posts = null;

  /* Attempt to load from Behold if Feed ID is configured */
  if (BEHOLD_FEED_ID) {
    try {
      const res  = await fetch(`https://feeds.behold.so/${BEHOLD_FEED_ID}`);
      const data = await res.json();
      /* Behold returns an array — take first 6 posts */
      posts = data.slice(0, 6).map(post => ({
        image:    post.mediaSizes?.medium?.url || post.mediaUrl,
        likes:    null, /* Behold free tier doesn't expose like counts */
        comments: null,
        url:      post.permalink,
      }));
    } catch (err) {
      console.warn('Behold feed failed, using fallback:', err);
    }
  }

  /* Fall back to static placeholder data */
  if (!posts) posts = IG_FALLBACK;

  grid.innerHTML = posts.map(post => `
    <a
      class="ig-card"
      ${post.url ? `href="${post.url}" target="_blank" rel="noopener"` : ''}
      data-reveal
    >
      <img src="${post.image}" alt="@sofiavalequaresma" loading="lazy" onerror="this.style.display='none'" />
      <div class="ig-card__overlay">
        ${post.likes    ? `<div class="ig-card__stat">♡ ${post.likes}</div>` : ''}
        ${post.comments ? `<div class="ig-card__stat">💬 ${post.comments}</div>` : ''}
        <div class="ig-card__stat ig-card__handle">@sofiavalequaresma</div>
      </div>
    </a>
  `).join('');
}


/* ================================================================
   11. CONTACT FORM — Formspree

   ★ SETUP:
   1. Go to https://formspree.io → New Form → enter thebest.aem@gmail.com
   2. Copy the 8-character Form ID (e.g. "xpzvwqbo")
   3. Replace YOUR_FORM_ID below with your actual ID

   Free tier: 50 submissions/month.
================================================================ */
const FORMSPREE_ID = 'YOUR_FORM_ID'; /* ← replace with your Formspree Form ID */

function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.toggle('has-value', field.value.trim() !== '');
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (FORMSPREE_ID && FORMSPREE_ID !== 'YOUR_FORM_ID') {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) showSuccess();
        else alert('Something went wrong. Please email thebest.aem@gmail.com directly.');
      } catch {
        alert('Could not send. Please email thebest.aem@gmail.com directly.');
      }
    } else {
      showSuccess(); /* Preview mode — no Formspree ID yet */
    }
  });

  function showSuccess() {
    form.style.opacity = '0.5';
    form.style.pointerEvents = 'none';
    if (success) success.classList.add('is-visible');
  }
}


/* ================================================================
   12. FOOTER YEAR
================================================================ */
function initFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}


/* ================================================================
   13. TRANSLATIONS — EN / PT-PT

   ★ HOW TO EDIT:
   Find the key you want to change (matches data-i18n in index.html).
   Update the text in en and/or pt.

   ★ HOW TO ADD A NEW STRING:
   1. Add data-i18n="my.key" to the element in index.html.
   2. Add "my.key": "English text" to en: {} below.
   3. Add "my.key": "Texto PT" to pt: {} below.
================================================================ */
const TRANSLATIONS = {
  en: {
    'nav.shop': 'Shop', 'nav.feed': 'Feed', 'nav.contact': 'Contact',
    'hero.eyebrow': 'New Season Drop', 'hero.line1': 'WEAR', 'hero.line2': 'YOUR',
    'hero.line3': 'STANDARD', 'hero.sub': 'Premium quality. Minimal design. Built to last.',
    'hero.cta': 'Shop the Collection', 'hero.scroll': 'Scroll',
    'ticker.1': 'Premium Merch', 'ticker.2': 'Free Shipping Over €50',
    'ticker.3': 'New Drops Weekly', 'ticker.4': 'Unisex Sizing',
    'ticker.5': '100% Organic Cotton', 'ticker.6': 'Limited Quantities',
    'products.eyebrow': 'The Collection', 'products.title': 'Shop Everything',
    'filter.all': 'All', 'filter.tshirt': 'T-Shirts', 'filter.tshirt-nolog': 'No Logo',
    'filter.hoodie': 'Hoodies', 'filter.sweatshirt': 'Sweatshirts', 'filter.shorts': 'Shorts',
    'filter.bottle': 'Water Bottles', 'filter.cap': 'Caps', 'filter.socks': 'Socks',
    'filter.tote': 'Totebags', 'filter.pack': 'Packs',
    'product.view': 'View Product',
    'modal.selectSize': 'Select Size', 'modal.colour': 'Colour', 'modal.color': 'Colour',
    'modal.addToCart': 'Add to Cart', 'modal.shipping': 'Free shipping on orders over €50',
    'modal.selectSizeAlert': 'Please select a size first.', 'modal.size': 'Size',
    'instagram.title': 'The Feed',
    'contact.eyebrow': 'Get in Touch', 'contact.title': "Let's Talk",
    'contact.desc': 'Questions about sizing, wholesale, or collabs?<br />We usually reply within 24 hours.',
    'contact.name': 'Your Name', 'contact.email': 'Email Address',
    'contact.subject': 'Subject', 'contact.message': 'Your Message',
    'contact.send': 'Send Message', 'contact.success': "✓ Message sent! We'll be in touch soon.",
    'footer.rights': 'All rights reserved.', 'footer.privacy': 'Privacy',
    'footer.shipping': 'Shipping', 'footer.returns': 'Returns',
  },
  pt: {
    'nav.shop': 'Loja', 'nav.feed': 'Feed', 'nav.contact': 'Contacto',
    'hero.eyebrow': 'Nova Coleção', 'hero.line1': 'VESTE', 'hero.line2': 'O TEU',
    'hero.line3': 'STANDARD', 'hero.sub': 'Qualidade premium. Design minimalista. Feito para durar.',
    'hero.cta': 'Ver Coleção', 'hero.scroll': 'Explorar',
    'ticker.1': 'Merch Premium', 'ticker.2': 'Envio Grátis Acima de €50',
    'ticker.3': 'Novidades Semanais', 'ticker.4': 'Tamanhos Unissexo',
    'ticker.5': '100% Algodão Orgânico', 'ticker.6': 'Quantidades Limitadas',
    'products.eyebrow': 'A Coleção', 'products.title': 'Ver Tudo',
    'filter.all': 'Todos', 'filter.tshirt': 'T-Shirts', 'filter.tshirt-nolog': 'Sem Logo',
    'filter.hoodie': 'Hoodies', 'filter.sweatshirt': 'Sweatshirts', 'filter.shorts': 'Calções',
    'filter.bottle': 'Garrafas', 'filter.cap': 'Bonés', 'filter.socks': 'Meias',
    'filter.tote': 'Totebags', 'filter.pack': 'Packs',
    'product.view': 'Ver Produto',
    'modal.selectSize': 'Escolher Tamanho', 'modal.colour': 'Cor', 'modal.color': 'Cor',
    'modal.addToCart': 'Adicionar ao Carrinho', 'modal.shipping': 'Envio grátis acima de €50',
    'modal.selectSizeAlert': 'Por favor escolhe um tamanho.', 'modal.size': 'Tamanho',
    'instagram.title': 'O Feed',
    'contact.eyebrow': 'Fala Connosco', 'contact.title': 'Vamos Falar',
    'contact.desc': 'Dúvidas sobre tamanhos, grossista ou colaborações?<br />Respondemos geralmente em 24 horas.',
    'contact.name': 'O Teu Nome', 'contact.email': 'Endereço de Email',
    'contact.subject': 'Assunto', 'contact.message': 'A Tua Mensagem',
    'contact.send': 'Enviar Mensagem', 'contact.success': '✓ Mensagem enviada! Estamos em contacto.',
    'footer.rights': 'Todos os direitos reservados.', 'footer.privacy': 'Privacidade',
    'footer.shipping': 'Envios', 'footer.returns': 'Devoluções',
  }
};


/* ================================================================
   14. LANGUAGE SWITCHER
================================================================ */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!t[key]) return;
    el.innerHTML = key === 'contact.desc' ? t[key] : '';
    if (key !== 'contact.desc') el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.dataset.lang = lang;
  try { localStorage.setItem('am-lang', lang); } catch {}
}

function initLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  try {
    const saved = localStorage.getItem('am-lang');
    if (saved && TRANSLATIONS[saved]) setLanguage(saved);
  } catch {}
}


/* ================================================================
   15. INIT
================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initHeroCanvas();
  renderProducts();
  renderInstagram();
  initScrollReveal();
  initFilters();
  initModal();
  initContactForm();
  initFooterYear();
  initLanguageSwitcher();
  console.log('A&M — site loaded ✓');
});
