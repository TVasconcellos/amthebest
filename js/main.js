/* ================================================================
   A&M — Main JavaScript  (main.js)

   ★ QUICK TWEAK GUIDE:

   PRODUCTS:      Edit PRODUCTS array (section 1).
                  Images go in images/products/
   
   COLOR VARIANTS: Each product can have a `colors` array (section 1).
                   Each color entry: { label, hex, image }
                   Products without colors skip the swatch UI.
   
   TRANSLATIONS:  Edit PRODUCT_TRANSLATIONS for product names/descriptions
                  in PT, or TRANSLATIONS object for UI labels (section 11).
   
   FORMSPREE:     Set FORMSPREE_ID (section 9) after signing up at formspree.io
   
   ORDER EMAIL:   Change ORDER_EMAIL in section 13 to redirect orders.
   
   MBWAY NUMBER:  Change MBWAY_NUMBER in section 13 to update payment number.

   ================================================================

   FILE STRUCTURE:
   1.  PRODUCT DATA (with color variants)
   2.  CUSTOM CURSOR
   3.  NAVIGATION
   4.  SCROLL REVEAL + INITIAL CARD REVEAL
   5.  RENDER PRODUCTS
   6.  PRODUCT MODAL (with color swatches)
   7.  PRODUCT FILTERS + SORT
   8.  CONTACT FORM
   9.  FOOTER YEAR
   10. TRANSLATIONS (UI + per-product)
   11. LANGUAGE SWITCHER
   12. SHOPPING CART + ORDER MODAL
   13. INIT
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
  burgundy:     { label: 'Burgundy',     hex: '#5C1A1A' },
  navy:         { label: 'Navy',         hex: '#1B2A4A' },
  forestGreen:  { label: 'Forest Green', hex: '#2D4A2D' },
  black:        { label: 'Black',        hex: '#111111' },
  white:        { label: 'White',        hex: '#F0F0F0' },
};

/*
  PRODUCTS array

  ★ FIELDS:
  id          → unique number, never repeat
  name        → display name (English source of truth; PT in PRODUCT_TRANSLATIONS)
  family      → human-readable group label
  category    → must match a filter button data-filter in index.html
                 valid: tshirt | tshirt-nolog | hoodie | sweatshirt | shorts |
                        accessories | cap | socks | pack
  price       → display string, e.g. "€15" or "€1.50"
  badge       → null | "Best Seller" | "New" | "Best Value"
  save        → optional savings indicator shown next to price (packs only)
                 e.g. "€3" → renders as "Save €3"
  image       → primary/default image path
  description → modal body text
  sizes       → ["S","M","L","XL"] for apparel, ["One Size"] otherwise
  colors      → array of { label, hex, image } variants, or null
*/
const PRODUCTS = [

  /* ──────────────── APPAREL ──────────────── */
  {
    id: 1,
    name: "T-Shirt",
    family: "T-Shirt",
    category: "tshirt",
    price: "€15",
    badge: "Best Seller",
    image: "images/products/shirt1.jpg",
    description: "T-shirt with exclusive brand design.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { ...COLORS.burgundy,    image: "images/products/shirt1.jpg" },
      { ...COLORS.navy,        image: "images/products/shirt2.jpg" },
      { ...COLORS.forestGreen, image: "images/products/shirt3.jpg" },
      { ...COLORS.black,       image: "images/products/shirt4.jpg" },
      { ...COLORS.white,       image: "images/products/shirt5.jpg" },
    ]
  },
  {
    id: 2,
    name: 'T-Shirt "The Best." Collection',
    family: 'T-Shirt "The Best." Collection',
    category: "tshirt-nolog",
    price: "€15",
    badge: "New",
    image: "images/products/shirt6.jpg",
    description: 'T-shirt with exclusive brand design.',
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { ...COLORS.burgundy,    image: "images/products/shirt6.jpg" },
      { ...COLORS.navy,        image: "images/products/shirt7.jpg" },
      { ...COLORS.forestGreen, image: "images/products/shirt8.jpg" },
      { ...COLORS.black,       image: "images/products/shirt9.jpg" },
      { ...COLORS.white,       image: "images/products/shirt10.jpg" },
    ]
  },
  {
    id: 3,
    name: "Hoodie",
    family: "Hoodie",
    category: "hoodie",
    price: "€20",
    badge: "New",
    image: "images/products/hoodie1.jpg",
    description: "Hoodie with exclusive brand design.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { ...COLORS.white, image: "images/products/hoodie1.jpg" },
      { ...COLORS.black, image: "images/products/hoodie2.jpg" },
    ]
  },
  {
    id: 4,
    name: "Sweatshirt",
    family: "Sweatshirt",
    category: "sweatshirt",
    price: "€16",
    badge: null,
    image: "images/products/sweatshirt1.jpg",
    description: "Sweatshirt with exclusive brand design.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { ...COLORS.white, image: "images/products/sweatshirt1.jpg" },
      { ...COLORS.black, image: "images/products/sweatshirt2.jpg" },
    ]
  },
  {
    id: 5,
    name: "Shorts",
    family: "Shorts",
    category: "shorts",
    price: "€15",
    badge: "New",
    image: "images/products/shorts1.jpg",
    description: "Shorts with exclusive brand design.",
    sizes: ["S", "M", "L", "XL"],
    colors: null
  },

  /* ──────────────── CAPS ──────────────── */
  {
    id: 6,
    name: "Cap",
    family: "Cap",
    category: "cap",
    price: "€8",
    badge: "Best Seller",
    image: "images/products/cap1.jpg",
    description: "Cap with brand detail.",
    sizes: ["One Size"],
    colors: null
  },

  /* ──────────────── SOCKS ──────────────── */
  {
    id: 7,
    name: "Socks",
    family: "Socks",
    category: "socks",
    price: "€5",
    badge: "Best Seller",
    image: "images/products/socks1.jpg",
    description: "Socks with exclusive brand design.",
    sizes: ["One Size"],
    colors: null
  },

  /* ──────────────── ACCESSORIES ──────────────── */
  {
    id: 8,
    name: "Water Bottle",
    family: "Water Bottle A&M",
    category: "accessories",
    price: "€15",
    badge: "New",
    image: "images/products/bottle1.jpg",
    description: "Reusable water bottle with brand branding. Available in 350ml and 600ml, in white and black. The displayed image shows the 600ml; the 350ml is the same design at a smaller capacity.",
    /*
      Two volume options. The colour swatches still drive the displayed image
      (white = bottle1.jpg, black = bottle2.jpg — both showing the 600ml).
      The 350ml versions live in image files bottle3.jpg (white) / bottle4.jpg (black)
      but aren't surfaced as image variants here — the customer's chosen size 
      is captured in the cart/order regardless.
    */
    sizes: ["350ml", "600ml"],
    colors: [
      { ...COLORS.white, image: "images/products/bottle1.jpg" },
      { ...COLORS.black, image: "images/products/bottle2.jpg" },
    ]
  },
  {
    id: 9,
    name: "Totebag",
    family: "Totebag",
    category: "accessories",
    price: "€8",
    badge: "New",
    image: "images/products/tote1.jpg",
    description: "Totebag with brand branding.",
    sizes: ["One Size"],
    colors: null
  },
  {
    id: 10,
    name: "Playing Cards",
    family: "Playing Cards",
    category: "accessories",
    price: "€10",
    badge: "New",
    image: "images/products/baralho_cartas1.jpg",
    description: "Plastic-coated playing cards with custom design.",
    sizes: ["One Size"],
    colors: [
      /* Two designs / variants — using the existing image pair */
      { label: 'Design A', hex: '#222222', image: "images/products/baralho_cartas1.jpg" },
      { label: 'Design B', hex: '#888888', image: "images/products/baralho_cartas2.jpg" },
    ]
  },
  {
    id: 11,
    name: "Coasters",
    family: "Coasters",
    category: "accessories",
    price: "€15",
    badge: "New",
    image: "images/products/base_copos1.jpg",
    description: "Leather coasters with brand detail.",
    sizes: ["One Size"],
    colors: [
      { label: 'Design A', hex: '#222222', image: "images/products/base_copos1.jpg" },
      { label: 'Design B', hex: '#888888', image: "images/products/base_copos2.jpg" },
    ]
  },
  {
    id: 12,
    name: "Notebook",
    family: "Notebook",
    category: "accessories",
    price: "€10",
    badge: "New",
    image: "images/products/caderno1.jpg",
    description: "A5 lined notebook with brand detail.",
    sizes: ["One Size"],
    colors: null
  },
  {
    id: 13,
    name: "Pen",
    family: "Pen",
    category: "accessories",
    price: "€1.50",
    badge: "Best Seller",
    image: "images/products/caneta1.jpg",
    description: "Pen with brand detail.",
    sizes: ["One Size"],
    colors: null
  },
  {
    id: 14,
    name: "Pack of Pens",
    family: "Pack of Pens",
    category: "accessories",
    price: "€3.50",
    badge: "Best Seller",
    image: "images/products/pack_canetas1.jpg",
    description: "Pens with brand detail. The complete writing pack.",
    sizes: ["One Size"],
    colors: null
  },
  {
    id: 15,
    name: "Keychain",
    family: "Keychain",
    category: "accessories",
    price: "€4",
    badge: "New",
    image: "images/products/porta_chaves.jpg",
    description: "Metal keychain with brand branding.",
    sizes: ["One Size"],
    colors: null
  },
  {
    id: 16,
    name: "Phone Case",
    family: "Phone Case",
    category: "accessories",
    price: "€5",
    badge: "New",
    image: "images/products/capa_telemovel.jpg",
    description: "Black phone case with brand branding.",
    sizes: ["One Size"],
    colors: null
  },

  /* ──────────────── PACKS ────────────────
     Packs use the optional `save` field to display "Save €X" next to the price. */
  {
    id: 17,
    name: "Summer Pack",
    family: "Packs",
    category: "pack",
    price: "€25",
    save: "€3",
    badge: "Best Value",
    image: "images/products/summerpack1.jpg",
    description: "The Summer Pack: T-Shirt + Shorts + Socks. Everything you need for the warm months, bundled at a saving.",
    sizes: ["S", "M", "L", "XL"],
    colors: null
  },
  {
    id: 18,
    name: "Winter Pack",
    family: "Packs",
    category: "pack",
    price: "€36",
    save: "€5",
    badge: "Best Value",
    image: "images/products/winterpack1.jpg",
    description: "The Winter Pack: Hoodie + Sweatshirt + Socks. Stay warm, stay fresh.",
    sizes: ["S", "M", "L", "XL"],
    colors: null
  },
  {
    id: 19,
    name: "Essential Pack",
    family: "Packs",
    category: "pack",
    price: "€28",
    save: "€3",
    badge: "Best Value",
    image: "images/products/essentialpack1.jpg",
    description: "The Essential Pack: T-Shirt + Totebag + Socks. The perfect starter kit.",
    sizes: ["S", "M", "L", "XL"],
    colors: null
  },
  {
    id: 20,
    name: "Complete Pack",
    family: "Packs",
    category: "pack",
    price: "€43",
    save: "€5",
    badge: "Best Value",
    image: "images/products/completepack1.jpg",
    description: "The Complete Pack: T-Shirt + Hoodie + Shorts + Socks + Totebag. The full A&M experience.",
    sizes: ["S", "M", "L", "XL"],
    colors: null
  },
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

  const hoverTargets = 'a, button, .product-card, .filter-btn, .size-btn, .lang-btn, .color-swatch';
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
  /*
    Generic scroll-reveal observer for [data-reveal] elements.
    These animate in as they enter the viewport.
    Used on section headers, CTAs, and other accent content.
  */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

  /*
    Product cards: revealed immediately on page load with a quick stagger.
    
    Why not scroll-triggered? The grid is a content-heavy area — making 
    customers scroll to "load" the products feels wrong. They might think
    the grid is broken if they land mid-page. The brief stagger still adds 
    polish without forcing a wait.
    
    The stagger is small (40ms × column index) so it's perceived as elegant
    rather than slow. Even with 24 products, the last card is revealed in
    under 200ms.
  */
  function revealCards() {
    const cards = document.querySelectorAll('.product-card:not(.is-hidden)');
    cards.forEach((card, i) => {
      card.style.setProperty('--delay', `${(i % 4) * 40}ms`);
      card.classList.add('is-revealed');
    });
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

  /*
    Resolve UI translations once per render. Card overlays and badges
    are built fresh on every render, so they read the current language
    at this moment — no data-i18n attribute needed.
  */
  const lang = document.documentElement.dataset.lang || 'en';
  const t    = TRANSLATIONS[lang];
  const viewLabel = t['product.view'] || 'View Product';

  grid.innerHTML = PRODUCTS.map(product => {
    /* Resolve translated name/family for the current language */
    const tName   = tProduct(product, 'name');
    const tFamily = tProduct(product, 'family');
    const tBadgeLabel = product.badge ? tBadge(product.badge) : null;

    /* Show up to 5 color dots on the card preview */
    const colorDotsHtml = (product.colors && product.colors.length > 0)
      ? `<div class="product-card__color-dots">
           ${product.colors.slice(0, 5).map(c =>
             `<span class="color-dot" style="background:${c.hex}" title="${tColor(c.label)}"></span>`
           ).join('')}
           ${product.colors.length > 5 ? `<span class="color-dot-more">+${product.colors.length - 5}</span>` : ''}
         </div>`
      : '';

    return `
      <div
        class="product-card"
        data-category="${product.category}"
        data-id="${product.id}"
        data-name="${tName.toLowerCase()}"
        data-price="${parseFloat(product.price.replace(/[^0-9.]/g, ''))}"
        role="button"
        tabindex="0"
        aria-label="${viewLabel}: ${tName}"
      >
        <div class="product-card__image-wrap">
          <img src="${product.image}" alt="${tName}" loading="lazy" onerror="this.style.display='none'" />
          <div class="product-card__overlay">
            <span class="product-card__overlay-btn">${viewLabel}</span>
          </div>
        </div>
        <div class="product-card__body">
          ${tBadgeLabel ? `<span class="product-card__badge">${tBadgeLabel}</span>` : ''}
          <p class="product-card__name">${tName}</p>
          <p class="product-card__family">${tFamily}</p>
          <div class="product-card__footer">
            <div class="product-card__price-block">
              <p class="product-card__price">${product.price}</p>
              ${product.save ? `<span class="product-card__save">${tSave(product.save)}</span>` : ''}
            </div>
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
   7. PRODUCT FILTERS + SORT

   Filter buttons show/hide cards by category.
   Sort select re-orders visible cards by name or price.

   ★ GHOST CARD FIX:
   CSS grid always fills columns to complete rows, which creates
   empty grey placeholder cells at the end when the count isn't
   a clean multiple of the column count.
   We fix this by appending invisible "filler" <div> elements —
   as many as needed to complete the last row without showing borders.
   These have no content and no background, so they're truly invisible.
   They're recalculated every time filter or sort changes.

   ★ SORT LOGIC:
   We don't re-render the cards — we reorder the existing DOM nodes
   by appending them to the grid in the new sorted order.
   This keeps event listeners intact and avoids a full re-render.
================================================================ */

/* Returns the number of columns in the grid at current viewport width */
function getGridColumnCount() {
  const grid = document.getElementById('productGrid');
  if (!grid) return 4;
  /* getComputedStyle gives us the actual rendered column template */
  const cols = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
  return cols || 4;
}

/* Remove any existing ghost fillers, then add the right number of new ones */
function fixGhostCells() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  /* Remove previously added fillers */
  grid.querySelectorAll('.grid-filler').forEach(el => el.remove());

  /* Count visible (non-hidden) real cards */
  const visibleCards = grid.querySelectorAll('.product-card:not(.is-hidden)').length;
  const cols = getGridColumnCount();
  const remainder = visibleCards % cols;
  if (remainder === 0) return; /* Last row is already complete */

  /* Add enough invisible fillers to complete the last row */
  const fillersNeeded = cols - remainder;
  for (let i = 0; i < fillersNeeded; i++) {
    const filler = document.createElement('div');
    filler.className = 'grid-filler';
    grid.appendChild(filler);
  }
}

/* Sort visible cards in the DOM by the given key */
function sortCards(value) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.product-card:not(.grid-filler)'));

  cards.sort((a, b) => {
    if (value === 'name-asc')  return a.dataset.name.localeCompare(b.dataset.name);
    if (value === 'name-desc') return b.dataset.name.localeCompare(a.dataset.name);
    if (value === 'price-asc')  return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
    if (value === 'price-desc') return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
    /* 'default': sort by original id order */
    return parseInt(a.dataset.id) - parseInt(b.dataset.id);
  });

  /* Re-append in new order (fillers come last and are re-added by fixGhostCells) */
  cards.forEach(card => grid.appendChild(card));
  fixGhostCells();
}

function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const sortSelect = document.getElementById('sortSelect');

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

      /* Re-apply current sort after filtering */
      if (sortSelect) sortCards(sortSelect.value);
      else fixGhostCells();

      if (window.revealProductCards) window.revealProductCards();
    });
  });

  /* Sort dropdown */
  if (sortSelect) {
    sortSelect.addEventListener('change', () => sortCards(sortSelect.value));
  }

  /* Initial ghost fix after first render */
  fixGhostCells();

  /* Recalculate on resize (column count can change) */
  window.addEventListener('resize', fixGhostCells, { passive: true });
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

  /* ── Build sizes HTML — wrapped in a flex row so they sit horizontally ── */
  const sizesHTML = `<div class="modal__sizes-grid">
    ${product.sizes.map(size => `
      <button class="size-btn" data-size="${size}" aria-label="${t['modal.size'] || 'Size'} ${size}">${size}</button>
    `).join('')}
  </div>`;

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
        title="${tColor(color.label)}"
        aria-label="${t['modal.color'] || 'Colour'}: ${tColor(color.label)}"
      ></button>
    `).join('');

    colorsHTML = `
      <div class="modal__colors">
        <div class="modal__colors-header">
          <span class="modal__sizes-label">${t['modal.colour'] || 'Colour'}</span>
          <span class="modal__color-selected" id="modalColorSelected">${tColor(selectedColor.label)}</span>
        </div>
        <div class="modal__color-swatches">${swatchesHTML}</div>
      </div>
    `;
  }

  /* ── Assemble full modal content ──
       Layout: two columns on wide screens (image left, details right),
       stacked on narrow screens. .modal__layout is the flex/grid wrapper. */
  content.innerHTML = `
    <div class="modal__layout">
      <div class="modal__media">
        <img
          class="modal__image"
          id="modalProductImage"
          src="${product.image}"
          alt="${product.name}"
          onerror="this.style.background='var(--color-navy-mid)'; this.removeAttribute('src')"
        />
      </div>

      <div class="modal__details">
        <div class="modal__meta">
          <p class="modal__family">${tProduct(product, 'family')}</p>
          <h2 class="modal__title">${tProduct(product, 'name')}</h2>
          <div class="modal__price-row">
            <p class="modal__price">${product.price}</p>
            ${product.save ? `<span class="modal__save">${tSave(product.save)}</span>` : ''}
          </div>
        </div>
        <p class="modal__desc">${tProduct(product, 'description')}</p>

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
      </div>
    </div>
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
        if (colorSelected) colorSelected.textContent = tColor(color.label);

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
    /* Add the item to the real cart (defined in section 16) */
    Cart.add({
      id:       product.id,
      name:     product.name,
      family:   product.family,
      price:    parseFloat(product.price.replace(/[^0-9.]/g, '')),
      priceStr: product.price,
      size:     selectedSize || 'One Size',
      color:    selectedColor ? selectedColor.label : null,
      image:    selectedColor ? selectedColor.image : product.image,
    });
    closeModal();
    /* Brief delay then open the cart so the user sees what was added */
    setTimeout(() => Cart.open(), 350);
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
/* ================================================================
   13. TRANSLATIONS — EN / PT-PT

   Two parts:
   
   PRODUCT_TRANSLATIONS — keyed by product ID, with name/family/description
   for each language. English values are already in the PRODUCTS array
   as defaults, so we only need to define non-English here.
   
   TRANSLATIONS — UI text (buttons, labels, messages).

   ★ HOW TO ADD/EDIT TRANSLATIONS:
   
   For PRODUCT names/descriptions:
     Edit PRODUCT_TRANSLATIONS below. Use the product's id as the key.
     If a key is missing for a given language, the English default 
     from PRODUCTS is used as a fallback.
   
   For UI text:
     Find the key in TRANSLATIONS that matches data-i18n in index.html
     and update its value.
   
   ★ HOW TO ADD A NEW UI STRING:
   1. Add data-i18n="my.key" to the element in index.html.
   2. Add "my.key": "English text" to en: {}.
   3. Add "my.key": "Texto PT" to pt: {}.
================================================================ */

/*
  Per-product translations. English is the source of truth in PRODUCTS;
  add Portuguese (and any future language) entries below for each product
  you want translated.
  
  Fields you can translate per product:
    name        — shown on cards, modal, cart, order summary
    family      — shown on cards (the muted line under the name) and in modal
    description — shown in modal only
  
  Any missing field falls back to the value in PRODUCTS.
*/
const PRODUCT_TRANSLATIONS = {
  pt: {
    /* Apparel */
    1:  {
      name: 'T-Shirt',
      family: 'T-Shirt',
      description: 'T-shirt com design exclusivo da marca.'
    },
    2:  {
      name: 'T-Shirt Coleção "The Best."',
      family: 'T-Shirt Coleção "The Best."',
      description: 'T-shirt com design exclusivo da marca.'
    },
    3:  {
      name: 'Hoodie',
      family: 'Hoodie',
      description: 'Hoodie com design exclusivo da marca.'
    },
    4:  {
      name: 'Sweatshirt',
      family: 'Sweatshirt',
      description: 'Sweatshirt com design exclusivo da marca.'
    },
    5:  {
      name: 'Calções',
      family: 'Calções',
      description: 'Calções com design exclusivo da marca.'
    },

    /* Caps */
    6:  {
      name: 'Boné',
      family: 'Boné',
      description: 'Boné com detalhe da marca.'
    },

    /* Socks */
    7:  {
      name: 'Meias',
      family: 'Meias',
      description: 'Meias com design exclusivo da marca.'
    },

    /* Accessories */
    8:  {
      name: 'Garrafa de Água',
      family: 'Garrafa A&M',
      description: 'Garrafa de água reutilizável com branding da marca. Disponível em 350ml e 600ml, em branco e preto. A imagem mostra a versão de 600ml; a de 350ml tem o mesmo design em capacidade mais pequena.'
    },
    9:  {
      name: 'Totebag',
      family: 'Totebag',
      description: 'Totebag com branding da marca.'
    },
    10: {
      name: 'Baralho de Cartas',
      family: 'Baralho de Cartas',
      description: 'Baralho de cartas plastificadas com design personalizado.'
    },
    11: {
      name: 'Bases para Copos',
      family: 'Bases para Copos',
      description: 'Bases para copos em cabedal com detalhe da marca.'
    },
    12: {
      name: 'Caderno',
      family: 'Caderno',
      description: 'Caderno A5 de linhas com detalhe da marca.'
    },
    13: {
      name: 'Caneta',
      family: 'Caneta',
      description: 'Caneta com detalhe da marca.'
    },
    14: {
      name: 'Pack de Canetas',
      family: 'Pack de Canetas',
      description: 'Canetas com detalhe da marca. O pack de escrita completo.'
    },
    15: {
      name: 'Porta-chaves',
      family: 'Porta-chaves',
      description: 'Porta-chaves metálico com branding da marca.'
    },
    16: {
      name: 'Capa de Telemóvel',
      family: 'Capa de Telemóvel',
      description: 'Capa de telemóvel preta com branding da marca.'
    },

    /* Packs */
    17: {
      name: 'Pack Verão',
      family: 'Packs',
      description: 'O Pack Verão: T-Shirt + Calções + Meias. Tudo o que precisas para os meses quentes, com desconto.'
    },
    18: {
      name: 'Pack Inverno',
      family: 'Packs',
      description: 'O Pack Inverno: Hoodie + Sweatshirt + Meias. Mantém-te quente, mantém-te fresh.'
    },
    19: {
      name: 'Pack Essencial',
      family: 'Packs',
      description: 'O Pack Essencial: T-Shirt + Totebag + Meias. O kit inicial perfeito.'
    },
    20: {
      name: 'Pack Completo',
      family: 'Packs',
      description: 'O Pack Completo: T-Shirt + Hoodie + Calções + Meias + Totebag. A experiência A&M completa.'
    },
  }
};

/*
  Resolve a translated value for a product field in the current language.
  Falls back to the value on the PRODUCTS object if no translation exists.
  
  Usage: tProduct(product, 'name')   → returns translated name or default
*/
function tProduct(product, field) {
  const lang = document.documentElement.dataset.lang || 'en';
  if (lang === 'en') return product[field];
  return PRODUCT_TRANSLATIONS[lang]?.[product.id]?.[field] ?? product[field];
}


/*
  Colour name translations.
  
  English labels live on the COLORS map in section 1 (e.g. 'Burgundy').
  When the language is set to PT, we look up the English label here
  and return its Portuguese equivalent.
  
  ★ TO ADD A COLOUR:
  1. Add it to COLORS in section 1 with an English label.
  2. Add the Portuguese translation here, keyed by the English label.
*/
const COLOR_TRANSLATIONS = {
  pt: {
    'Burgundy':     'Bordeaux',
    'Navy':         'Azul Marinho',
    'Forest Green': 'Verde Floresta',
    'Black':        'Preto',
    'White':        'Branco',
    /* Design variants for non-colour products like Playing Cards / Coasters */
    'Design A':     'Modelo A',
    'Design B':     'Modelo B',
  }
};

/* Look up a colour's translated label. Falls back to English. */
function tColor(label) {
  const lang = document.documentElement.dataset.lang || 'en';
  if (lang === 'en') return label;
  return COLOR_TRANSLATIONS[lang]?.[label] ?? label;
}

/*
  Build the localised "Save €X" string from a product's `save` field.
  Used for the savings indicator on packs.
  Example: tSave('€3') → "Save €3" (EN) / "Poupa €3" (PT)
*/
function tSave(amount) {
  const lang = document.documentElement.dataset.lang || 'en';
  const verb = lang === 'pt' ? 'Poupa' : 'Save';
  return `${verb} ${amount}`;
}

/*
  Translate a product badge label.
  Three valid badges: "Best Seller", "New", "Best Value".
  Stored on each product as the English string, so we look up the PT equivalent.
  Falls back to the original label if no translation found (e.g. custom badges).
*/
const BADGE_TRANSLATIONS = {
  pt: {
    'Best Seller': 'Mais Vendido',
    'New':         'Novo',
    'Best Value':  'Melhor Valor',
  }
};

function tBadge(label) {
  const lang = document.documentElement.dataset.lang || 'en';
  if (lang === 'en') return label;
  return BADGE_TRANSLATIONS[lang]?.[label] ?? label;
}


const TRANSLATIONS = {
  en: {
    'nav.shop': 'Shop', 'nav.contact': 'Contact',
    'hero.eyebrow': 'New Season Drop', 'hero.line1': 'WEAR', 'hero.line2': 'YOUR',
    'hero.line3': 'STANDARD', 'hero.sub': 'Premium quality. Minimal design. Built to last.',
    'hero.cta': 'Shop the Collection', 'hero.scroll': 'Scroll',
    'ticker.1': 'Premium Merch', 'ticker.2': 'Free Shipping Over €50',
    'ticker.3': 'New Drops Weekly', 'ticker.4': 'Unisex Sizing',
    'ticker.5': '100% Organic Cotton', 'ticker.6': 'Limited Quantities',
    'products.eyebrow': 'The Collection', 'products.title': 'Shop Everything',
    'filter.all': 'All', 'filter.tshirt': 'T-Shirts', 'filter.tshirt-nolog': '"The Best." Collection',
    'filter.hoodie': 'Hoodies', 'filter.sweatshirt': 'Sweatshirts', 'filter.shorts': 'Shorts',
    'filter.cap': 'Caps', 'filter.socks': 'Socks', 'filter.accessories': 'Accessories',
    'filter.pack': 'Packs',
    'product.view': 'View Product',
    'modal.selectSize': 'Select Size', 'modal.colour': 'Colour', 'modal.color': 'Colour',
    'modal.addToCart': 'Add to Cart', 'modal.shipping': 'Free shipping on orders over €50',
    'modal.selectSizeAlert': 'Please select a size first.', 'modal.size': 'Size',
    'sort.label': 'Sort:', 'sort.default': 'Default',
    'sort.nameAsc': 'Name A→Z', 'sort.nameDesc': 'Name Z→A',
    'sort.priceAsc': 'Price ↑', 'sort.priceDesc': 'Price ↓',
    'cart.title': 'Your Cart', 'cart.total': 'Total',
    'cart.orderByEmail': 'Order by Email', 'cart.empty': 'Your cart is empty.',
    'order.eyebrow': 'Complete your order', 'order.title': 'Order by Email',
    'order.paymentLabel': 'Payment via MBWay',
    'order.paymentNote': 'Send the total amount via MBWay. Your order will be processed once payment is received.',
    'order.name': 'Full Name', 'order.phone': 'Phone Number',
    'order.email': 'Email', 'order.address': 'Delivery Address',
    'order.submit': 'Order',
    'contact.eyebrow': 'Get in Touch', 'contact.title': "Let's Talk",
    'contact.desc': 'Questions about sizing, wholesale, or collabs?<br />We usually reply within 24 hours.',
    'contact.name': 'Your Name', 'contact.email': 'Email Address',
    'contact.subject': 'Subject', 'contact.message': 'Your Message',
    'contact.send': 'Send Message', 'contact.success': "✓ Message sent! We'll be in touch soon.",
    'footer.rights': 'All rights reserved.', 'footer.privacy': 'Privacy',
    'footer.shipping': 'Shipping', 'footer.returns': 'Returns',
  },
  pt: {
    'nav.shop': 'Loja', 'nav.contact': 'Contacto',
    'hero.eyebrow': 'Nova Coleção', 'hero.line1': 'VESTE', 'hero.line2': 'O TEU',
    'hero.line3': 'STANDARD', 'hero.sub': 'Qualidade premium. Design minimalista. Feito para durar.',
    'hero.cta': 'Ver Coleção', 'hero.scroll': 'Explorar',
    'ticker.1': 'Merch Premium', 'ticker.2': 'Envio Grátis Acima de €50',
    'ticker.3': 'Novidades Semanais', 'ticker.4': 'Tamanhos Unissexo',
    'ticker.5': '100% Algodão Orgânico', 'ticker.6': 'Quantidades Limitadas',
    'products.eyebrow': 'A Coleção', 'products.title': 'Ver Tudo',
    'filter.all': 'Todos', 'filter.tshirt': 'T-Shirts', 'filter.tshirt-nolog': 'Coleção "The Best."',
    'filter.hoodie': 'Hoodies', 'filter.sweatshirt': 'Sweatshirts', 'filter.shorts': 'Calções',
    'filter.cap': 'Bonés', 'filter.socks': 'Meias', 'filter.accessories': 'Acessórios',
    'filter.pack': 'Packs',
    'product.view': 'Ver Produto',
    'modal.selectSize': 'Escolher Tamanho', 'modal.colour': 'Cor', 'modal.color': 'Cor',
    'modal.addToCart': 'Adicionar ao Carrinho', 'modal.shipping': 'Envio grátis acima de €50',
    'modal.selectSizeAlert': 'Por favor escolhe um tamanho.', 'modal.size': 'Tamanho',
    'sort.label': 'Ordenar:', 'sort.default': 'Padrão',
    'sort.nameAsc': 'Nome A→Z', 'sort.nameDesc': 'Nome Z→A',
    'sort.priceAsc': 'Preço ↑', 'sort.priceDesc': 'Preço ↓',
    'cart.title': 'O Teu Carrinho', 'cart.total': 'Total',
    'cart.orderByEmail': 'Encomendar por Email', 'cart.empty': 'O teu carrinho está vazio.',
    'order.eyebrow': 'Finaliza a tua encomenda', 'order.title': 'Encomendar por Email',
    'order.paymentLabel': 'Pagamento por MBWay',
    'order.paymentNote': 'Envia o valor total por MBWay. A tua encomenda será processada após receção do pagamento.',
    'order.name': 'Nome Completo', 'order.phone': 'Número de Telefone',
    'order.email': 'Email', 'order.address': 'Morada de Entrega',
    'order.submit': 'Encomendar',
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

  /* Update all [data-i18n] elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!t[key]) return;
    /* contact.desc contains a <br> tag — use innerHTML; everything else is plain text */
    if (key === 'contact.desc') {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });

  /* Also update <option> elements inside the sort select (data-i18n on options) */
  document.querySelectorAll('option[data-i18n]').forEach(opt => {
    const key = opt.dataset.i18n;
    if (t[key]) opt.textContent = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.dataset.lang = lang;
  try { localStorage.setItem('am-lang', lang); } catch {}

  /*
    Re-render any UI that contains translated product names.
    Product cards are rebuilt as fresh DOM nodes; the cart re-renders
    to update line item names.
    Guard with typeof so this can be called before init too.
  */
  if (typeof renderProducts === 'function' && document.getElementById('productGrid')) {
    renderProducts();
    /* Re-apply current sort/filter state after re-render */
    const activeFilter = document.querySelector('.filter-btn.active');
    if (activeFilter && activeFilter.dataset.filter !== 'all') {
      document.querySelectorAll('.product-card').forEach(card => {
        card.classList.toggle('is-hidden', card.dataset.category !== activeFilter.dataset.filter);
      });
    }
    /*
      The IntersectionObserver from initScrollReveal() already disconnected
      after the initial reveal. The freshly rendered cards have opacity:0
      from CSS, so we reveal them immediately — language switches always
      happen with the grid in view, so the scroll-in animation isn't needed.
    */
    document.querySelectorAll('.product-card').forEach(card => {
      card.classList.add('is-revealed');
    });
    if (typeof fixGhostCells === 'function') fixGhostCells();
  }
  if (typeof Cart !== 'undefined' && Cart.render) Cart.render();
}

function initLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  /*
    Language priority on page load:
    1. The user's saved preference (set by clicking EN/PT before).
    2. Otherwise: default to Portuguese (the brand's primary market).
    
    To change the default language, edit DEFAULT_LANG below.
  */
  const DEFAULT_LANG = 'pt';

  try {
    const saved = localStorage.getItem('am-lang');
    if (saved && TRANSLATIONS[saved]) {
      setLanguage(saved);
    } else {
      setLanguage(DEFAULT_LANG);
    }
  } catch {
    /* localStorage unavailable (private mode) — still apply the default */
    setLanguage(DEFAULT_LANG);
  }
}


/* ================================================================
   16. SHOPPING CART

   The Cart object is a singleton that manages cart state, persists
   to localStorage so items survive page refresh, and renders into
   the cart panel + count badge.

   ★ HOW THE CHECKOUT WORKS:
   GitHub Pages is static — there's no backend to send emails from.
   The "Order by Email" button opens a modal with the order summary
   and a customer info form. On submit, it builds a mailto: link
   pre-filled with all the details and opens the customer's email
   client. They click "Send" once, and the email arrives at
   ORDER_EMAIL below. After submitting, the cart is emptied.

   ★ WHERE ORDERS ARE SENT:
   Change ORDER_EMAIL to send orders elsewhere.

   ★ MBWAY PAYMENT NUMBER:
   Change MBWAY_NUMBER to update the payment number shown to customers.

   ★ ITEM IDENTITY:
   Each cart line is identified by id + size + color, so the same
   product in different sizes/colours becomes separate cart lines.
================================================================ */

const ORDER_EMAIL  = 'thebest.aem@gmail.com';
const MBWAY_NUMBER = '912 025 191';

const Cart = {
  items: [],

  /* Load saved cart from localStorage on init */
  init() {
    try {
      const saved = localStorage.getItem('am-cart');
      if (saved) this.items = JSON.parse(saved);
    } catch { this.items = []; }
    this.render();
  },

  /* Persist cart to localStorage so refresh doesn't lose items */
  save() {
    try { localStorage.setItem('am-cart', JSON.stringify(this.items)); } catch {}
  },

  /* Add an item — if same product+size+color exists, increment quantity */
  add(item) {
    const existing = this.items.find(i =>
      i.id === item.id && i.size === item.size && i.color === item.color
    );
    if (existing) {
      existing.qty += 1;
    } else {
      this.items.push({ ...item, qty: 1 });
    }
    this.save();
    this.render();
  },

  /* Change quantity by delta (+1 or -1). Removes line when qty hits 0. */
  changeQty(idx, delta) {
    const item = this.items[idx];
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) this.items.splice(idx, 1);
    this.save();
    this.render();
  },

  remove(idx) {
    this.items.splice(idx, 1);
    this.save();
    this.render();
  },

  empty() {
    this.items = [];
    this.save();
    this.render();
  },

  /* Total price across all line items */
  total() {
    return this.items.reduce((sum, i) => sum + (i.price * i.qty), 0);
  },

  /* Total number of items (sum of quantities) for the badge */
  count() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  /* Show the cart side panel */
  open() {
    const panel = document.getElementById('cartPanel');
    if (!panel) return;
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  },

  close() {
    const panel = document.getElementById('cartPanel');
    if (!panel) return;
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  },

  /* Re-render: cart count badge, line items, total, empty state */
  render() {
    const lang  = document.documentElement.dataset.lang || 'en';
    const t     = TRANSLATIONS[lang];

    /* Count badge */
    const countEl = document.getElementById('cartCount');
    if (countEl) {
      const c = this.count();
      countEl.textContent = c;
      countEl.classList.toggle('is-active', c > 0);
    }

    const itemsEl  = document.getElementById('cartItems');
    const footerEl = document.getElementById('cartFooter');
    const emptyEl  = document.getElementById('cartEmpty');
    const totalEl  = document.getElementById('cartTotal');

    if (!itemsEl) return;

    /* Empty state */
    if (this.items.length === 0) {
      itemsEl.innerHTML = '';
      if (footerEl) footerEl.style.display = 'none';
      if (emptyEl)  emptyEl.style.display  = 'flex';
      return;
    }

    if (footerEl) footerEl.style.display = '';
    if (emptyEl)  emptyEl.style.display  = 'none';

    /* Render line items */
    itemsEl.innerHTML = this.items.map((item, idx) => {
      /* Resolve the current translated name from PRODUCTS at render time */
      const product = PRODUCTS.find(p => p.id === item.id);
      const displayName = product ? tProduct(product, 'name') : item.name;

      return `
      <div class="cart-item">
        <img class="cart-item__image" src="${item.image}" alt="${displayName}"
          onerror="this.style.background='var(--color-navy-mid)'; this.removeAttribute('src')" />
        <div class="cart-item__body">
          <p class="cart-item__name">${displayName}</p>
          <p class="cart-item__meta">
            ${item.color ? `${tColor(item.color)} · ` : ''}${item.size}
          </p>
          <div class="cart-item__row">
            <div class="cart-item__qty">
              <button class="qty-btn" data-action="dec" data-idx="${idx}" aria-label="Decrease">−</button>
              <span class="qty-value">${item.qty}</span>
              <button class="qty-btn" data-action="inc" data-idx="${idx}" aria-label="Increase">+</button>
            </div>
            <p class="cart-item__price">€${(item.price * item.qty).toFixed(0)}</p>
          </div>
        </div>
        <button class="cart-item__remove" data-idx="${idx}" aria-label="Remove">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </button>
      </div>
    `;}).join('');

    /* Wire up qty buttons + remove buttons */
    itemsEl.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx    = parseInt(btn.dataset.idx);
        const delta  = btn.dataset.action === 'inc' ? 1 : -1;
        this.changeQty(idx, delta);
      });
    });
    itemsEl.querySelectorAll('.cart-item__remove').forEach(btn => {
      btn.addEventListener('click', () => this.remove(parseInt(btn.dataset.idx)));
    });

    /* Update total */
    if (totalEl) totalEl.textContent = `€${this.total().toFixed(0)}`;
  },

  /* Build the order summary HTML for the order modal */
  summaryHTML() {
    return `
      <div class="order__items">
        ${this.items.map(item => {
          const product = PRODUCTS.find(p => p.id === item.id);
          const displayName = product ? tProduct(product, 'name') : item.name;
          return `
          <div class="order__item">
            <span class="order__item-name">
              ${item.qty} × ${displayName}${item.color ? ` (${tColor(item.color)})` : ''} — ${item.size}
            </span>
            <span class="order__item-price">€${(item.price * item.qty).toFixed(0)}</span>
          </div>
        `;}).join('')}
      </div>
      <div class="order__total-row">
        <span>Total</span>
        <span class="order__total">€${this.total().toFixed(0)}</span>
      </div>
    `;
  },

  /* Plain-text version of the cart for the email body */
  emailBody(customer) {
    const lines = this.items.map(item =>
      `  • ${item.qty} × ${item.name}${item.color ? ` (${item.color})` : ''} — ${item.size}  —  €${(item.price * item.qty).toFixed(0)}`
    ).join('\n');

    return [
      'New A&M order',
      '─────────────────────',
      '',
      'CUSTOMER:',
      `  Name:    ${customer.name}`,
      `  Phone:   ${customer.phone}`,
      `  Email:   ${customer.email}`,
      `  Address: ${customer.address}`,
      '',
      'ITEMS:',
      lines,
      '',
      `TOTAL: €${this.total().toFixed(0)}`,
      '',
      `Payment: MBWay to ${MBWAY_NUMBER}`,
      '',
      '─────────────────────',
      'Awaiting payment confirmation.',
    ].join('\n');
  },
};

function initCart() {
  Cart.init();

  /* Open cart from nav button */
  document.getElementById('cartBtn')?.addEventListener('click', () => Cart.open());
  document.getElementById('cartClose')?.addEventListener('click',     () => Cart.close());
  document.getElementById('cartBackdrop')?.addEventListener('click',  () => Cart.close());

  /* Close cart on Escape */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      Cart.close();
      closeOrderModal();
    }
  });

  /* Open the order modal from the cart's checkout button */
  document.getElementById('cartCheckoutBtn')?.addEventListener('click', () => {
    if (Cart.items.length === 0) return;
    openOrderModal();
  });

  /* Order modal close handlers */
  document.getElementById('orderClose')?.addEventListener('click',    closeOrderModal);
  document.getElementById('orderBackdrop')?.addEventListener('click', closeOrderModal);

  /* Floating labels for order form */
  document.querySelectorAll('#orderForm input, #orderForm textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.toggle('has-value', field.value.trim() !== '');
    });
  });

  /* Order form submission — builds mailto: and empties cart */
  document.getElementById('orderForm')?.addEventListener('submit', handleOrderSubmit);
}

function openOrderModal() {
  const modal      = document.getElementById('orderModal');
  const summaryEl  = document.getElementById('orderSummary');
  if (!modal || !summaryEl) return;

  /* Populate summary with current cart contents */
  summaryEl.innerHTML = Cart.summaryHTML();

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  /* Body scroll already locked (cart is open behind it) */
}

function closeOrderModal() {
  const modal = document.getElementById('orderModal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

function handleOrderSubmit(e) {
  e.preventDefault();

  const customer = {
    name:    document.getElementById('orderName').value.trim(),
    phone:   document.getElementById('orderPhone').value.trim(),
    email:   document.getElementById('orderEmail').value.trim(),
    address: document.getElementById('orderAddress').value.trim(),
  };

  /*
    Build a mailto: link with subject and body URL-encoded.
    Opens the customer's default email app (Gmail, Mail.app, Outlook…)
    with everything pre-filled. They just press Send.
  */
  const subject = `A&M Order — ${customer.name} — €${Cart.total().toFixed(0)}`;
  const body    = Cart.emailBody(customer);
  const mailto  = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  /* Trigger email client */
  window.location.href = mailto;

  /* Empty cart and reset everything */
  Cart.empty();
  closeOrderModal();
  Cart.close();
  document.getElementById('orderForm').reset();
  document.querySelectorAll('#orderForm .has-value').forEach(el => el.classList.remove('has-value'));
}


/* ================================================================
   15. INIT
================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  /* Hero now uses a video background — no canvas init needed */
  renderProducts();
  initScrollReveal();
  initFilters();
  initModal();
  initContactForm();
  initFooterYear();
  initLanguageSwitcher();
  initCart();   /* Shopping cart panel + checkout flow */
  console.log('A&M — site loaded ✓');
});
