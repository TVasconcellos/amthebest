/* ================================================================
   STNDRD — Main JavaScript
   
   FILE STRUCTURE:
   1.  PRODUCT DATA — Edit this to add/change/remove products
   2.  INSTAGRAM DATA — Edit this to change the feed content
   3.  CUSTOM CURSOR — Tracks mouse, expands on hover
   4.  NAVIGATION — Scroll detection for nav background
   5.  SCROLL REVEAL — Animates elements into view
   6.  RENDER PRODUCTS — Builds the product grid from data
   7.  PRODUCT FILTERS — Filter buttons logic
   8.  PRODUCT MODAL — Open/close/populate product detail panel
   9.  RENDER INSTAGRAM — Builds the feed grid from data
   10. CONTACT FORM — Handles submission + shows success
   11. FOOTER YEAR — Auto-updates the copyright year
   12. INIT — Runs everything on page load
================================================================ */


/* ================================================================
   1. PRODUCT DATA
   
   This is the only place you need to edit to manage your products.
   
   Each product object has these fields:
   - id:          Unique number (used internally)
   - name:        Product name shown on the card and modal
   - category:    Used for filtering — must match one of the filter-btn
                  data-filter values: "tshirt" "hoodie" "sweatshirt"
                  "socks" "accessories"
   - price:       Price string shown (e.g. "€35")
   - badge:       Optional label shown above the name ("New", "Best Seller", etc.)
                  Set to null if you don't want a badge.
   - image:       Path to the product image.
                  Put your actual images in images/products/
                  and update these paths to match your filenames.
   - description: Shown in the modal when the user clicks the card
   - sizes:       Array of available sizes shown as buttons in the modal
================================================================ */
const PRODUCTS = [
  {
    id: 1,
    name: "Core Logo Tee",
    category: "tshirt",
    price: "€35",
    badge: "Best Seller",
    image: "images/products/tshirt-01.jpg",
    description: "Our signature logo tee. Heavyweight 220gsm organic cotton with a relaxed unisex fit. Washed for softness. Printed with water-based inks.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: 2,
    name: "Blank Oversized Tee",
    category: "tshirt",
    price: "€30",
    badge: "New",
    image: "images/products/tshirt-02.jpg",
    description: "Clean and minimal. A drop-shoulder silhouette in 100% organic cotton. No logo, all feel.",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Heavy Fleece Hoodie",
    category: "hoodie",
    price: "€75",
    badge: "New",
    image: "images/products/hoodie-01.jpg",
    description: "400gsm brushed fleece, raglan sleeves, and a kangaroo pocket with hidden zipper. Made for the long haul.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: 4,
    name: "Quarter Zip Hoodie",
    category: "hoodie",
    price: "€80",
    badge: null,
    image: "images/products/hoodie-02.jpg",
    description: "360gsm quarter-zip with ribbed cuffs and a chest embroidery. The kind of piece you reach for every morning.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "Crew Sweatshirt",
    category: "sweatshirt",
    price: "€60",
    badge: null,
    image: "images/products/sweatshirt-01.jpg",
    description: "Classic crewneck in medium-weight french terry. Slightly boxy fit. Minimal chest print.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  },
  {
    id: 6,
    name: "Pigment Dyed Crew",
    category: "sweatshirt",
    price: "€65",
    badge: "Limited",
    image: "images/products/sweatshirt-02.jpg",
    description: "Each piece is individually dyed, meaning no two are identical. Vintage washed finish for an instantly broken-in feel.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "Logo Crew Socks",
    category: "socks",
    price: "€14",
    badge: null,
    image: "images/products/socks-01.jpg",
    description: "Mid-calf socks in a ribbed cotton blend. Woven logo at the ankle. Comes in a pack of 2.",
    sizes: ["One Size"]
  },
  {
    id: 8,
    name: "Striped Sport Socks",
    category: "socks",
    price: "€12",
    badge: "Best Seller",
    image: "images/products/socks-02.jpg",
    description: "Retro-inspired striped socks in a soft terry blend. Perfect for gym or everyday wear.",
    sizes: ["One Size"]
  },
  {
    id: 9,
    name: "Canvas Tote",
    category: "accessories",
    price: "€25",
    badge: null,
    image: "images/products/tote-01.jpg",
    description: "12oz natural canvas, reinforced stitching, and a screen-printed graphic interior. Carry everything.",
    sizes: ["One Size"]
  },
  {
    id: 10,
    name: "Beanie",
    category: "accessories",
    price: "€28",
    badge: "New",
    image: "images/products/beanie-01.jpg",
    description: "Double-layered merino wool blend beanie. Woven label, no cuff, minimal design.",
    sizes: ["One Size"]
  }
];


/* ================================================================
   2. INSTAGRAM FEED DATA
   
   Replace the image paths with your actual Instagram screenshots
   or exported images. Put them in images/ or link to real URLs.
   
   likes and comments are display-only (not connected to Instagram).
   
   To connect to a real Instagram feed, you'd use the Instagram
   Basic Display API or a service like Behold.so (behold.so) and 
   replace this static array with an API call.
================================================================ */
const INSTAGRAM_POSTS = [
  { image: "images/ig-01.jpg", likes: "1.2k", comments: "34" },
  { image: "images/ig-02.jpg", likes: "843",  comments: "21" },
  { image: "images/ig-03.jpg", likes: "2.1k", comments: "67" },
  { image: "images/ig-04.jpg", likes: "654",  comments: "18" },
  { image: "images/ig-05.jpg", likes: "1.8k", comments: "45" },
  { image: "images/ig-06.jpg", likes: "922",  comments: "29" },
];


/* ================================================================
   3. CUSTOM CURSOR
   
   We track the mouse position with mousemove and update two 
   elements: the sharp dot (cursor) that follows instantly, 
   and the ring (cursorFollower) which uses CSS transition to lag.
   
   On mouseenter of interactive elements, we add .is-hovering to 
   expand the ring slightly (defined in style.css).
================================================================ */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');

  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  /* Track the real mouse position */
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    /* The sharp dot jumps to cursor position immediately */
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  /* 
    Animate the follower toward the mouse position on every frame.
    The 0.1 factor creates the "lag" — each frame moves 10% 
    of the remaining distance, creating a smooth deceleration.
  */
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower); /* Loop every frame */
  }
  animateFollower();

  /* Expand the cursor ring on hover over interactive elements */
  const hoverTargets = 'a, button, .product-card, .ig-card, .filter-btn, .size-btn';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      follower.classList.add('is-hovering');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      follower.classList.remove('is-hovering');
    }
  });
}


/* ================================================================
   4. NAVIGATION — Scroll Detection
   
   When the user scrolls down more than 50px, we add the
   .is-scrolled class to the nav element, which triggers the 
   frosted glass background style defined in style.css.
================================================================ */
function initNav() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;

  function onScroll() {
    /* Toggle class based on scroll position */
    nav.classList.toggle('is-scrolled', window.scrollY > 50);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); /* Run once immediately in case page loads already scrolled */
}


/* ================================================================
   5. SCROLL REVEAL
   
   We use IntersectionObserver — a modern browser API that fires 
   a callback when an element enters or leaves the viewport.
   
   threshold: 0.15 means the callback fires when 15% of the 
   element is visible. Once revealed, we disconnect the observer 
   for that element (no need to keep watching it).
   
   For product cards: we add a staggered delay based on each 
   card's position in the row (index % 4 gives column position).
================================================================ */
function initScrollReveal() {
  /* Observe [data-reveal] elements (section headers, CTAs, etc.) */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target); /* Stop watching */
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* 
    Separate observer for product cards with staggered delay.
    We observe the entire grid container; when it's in view,
    we animate all visible (non-hidden) cards one by one.
  */
  function revealProductCards() {
    const cards = document.querySelectorAll('.product-card:not(.is-hidden)');
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          /* Stagger: each card delays by its column position × 80ms */
          const cards = entry.target.querySelectorAll('.product-card:not(.is-hidden)');
          cards.forEach((card, i) => {
            card.style.setProperty('--delay', `${(i % 4) * 80}ms`);
            card.classList.add('is-revealed');
          });
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    const grid = document.getElementById('productGrid');
    if (grid) cardObserver.observe(grid);
  }

  /* Run initial card reveal setup (called again after filtering) */
  window.revealProductCards = revealProductCards;
  revealProductCards();
}


/* ================================================================
   6. RENDER PRODUCTS
   
   Takes the PRODUCTS array and builds the HTML for each card,
   then injects it all into the #productGrid div.
   
   Image placeholder: if a product image doesn't exist yet, 
   we show a gradient placeholder instead (the onerror handler).
================================================================ */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  /* 
    .map() transforms each product object into an HTML string.
    .join('') combines all the strings into one big HTML block.
  */
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
          <span class="product-card__overlay-btn">View Product</span>
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

  /* After rendering, attach click listeners to each card */
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      const product = PRODUCTS.find(p => p.id === id);
      if (product) openModal(product);
    });

    /* Also support keyboard: Enter or Space opens the modal */
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}


/* ================================================================
   7. PRODUCT FILTERS
   
   When a filter button is clicked:
   1. Remove .active from all buttons, add it to the clicked one
   2. Loop through all product cards:
      - If filter is "all" OR card's category matches: show the card
      - Otherwise: hide it (add .is-hidden class)
   3. Re-trigger the scroll reveal so newly shown cards animate in
================================================================ */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      /* Update active state */
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter; /* "all", "tshirt", etc. */

      /* Show/hide cards */
      document.querySelectorAll('.product-card').forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !match);
        
        /* Reset reveal state so hidden→shown cards animate again */
        if (match) {
          card.classList.remove('is-revealed');
          card.style.setProperty('--delay', '0ms');
        }
      });

      /* Re-run the reveal for newly visible cards */
      if (window.revealProductCards) window.revealProductCards();
    });
  });
}


/* ================================================================
   8. PRODUCT MODAL — Open / Close / Populate
   
   openModal(product): takes a product object, fills the modal 
   panel with its details, then shows the modal.
   
   closeModal(): hides the modal and restores scroll.
   
   We disable body scroll when the modal is open so the background 
   doesn't scroll behind it.
================================================================ */

/* Track the selected size (changes when user clicks a size button) */
let selectedSize = null;

function openModal(product) {
  const modal = document.getElementById('productModal');
  const content = document.getElementById('modalContent');
  if (!modal || !content) return;

  /* 
    Build the inner HTML for the modal.
    Template literal = the backtick string with ${} variables.
  */
  const sizesHTML = product.sizes.map(size => `
    <button 
      class="size-btn" 
      data-size="${size}"
      aria-label="Select size ${size}"
    >${size}</button>
  `).join('');

  content.innerHTML = `
    <img 
      class="modal__image" 
      src="${product.image}" 
      alt="${product.name}"
      onerror="this.style.background='var(--color-navy-mid)'; this.src=''"
    />
    <p class="modal__category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
    <h2 class="modal__title">${product.name}</h2>
    <p class="modal__price">${product.price}</p>
    <p class="modal__desc">${product.description}</p>

    <div class="modal__sizes">
      <span class="modal__sizes-label">Select Size</span>
      ${sizesHTML}
    </div>

    <button class="btn btn--primary btn--full" id="modalAddBtn" style="margin-top: 1rem">
      Add to Cart
    </button>
    <p style="font-size: 0.75rem; color: var(--color-grey); margin-top: 1rem; text-align: center;">
      Free shipping on orders over €50
    </p>
  `;

  /* Size button click handler — toggles .selected class */
  content.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      content.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSize = btn.dataset.size;
    });
  });

  /* Add to Cart placeholder — replace with your cart logic */
  document.getElementById('modalAddBtn')?.addEventListener('click', () => {
    if (!selectedSize && product.sizes.length > 1) {
      alert('Please select a size first.');
      return;
    }
    alert(`${product.name} (${selectedSize || 'One Size'}) added to cart!\n\nConnect this to your cart/checkout system.`);
  });

  /* Open the modal: show the overlay, lock background scroll */
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; /* Prevent background scroll */
  selectedSize = null; /* Reset size selection */
}

function closeModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; /* Re-enable scroll */
}

function initModal() {
  /* Close button inside the modal panel */
  document.getElementById('modalClose')?.addEventListener('click', closeModal);

  /* Click on the dark backdrop behind the panel */
  document.getElementById('modalBackdrop')?.addEventListener('click', closeModal);

  /* Escape key also closes the modal */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}


/* ================================================================
   9. RENDER INSTAGRAM FEED
   
   Builds the 6-post grid from the INSTAGRAM_POSTS array.
   The ♡ (heart) and comment icons are inline SVGs.
================================================================ */
function renderInstagram() {
  const grid = document.getElementById('instagramGrid');
  if (!grid) return;

  grid.innerHTML = INSTAGRAM_POSTS.map(post => `
    <div class="ig-card" data-reveal>
      <img 
        src="${post.image}" 
        alt="Instagram post"
        loading="lazy"
        onerror="this.style.display='none'"
      />
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
   10. CONTACT FORM
   
   Prevents the default form submission (which would reload the page).
   Instead, we show a success message.
   
   To actually send the email, replace the inside of handleSubmit 
   with a call to one of these services:
   - Formspree: https://formspree.io (simplest, free tier available)
   - Netlify Forms: automatic if hosted on Netlify
   - EmailJS: https://emailjs.com (sends directly from the browser)
================================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  /* 
    Floating label: as the user types, we add .has-value to the input
    so the CSS label moves up. Without this, the label would only 
    stay up while the input is focused, not when it has typed content.
  */
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.toggle('has-value', field.value.trim() !== '');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault(); /* Stop default browser form submission */

    /* ---- REPLACE THIS SECTION WITH YOUR FORM HANDLER ---- */
    /* Example with Formspree:
       fetch('https://formspree.io/f/YOUR_FORM_ID', {
         method: 'POST',
         body: new FormData(form),
         headers: { 'Accept': 'application/json' }
       }).then(() => showSuccess());
    */

    /* For now: just show the success message */
    showSuccess();
  });

  function showSuccess() {
    form.style.opacity = '0.5';
    form.style.pointerEvents = 'none';
    if (success) success.classList.add('is-visible');
  }
}


/* ================================================================
   11. FOOTER YEAR
   
   Automatically sets the year in the copyright notice.
   new Date().getFullYear() returns the current 4-digit year.
   This way you never need to manually update "© 2024" each year.
================================================================ */
function initFooterYear() {
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}


/* ================================================================
   12. INIT — Run Everything
   
   DOMContentLoaded fires when the HTML is fully parsed.
   We wait for this before touching the DOM so all elements exist.
   
   The order here matters: render before attach listeners.
================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();         /* Custom mouse cursor */
  initNav();            /* Scroll-aware navigation */
  renderProducts();     /* Build product grid from PRODUCTS array */
  renderInstagram();    /* Build Instagram feed from INSTAGRAM_POSTS array */
  initScrollReveal();   /* Animate elements as they scroll into view */
  initFilters();        /* Filter buttons for product grid */
  initModal();          /* Product detail modal open/close */
  initContactForm();    /* Contact form floating labels + submit */
  initFooterYear();     /* Auto-update copyright year */

  console.log('STNDRD — site initialized ✓');
});
