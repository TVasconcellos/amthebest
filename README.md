# A&M — Merch Store

Single-page merch website. Static site, no backend, no build tools.

---

## Project Structure

```
amthebest/
├── logo.png             ← Brand logo (root folder, next to index.html)
├── index.html           ← The main shop page
├── css/
│   └── style.css        ← All styles + design tokens
├── js/
│   └── main.js          ← All logic, products, translations, cart
├── new/
│   └── index.html       ← Hidden product builder page (visit /new)
├── images/
│   ├── main.mp4         ← Hero background video
│   ├── og-preview.jpg   ← Link preview image (1200×630)
│   └── products/        ← All product photos
└── README.md
```

---

## Logo

Drop `logo.png` in the root folder. CSS scales it to max 48px tall in the nav and 40px tall in the footer. Transparent PNG recommended.

---

## Product Images

Put images in `images/products/`. The catalog uses these filenames:

| Product            | Images                                          |
|--------------------|-------------------------------------------------|
| T-Shirt (logo)     | `shirt1.jpg` – `shirt5.jpg` (5 colours)         |
| T-Shirt "The Best."| `shirt6.jpg` – `shirt10.jpg` (5 colours)        |
| Hoodie             | `hoodie1.jpg`, `hoodie2.jpg` (white, black)     |
| Sweatshirt         | `sweatshirt1.jpg`, `sweatshirt2.jpg`            |
| Shorts             | `shorts1.jpg`                                   |
| Cap                | `cap1.jpg`                                      |
| Socks              | `socks1.jpg`                                    |
| Water Bottle       | `bottle1.jpg`–`bottle4.jpg` (white/black, 600/350ml) |
| Totebag            | `tote1.jpg`                                     |
| Playing Cards      | `baralho_cartas1.jpg`, `baralho_cartas2.jpg`    |
| Coasters           | `base_copos1.jpg`, `base_copos2.jpg`            |
| Notebook           | `caderno1.jpg`                                  |
| Pen / Pack of Pens | `caneta1.jpg`, `pack_canetas1.jpg`              |
| Keychain           | `porta_chaves.jpg`                              |
| Phone Case         | `capa_telemovel.jpg`                            |
| Packs              | `summerpack1.jpg`, `winterpack1.jpg`, `essentialpack1.jpg`, `completepack1.jpg` |

Recommended size: **800 × 1000px** for apparel (portrait), **1000 × 1000px** for accessories (square). JPEG at 80% quality.

---

## Adding Products

Two ways:

**Option A — Visit `/new` on your live site.** A private product builder form generates the JS object for you. Copy the output, paste it into the `PRODUCTS` array in `main.js`, commit, push.

**Option B — Edit `main.js` directly.** Find the `PRODUCTS` array near the top. Each entry looks like:

```js
{
  id: 21,                          // Unique — never repeat
  name: "New Item",
  family: "Category Family",
  category: "accessories",         // Filter category (see below)
  price: "€15",
  save: null,                      // Or "€3" for "Save €3" tag (packs)
  badge: "New",                    // null | "Best Seller" | "New" | "Best Value"
  image: "images/products/foo.jpg",
  description: "Item description.",
  sizes: ["S", "M", "L", "XL"],   // Or ["One Size"] for non-sized
  colors: null,                    // Or array of { label, hex, image }
}
```

Valid `category` values: `tshirt` · `tshirt-nolog` · `hoodie` · `sweatshirt` · `shorts` · `cap` · `socks` · `accessories` · `pack`

For Portuguese translations, add an entry to `PRODUCT_TRANSLATIONS.pt` keyed by the product's id.

---

## Hero Video

The hero section plays `images/main.mp4` on loop. Keep it under ~5MB. The dark gradient overlay above keeps the headline readable over any frame.

---

## Languages

Defaults to **Portuguese (PT-PT)** for new visitors. Returning visitors see whatever they last selected (saved in localStorage). Toggle button in the nav.

To edit translations, see two objects in `main.js`:
- `TRANSLATIONS` — UI labels (buttons, headers, ticker text)
- `PRODUCT_TRANSLATIONS` — product names, families, descriptions

Smaller helpers also exist for badges, colours, sizes (`BADGE_TRANSLATIONS`, `COLOR_TRANSLATIONS`, `SIZE_TRANSLATIONS`).

To change the default language, edit `DEFAULT_LANG` in `initLanguageSwitcher()`.

---

## Shopping Cart + Orders

Customers add items, open the cart side panel, and click "Order by Email". The order modal collects their name/phone/email/address and opens their email client with a pre-filled message to `thebest.aem@gmail.com` containing:

- Customer info
- Item list with quantities, sizes, colours
- Total price
- MBWay payment instructions (number: 912 025 191)

Cart contents persist in localStorage across page reloads.

To change the order email or MBWay number, edit the constants in section 12 of `main.js`:
```js
const ORDER_EMAIL  = 'thebest.aem@gmail.com';
const MBWAY_NUMBER = '912 025 191';
```

---

## Contact Form (Formspree)

The "Let's Talk" form posts to Formspree (Form ID `xpqbozoq`), which forwards messages as email. Free plan: 50 submissions/month.

If Formspree is ever unavailable, the form gracefully falls back to opening the customer's email client with a pre-filled message.

---

## Hosting on GitHub Pages

1. Push all files to a GitHub repo
2. Settings → Pages → Deploy from branch → main → `/` (root)
3. Site goes live at `https://yourusername.github.io/repo-name`
4. The hidden admin page is accessible at `/new` (e.g. `…/repo-name/new`)

---

## Customising the Look

All visual values are CSS variables at the top of `css/style.css`:

```css
:root {
  --color-accent: #C8A97E;   /* Gold highlight — change to re-theme */
  --color-navy:   #0D1B2A;   /* Section bg, modal panels */
  --font-display: 'Bebas Neue', sans-serif;
  --font-body:    'DM Sans', sans-serif;
  --space-xl:     8rem;       /* Section padding */
}
```

Both `style.css` and `main.js` have inline `★ TWEAK GUIDE` comments throughout, explaining what every meaningful value controls.

---

## Open Graph (Link Previews)

When the site URL is shared on WhatsApp, iMessage, Slack, etc., the preview card pulls from the meta tags in `<head>`:

```html
<meta property="og:title"       content="A&M — Premium Clothing" />
<meta property="og:description" content="Wear your standard" />
<meta property="og:image"       content="https://tvasconcellos.github.io/amthebest/images/og-preview.jpg" />
<meta property="og:url"         content="https://tvasconcellos.github.io/amthebest/" />
```

The image must be 1200×630px and live at the URL in `og:image`.
