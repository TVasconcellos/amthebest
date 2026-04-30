/* ================================================================
   A&M — Main JavaScript  (main.js)
   
   ★ QUICK TWEAK GUIDE — most common changes:
   
   PRODUCTS:     Edit the PRODUCTS array (section 1).
                 Image names: shirt1.jpg, shirt2.jpg, hoodie1.jpg etc.
                 Put images in images/products/
   
   INSTAGRAM:    Edit INSTAGRAM_POSTS array (section 2).
                 Put images in images/ named ig1.jpg to ig6.jpg.
   
   CONTACT EMAIL: Change CONTACT_EMAIL (section 10) to your Formspree ID.
                  See setup instructions in section 10.
   
   CANVAS FX:    Edit CANVAS_CONFIG (section 7) to tweak the hero animation.
                 particleCount, speed, lineDistance, dotSize, colours.
   
   CURSOR LAG:   Change the 0.12 lerp factor in initCursor() (section 3).
                 Higher = faster ring. Lower = more trail. Range: 0.05–0.25
   
   TRANSLATIONS: Edit the TRANSLATIONS object (section 13) to add/change
                 Portuguese and English text for any labelled element.
   
   ================================================================
   
   FILE STRUCTURE:
   1.  PRODUCT DATA
   2.  INSTAGRAM DATA
   3.  CUSTOM CURSOR (GPU-accelerated)
   4.  NAVIGATION (scroll detection)
   5.  SCROLL REVEAL
   6.  RENDER PRODUCTS
   7.  HERO CANVAS (animated particle background)
   8.  PRODUCT FILTERS
   9.  PRODUCT MODAL
   10. RENDER INSTAGRAM
   11. CONTACT FORM (Formspree)
   12. FOOTER YEAR
   13. TRANSLATIONS (EN / PT)
   14. LANGUAGE SWITCHER
   15. INIT
================================================================ */


/* ================================================================
   1. PRODUCT DATA
   
   ★ HOW TO ADD A PRODUCT:
   Copy one of the objects below, paste it at the end of the array
   (before the final ]), and update the values. The grid rebuilds itself.
   
   ★ IMAGE NAMING:
   Use simple names: shirt1.jpg, shirt2.jpg, hoodie1.jpg, hoodie2.jpg,
   sweatshirt1.jpg, socks1.jpg, tote1.jpg, beanie1.jpg, etc.
   Put files in: images/products/
   
   ★ FIELD REFERENCE:
   id          → Unique number. Never repeat. Just increment.
   name        → Shown on the card and in the modal.
   category    → MUST match a filter button's data-filter value:
                 "tshirt" | "hoodie" | "sweatshirt" | "socks" | "accessories"
   price       → Display string, e.g. "€35" or "35€" — whatever you prefer.
   badge       → Small label above the name. Set to null for no badge.
                 Common values: "New" | "Best Seller" | "Limited" | "Sale"
   image       → Relative path from index.html. e.g. "images/products/shirt1.jpg"
   description → Full text shown in the product modal.
   sizes       → Array of size strings. ["One Size"] for accessories/socks.
================================================================ */
const PRODUCTS = [
  {
    id: 1,
    name: "Core Logo Tee",
    category: "tshirt",
    price: "€35",
    badge: "Best Seller",
    image: "images/products/shirt1.jpg",
    description: "Our signature logo tee. Heavyweight 220gsm organic cotton with a relaxed unisex fit. Washed for softness. Printed with water-based inks.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: 2,
    name: "Blank Oversized Tee",
    category: "tshirt",
    price: "€30",
    badge: "New",
    image: "images/products/shirt2.jpg",
    description: "Clean and minimal. A drop-shoulder silhouette in 100% organic cotton. No logo, all feel.",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Heavy Fleece Hoodie",
    category: "hoodie",
    price: "€75",
    badge: "New",
    image: "images/products/hoodie1.jpg",
    description: "400gsm brushed fleece, raglan sleeves, and a kangaroo pocket with hidden zipper. Made for the long haul.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: 4,
    name: "Quarter Zip Hoodie",
    category: "hoodie",
    price: "€80",
    badge: null,
    image: "images/products/hoodie2.jpg",
    description: "360gsm quarter-zip with ribbed cuffs and a chest embroidery. The kind of piece you reach for every morning.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "Crew Sweatshirt",
    category: "sweatshirt",
    price: "€60",
    badge: null,
    image: "images/products/sweatshirt1.jpg",
    description: "Classic crewneck in medium-weight french terry. Slightly boxy fit. Minimal chest print.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: 6,
    name: "Pigment Dyed Crew",
    category: "sweatshirt",
    price: "€65",
    badge: "Limited",
    image: "images/products/sweatshirt2.jpg",
    description: "Each piece is individually dyed, meaning no two are identical. Vintage washed finish for an instantly broken-in feel.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "Logo Crew Socks",
    category: "socks",
    price: "€14",
    badge: null,
    image: "images/products/socks1.jpg",
    description: "Mid-calf socks in a ribbed cotton blend. Woven logo at the ankle. Comes in a pack of 2.",
    sizes: ["One Size"]
  },
  {
    id: 8,
    name: "Striped Sport Socks",
    category: "socks",
    price: "€12",
    badge: "Best Seller",
    image: "images/products/socks2.jpg",
    description: "Retro-inspired striped socks in a soft terry blend. Perfect for gym or everyday wear.",
    sizes: ["One Size"]
  },
  {
    id: 9,
    name: "Canvas Tote",
    category: "accessories",
    price: "€25",
    badge: null,
    image: "images/products/tote1.jpg",
    description: "12oz natural canvas, reinforced stitching, and a screen-printed graphic interior. Carry everything.",
    sizes: ["One Size"]
  },
  {
    id: 10,
    name: "Beanie",
    category: "accessories",
    price: "€28",
    badge: "New",
    image: "images/products/beanie1.jpg",
    description: "Double-layered merino wool blend beanie. Woven label, no cuff, minimal design.",
    sizes: ["One Size"]
  }
];


/* ================================================================
   2. INSTAGRAM DATA
   
   ★ IMAGE NAMING:
   Name your files ig1.jpg, ig2.jpg, ig3.jpg, ig4.jpg, ig5.jpg, ig6.jpg
   Put them in: images/  (not images/products/ — the root images folder)
   
   ★ HOW TO CONNECT A LIVE INSTAGRAM FEED:
   The simplest no-code way is Behold.so (behold.so).
   It creates a widget or API endpoint that automatically syncs 
   with @sofiavalequaresma's feed. Replace this static array with 
   a fetch() call to their API endpoint.
   
   ★ LIKES / COMMENTS:
   These are display-only strings. They're not live counts.
   Update them manually or pull from a real API.
================================================================ */
const INSTAGRAM_POSTS = [
  { image: "images/ig1.jpg", likes: "1.2k", comments: "34" },
  { image: "images/ig2.jpg", likes: "843",  comments: "21" },
  { image: "images/ig3.jpg", likes: "2.1k", comments: "67" },
  { image: "images/ig4.jpg", likes: "654",  comments: "18" },
  { image: "images/ig5.jpg", likes: "1.8k", comments: "45" },
  { image: "images/ig6.jpg", likes: "922",  comments: "29" },
];


/* ================================================================
   3. CUSTOM CURSOR — GPU-Accelerated
   
   ★ HOW IT WORKS:
   Instead of setting element.style.left / element.style.top (which
   forces the browser to recalculate layout = slow), we use
   element.style.transform = 'translate(x, y)'. Transform is handled
   entirely on the GPU compositor layer — no layout recalculation,
   no paint, runs at native 60fps+.
   
   The dot moves to the exact mouse position every frame.
   The ring uses lerp (linear interpolation) to "chase" the dot,
   which creates the smooth trailing deceleration effect.
   
   ★ LERP FACTOR (controls how snappy the ring follows):
   0.12 = current. The ring covers 12% of remaining distance each frame.
   - 0.06 → slower, dreamier trail
   - 0.18 → faster, snappier
   - 0.25 → almost instant (minimal lag)
   
   ★ HOVER EXPANSION:
   When the cursor is over any element matching hoverTargets,
   the .is-hovering class is added to the follower ring.
   The CSS controls the visual change (see style.css section 3).
   To add more elements that trigger expansion, add their selector
   to the hoverTargets string below.
================================================================ */
function initCursor() {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;

  /* Current real mouse position */
  let mouseX = 0, mouseY = 0;
  /* Ring's current interpolated position */
  let ringX = 0, ringY = 0;

  /* LERP FACTOR — increase for faster ring, decrease for more trail */
  const LERP = 0.12;

  /* Update mouse position on every move event */
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  /* Animation loop — runs every frame via requestAnimationFrame */
  function tick() {
    /* 
      Move the dot to exact cursor position immediately.
      transform: translate(x, y) is GPU-composited — no layout cost.
    */
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    /*
      Lerp the ring toward the mouse: move a fraction of the gap.
      Each frame: ring moves LERP × (distance remaining) toward target.
      This creates the decelerating trail effect.
    */
    ringX += (mouseX - ringX) * LERP;
    ringY += (mouseY - ringY) * LERP;
    follower.style.transform = `translate(${ringX}px, ${ringY}px)`;

    requestAnimationFrame(tick);
  }
  tick();

  /* 
    Expand the ring when hovering over interactive elements.
    Add any additional selector to this string to include it.
  */
  const hoverTargets = 'a, button, .product-card, .ig-card, .filter-btn, .size-btn, .lang-btn';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) follower.classList.add('is-hovering');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) follower.classList.remove('is-hovering');
  });
}


/* ================================================================
   4. NAVIGATION — Scroll Detection
   
   Adds .is-scrolled to the <nav> when the user scrolls past 50px.
   The CSS then applies a frosted glass background (see style.css).
   
   ★ TWEAK:
   Change the 50 below to adjust how far the user scrolls before
   the nav background appears. 0 = immediate, 200 = later.
   { passive: true } is a performance hint to the browser that this
   scroll listener won't call preventDefault() — allows scroll optimisation.
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
   
   Uses IntersectionObserver — a browser API that fires a callback
   when an element enters the viewport, without any scroll event 
   listener. More efficient than scroll-based solutions.
   
   threshold: 0.15 = fires when 15% of the element is visible.
   
   Once revealed, the observer disconnects from that element 
   (no point watching it after it has already appeared).
   
   Product cards use a staggered delay: each card's column position
   (index % 4) × 80ms. Change 80 below to increase/decrease spacing.
================================================================ */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));

  /* Staggered reveal for product grid cards */
  function revealCards() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.product-card:not(.is-hidden)');
          cards.forEach((card, i) => {
            card.style.setProperty('--delay', `${(i % 4) * 80}ms`); /* ← 80ms stagger */
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
   
   Builds the HTML for each product card from the PRODUCTS array
   and injects it into the #productGrid div.
   
   onerror on the <img>: if the image file doesn't exist yet, 
   the img element hides itself and the navy background shows instead.
   No broken image icons.
   
   ★ TO ADD/REMOVE PRODUCTS:
   Only edit the PRODUCTS array in section 1. Don't touch this function.
================================================================ */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(product => `
    <div 
      class="product-card"
      data-category="${product.category}"
      data-id="${product.id}"
      role="button"
      tabindex="0"
      aria-label="View ${product.name}"
    >
      <div class="product-card__image-wrap">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.style.display='none'"
        />
        <div class="product-card__overlay">
          <span class="product-card__overlay-btn" data-i18n="product.view">View Product</span>
        </div>
      </div>
      <div class="product-card__body">
        ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}
        <p class="product-card__name">${product.name}</p>
        <p class="product-card__category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
        <p class="product-card__price">${product.price}</p>
      </div>
    </div>
  `).join('');

  /* Attach click + keyboard listeners to each card */
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
   7. HERO CANVAS — Animated Particle Network
   
   Draws a field of floating particles (dots) connected by lines
   when they come close to each other. Everything drifts slowly,
   creating a living, cinematic background.
   
   ★ CANVAS_CONFIG — tweak these values to change the animation:
   
   particleCount:  Number of dots on screen at once.
                   More = denser network. Fewer = minimal/airy.
                   Range: 40 (minimal) to 150 (dense). Default: 80.
   
   speed:          How fast the dots drift. Lower = slower/calmer.
                   Range: 0.1 (barely moving) to 1.0 (chaotic).
                   Default: 0.35
   
   lineDistance:   How close two dots must be to draw a connecting line.
                   Higher = more connections/more complex network.
                   Range: 100 (sparse) to 250 (very connected).
                   Default: 160
   
   dotSize:        Radius of each dot in pixels. Default: 1.5
   
   lineOpacity:    Max opacity of connecting lines (they fade based on 
                   distance — fully opaque when dots are closest).
                   Range: 0.05 (very subtle) to 0.4 (bold lines).
                   Default: 0.15
   
   dotOpacity:     Opacity of the dots themselves. Default: 0.5
   
   dotColor:       RGB values for the dots. "255,255,255" = white.
   lineColor:      RGB values for the lines. Same default as dots.
   
   ★ HOW IT WORKS:
   Each particle has a random (x, y) position and a (vx, vy) velocity.
   Every frame: positions update, particles bounce off walls, and any 
   two particles within lineDistance get a line drawn between them.
   Line opacity scales linearly with proximity (closer = more opaque).
   The canvas resizes with the window via a ResizeObserver.
================================================================ */

const CANVAS_CONFIG = {
  particleCount: 80,    /* ← more dots = denser network */
  speed:         0.35,  /* ← lower = calmer drift */
  lineDistance:  160,   /* ← higher = more connecting lines */
  dotSize:       1.5,   /* ← dot radius in pixels */
  lineOpacity:   0.15,  /* ← max line transparency */
  dotOpacity:    0.5,   /* ← dot transparency */
  dotColor:  '255,255,255',
  lineColor: '255,255,255',
};

function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  /* Particle class — each dot is an instance */
  class Particle {
    constructor(w, h) { this.reset(w, h); }

    reset(w, h) {
      this.x  = Math.random() * w;
      this.y  = Math.random() * h;
      /* Random velocity — direction and magnitude */
      this.vx = (Math.random() - 0.5) * CANVAS_CONFIG.speed * 2;
      this.vy = (Math.random() - 0.5) * CANVAS_CONFIG.speed * 2;
    }

    update(w, h) {
      this.x += this.vx;
      this.y += this.vy;
      /* Bounce off walls: reverse velocity when hitting an edge */
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
      /* Clamp to canvas bounds (in case of rounding overshoot) */
      this.x = Math.max(0, Math.min(w, this.x));
      this.y = Math.max(0, Math.min(h, this.y));
    }
  }

  let particles = [];
  let W = 0, H = 0;
  let animFrameId;

  /* Set canvas dimensions and rebuild particles to fill the space */
  function resize() {
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width  = W;
    canvas.height = H;
    particles = Array.from({ length: CANVAS_CONFIG.particleCount }, () => new Particle(W, H));
  }

  /* Main draw loop */
  function draw() {
    ctx.clearRect(0, 0, W, H);

    /* Update all particle positions */
    particles.forEach(p => p.update(W, H));

    const cfg = CANVAS_CONFIG;

    /* Draw connecting lines between nearby particles */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy); /* Distance between dots */

        if (dist < cfg.lineDistance) {
          /* 
            Opacity scales 0→lineOpacity as distance goes lineDistance→0.
            Closer dots = more opaque line.
          */
          const alpha = cfg.lineOpacity * (1 - dist / cfg.lineDistance);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${cfg.lineColor},${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    /* Draw each dot */
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, cfg.dotSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${cfg.dotColor},${cfg.dotOpacity})`;
      ctx.fill();
    });

    animFrameId = requestAnimationFrame(draw);
  }

  /* Pause animation when tab is hidden (saves CPU/battery) */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animFrameId);
    } else {
      draw();
    }
  });

  /* Resize canvas when window size changes */
  const resizeObserver = new ResizeObserver(() => { resize(); });
  resizeObserver.observe(canvas);

  resize();
  draw();
}


/* ================================================================
   8. PRODUCT FILTERS
   
   Filter buttons update which cards are visible.
   After filtering, the scroll reveal re-runs on visible cards.
   
   ★ TO ADD A NEW FILTER CATEGORY:
   1. Add a product with that category in PRODUCTS array.
   2. Add a <button class="filter-btn" data-filter="yourcat">
      in index.html — no JS change needed here.
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
   9. PRODUCT MODAL
   
   openModal(product) — fills the panel with product details and opens it.
   closeModal()       — slides panel out, re-enables body scroll.
   
   ★ ADD TO CART:
   The "Add to Cart" button currently shows an alert.
   Replace the alert() inside modalAddBtn click handler with 
   your actual cart system (Shopify Buy SDK, Snipcart, etc.).
   
   ★ MODAL WIDTH:
   Controlled in style.css: .modal__panel { width: min(600px, 95vw) }
================================================================ */
let selectedSize = null;

function openModal(product) {
  const modal   = document.getElementById('productModal');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  const lang = document.documentElement.dataset.lang || 'en';
  const t = TRANSLATIONS[lang];

  const sizesHTML = product.sizes.map(size => `
    <button class="size-btn" data-size="${size}" aria-label="${t['modal.size'] || 'Select size'} ${size}">${size}</button>
  `).join('');

  content.innerHTML = `
    <img class="modal__image" src="${product.image}" alt="${product.name}"
      onerror="this.style.background='var(--color-navy-mid)'; this.src=''" />
    <p class="modal__category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
    <h2 class="modal__title">${product.name}</h2>
    <p class="modal__price">${product.price}</p>
    <p class="modal__desc">${product.description}</p>
    <div class="modal__sizes">
      <span class="modal__sizes-label">${t['modal.selectSize'] || 'Select Size'}</span>
      ${sizesHTML}
    </div>
    <button class="btn btn--primary btn--full" id="modalAddBtn" style="margin-top:1rem">
      ${t['modal.addToCart'] || 'Add to Cart'}
    </button>
    <p style="font-size:0.75rem;color:var(--color-grey);margin-top:1rem;text-align:center;">
      ${t['modal.shipping'] || 'Free shipping on orders over €50'}
    </p>
  `;

  content.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      content.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSize = btn.dataset.size;
    });
  });

  document.getElementById('modalAddBtn')?.addEventListener('click', () => {
    if (!selectedSize && product.sizes.length > 1) {
      alert(t['modal.selectSizeAlert'] || 'Please select a size first.');
      return;
    }
    /* ★ REPLACE THIS with your real cart/checkout integration */
    alert(`${product.name} (${selectedSize || 'One Size'}) added to cart!\n\nConnect this to your cart system.`);
  });

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  selectedSize = null;
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
================================================================ */
function renderInstagram() {
  const grid = document.getElementById('instagramGrid');
  if (!grid) return;

  grid.innerHTML = INSTAGRAM_POSTS.map(post => `
    <div class="ig-card" data-reveal>
      <img src="${post.image}" alt="@sofiavalequaresma" loading="lazy"
        onerror="this.style.display='none'" />
      <div class="ig-card__overlay">
        <div class="ig-card__stat">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 13.7l-1.1-1C3.1 9.2 0 6.7 0 3.8 0 1.7 1.7 0 3.8 0c1.2 0 2.3.5 3.1 1.4A4.4 4.4 0 0 1 8 0c.5 0 1 .1 1.5.3C11.2.9 12.2 2.2 12.2 3.8c0 2.9-3.1 5.4-6.9 8.9z"/>
          </svg>
          ${post.likes}
        </div>
        <div class="ig-card__stat">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.6 0 0 3.1 0 7c0 2.1 1 4 2.7 5.3L2 16l3.5-1.8c.8.2 1.6.3 2.5.3 4.4 0 8-3.1 8-7S12.4 0 8 0z"/>
          </svg>
          ${post.comments}
        </div>
      </div>
    </div>
  `).join('');
}


/* ================================================================
   11. CONTACT FORM — Formspree Integration
   
   ★ HOW TO SET UP EMAIL SENDING (Formspree — free, no backend):
   
   Step 1: Go to https://formspree.io and create a free account.
   Step 2: Click "New Form" and enter: thebest.aem@gmail.com
   Step 3: Copy the Form ID — it looks like: xpzvwqbo (8 characters)
   Step 4: Paste it into the FORMSPREE_ID variable below.
   
   That's it. The form will now email thebest.aem@gmail.com on submit.
   Formspree's free plan allows 50 submissions/month.
   
   ★ ALTERNATIVE — Netlify Forms (if you host on Netlify instead of GitHub):
   Add data-netlify="true" to the <form> tag in index.html.
   Remove the fetch() call below. Netlify handles everything automatically.
================================================================ */

/* ★ PASTE YOUR FORMSPREE FORM ID HERE (8-character code from formspree.io) */
const FORMSPREE_ID = 'YOUR_FORM_ID';

function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  /* Floating label: adds .has-value when input has text */
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.toggle('has-value', field.value.trim() !== '');
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    /* If Formspree ID is set, use it; otherwise just show success visually */
    if (FORMSPREE_ID && FORMSPREE_ID !== 'YOUR_FORM_ID') {
      try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          showSuccess();
        } else {
          alert('Something went wrong. Please email us directly at thebest.aem@gmail.com');
        }
      } catch {
        alert('Could not send. Please email us directly at thebest.aem@gmail.com');
      }
    } else {
      /* No Formspree ID set yet — show success state for testing */
      showSuccess();
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
   
   Automatically inserts the current year.
   Never needs manual updating.
================================================================ */
function initFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}


/* ================================================================
   13. TRANSLATIONS
   
   ★ HOW TO ADD/EDIT TRANSLATIONS:
   
   Each key maps to English (en) and Portuguese (pt) text.
   The key must match the data-i18n attribute in index.html.
   
   Example: <p data-i18n="hero.eyebrow"> will be replaced with
   TRANSLATIONS[currentLang]['hero.eyebrow']
   
   ★ TO ADD A NEW TRANSLATABLE STRING:
   1. Add data-i18n="my.key" to the element in index.html
   2. Add "my.key": "English text" to the en object below
   3. Add "my.key": "Texto em português" to the pt object below
   
   ★ PT-PT NOTES:
   These are European Portuguese (Portugal) translations.
   Not Brazilian Portuguese — note "enviar" not "mandar",
   "tamanho" not "número", etc.
================================================================ */
const TRANSLATIONS = {
  en: {
    /* Navigation */
    'nav.shop':    'Shop',
    'nav.feed':    'Feed',
    'nav.contact': 'Contact',

    /* Hero */
    'hero.eyebrow': 'New Season Drop',
    'hero.line1':   'WEAR',
    'hero.line2':   'YOUR',
    'hero.line3':   'STANDARD',
    'hero.sub':     'Premium quality. Minimal design. Built to last.',
    'hero.cta':     'Shop the Collection',
    'hero.scroll':  'Scroll',

    /* Ticker */
    'ticker.1': 'Premium Merch',
    'ticker.2': 'Free Shipping Over €50',
    'ticker.3': 'New Drops Weekly',
    'ticker.4': 'Unisex Sizing',
    'ticker.5': '100% Organic Cotton',
    'ticker.6': 'Limited Quantities',

    /* Products */
    'products.eyebrow': 'The Collection',
    'products.title':   'Shop Everything',
    'filter.all':          'All',
    'filter.tshirt':       'T-Shirts',
    'filter.hoodie':       'Hoodies',
    'filter.sweatshirt':   'Sweatshirts',
    'filter.socks':        'Socks',
    'filter.accessories':  'Accessories',
    'product.view':        'View Product',

    /* Modal */
    'modal.selectSize':      'Select Size',
    'modal.addToCart':       'Add to Cart',
    'modal.shipping':        'Free shipping on orders over €50',
    'modal.selectSizeAlert': 'Please select a size first.',
    'modal.size':            'Select size',

    /* Instagram */
    'instagram.title': 'The Feed',

    /* Contact */
    'contact.eyebrow': 'Get in Touch',
    'contact.title':   "Let's Talk",
    'contact.desc':    'Questions about sizing, wholesale, or collabs?<br />We usually reply within 24 hours.',
    'contact.name':    'Your Name',
    'contact.email':   'Email Address',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.send':    'Send Message',
    'contact.success': "✓ Message sent! We'll be in touch soon.",

    /* Footer */
    'footer.rights':   'All rights reserved.',
    'footer.privacy':  'Privacy',
    'footer.shipping': 'Shipping',
    'footer.returns':  'Returns',
  },
  pt: {
    /* Navegação */
    'nav.shop':    'Loja',
    'nav.feed':    'Feed',
    'nav.contact': 'Contacto',

    /* Hero */
    'hero.eyebrow': 'Nova Coleção',
    'hero.line1':   'VESTE',
    'hero.line2':   'O TEU',
    'hero.line3':   'STANDARD',
    'hero.sub':     'Qualidade premium. Design minimalista. Feito para durar.',
    'hero.cta':     'Ver Coleção',
    'hero.scroll':  'Explorar',

    /* Ticker */
    'ticker.1': 'Merch Premium',
    'ticker.2': 'Envio Grátis Acima de €50',
    'ticker.3': 'Novidades Semanais',
    'ticker.4': 'Tamanhos Unissexo',
    'ticker.5': '100% Algodão Orgânico',
    'ticker.6': 'Quantidades Limitadas',

    /* Produtos */
    'products.eyebrow': 'A Coleção',
    'products.title':   'Ver Tudo',
    'filter.all':          'Todos',
    'filter.tshirt':       'T-Shirts',
    'filter.hoodie':       'Hoodies',
    'filter.sweatshirt':   'Sweatshirts',
    'filter.socks':        'Meias',
    'filter.accessories':  'Acessórios',
    'product.view':        'Ver Produto',

    /* Modal */
    'modal.selectSize':      'Escolher Tamanho',
    'modal.addToCart':       'Adicionar ao Carrinho',
    'modal.shipping':        'Envio grátis em compras acima de €50',
    'modal.selectSizeAlert': 'Por favor escolhe um tamanho.',
    'modal.size':            'Escolher tamanho',

    /* Instagram */
    'instagram.title': 'O Feed',

    /* Contacto */
    'contact.eyebrow': 'Fala Connosco',
    'contact.title':   'Vamos Falar',
    'contact.desc':    'Dúvidas sobre tamanhos, grossista ou colaborações?<br />Respondemos geralmente em 24 horas.',
    'contact.name':    'O Teu Nome',
    'contact.email':   'Endereço de Email',
    'contact.subject': 'Assunto',
    'contact.message': 'A Tua Mensagem',
    'contact.send':    'Enviar Mensagem',
    'contact.success': '✓ Mensagem enviada! Estamos em contacto.',

    /* Rodapé */
    'footer.rights':   'Todos os direitos reservados.',
    'footer.privacy':  'Privacidade',
    'footer.shipping': 'Envios',
    'footer.returns':  'Devoluções',
  }
};


/* ================================================================
   14. LANGUAGE SWITCHER
   
   setLanguage(lang) — applies translations for the given language code.
   It finds every element with [data-i18n] and replaces its text
   with the value from the TRANSLATIONS object for that key.
   
   Special case: contact.desc contains <br /> HTML — we use innerHTML 
   for that key only. All other keys use textContent (safer).
   
   The <html> tag gets data-lang="en/pt" so CSS can target it if needed.
================================================================ */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;

  const t = TRANSLATIONS[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!t[key]) return;
    /* Use innerHTML for keys that contain HTML tags (e.g. <br />) */
    if (key === 'contact.desc') {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });

  /* Mark the active language button */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* Store the language so the modal can use it */
  document.documentElement.dataset.lang = lang;

  /* Persist the user's preference for next visit */
  try { localStorage.setItem('am-lang', lang); } catch {}
}

function initLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  /* Restore saved preference on page load */
  try {
    const saved = localStorage.getItem('am-lang');
    if (saved && TRANSLATIONS[saved]) setLanguage(saved);
  } catch {}
}


/* ================================================================
   15. INIT — Run Everything on Page Load
   
   DOMContentLoaded fires once the HTML is fully parsed.
   Order matters here: render data before attaching listeners.
================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();            /* GPU-accelerated custom cursor */
  initNav();               /* Scroll-aware nav background */
  initHeroCanvas();        /* Animated particle network on hero */
  renderProducts();        /* Build product grid from PRODUCTS array */
  renderInstagram();       /* Build Instagram feed grid */
  initScrollReveal();      /* Animate elements as they enter viewport */
  initFilters();           /* Product category filter buttons */
  initModal();             /* Product detail slide-in panel */
  initContactForm();       /* Floating labels + Formspree submit */
  initFooterYear();        /* Auto-set copyright year */
  initLanguageSwitcher();  /* EN / PT toggle */

  console.log('A&M — site loaded ✓');
});
