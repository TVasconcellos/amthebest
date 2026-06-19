const COLORS = {
  burgundy: {
    label: "Burgundy",
    hex: "#5C1A1A"
  },
  navy: {
    label: "Navy",
    hex: "#1B2A4A"
  },
  forestGreen: {
    label: "Forest Green",
    hex: "#2D4A2D"
  },
  black: {
    label: "Black",
    hex: "#111111"
  },
  white: {
    label: "White",
    hex: "#F0F0F0"
  }
};

const PRODUCTS = [ {
  id: 1,
  name: "T-Shirt",
  family: "T-Shirt",
  category: "tshirt",
  price: "€15",
  badge: "Best Seller",
  image: "images/products/shirt1.jpg",
  description: "T-shirt with exclusive brand design.",
  sizes: [ "S", "M", "L", "XL" ],
  colors: [ {
    ...COLORS.burgundy,
    image: "images/products/shirt1.jpg",
    images: [ "images/products/shirt1.jpg", "images/products/tshirt_red_2.png" ]
  }, {
    ...COLORS.navy,
    image: "images/products/shirt2.jpg",
    images: [ "images/products/shirt2.jpg", "images/products/tshirt_navy_2.png" ]
  }, {
    ...COLORS.forestGreen,
    image: "images/products/shirt3.jpg",
    images: [ "images/products/shirt3.jpg", "images/products/tshirt_green_2.png" ]
  }, {
    ...COLORS.black,
    image: "images/products/shirt4.jpg"
  }, {
    ...COLORS.white,
    image: "images/products/shirt5.jpg"
  } ]
}, {
  id: 2,
  name: 'T-Shirt "The Best." Collection',
  family: 'T-Shirt "The Best." Collection',
  category: "tshirt-nolog",
  price: "€15",
  badge: "New",
  image: "images/products/shirt6.jpg",
  description: "T-shirt with exclusive brand design.",
  sizes: [ "S", "M", "L", "XL" ],
  colors: [ {
    ...COLORS.burgundy,
    image: "images/products/shirt6.jpg"
  }, {
    ...COLORS.navy,
    image: "images/products/shirt7.jpg"
  }, {
    ...COLORS.forestGreen,
    image: "images/products/shirt8.jpg"
  }, {
    ...COLORS.black,
    image: "images/products/shirt9.jpg"
  }, {
    ...COLORS.white,
    image: "images/products/shirt10.jpg"
  } ]
}, {
  id: 3,
  name: "Hoodie",
  family: "Hoodie",
  category: "hoodie",
  price: "€20",
  badge: null,
  image: "images/products/hoodie1.jpg",
  description: "Hoodie with exclusive brand design.",
  sizes: [ "S", "M", "L", "XL" ],
  colors: [ {
    ...COLORS.white,
    image: "images/products/hoodie1.jpg",
    images: [ "images/products/hoodie1.jpg", "images/products/hoodie_white_2.png" ]
  }, {
    ...COLORS.black,
    image: "images/products/hoodie2.jpg",
    images: [ "images/products/hoodie2.jpg", "images/products/hoodie_black_2.png" ]
  } ]
}, {
  id: 4,
  name: "Sweatshirt",
  family: "Sweatshirt",
  category: "sweatshirt",
  price: "€16",
  badge: null,
  image: "images/products/sweatshirt1.jpg",
  description: "Sweatshirt with exclusive brand design.",
  sizes: [ "S", "M", "L", "XL" ],
  colors: [ {
    ...COLORS.white,
    image: "images/products/sweatshirt1.jpg",
    images: [ "images/products/sweatshirt1.jpg", "images/products/sweatshirt_white_2.png" ]
  }, {
    ...COLORS.black,
    image: "images/products/sweatshirt2.jpg",
    images: [ "images/products/sweatshirt2.jpg", "images/products/sweatshirt_black_2.png" ]
  } ]
}, {
  id: 5,
  name: "Shorts",
  family: "Shorts",
  category: "shorts",
  price: "€15",
  badge: null,
  image: "images/products/shorts1.jpg",
  images: [ "images/products/shorts1.jpg", "images/products/shorts_black_2.png" ],
  description: "Shorts with exclusive brand design.",
  sizes: [ "S", "M", "L", "XL" ],
  colors: null
}, {
  id: 23,
  name: "Polo Shirt",
  family: "Polo Shirt",
  category: "polo",
  price: "€12",
  badge: "New",
  image: "images/products/polo-branco-1-1.jpeg",
  description: "Men's polo shirt with exclusive brand design.",
  sizes: [ "S", "M", "L", "XL" ],
  colors: [ {
    ...COLORS.white,
    image: "images/products/polo-branco-1-1.jpeg",
    images: [ "images/products/polo-branco-1-1.jpeg", "images/products/polo-branco-1-2.jpeg", "images/products/polo-branco-1-3.jpeg" ]
  }, {
    ...COLORS.black,
    image: "images/products/polo-preto-1-1.jpeg",
    images: [ "images/products/polo-preto-1-1.jpeg", "images/products/polo-preto-1-2.jpeg", "images/products/polo-preto-1-3.jpeg" ]
  }, {
    ...COLORS.navy,
    image: "images/products/polo-azul-1-1.jpeg",
    images: [ "images/products/polo-azul-1-1.jpeg", "images/products/polo-azul-1-2.jpeg", "images/products/polo-azul-1-3.jpeg" ]
  } ]
}, {
  id: 24,
  name: "Women's Fitness Top",
  family: "Women's Fitness Top",
  category: "womens-top",
  price: "€12",
  badge: "New",
  image: "images/products/top-fit-1-1.jpeg",
  images: [ "images/products/top-fit-1-1.jpeg", "images/products/top-fit-1-2.jpeg", "images/products/top-fit-1-3.jpeg" ],
  description: "Women's fitness top with exclusive brand design.",
  sizes: [ "S", "M", "L", "XL" ],
  colors: null
}, {
  id: 6,
  name: "Cap",
  family: "Cap",
  category: "cap",
  price: "€8",
  badge: "Best Seller",
  image: "images/products/cap1.jpg",
  description: "Cap with brand detail.",
  sizes: [ "One Size" ],
  colors: [
    { ...COLORS.white, image: "images/products/cap1.jpg" },
    { ...COLORS.navy,  image: "images/products/cap1.jpg" },
    { ...COLORS.black, image: "images/products/cap1.jpg" }
  ]
}, {
  id: 7,
  name: "Socks",
  family: "Socks",
  category: "socks",
  price: "€5",
  badge: "Best Seller",
  image: "images/products/socks-white-1.jpg",
  description: "Socks with exclusive brand design.",
  sizes: [ "One Size" ],
  colors: [ {
    ...COLORS.white,
    image: "images/products/socks-white-1.jpg",
    images: [ "images/products/socks-white-1.jpg", "images/products/socks-white-2.png" ]
  }, {
    ...COLORS.black,
    image: "images/products/socks_black_1.jpg",
    images: [ "images/products/socks_black_1.jpg", "images/products/socks_black_2.png" ]
  } ]
}, {
  id: 8,
  name: "Water Bottle",
  family: "Water Bottle A&M",
  category: "accessories",
  price: "€12",
  badge: "New",
  image: "images/products/bottle1.jpg",
  description: "Reusable water bottle with brand branding.",
  sizes: [ "One Size" ],
  colors: [ {
    ...COLORS.navy,
    image: "images/products/bottle1.jpg",
    images: [ "images/products/bottle1.jpg", "images/products/bottle1-1.jpg", "images/products/bottle1-2.jpg" ]
  }, {
    ...COLORS.black,
    image: "images/products/bottle2.jpg",
    images: [ "images/products/bottle2.jpg", "images/products/bottle2-1.jpg" ]
  } ]
}, {
  id: 9,
  name: "Totebag",
  family: "Totebag",
  category: "accessories",
  price: "€8",
  badge: "New",
  image: "images/products/tote1.jpg",
  description: "Totebag with brand branding.",
  sizes: [ "One Size" ],
  colors: null
}, {
  id: 10,
  name: "Playing Cards",
  family: "Playing Cards",
  category: "accessories",
  price: "€10",
  badge: "New",
  image: "images/products/baralho_cartas1.jpg",
  images: [ "images/products/baralho_cartas1.jpg", "images/products/baralho_cartas2.jpg" ],
  description: "Plastic-coated playing cards with custom design.",
  sizes: [ "One Size" ],
  colors: null
}, {
  id: 11,
  name: "Coasters",
  family: "Coasters",
  category: "accessories",
  price: "€15",
  badge: "New",
  image: "images/products/base_copos1.jpg",
  images: [ "images/products/base_copos1.jpg", "images/products/base_copos2.jpg" ],
  description: "Leather coasters with brand detail.",
  sizes: [ "One Size" ],
  colors: null
}, {
  id: 12,
  name: "Notebook",
  family: "Notebook",
  category: "accessories",
  price: "€10",
  badge: "New",
  image: "images/products/caderno1.jpg",
  description: "A5 lined notebook with brand detail.",
  sizes: [ "One Size" ],
  colors: null
}, {
  id: 13,
  name: "Pen",
  family: "Pen",
  category: "accessories",
  price: "€1.50",
  badge: "Best Seller",
  image: "images/products/caneta1.jpg",
  description: "Pen with brand detail.",
  sizes: [ "One Size" ],
  colors: null
}, {
  id: 14,
  name: "Pack of Pens",
  family: "Pack of Pens",
  category: "accessories",
  price: "€3.50",
  badge: "Best Seller",
  image: "images/products/pack_canetas1.jpg",
  description: "Pens with brand detail. The complete writing pack.",
  sizes: [ "One Size" ],
  colors: null
}, {
  id: 15,
  name: "Keychain",
  family: "Keychain",
  category: "accessories",
  price: "€4",
  badge: "New",
  image: "images/products/porta_chaves.jpg",
  description: "Metal keychain with brand branding.",
  sizes: [ "One Size" ],
  colors: null
}, {
  id: 16,
  name: "Phone Case",
  family: "Phone Case",
  category: "accessories",
  price: "€5",
  badge: "New",
  image: "images/products/capa_telemovel.jpg",
  images: [ "images/products/capa_telemovel.jpg", "images/products/capa-telemovel-2.jpg" ],
  description: "Black phone case with brand branding.",
  sizeGroups: {
    "iPhone 16": [ "iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max" ],
    "iPhone 15": [ "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max" ],
    "iPhone 14": [ "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max" ],
    "iPhone 13": [ "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max" ],
    "iPhone 12": [ "iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max" ],
    "iPhone 11": [ "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max" ],
    "iPhone X/XS": [ "iPhone X/XS", "iPhone XS Max" ],
    "iPhone 7/8/SE": [ "iPhone 7/8/SE2/SE3", "iPhone 7 Plus/8 Plus" ]
  },
  colors: null
}, {
  id: 17,
  name: "Summer Pack",
  family: "Packs",
  category: "pack",
  price: "€25",
  save: "€3",
  badge: "Best Value",
  image: "images/products/summerpack1.jpg",
  description: "The Summer Pack: T-Shirt + Socks + Cap. Everything you need for the warm months, bundled at a saving.",
  components: [ { ref: 1 }, { ref: 7 }, { ref: 6 } ],
  colors: null
}, {
  id: 18,
  name: "Winter Pack",
  family: "Packs",
  category: "pack",
  price: "€36",
  save: "€5",
  badge: "Best Value",
  image: "images/products/winterpack1.jpg",
  description: "The Winter Pack: Hoodie + Sweatshirt + Socks. Stay warm, stay fresh.",
  components: [ { ref: 3 }, { ref: 4 }, { ref: 7 } ],
  colors: null
}, {
  id: 19,
  name: "Essential Pack",
  family: "Packs",
  category: "pack",
  price: "€28",
  save: "€3",
  badge: "Best Value",
  image: "images/products/essentialpack1.jpg",
  description: "The Essential Pack: T-Shirt + Sweatshirt. The perfect starter kit.",
  components: [ { ref: 1 }, { ref: 4 } ],
  colors: null
}, {
  id: 20,
  name: "Complete Pack",
  family: "Packs",
  category: "pack",
  price: "€43",
  save: "€5",
  badge: "Best Value",
  image: "images/products/completepack1.jpg",
  description: "The Complete Pack: Hoodie + T-Shirt + Socks + Cap. The full A&M experience.",
  components: [ { ref: 3 }, { ref: 1 }, { ref: 7 }, { ref: 6 } ],
  colors: null
}, {
  id: 21,
  name: "Office Pack",
  family: "Packs",
  category: "pack",
  price: "€25.50",
  save: "€3",
  badge: "Best Value",
  image: "images/products/officepack1.jpg",
  images: [ "images/products/officepack1.jpg", "images/products/officepack2.jpg" ],
  description: "The Office Pack. Everything you need for the desk, bundled at a saving.",
  sizes: [ "One Size" ],
  colors: null
}, {
  id: 22,
  name: "Street Pack",
  family: "Packs",
  category: "pack",
  price: "€15",
  save: "€2",
  badge: "Best Value",
  image: "images/products/streetpack1.jpg",
  images: [ "images/products/streetpack1.jpg", "images/products/streetpack2.jpg", "images/products/streetpack3.jpg" ],
  description: "The Street Pack: Cap + Phone Case. Everyday essentials, bundled at a saving.",
  components: [ { ref: 6 }, { ref: 16 } ],
  colors: null
}, {
  id: 25,
  name: "Gift Card",
  family: "Gift Card",
  category: "giftcard",
  price: "€10",
  badge: "New",
  image: "images/products/giftcard1.jpg",
  description: "Give the gift of choice. Pick a value, add a personal note, and we'll take care of the rest.",
  sizes: null,
  colors: null
} ];

function initCursor() {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursorFollower");
  if (!cursor || !follower) return;
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  const LERP = .12;
  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, {
    passive: true
  });
  function tick() {
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    ringX += (mouseX - ringX) * LERP;
    ringY += (mouseY - ringY) * LERP;
    follower.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(tick);
  }
  tick();
  const hoverTargets = "a, button, .product-card, .filter-btn, .size-btn, .lang-btn, .color-swatch, .modal__thumb";
  document.addEventListener("mouseover", e => {
    if (e.target.closest(hoverTargets)) follower.classList.add("is-hovering");
  });
  document.addEventListener("mouseout", e => {
    if (e.target.closest(hoverTargets)) follower.classList.remove("is-hovering");
  });
}

function initNav() {
  const nav = document.getElementById("mainNav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 50);
  window.addEventListener("scroll", onScroll, {
    passive: true
  });
  onScroll();
}

function initHeroVideo() {
  const video = document.getElementById("heroVideo");
  const source = document.getElementById("heroVideoSource");
  if (!video || !source) return;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const desired = isMobile ? "images/main_mobile.mp4" : "images/main.mp4";
  if (!source.src.endsWith(desired)) {
    source.src = desired;
    video.load();
  }
  const tryPlay = () => video.play().catch(() => {});
  tryPlay();
  const retryOnce = () => {
    tryPlay();
    [ "pointerdown", "touchstart", "scroll", "keydown" ].forEach(evt => window.removeEventListener(evt, retryOnce));
  };
  [ "pointerdown", "touchstart", "scroll", "keydown" ].forEach(evt => window.addEventListener(evt, retryOnce, {
    once: false,
    passive: true
  }));
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tryPlay();
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: .15
  });
  document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
  function revealCards() {
    const cards = document.querySelectorAll(".product-card:not(.is-hidden)");
    cards.forEach((card, i) => {
      card.style.setProperty("--delay", `${i % 4 * 40}ms`);
      card.classList.add("is-revealed");
    });
  }
  window.revealProductCards = revealCards;
  revealCards();
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  const lang = document.documentElement.dataset.lang || "en";
  const t = TRANSLATIONS[lang];
  const viewLabel = t["product.view"] || "View Product";
  grid.innerHTML = PRODUCTS.map(product => {
    const tName = tProduct(product, "name");
    const tFamily = tProduct(product, "family");
    const tBadgeLabel = product.badge ? tBadge(product.badge) : null;
    const colorDotsHtml = product.colors && product.colors.length > 0 ? `<div class="product-card__color-dots">\n           ${product.colors.slice(0, 5).map(c => `<span class="color-dot" style="background:${c.hex}" title="${tColor(c.label)}"></span>`).join("")}\n           ${product.colors.length > 5 ? `<span class="color-dot-more">+${product.colors.length - 5}</span>` : ""}\n         </div>` : "";
    return `\n      <div\n        class="product-card"\n        data-category="${product.category}"\n        data-id="${product.id}"\n        data-name="${tName.toLowerCase()}"\n        data-price="${parseFloat((product.price || "").replace(/[^0-9.]/g, "")) || 0}"\n        role="button"\n        tabindex="0"\n        aria-label="${viewLabel}: ${tName}"\n      >\n        <div class="product-card__image-wrap">\n          <img src="${product.image}" alt="${tName}" loading="lazy" onerror="this.style.display='none'" />\n          <div class="product-card__overlay">\n            <span class="product-card__overlay-btn">${viewLabel}</span>\n          </div>\n        </div>\n        <div class="product-card__body">\n          ${tBadgeLabel ? `<span class="product-card__badge">${tBadgeLabel}</span>` : ""}\n          <p class="product-card__name">${tName}</p>\n          <p class="product-card__family">${tFamily}</p>\n          <div class="product-card__footer">\n            <div class="product-card__price-block">\n              <p class="product-card__price">${product.category === "giftcard" ? t["giftcard.priceFrom"] || "From €10" : product.price}</p>\n              ${product.save ? `<span class="product-card__save">${tSave(product.save)}</span>` : ""}\n            </div>\n            ${colorDotsHtml}\n          </div>\n        </div>\n      </div>\n    `;
  }).join("");
  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
      const product = PRODUCTS.find(p => p.id === parseInt(card.dataset.id));
      if (product) openModal(product);
    });
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
  });
}

function getGridColumnCount() {
  const grid = document.getElementById("productGrid");
  if (!grid) return 4;
  const cols = getComputedStyle(grid).gridTemplateColumns.split(" ").length;
  return cols || 4;
}

function fixGhostCells() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  grid.querySelectorAll(".grid-filler").forEach(el => el.remove());
  const visibleCards = grid.querySelectorAll(".product-card:not(.is-hidden)").length;
  const cols = getGridColumnCount();
  const remainder = visibleCards % cols;
  if (remainder === 0) return;
  const fillersNeeded = cols - remainder;
  for (let i = 0; i < fillersNeeded; i++) {
    const filler = document.createElement("div");
    filler.className = "grid-filler";
    grid.appendChild(filler);
  }
}

function sortCards(value) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll(".product-card:not(.grid-filler)"));
  cards.sort((a, b) => {
    if (value === "name-asc") return a.dataset.name.localeCompare(b.dataset.name);
    if (value === "name-desc") return b.dataset.name.localeCompare(a.dataset.name);
    if (value === "price-asc") return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
    if (value === "price-desc") return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
    return parseInt(a.dataset.id) - parseInt(b.dataset.id);
  });
  cards.forEach(card => grid.appendChild(card));
  fixGhostCells();
}

function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const sortSelect = document.getElementById("sortSelect");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      document.querySelectorAll(".product-card").forEach(card => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !match);
        if (match) {
          card.classList.remove("is-revealed");
          card.style.setProperty("--delay", "0ms");
        }
      });
      if (sortSelect) sortCards(sortSelect.value); else fixGhostCells();
      if (window.revealProductCards) window.revealProductCards();
    });
  });
  if (sortSelect) {
    sortSelect.addEventListener("change", () => sortCards(sortSelect.value));
  }
  fixGhostCells();
  window.addEventListener("resize", fixGhostCells, {
    passive: true
  });
}

let selectedSize = null;

let selectedColor = null;

let imageFadeTimer = null;

function cancelImageFade() {
  if (imageFadeTimer !== null) {
    clearTimeout(imageFadeTimer);
    imageFadeTimer = null;
  }
}

function resolveProductImage(product, color, size) {
  if (!color) {
    return product.images?.[0] ?? product.image;
  }
  if (color.imageBySize && size && color.imageBySize[size]) {
    return color.imageBySize[size];
  }
  if (color.images && color.images.length > 0) {
    return color.images[0];
  }
  return color.image;
}

function resolveProductImages(product, color, size) {
  if (!color) {
    return product.images ?? [ product.image ];
  }
  if (color.imageBySize && size && color.imageBySize[size]) {
    return [ color.imageBySize[size] ];
  }
  if (color.images && color.images.length > 0) {
    return color.images;
  }
  return [ color.image ];
}

function openModal(product) {
  const modal = document.getElementById("productModal");
  const content = document.getElementById("modalContent");
  if (!modal || !content) return;
  cancelImageFade();
  selectedSize = null;
  selectedColor = null;
  if (product.category === "giftcard") {
    openGiftCardModal(product, modal, content);
    return;
  }
  if (product.components) {
    openPackModal(product, modal, content);
    return;
  }
  const lang = document.documentElement.dataset.lang || "en";
  const t = TRANSLATIONS[lang];
  let sizesHTML;
  if (product.sizeGroups) {
    const generations = Object.keys(product.sizeGroups);
    sizesHTML = `\n      <div class="modal__size-groups" id="modalSizeGroups">\n        ${generations.map(gen => `\n          <button class="size-btn size-btn--group" data-group="${gen}">${gen}</button>\n        `).join("")}\n      </div>\n      <div class="modal__sizes-grid modal__sizes-variants" id="modalSizeVariants" hidden></div>\n    `;
  } else {
    sizesHTML = `<div class="modal__sizes-grid">\n      ${product.sizes.map(size => `\n        <button class="size-btn" data-size="${size}" aria-label="${t["modal.size"] || "Size"} ${tSize(size)}">${tSize(size)}</button>\n      `).join("")}\n    </div>`;
  }
  let colorsHTML = "";
  if (product.colors && product.colors.length > 0) {
    const activeIdx = product.colors.findIndex(c => c.image === product.image) ?? 0;
    selectedColor = product.colors[activeIdx >= 0 ? activeIdx : 0];
    const swatchesHTML = product.colors.map((color, idx) => `\n      <button\n        class="color-swatch${idx === (activeIdx >= 0 ? activeIdx : 0) ? " selected" : ""}"\n        data-color-idx="${idx}"\n        style="background: ${color.hex}"\n        title="${tColor(color.label)}"\n        aria-label="${t["modal.colour"] || "Colour"}: ${tColor(color.label)}"\n      ></button>\n    `).join("");
    colorsHTML = `\n      <div class="modal__colors">\n        <div class="modal__colors-header">\n          <span class="modal__sizes-label">${t["modal.colour"] || "Colour"}</span>\n          <span class="modal__color-selected" id="modalColorSelected">${tColor(selectedColor.label)}</span>\n        </div>\n        <div class="modal__color-swatches">${swatchesHTML}</div>\n      </div>\n    `;
  }
  const initialSize = product.sizes?.[0] ?? null;
  const initialImage = resolveProductImage(product, selectedColor, initialSize);
  const initialImages = resolveProductImages(product, selectedColor, initialSize);
  const galleryHTML = initialImages.length > 1 ? `<div class="modal__gallery" id="modalGallery">\n         ${initialImages.map((src, idx) => `\n           <button\n             class="modal__thumb${idx === 0 ? " is-active" : ""}"\n             data-thumb-idx="${idx}"\n             aria-label="View image ${idx + 1}"\n           >\n             <img src="${src}" alt="" loading="lazy" />\n           </button>\n         `).join("")}\n       </div>` : "";
  content.innerHTML = `\n    <div class="modal__layout">\n      <div class="modal__media">\n        <img\n          class="modal__image"\n          id="modalProductImage"\n          src="${initialImage}"\n          alt="${product.name}"\n          onerror="this.style.background='var(--color-navy-mid)'; this.removeAttribute('src')"\n        />\n        ${galleryHTML}\n      </div>\n\n      <div class="modal__details">\n        <div class="modal__meta">\n          <p class="modal__family">${tProduct(product, "family")}</p>\n          <h2 class="modal__title">${tProduct(product, "name")}</h2>\n          <div class="modal__price-row">\n            <p class="modal__price">${product.price}</p>\n            ${product.save ? `<span class="modal__save">${tSave(product.save)}</span>` : ""}\n          </div>\n        </div>\n        <p class="modal__desc">${tProduct(product, "description")}</p>\n\n        ${colorsHTML}\n\n        <div class="modal__sizes">\n          <span class="modal__sizes-label">${t["modal.selectSize"] || "Select Size"}</span>\n          ${sizesHTML}\n        </div>\n\n        <button class="btn btn--primary btn--full" id="modalAddBtn" style="margin-top:1.5rem">\n          ${t["modal.addToCart"] || "Add to Cart"}\n        </button>\n        <div class="modal__shipping-note">\n          ${(t["modal.shipping"] || "Free shipping over €50").split("•").map(perk => `<span class="perk">${perk.trim()}</span>`).join("")}\n        </div>\n      </div>\n    </div>\n  `;
  function rebuildGallery() {
    const galleryEl = content.querySelector("#modalGallery");
    const images = resolveProductImages(product, selectedColor, selectedSize);
    if (images.length <= 1) {
      if (galleryEl) galleryEl.style.display = "none";
      return;
    }
    let target = galleryEl;
    if (!target) {
      target = document.createElement("div");
      target.className = "modal__gallery";
      target.id = "modalGallery";
      content.querySelector(".modal__media").appendChild(target);
    }
    target.style.display = "";
    target.innerHTML = images.map((src, idx) => `\n      <button\n        class="modal__thumb${idx === 0 ? " is-active" : ""}"\n        data-thumb-idx="${idx}"\n        aria-label="View image ${idx + 1}"\n      ><img src="${src}" alt="" loading="lazy" /></button>\n    `).join("");
    wireGalleryThumbs();
  }
  function wireGalleryThumbs() {
    const modalImage = content.querySelector("#modalProductImage");
    if (!modalImage) return;
    content.querySelectorAll(".modal__thumb").forEach(thumb => {
      thumb.addEventListener("click", () => {
        const newSrc = thumb.querySelector("img")?.src;
        if (!newSrc) return;
        content.querySelectorAll(".modal__thumb").forEach(t => t.classList.remove("is-active"));
        thumb.classList.add("is-active");
        cancelImageFade();
        modalImage.style.opacity = "0";
        imageFadeTimer = setTimeout(() => {
          modalImage.src = newSrc;
          modalImage.style.opacity = "1";
          imageFadeTimer = null;
        }, 180);
      });
    });
  }
  wireGalleryThumbs();
  if (product.colors && product.colors.length > 0) {
    const modalImage = content.querySelector("#modalProductImage");
    const colorSelected = content.querySelector("#modalColorSelected");
    content.querySelectorAll(".color-swatch").forEach(swatch => {
      swatch.addEventListener("click", () => {
        content.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("selected"));
        swatch.classList.add("selected");
        const idx = parseInt(swatch.dataset.colorIdx);
        const color = product.colors[idx];
        selectedColor = color;
        if (colorSelected) colorSelected.textContent = tColor(color.label);
        cancelImageFade();
        modalImage.style.opacity = "0";
        imageFadeTimer = setTimeout(() => {
          modalImage.src = resolveProductImage(product, color, selectedSize);
          modalImage.style.opacity = "1";
          imageFadeTimer = null;
        }, 180);
        rebuildGallery();
      });
    });
  }
  if (product.sizeGroups) {
    const groupsEl = content.querySelector("#modalSizeGroups");
    const variantsEl = content.querySelector("#modalSizeVariants");
    function showVariants(generation) {
      const variants = product.sizeGroups[generation] || [];
      variantsEl.innerHTML = variants.map(model => `\n        <button class="size-btn" data-size="${model}">${model}</button>\n      `).join("");
      variantsEl.hidden = false;
      variantsEl.querySelectorAll(".size-btn").forEach(vBtn => {
        vBtn.addEventListener("click", () => {
          variantsEl.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
          vBtn.classList.add("selected");
          selectedSize = vBtn.dataset.size;
        });
      });
    }
    groupsEl.querySelectorAll(".size-btn--group").forEach(gBtn => {
      gBtn.addEventListener("click", () => {
        groupsEl.querySelectorAll(".size-btn--group").forEach(b => b.classList.remove("selected"));
        gBtn.classList.add("selected");
        selectedSize = null;
        showVariants(gBtn.dataset.group);
      });
    });
  } else {
    content.querySelectorAll(".size-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        content.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedSize = btn.dataset.size;
        const modalImage = content.querySelector("#modalProductImage");
        if (modalImage && selectedColor?.imageBySize) {
          const newSrc = resolveProductImage(product, selectedColor, selectedSize);
          if (modalImage.src !== newSrc && !modalImage.src.endsWith(newSrc)) {
            cancelImageFade();
            modalImage.style.opacity = "0";
            imageFadeTimer = setTimeout(() => {
              modalImage.src = newSrc;
              modalImage.style.opacity = "1";
              imageFadeTimer = null;
            }, 180);
          }
        }
      });
    });
    const PRESELECT_MAX = 6;
    if (product.sizes && product.sizes.length <= PRESELECT_MAX) {
      const firstSizeBtn = content.querySelector(".size-btn");
      if (firstSizeBtn) {
        firstSizeBtn.classList.add("selected");
        selectedSize = firstSizeBtn.dataset.size;
      }
    }
  }
  content.querySelector("#modalAddBtn")?.addEventListener("click", () => {
    const needsSelection = !!product.sizeGroups || product.sizes && product.sizes.length > 1;
    if (!selectedSize && needsSelection) {
      alert(t["modal.selectSizeAlert"] || "Please select an option first.");
      return;
    }
    Cart.add({
      id: product.id,
      name: product.name,
      family: product.family,
      price: parseFloat(product.price.replace(/[^0-9.]/g, "")),
      priceStr: product.price,
      size: selectedSize || "One Size",
      color: selectedColor ? selectedColor.label : null,
      image: resolveProductImage(product, selectedColor, selectedSize)
    });
    closeModal();
    setTimeout(() => Cart.open(), 350);
  });
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  selectedColor = product.colors?.[0] ?? null;
}


function openGiftCardModal(product, modal, content) {
  const lang = document.documentElement.dataset.lang || "en";
  const t = TRANSLATIONS[lang];
  const VALUES = [10, 25, 50, 100];
  let selectedValue = null;
  let customMode = false;
  content.innerHTML = `
    <div class="modal__layout">
      <div class="modal__media">
        <img
          class="modal__image"
          id="modalProductImage"
          src="${product.image}"
          alt="${tProduct(product, "name")}"
          onerror="this.style.background='var(--color-navy-mid)'; this.removeAttribute('src')"
        />
      </div>
      <div class="modal__details">
        <div class="modal__meta">
          <p class="modal__family">${tProduct(product, "family")}</p>
          <h2 class="modal__title">${tProduct(product, "name")}</h2>
        </div>
        <p class="modal__desc">${tProduct(product, "description")}</p>

        <div class="modal__sizes" style="margin-bottom:1.25rem">
          <span class="modal__sizes-label">${t["giftcard.value"] || "Value"}</span>
          <div class="modal__sizes-grid" id="gcValueGrid">
            ${VALUES.map(v => `<button class="size-btn" data-value="${v}">€${v}</button>`).join("")}
            <button class="size-btn" data-value="custom">${t["giftcard.custom"] || "Custom"}</button>
          </div>
          <div class="giftcard__custom-wrap" id="gcCustomWrap" hidden>
            <div class="form-field" style="margin-top:0.75rem">
              <input type="number" id="gcCustomInput" min="1" max="500" autocomplete="off">
              <label for="gcCustomInput">${t["giftcard.customLabel"] || "Amount (€)"}</label>
              <div class="form-field__line"></div>
            </div>
          </div>
        </div>

        <div class="modal__sizes" style="margin-bottom:0">
          <span class="modal__sizes-label">${t["giftcard.details"] || "Personalise"}</span>
          <div class="giftcard__fields">
            <div class="form-field">
              <input type="text" id="gcTo" autocomplete="off" required>
              <label for="gcTo">${t["giftcard.to"] || "To"}</label>
              <div class="form-field__line"></div>
            </div>
            <div class="form-field">
              <input type="text" id="gcFrom" autocomplete="off">
              <label for="gcFrom">${t["giftcard.from"] || "From (optional)"}</label>
              <div class="form-field__line"></div>
            </div>
            <div class="form-field">
              <textarea id="gcMessage" rows="3" autocomplete="off"></textarea>
              <label for="gcMessage">${t["giftcard.message"] || "Message (optional)"}</label>
              <div class="form-field__line"></div>
            </div>
          </div>
        </div>

        <button class="btn btn--primary btn--full" id="modalAddBtn" style="margin-top:1.5rem">
          ${t["modal.addToCart"] || "Add to Cart"}
        </button>
        <div class="modal__shipping-note">
          ${(t["modal.shipping"] || "Free shipping over €50").split("•").map(perk => `<span class="perk">${perk.trim()}</span>`).join("")}
        </div>
      </div>
    </div>
  `;

  content.querySelectorAll(".form-field input, .form-field textarea").forEach(field => {
    field.addEventListener("input", () => {
      field.classList.toggle("has-value", field.value.trim() !== "");
    });
  });

  const customWrap = content.querySelector("#gcCustomWrap");
  const customInput = content.querySelector("#gcCustomInput");

  content.querySelectorAll(".size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      content.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      if (btn.dataset.value === "custom") {
        customMode = true;
        selectedValue = null;
        customWrap.hidden = false;
        customInput.focus();
      } else {
        customMode = false;
        selectedValue = parseInt(btn.dataset.value);
        customWrap.hidden = true;
      }
    });
  });

  content.querySelector("#modalAddBtn")?.addEventListener("click", () => {
    const to = content.querySelector("#gcTo").value.trim();
    const from = content.querySelector("#gcFrom").value.trim();
    const message = content.querySelector("#gcMessage").value.trim();
    if (customMode) {
      const raw = parseFloat(customInput.value);
      if (!raw || raw < 1) {
        alert(t["giftcard.alertValue"] || "Please enter a valid amount.");
        return;
      }
      selectedValue = raw;
    }
    if (!selectedValue) {
      alert(t["giftcard.alertValue"] || "Please select a value first.");
      return;
    }
    if (!to) {
      alert(t["giftcard.alertTo"] || "Please fill in who the gift card is for.");
      return;
    }
    Cart.add({
      id: product.id,
      name: product.name,
      family: product.family,
      price: selectedValue,
      priceStr: `€${selectedValue}`,
      size: null,
      color: null,
      image: product.image,
      giftcard: { to, from, message, value: selectedValue }
    });
    closeModal();
    setTimeout(() => Cart.open(), 350);
  });

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("productModal");
  if (!modal) return;
  cancelImageFade();
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openPackModal(product, modal, content) {
  const lang = document.documentElement.dataset.lang || "en";
  const t = TRANSLATIONS[lang];
  const selections = product.components.map(() => ({
    color: null,
    size: null
  }));
  const initialImages = product.images ?? [ product.image ];
  const galleryHTML = initialImages.length > 1 ? `<div class="modal__gallery" id="modalGallery">${initialImages.map((src, idx) => `<button class="modal__thumb${idx === 0 ? " is-active" : ""}" data-thumb-idx="${idx}" aria-label="View image ${idx + 1}"><img src="${src}" alt="" loading="lazy" /></button>`).join("")}</div>` : "";
  const componentsHTML = product.components.map((comp, ci) => {
    const refProduct = PRODUCTS.find(p => p.id === comp.ref);
    if (!refProduct) return "";
    const compName = tProduct(refProduct, "name");
    let colourBlock = "";
    if (refProduct.colors && refProduct.colors.length > 0) {
      const swatches = refProduct.colors.map((c, idx) => `<button class="color-swatch" data-comp="${ci}" data-color-idx="${idx}" style="background: ${c.hex}" title="${tColor(c.label)}" aria-label="${tColor(c.label)}"></button>`).join("");
      colourBlock = `<div class="pack-comp__row"><span class="pack-comp__label">${t["modal.colour"] || "Colour"}</span><span class="pack-comp__chosen" id="packChosen-${ci}-color">—</span></div><div class="modal__color-swatches">${swatches}</div>`;
    }
    let sizeBlock = "";
    if (refProduct.sizeGroups) {
      const generations = Object.keys(refProduct.sizeGroups);
      sizeBlock = `<div class="pack-comp__row"><span class="pack-comp__label">${t["modal.size"] || "Size"}</span></div><div class="modal__size-groups" data-comp-groups="${ci}">${generations.map(gen => `<button class="size-btn size-btn--group" data-comp="${ci}" data-group="${gen}">${gen}</button>`).join("")}</div><div class="modal__sizes-grid modal__sizes-variants" data-comp-variants="${ci}" hidden></div>`;
    } else if (refProduct.sizes && refProduct.sizes.length > 1) {
      sizeBlock = `<div class="pack-comp__row"><span class="pack-comp__label">${t["modal.size"] || "Size"}</span></div><div class="modal__sizes-grid">${refProduct.sizes.map(size => `<button class="size-btn" data-comp="${ci}" data-size="${size}">${tSize(size)}</button>`).join("")}</div>`;
    }
    return `<div class="pack-comp"><h3 class="pack-comp__name">${compName}</h3>${colourBlock}${sizeBlock}</div>`;
  }).join("");
  content.innerHTML = `<div class="modal__layout"><div class="modal__media"><img class="modal__image" id="modalProductImage" src="${initialImages[0]}" alt="${product.name}" onerror="this.style.background='var(--color-navy-mid)'; this.removeAttribute('src')" />${galleryHTML}</div><div class="modal__details"><div class="modal__meta"><p class="modal__family">${tProduct(product, "family")}</p><h2 class="modal__title">${tProduct(product, "name")}</h2><div class="modal__price-row"><p class="modal__price">${product.price}</p>${product.save ? `<span class="modal__save">${tSave(product.save)}</span>` : ""}</div></div><p class="modal__desc">${tProduct(product, "description")}</p><div class="pack-comps">${componentsHTML}</div><button class="btn btn--primary btn--full" id="modalAddBtn" style="margin-top:1.5rem">${t["modal.addToCart"] || "Add to Cart"}</button><div class="modal__shipping-note">${(t["modal.shipping"] || "Free shipping over €50").split("•").map(perk => `<span class="perk">${perk.trim()}</span>`).join("")}</div></div></div>`;
  const modalImage = content.querySelector("#modalProductImage");
  content.querySelectorAll(".modal__thumb").forEach(thumb => {
    thumb.addEventListener("click", () => {
      const newSrc = thumb.querySelector("img")?.src;
      if (!newSrc) return;
      content.querySelectorAll(".modal__thumb").forEach(x => x.classList.remove("is-active"));
      thumb.classList.add("is-active");
      cancelImageFade();
      modalImage.style.opacity = "0";
      imageFadeTimer = setTimeout(() => {
        modalImage.src = newSrc;
        modalImage.style.opacity = "1";
        imageFadeTimer = null;
      }, 180);
    });
  });
  content.querySelectorAll(".color-swatch").forEach(swatch => {
    swatch.addEventListener("click", () => {
      const ci = parseInt(swatch.dataset.comp);
      const idx = parseInt(swatch.dataset.colorIdx);
      const refProduct = PRODUCTS.find(p => p.id === product.components[ci].ref);
      content.querySelectorAll(`.color-swatch[data-comp="${ci}"]`).forEach(s => s.classList.remove("selected"));
      swatch.classList.add("selected");
      selections[ci].color = refProduct.colors[idx].label;
      const chosenEl = content.querySelector(`#packChosen-${ci}-color`);
      if (chosenEl) chosenEl.textContent = tColor(refProduct.colors[idx].label);
    });
  });
  content.querySelectorAll(".modal__sizes-grid:not(.modal__sizes-variants) .size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const ci = parseInt(btn.dataset.comp);
      content.querySelectorAll(`.size-btn[data-comp="${ci}"]:not(.size-btn--group)`).forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selections[ci].size = btn.dataset.size;
    });
  });
  content.querySelectorAll(".size-btn--group").forEach(gBtn => {
    gBtn.addEventListener("click", () => {
      const ci = parseInt(gBtn.dataset.comp);
      const refProduct = PRODUCTS.find(p => p.id === product.components[ci].ref);
      content.querySelectorAll(`.size-btn--group[data-comp="${ci}"]`).forEach(b => b.classList.remove("selected"));
      gBtn.classList.add("selected");
      selections[ci].size = null;
      const variantsEl = content.querySelector(`[data-comp-variants="${ci}"]`);
      const variants = refProduct.sizeGroups[gBtn.dataset.group] || [];
      variantsEl.innerHTML = variants.map(model => `<button class="size-btn" data-comp="${ci}" data-size="${model}">${model}</button>`).join("");
      variantsEl.hidden = false;
      variantsEl.querySelectorAll(".size-btn").forEach(vBtn => {
        vBtn.addEventListener("click", () => {
          variantsEl.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
          vBtn.classList.add("selected");
          selections[ci].size = vBtn.dataset.size;
        });
      });
    });
  });
  content.querySelector("#modalAddBtn")?.addEventListener("click", () => {
    const breakdown = [];
    for (let ci = 0; ci < product.components.length; ci++) {
      const refProduct = PRODUCTS.find(p => p.id === product.components[ci].ref);
      if (!refProduct) continue;
      const needsColor = refProduct.colors && refProduct.colors.length > 0;
      const needsSize = !!refProduct.sizeGroups || refProduct.sizes && refProduct.sizes.length > 1;
      if (needsColor && !selections[ci].color || needsSize && !selections[ci].size) {
        alert(t["modal.selectPackAlert"] || "Please make all selections first.");
        return;
      }
      breakdown.push({
        name: refProduct.name,
        color: selections[ci].color,
        size: selections[ci].size
      });
    }
    Cart.add({
      id: product.id,
      name: product.name,
      family: product.family,
      price: parseFloat(product.price.replace(/[^0-9.]/g, "")),
      priceStr: product.price,
      size: "One Size",
      color: null,
      image: initialImages[0],
      components: breakdown
    });
    closeModal();
    setTimeout(() => Cart.open(), 350);
  });
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function initModal() {
  document.getElementById("modalClose")?.addEventListener("click", closeModal);
  document.getElementById("modalBackdrop")?.addEventListener("click", closeModal);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
}

function initInfoModal() {
  const modal = document.getElementById("infoModal");
  const openBtn = document.getElementById("shippingReturnsBtn");
  if (!modal || !openBtn) return;
  const open = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };
  openBtn.addEventListener("click", open);
  document.getElementById("infoClose")?.addEventListener("click", close);
  document.getElementById("infoBackdrop")?.addEventListener("click", close);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) close();
  });
}

const FORMSPREE_ID = "xpqbozoq";

const CONTACT_EMAIL = "thebest.aem@gmail.com";

function initContactForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  if (!form) return;
  form.querySelectorAll("input, textarea").forEach(field => {
    field.addEventListener("input", () => {
      field.classList.toggle("has-value", field.value.trim() !== "");
    });
  });
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const name = form.querySelector("#fieldName").value.trim();
    const email = form.querySelector("#fieldEmail").value.trim();
    const message = form.querySelector("#fieldMessage").value.trim();
    const subject = "New message from A&M website";
    if (FORMSPREE_ID && FORMSPREE_ID !== "YOUR_FORM_ID") {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json"
          }
        });
        if (res.ok) {
          showSuccess();
        } else {
          openMailto(name, email, subject, message);
        }
      } catch {
        openMailto(name, email, subject, message);
      }
      return;
    }
    openMailto(name, email, subject, message);
    showSuccess();
  });
  function openMailto(name, email, subject, message) {
    const body = [ `From: ${name}`, `Email: ${email}`, "", "Message:", message, "", "— Sent from the A&M website" ].join("\n");
    const mailto = `mailto:${CONTACT_EMAIL}` + `?subject=${encodeURIComponent(subject)}` + `&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }
  function showSuccess() {
    Array.from(form.children).forEach(child => {
      if (child.id !== "formSuccess") child.style.display = "none";
    });
    if (success) {
      success.classList.add("is-visible");
      success.style.opacity = "1";
    }
  }
}

function initFooterYear() {
  const el = document.getElementById("footerYear");
  if (el) el.textContent = (new Date).getFullYear();
}

const PRODUCT_TRANSLATIONS = {
  pt: {
    1: {
      name: "T-Shirt",
      family: "T-Shirt",
      description: "T-shirt com design exclusivo da marca."
    },
    2: {
      name: 'T-Shirt Coleção "The Best."',
      family: 'T-Shirt Coleção "The Best."',
      description: "T-shirt com design exclusivo da marca."
    },
    3: {
      name: "Hoodie",
      family: "Hoodie",
      description: "Hoodie com design exclusivo da marca."
    },
    4: {
      name: "Sweatshirt",
      family: "Sweatshirt",
      description: "Sweatshirt com design exclusivo da marca."
    },
    5: {
      name: "Calções",
      family: "Calções",
      description: "Calções com design exclusivo da marca."
    },
    6: {
      name: "Boné",
      family: "Boné",
      description: "Boné com detalhe da marca."
    },
    7: {
      name: "Meias",
      family: "Meias",
      description: "Meias com design exclusivo da marca."
    },
    8: {
      name: "Garrafa de Água",
      family: "Garrafa A&M",
      description: "Garrafa de água reutilizável com branding da marca."
    },
    9: {
      name: "Totebag",
      family: "Totebag",
      description: "Totebag com branding da marca."
    },
    10: {
      name: "Baralho de Cartas",
      family: "Baralho de Cartas",
      description: "Baralho de cartas plastificadas com design personalizado."
    },
    11: {
      name: "Bases para Copos",
      family: "Bases para Copos",
      description: "Bases para copos em cabedal com detalhe da marca."
    },
    12: {
      name: "Caderno",
      family: "Caderno",
      description: "Caderno A5 de linhas com detalhe da marca."
    },
    13: {
      name: "Caneta",
      family: "Caneta",
      description: "Caneta com detalhe da marca."
    },
    14: {
      name: "Pack de Canetas",
      family: "Pack de Canetas",
      description: "Canetas com detalhe da marca. O pack de escrita completo."
    },
    15: {
      name: "Porta-chaves",
      family: "Porta-chaves",
      description: "Porta-chaves metálico com branding da marca."
    },
    16: {
      name: "Capa de Telemóvel",
      family: "Capa de Telemóvel",
      description: "Capa de telemóvel preta com branding da marca."
    },
    17: {
      name: "Pack Verão",
      family: "Packs",
      description: "O Pack Verão: T-Shirt + Meias + Boné. Tudo o que precisas para os meses quentes, com desconto."
    },
    18: {
      name: "Pack Inverno",
      family: "Packs",
      description: "O Pack Inverno: Hoodie + Sweatshirt + Meias. Mantém-te quente, mantém-te fresh."
    },
    19: {
      name: "Pack Essencial",
      family: "Packs",
      description: "O Pack Essencial: T-Shirt + Sweatshirt. O kit inicial perfeito."
    },
    20: {
      name: "Pack Completo",
      family: "Packs",
      description: "O Pack Completo: Hoodie + T-Shirt + Meias + Boné. A experiência A&M completa."
    },
    21: {
      name: "Pack Office",
      family: "Packs",
      description: "O Pack Office. Tudo o que precisas para a secretária, com desconto."
    },
    22: {
      name: "Pack Street",
      family: "Packs",
      description: "O Pack Street. Essenciais do dia a dia, com desconto."
    },
    23: {
      name: "Polo",
      family: "Polo",
      description: "Polo de homem com design exclusivo da marca."
    },
    24: {
      name: "Top de Fitness de Senhora",
      family: "Top de Fitness de Senhora",
      description: "Top de fitness de senhora com design exclusivo da marca."
    },
    25: {
      name: "Cartão Oferta",
      family: "Cartão Oferta",
      description: "Oferece a liberdade de escolha. Escolhe um valor, adiciona uma mensagem pessoal, e nós tratamos do resto."
    }
  }
};

function tProduct(product, field) {
  const lang = document.documentElement.dataset.lang || "en";
  if (lang === "en") return product[field];
  return PRODUCT_TRANSLATIONS[lang]?.[product.id]?.[field] ?? product[field];
}

const COLOR_TRANSLATIONS = {
  pt: {
    Burgundy: "Bordeaux",
    Navy: "Azul Marinho",
    "Forest Green": "Verde Floresta",
    Black: "Preto",
    White: "Branco"
  }
};

function tColor(label) {
  const lang = document.documentElement.dataset.lang || "en";
  if (lang === "en") return label;
  return COLOR_TRANSLATIONS[lang]?.[label] ?? label;
}

function tSave(amount) {
  const lang = document.documentElement.dataset.lang || "en";
  const verb = lang === "pt" ? "Poupa" : "Save";
  return `${verb} ${amount}`;
}

const BADGE_TRANSLATIONS = {
  pt: {
    "Best Seller": "Mais Vendido",
    New: "Novo",
    "Best Value": "Melhor Valor"
  }
};

function tBadge(label) {
  const lang = document.documentElement.dataset.lang || "en";
  if (lang === "en") return label;
  return BADGE_TRANSLATIONS[lang]?.[label] ?? label;
}

const SIZE_TRANSLATIONS = {
  pt: {
    "One Size": "Tamanho Único"
  }
};

function tSize(label) {
  const lang = document.documentElement.dataset.lang || "en";
  if (lang === "en") return label;
  return SIZE_TRANSLATIONS[lang]?.[label] ?? label;
}

const TRANSLATIONS = {
  en: {
    "nav.shop": "Shop",
    "nav.contact": "Contact",
    "hero.eyebrow": "New Season Drop",
    "hero.line1": "WEAR",
    "hero.line2": "YOUR",
    "hero.line3": "STANDARD",
    "hero.sub": "Premium quality. Minimal design. Built to last.",
    "hero.cta": "Shop the Collection",
    "hero.scroll": "Scroll",
    "ticker.1": "Premium Merch",
    "ticker.2": "Free Shipping Over €50",
    "ticker.3": "New Drops Weekly",
    "ticker.4": "Unisex Sizing",
    "ticker.5": "100% Organic Cotton",
    "ticker.6": "Limited Quantities",
    "products.eyebrow": "The Collection",
    "products.title": "Shop Everything",
    "filter.all": "All",
    "filter.tshirt": "T-Shirts",
    "filter.tshirt-nolog": '"The Best." Collection',
    "filter.hoodie": "Hoodies",
    "filter.sweatshirt": "Sweatshirts",
    "filter.polo": "Polos",
    "filter.womens-top": "Women's Tops",
    "filter.shorts": "Shorts",
    "filter.cap": "Caps",
    "filter.socks": "Socks",
    "filter.accessories": "Accessories",
    "filter.pack": "Packs",
    "product.view": "View Product",
    "modal.selectSize": "Select Size",
    "modal.colour": "Colour",
    "modal.addToCart": "Add to Cart",
    "modal.shipping": "Free shipping over €50 • Free pen with orders over €25",
    "modal.selectSizeAlert": "Please select an option first.",
    "modal.selectPackAlert": "Please make all selections first.",
    "modal.size": "Size",
    "sort.label": "Sort:",
    "sort.default": "Default",
    "sort.nameAsc": "Name A→Z",
    "sort.nameDesc": "Name Z→A",
    "sort.priceAsc": "Price ↑",
    "sort.priceDesc": "Price ↓",
    "cart.title": "Your Cart",
    "cart.total": "Total",
    "cart.orderByEmail": "Order by Email",
    "cart.empty": "Your cart is empty.",
    "order.eyebrow": "Complete your order",
    "order.title": "Order by Email",
    "order.name": "Name",
    "order.phone": "Phone Number",
    "order.email": "Email",
    "order.address": "Delivery Address",
    "order.submit": "Order",
    "email.subject": "A&M Order",
    "email.heading": "New A&M order",
    "email.customer": "CUSTOMER:",
    "email.name": "Name",
    "email.phone": "Phone",
    "email.email": "Email",
    "email.address": "Address",
    "email.items": "ITEMS:",
    "email.total": "TOTAL",
    "email.footer": "Awaiting payment confirmation.",
    "contact.eyebrow": "Get in Touch",
    "contact.title": "Let's Talk",
    "contact.desc": "Questions about sizing, wholesale, or collabs?<br />We usually reply within 24 hours.",
    "contact.name": "Your Name",
    "contact.email": "Email Address",
    "contact.message": "Your Message",
    "contact.send": "Send Message",
    "contact.success": "✓ Message sent! We'll be in touch soon.",
    "footer.rights": "All rights reserved.",
    "footer.shippingReturns": "Shipping & Returns",
    "info.eyebrow": "Good to know",
    "info.title": "Shipping & Returns",
    "info.shippingHeading": "Shipping",
    "info.shippingBody": "We ship across Portugal. Orders are prepared and sent once payment is confirmed, and we'll keep you updated by email along the way. Shipping is free on orders over €50.",
    "info.returnsHeading": "Returns",
    "info.returnsBody": "If something isn't right with your order, get in touch within a reasonable time of receiving it and we'll do our best to sort it out. Items should be unused and in their original condition.",
    "info.contactHeading": "Questions?",
    "info.contactBody": "For anything about your order, reach us through the contact form or by email and we'll get back to you.",
    "filter.giftcard": "Gift Cards",
    "giftcard.value": "Value",
    "giftcard.custom": "Custom",
    "giftcard.customLabel": "Amount (€)",
    "giftcard.details": "Personalise",
    "giftcard.to": "To",
    "giftcard.from": "From (optional)",
    "giftcard.from_label": "From",
    "giftcard.message": "Message (optional)",
    "giftcard.message_label": "Message",
    "giftcard.priceFrom": "From €10",
    "giftcard.alertValue": "Please select or enter a value first.",
    "giftcard.alertTo": "Please fill in who the gift card is for."
  },
  pt: {
    "nav.shop": "Loja",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Nova Coleção",
    "hero.line1": "VESTE",
    "hero.line2": "O TEU",
    "hero.line3": "STANDARD",
    "hero.sub": "Qualidade premium. Design minimalista. Feito para durar.",
    "hero.cta": "Ver Coleção",
    "hero.scroll": "Explorar",
    "ticker.1": "Merch Premium",
    "ticker.2": "Envio Grátis Acima de €50",
    "ticker.3": "Novidades Semanais",
    "ticker.4": "Tamanhos Unissexo",
    "ticker.5": "100% Algodão Orgânico",
    "ticker.6": "Quantidades Limitadas",
    "products.eyebrow": "A Coleção",
    "products.title": "Ver Tudo",
    "filter.all": "Todos",
    "filter.tshirt": "T-Shirts",
    "filter.tshirt-nolog": 'Coleção "The Best."',
    "filter.hoodie": "Hoodies",
    "filter.sweatshirt": "Sweatshirts",
    "filter.polo": "Polos",
    "filter.womens-top": "Tops de Senhora",
    "filter.shorts": "Calções",
    "filter.cap": "Bonés",
    "filter.socks": "Meias",
    "filter.accessories": "Acessórios",
    "filter.pack": "Packs",
    "product.view": "Ver Produto",
    "modal.selectSize": "Escolher Tamanho",
    "modal.colour": "Cor",
    "modal.addToCart": "Adicionar ao Carrinho",
    "modal.shipping": "Envio grátis acima de €50 • Oferta de caneta acima de €25",
    "modal.selectSizeAlert": "Por favor escolhe uma opção.",
    "modal.selectPackAlert": "Por favor faz todas as escolhas primeiro.",
    "modal.size": "Tamanho",
    "sort.label": "Ordenar:",
    "sort.default": "Padrão",
    "sort.nameAsc": "Nome A→Z",
    "sort.nameDesc": "Nome Z→A",
    "sort.priceAsc": "Preço ↑",
    "sort.priceDesc": "Preço ↓",
    "cart.title": "O Teu Carrinho",
    "cart.total": "Total",
    "cart.orderByEmail": "Encomendar por Email",
    "cart.empty": "O teu carrinho está vazio.",
    "order.eyebrow": "Finaliza a tua encomenda",
    "order.title": "Encomendar por Email",
    "order.name": "Nome",
    "order.phone": "Número de Telefone",
    "order.email": "Email",
    "order.address": "Morada de Entrega",
    "order.submit": "Encomendar",
    "email.subject": "Encomenda A&M",
    "email.heading": "Nova encomenda A&M",
    "email.customer": "CLIENTE:",
    "email.name": "Nome",
    "email.phone": "Telefone",
    "email.email": "Email",
    "email.address": "Morada",
    "email.items": "ARTIGOS:",
    "email.total": "TOTAL",
    "email.footer": "A aguardar confirmação de pagamento.",
    "contact.eyebrow": "Fala Connosco",
    "contact.title": "Vamos Falar",
    "contact.desc": "Dúvidas sobre tamanhos, grossista ou colaborações?<br />Respondemos geralmente em 24 horas.",
    "contact.name": "O Teu Nome",
    "contact.email": "Endereço de Email",
    "contact.message": "A Tua Mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.success": "✓ Mensagem enviada! Estamos em contacto.",
    "footer.rights": "Todos os direitos reservados.",
    "footer.shippingReturns": "Envios e Devoluções",
    "info.eyebrow": "Bom saber",
    "info.title": "Envios e Devoluções",
    "info.shippingHeading": "Envios",
    "info.shippingBody": "Enviamos para todo o Portugal. As encomendas são preparadas e enviadas após confirmação do pagamento, e mantemos-te a par por email ao longo do processo. Envio grátis em encomendas acima de €50.",
    "info.returnsHeading": "Devoluções",
    "info.returnsBody": "Se algo não estiver bem com a tua encomenda, contacta-nos num prazo razoável após a receção e faremos o nosso melhor para resolver. Os artigos devem estar por usar e na condição original.",
    "info.contactHeading": "Dúvidas?",
    "info.contactBody": "Para qualquer questão sobre a tua encomenda, fala connosco através do formulário de contacto ou por email e respondemos assim que possível.",
    "filter.giftcard": "Gift Cards",
    "giftcard.value": "Valor",
    "giftcard.custom": "Outro valor",
    "giftcard.customLabel": "Montante (€)",
    "giftcard.details": "Personalizar",
    "giftcard.to": "Para",
    "giftcard.from": "De (opcional)",
    "giftcard.from_label": "De",
    "giftcard.message": "Mensagem (opcional)",
    "giftcard.message_label": "Mensagem",
    "giftcard.priceFrom": "Desde €10",
    "giftcard.alertValue": "Por favor escolhe ou introduz um valor primeiro.",
    "giftcard.alertTo": "Por favor indica para quem é o cartão oferta."
  }
};

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  const t = TRANSLATIONS[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (!t[key]) return;
    if (key === "contact.desc") {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });
  document.querySelectorAll("option[data-i18n]").forEach(opt => {
    const key = opt.dataset.i18n;
    if (t[key]) opt.textContent = t[key];
  });
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  document.documentElement.dataset.lang = lang;
  try {
    localStorage.setItem("am-lang", lang);
  } catch {}
  if (typeof renderProducts === "function" && document.getElementById("productGrid")) {
    renderProducts();
    const activeFilter = document.querySelector(".filter-btn.active");
    if (activeFilter && activeFilter.dataset.filter !== "all") {
      document.querySelectorAll(".product-card").forEach(card => {
        card.classList.toggle("is-hidden", card.dataset.category !== activeFilter.dataset.filter);
      });
    }
    document.querySelectorAll(".product-card").forEach(card => {
      card.classList.add("is-revealed");
    });
    if (typeof fixGhostCells === "function") fixGhostCells();
  }
  if (typeof Cart !== "undefined" && Cart.render) Cart.render();
}

function initLanguageSwitcher() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
  const DEFAULT_LANG = "pt";
  try {
    const saved = localStorage.getItem("am-lang");
    if (saved && TRANSLATIONS[saved]) {
      setLanguage(saved);
    } else {
      setLanguage(DEFAULT_LANG);
    }
  } catch {
    setLanguage(DEFAULT_LANG);
  }
}

const ORDER_EMAIL = "thebest.aem@gmail.com";

const MBWAY_NUMBER = "912 025 191";

const Cart = {
  items: [],
  init() {
    try {
      const saved = localStorage.getItem("am-cart");
      if (saved) this.items = JSON.parse(saved);
    } catch {
      this.items = [];
    }
    this.render();
  },
  save() {
    try {
      localStorage.setItem("am-cart", JSON.stringify(this.items));
    } catch {}
  },
  add(item) {
    const key = i => `${i.id}|${i.size}|${i.color}|${i.components ? JSON.stringify(i.components) : ""}|${i.giftcard ? `${i.giftcard.to}|${i.giftcard.value}` : ""}`;
    const existing = this.items.find(i => key(i) === key(item));
    if (existing) {
      existing.qty += 1;
    } else {
      this.items.push({
        ...item,
        qty: 1
      });
    }
    this.save();
    this.render();
  },
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
  total() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },
  count() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },
  open() {
    const panel = document.getElementById("cartPanel");
    if (!panel) return;
    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  },
  close() {
    const panel = document.getElementById("cartPanel");
    if (!panel) return;
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  },
  render() {
    const lang = document.documentElement.dataset.lang || "en";
    const t = TRANSLATIONS[lang];
    const countEl = document.getElementById("cartCount");
    if (countEl) {
      const c = this.count();
      countEl.textContent = c;
      countEl.classList.toggle("is-active", c > 0);
    }
    const itemsEl = document.getElementById("cartItems");
    const footerEl = document.getElementById("cartFooter");
    const emptyEl = document.getElementById("cartEmpty");
    const totalEl = document.getElementById("cartTotal");
    if (!itemsEl) return;
    if (this.items.length === 0) {
      itemsEl.innerHTML = "";
      if (footerEl) footerEl.style.display = "none";
      if (emptyEl) emptyEl.style.display = "flex";
      return;
    }
    if (footerEl) footerEl.style.display = "";
    if (emptyEl) emptyEl.style.display = "none";
    itemsEl.innerHTML = this.items.map((item, idx) => {
      const product = PRODUCTS.find(p => p.id === item.id);
      const displayName = product ? tProduct(product, "name") : item.name;
      let metaHTML;
      if (item.giftcard) {
        const gcParts = [`${t["giftcard.to"] || "To"}: ${item.giftcard.to}`, `€${item.giftcard.value}`];
        metaHTML = `<p class="cart-item__meta">${gcParts.join(" · ")}</p>`;
      } else if (item.components && item.components.length > 0) {
        metaHTML = item.components.map(c => {
          const refProduct = PRODUCTS.find(p => p.name === c.name);
          const cName = refProduct ? tProduct(refProduct, "name") : c.name;
          const bits = [];
          if (c.color) bits.push(tColor(c.color));
          if (c.size) bits.push(tSize(c.size));
          return `<span class="cart-item__comp">${cName}${bits.length ? `: ${bits.join(" · ")}` : ""}</span>`;
        }).join("");
        metaHTML = `<div class="cart-item__comps">${metaHTML}</div>`;
      } else {
        metaHTML = `<p class="cart-item__meta">${item.color ? `${tColor(item.color)} · ` : ""}${tSize(item.size)}</p>`;
      }
      return `\n      <div class="cart-item">\n        <img class="cart-item__image" src="${item.image}" alt="${displayName}"\n          onerror="this.style.background='var(--color-navy-mid)'; this.removeAttribute('src')" />\n        <div class="cart-item__body">\n          <p class="cart-item__name">${displayName}</p>\n          ${metaHTML}\n          <div class="cart-item__row">\n            <div class="cart-item__qty">\n              <button class="qty-btn" data-action="dec" data-idx="${idx}" aria-label="Decrease">−</button>\n              <span class="qty-value">${item.qty}</span>\n              <button class="qty-btn" data-action="inc" data-idx="${idx}" aria-label="Increase">+</button>\n            </div>\n            <p class="cart-item__price">€${(item.price * item.qty).toFixed(0)}</p>\n          </div>\n        </div>\n        <button class="cart-item__remove" data-idx="${idx}" aria-label="Remove">\n          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">\n            <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" stroke-width="1.5"/>\n          </svg>\n        </button>\n      </div>\n    `;
    }).join("");
    itemsEl.querySelectorAll(".qty-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.idx);
        const delta = btn.dataset.action === "inc" ? 1 : -1;
        this.changeQty(idx, delta);
      });
    });
    itemsEl.querySelectorAll(".cart-item__remove").forEach(btn => {
      btn.addEventListener("click", () => this.remove(parseInt(btn.dataset.idx)));
    });
    if (totalEl) totalEl.textContent = `€${this.total().toFixed(0)}`;
    const perksEl = document.getElementById("cartPerks");
    if (perksEl) {
      const total = this.total();
      if (total > 25) {
        const perkParts = (t["modal.shipping"] || "").split("•").map(s => s.trim()).filter(Boolean);
        perksEl.innerHTML = perkParts.map(p => `<span class="perk">${p}</span>`).join("");
        perksEl.hidden = false;
      } else {
        perksEl.hidden = true;
        perksEl.innerHTML = "";
      }
    }
  },
  summaryHTML() {
    return `\n      <div class="order__items">\n        ${this.items.map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      const displayName = product ? tProduct(product, "name") : item.name;
      if (item.giftcard) {
        const gcTo = item.giftcard.to;
        const gcFrom = item.giftcard.from ? ` ${t["giftcard.from_label"] || "from"} ${item.giftcard.from}` : "";
        return `\n          <div class="order__item">\n            <span class="order__item-name">\n              ${item.qty} × ${displayName} — ${t["giftcard.to"] || "To"}: ${gcTo}${gcFrom}\n            </span>\n            <span class="order__item-price">€${(item.price * item.qty).toFixed(0)}</span>\n          </div>\n        `;
      }
      return `\n          <div class="order__item">\n            <span class="order__item-name">\n              ${item.qty} × ${displayName}${item.color ? ` (${tColor(item.color)})` : ""} — ${tSize(item.size)}\n            </span>\n            <span class="order__item-price">€${(item.price * item.qty).toFixed(0)}</span>\n          </div>\n        `;
    }).join("")}\n      </div>\n      <div class="order__total-row">\n        <span>Total</span>\n        <span class="order__total">€${this.total().toFixed(0)}</span>\n      </div>\n    `;
  },
  emailBody(customer) {
    const lang = document.documentElement.dataset.lang || "en";
    const t = TRANSLATIONS[lang];
    const lines = this.items.map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      const displayName = product ? tProduct(product, "name") : item.name;
      if (item.giftcard) {
        const gc = item.giftcard;
        const toLine = `      ${t["giftcard.to"] || "To"}: ${gc.to}`;
        const fromLine = gc.from ? `\n      ${t["giftcard.from_label"] || "From"}: ${gc.from}` : "";
        const msgLine = gc.message ? `\n      ${t["giftcard.message_label"] || "Message"}: ${gc.message}` : "";
        return `  • ${item.qty} × ${displayName}  —  €${(item.price * item.qty).toFixed(0)}\n${toLine}${fromLine}${msgLine}`;
      }
      if (item.components && item.components.length > 0) {
        const head = `  • ${item.qty} × ${displayName}  —  €${(item.price * item.qty).toFixed(0)}`;
        const sub = item.components.map(c => {
          const refProduct = PRODUCTS.find(p => p.name === c.name);
          const cName = refProduct ? tProduct(refProduct, "name") : c.name;
          const bits = [];
          if (c.color) bits.push(tColor(c.color));
          if (c.size) bits.push(tSize(c.size));
          return `      - ${cName}${bits.length ? `: ${bits.join(", ")}` : ""}`;
        }).join("\n");
        return `${head}\n${sub}`;
      }
      const displayColor = item.color ? ` (${tColor(item.color)})` : "";
      const displaySize = tSize(item.size);
      return `  • ${item.qty} × ${displayName}${displayColor} — ${displaySize}  —  €${(item.price * item.qty).toFixed(0)}`;
    }).join("\n");
    return [ t["email.heading"] || "New A&M order", "─────────────────────", "", t["email.customer"] || "CUSTOMER:", `  ${t["email.name"] || "Name"}:    ${customer.name}`, `  ${t["email.phone"] || "Phone"}:   ${customer.phone}`, `  ${t["email.email"] || "Email"}:   ${customer.email}`, `  ${t["email.address"] || "Address"}: ${customer.address}`, "", t["email.items"] || "ITEMS:", lines, "", `${t["email.total"] || "TOTAL"}: €${this.total().toFixed(0)}`, "", "─────────────────────", t["email.footer"] || "Awaiting payment confirmation." ].join("\n");
  }
};

function initCart() {
  Cart.init();
  document.getElementById("cartBtn")?.addEventListener("click", () => Cart.open());
  document.getElementById("cartClose")?.addEventListener("click", () => Cart.close());
  document.getElementById("cartBackdrop")?.addEventListener("click", () => Cart.close());
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      Cart.close();
      closeOrderModal();
    }
  });
  document.getElementById("cartCheckoutBtn")?.addEventListener("click", () => {
    if (Cart.items.length === 0) return;
    openOrderModal();
  });
  document.getElementById("orderClose")?.addEventListener("click", closeOrderModal);
  document.getElementById("orderBackdrop")?.addEventListener("click", closeOrderModal);
  document.querySelectorAll("#orderForm input, #orderForm textarea").forEach(field => {
    field.addEventListener("input", () => {
      field.classList.toggle("has-value", field.value.trim() !== "");
    });
  });
  document.getElementById("orderForm")?.addEventListener("submit", handleOrderSubmit);
}

function openOrderModal() {
  const modal = document.getElementById("orderModal");
  const summaryEl = document.getElementById("orderSummary");
  if (!modal || !summaryEl) return;
  summaryEl.innerHTML = Cart.summaryHTML();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeOrderModal() {
  const modal = document.getElementById("orderModal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function handleOrderSubmit(e) {
  e.preventDefault();
  const customer = {
    name: document.getElementById("orderName").value.trim(),
    phone: document.getElementById("orderPhone").value.trim(),
    email: document.getElementById("orderEmail").value.trim(),
    address: document.getElementById("orderAddress").value.trim()
  };
  const lang = document.documentElement.dataset.lang || "en";
  const tt = TRANSLATIONS[lang];
  const subject = `${tt["email.subject"] || "A&M Order"} — ${customer.name} — €${Cart.total().toFixed(0)}`;
  const body = Cart.emailBody(customer);
  const mailto = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  Cart.empty();
  closeOrderModal();
  Cart.close();
  document.getElementById("orderForm").reset();
  document.querySelectorAll("#orderForm .has-value").forEach(el => el.classList.remove("has-value"));
}

document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initNav();
  initHeroVideo();
  renderProducts();
  initScrollReveal();
  initFilters();
  initModal();
  initInfoModal();
  initContactForm();
  initFooterYear();
  initLanguageSwitcher();
  initCart();
  console.log("A&M — site loaded ✓");
});
