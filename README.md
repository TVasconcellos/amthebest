# A&M — Merch Store

A single-page merch/e-commerce website for the brand **A&M** (Instagram [@aem.thebest](https://instagram.com/aem.thebest), owner email `thebest.aem@gmail.com`). Portuguese market, bilingual EN/PT.

**Static site. No backend, no database, no build tools.** Plain HTML + CSS + vanilla JS. Hosted on GitHub Pages at `https://tvasconcellos.github.io/amthebest/`.

This README is written to be **complete enough to hand to a fresh assistant / collaborator** so they understand the whole project without seeing prior conversation history. If you're that assistant: read this top to bottom, then read the three source files; comments have been stripped from them deliberately, so this README is the source of truth for *why* things are the way they are.

---

## 1. File structure

```
amthebest/
├── logo.png             ← Brand logo (root, next to index.html). Transparent PNG.
├── index.html           ← The entire shop page (one page, all sections)
├── css/
│   └── style.css        ← All styles + CSS custom-property design tokens
├── js/
│   └── main.js          ← All logic: product data, translations, cart, modals
├── new/
│   └── index.html       ← Hidden product-builder admin page (visit /new). FROZEN — see §10
├── images/
│   ├── main.mp4         ← Hero background video (desktop)
│   ├── main_mobile.mp4  ← Hero background video (mobile, ≤768px)
│   ├── hero-poster.jpg  ← Poster frame shown before video plays
│   ├── og-preview.jpg   ← Social link-preview image (1200×630)
│   └── products/        ← All product photos (see §4 for filenames)
└── README.md            ← This file
```

No `package.json`, no dependencies, no compile step. Edit a file, commit, push — GitHub Pages redeploys automatically.

---

## 2. Tech & conventions

- **No build step.** Everything runs as-is in the browser. Don't introduce bundlers/frameworks.
- **No browser storage beyond `localStorage`** is used for: the cart (`am-cart`) and language preference (`am-lang`).
- **`main.js` is organised in 13 numbered sections** (search for `1.`, `2.` … in the file): Product Data, Custom Cursor, Navigation (+hero video), Scroll Reveal, Render Products, Filters+Sort, Product Modal, Contact Form, Footer Year, Translations, Language Switcher, Cart+Order, Init.
- **Comments have been intentionally stripped** from `index.html`, `css/style.css`, `js/main.js` to reduce file size. This README replaces them as documentation.
- **After editing `main.js`, always run** `node -c js/main.js` to catch syntax errors before committing.
- **Deploy:** commit all changed files together as ONE commit (atomic deploy, one Actions run). If a change doesn't show live, it's almost always browser cache — hard reload (Cmd/Ctrl+Shift+R).

---

## 3. Design system (tokens in `:root` at top of style.css)

- **Aesthetic:** dark editorial / streetwear. Black/navy base, off-white text, single gold accent.
- **Colours:** `--color-black #0A0A0A`, `--color-white #F5F5F5`, `--color-navy #0D1B2A`, `--color-navy-mid #162232`, `--color-accent #C8A97E` (gold), `--color-grey #888`, `--color-border rgba(255,255,255,0.08)`.
- **Fonts:** `--font-display` = Bebas Neue (condensed, all-caps, headings/hero only — NOT for prices or precise info, it's hard to read at small sizes). `--font-body` = DM Sans (everything else, including the cart/order totals).
- **Spacing scale:** `--space-xs/sm/md/lg/xl` = 0.5/1/2/4/8rem.
- **Custom cursor:** GPU-transform dot + lerp-trailing ring (desktop). Hover targets listed in a selector string in the cursor section of main.js.

---

## 4. Product catalog (22 products, in `PRODUCTS` array, section 1 of main.js)

Each product object:
```
{ id, name, family, category, price (e.g. "€15"), save? (packs only, e.g. "€3"),
  badge (null | "Best Seller" | "New" | "Best Value"),
  image (card thumbnail + fallback),
  images?: [...]            ← multi-shot gallery for products WITHOUT colour variants
  description,
  sizes?: [...]             ← flat size list
  sizeGroups?: {gen: [...]} ← two-step picker (see §6), used instead of sizes
  colors: null | [ {label, hex, image, images?:[...], imageBySize?:{}} ] }
```

**Colour helper** `COLORS` map: burgundy `#5C1A1A`, navy `#1B2A4A`, forestGreen `#2D4A2D`, black `#111111`, white `#F0F0F0`. Spread into a colour entry with `{...COLORS.navy, image: "..."}`.

**Apparel** (sizes `["S","M","L","XL"]`):
| id | Name | Price | Badge | Notes / images |
|----|------|-------|-------|----------------|
| 1 | T-Shirt | €15 | Best Seller | 5 colours. Burgundy/Navy/Forest Green have 2-img galleries (`shirt1`+`tshirt_red_2.png`, `shirt2`+`tshirt_navy_2.png`, `shirt3`+`tshirt_green_2.png`); Black `shirt4.jpg`, White `shirt5.jpg` single |
| 2 | T-Shirt "The Best." Collection | €15 | New | 5 colours `shirt6`–`shirt10.jpg`, category `tshirt-nolog` |
| 3 | Hoodie | €20 | — | white `hoodie1.jpg`+`hoodie_white_2.png`, black `hoodie2.jpg`+`hoodie_black_2.png` |
| 4 | Sweatshirt | €16 | — | white `sweatshirt1.jpg`+`sweatshirt_white_2.png`, black `sweatshirt2.jpg`+`sweatshirt_black_2.png` |
| 5 | Shorts | €15 | — | `shorts1.jpg`+`shorts_black_2.png` (top-level gallery) |

**Caps / Socks** (own filter categories):
| 6 | Cap | €8 | Best Seller | `cap1.jpg`, category `cap` |
| 7 | Socks | €5 | Best Seller | category `socks`, size One Size. White: `socks-white-1.jpg`+`socks-white-2.png`. Black: `socks_black_1.jpg`+`socks_black_2.png`. Card thumbnail = `socks-white-1.jpg` |

**Accessories** (category `accessories`):
| 8 | Water Bottle | €12 | New | size One Size. Dark blue (reuses `COLORS.navy`): `bottle1.jpg`+`bottle1-1.jpg`+`bottle1-2.jpg`. Black: `bottle2.jpg`+`bottle2-1.jpg` |
| 9 | Totebag | €8 | New | `tote1.jpg` |
| 10 | Playing Cards | €10 | New | 2-img gallery `baralho_cartas1.jpg`+`baralho_cartas2.jpg`, colors null |
| 11 | Coasters | €15 | New | 2-img gallery `base_copos1.jpg`+`base_copos2.jpg`, colors null. "Leather coasters with brand detail" |
| 12 | Notebook | €10 | New | `caderno1.jpg` |
| 13 | Pen | €1.50 | Best Seller | `caneta1.jpg` |
| 14 | Pack of Pens | €3.50 | Best Seller | `pack_canetas1.jpg` |
| 15 | Keychain | €4 | New | `porta_chaves.jpg` |
| 16 | Phone Case | €5 | New | 2-img gallery `capa_telemovel.jpg`+`capa-telemovel-2.jpg`. Uses `sizeGroups` iPhone model picker (see §6) |

**Packs** (category `pack`, badge Best Value, have a `save` field):
| 17 | Summer Pack | €25 | save €3 | `summerpack1.jpg`. T-Shirt+Shorts+Socks |
| 18 | Winter Pack | €36 | save €5 | `winterpack1.jpg`. Hoodie+Sweatshirt+Socks |
| 19 | Essential Pack | €28 | save €3 | `essentialpack1.jpg`. T-Shirt+Totebag+Socks |
| 20 | Complete Pack | €43 | save €5 | `completepack1.jpg`. T-Shirt+Hoodie+Shorts+Socks+Totebag |
| 21 | Office Pack | €25.50 | save €3 | 2-img `officepack1.jpg`+`officepack2.jpg`, One Size. PT "Pack Office". **Contents not finalised — description is a placeholder** |
| 22 | Street Pack | €15 | save €2 | 3-img `streetpack1/2/3.jpg`. PT "Pack Street". **Includes a phone case → uses `sizeGroups` iPhone picker.** Contents otherwise not finalised; description placeholder |

> **OPEN ITEM:** Office & Street pack descriptions are placeholders. Street Pack uses the phone picker but if it ALSO contains sized apparel, the modal can only capture ONE selection dimension today (phone model OR apparel size, not both) — would need a two-dimension selector enhancement. Awaiting confirmation of exact pack contents.

---

## 5. Image resolution model

- `colors[].images: [...]` → multi-shot gallery for that colour (thumbnails appear under main image; gold border on active).
- Top-level `images: [...]` → gallery for products with NO colours (Shorts, Playing Cards, Coasters, Phone Case, packs).
- `colors[].imageBySize: {size: path}` → per-size images. **Mechanism exists but currently UNUSED** (the bottle used to use it for 350/600ml; bottle is now single-size). Kept for future sized-variant products.
- Helpers: `resolveProductImage(product, color, size)` and `resolveProductImages(...)`.
- Modal opens showing `product.sizes[0]`'s image when relevant, so the displayed image matches the pre-selected size.

---

## 6. Size selectors — two modes

**A) Flat `sizes: [...]`** → one row of buttons. First size is auto-pre-selected ONLY when the list is short (`PRESELECT_MAX = 6`). Square buttons (min 44px) that grow horizontally for long labels like "One Size".

**B) Grouped `sizeGroups: {generation: [variants]}`** → two-step picker, used by Phone Case (16) and Street Pack (22). Row of generation buttons (iPhone 16, 15, 14, 13, 12, 11, X/XS, 7/8/SE); clicking one reveals that generation's variants below a divider. NO pre-selection (deliberate choice required). Selected generation highlights GOLD, selected final model highlights WHITE. The specific model (e.g. "iPhone 11 Pro Max") is what enters the cart. iPhone names normalised: lowercase-i "iPhone", "Max" (no accent/period). Newest→oldest order.

Add-to-cart is blocked until a selection is made when the product has `sizeGroups` or more than one flat size.

---

## 7. Key features & behaviours

- **Product modal:** centered (not slideover), `min(1100px,95vw)`, max-height 90vh. 2-col (image left, details right), stacks ≤900px. Image `object-fit: contain` (no crop). Thumbnail gallery when a variant has >1 image. Image crossfades on colour/thumb/size change use a single tracked timer (`imageFadeTimer` + `cancelImageFade()`) that is cancelled on modal open/close — this fixed an intermittent bug where the previous product's image could persist.
- **Cart:** localStorage (`am-cart`), slide-in panel from right. Dedup by `id + size + color`. Qty steppers, remove buttons. **Perks nudge** above the footer divider (`#cartPerks`): shows both perk lines ("Free shipping over €50", "Free pen with orders over €25") when total > €25, hidden below. Reuses the same perk strings as the modal (split on " • ").
- **Order flow:** "Order by Email" → centered modal collecting Name/Phone/Email/Address → builds a `mailto:` to `thebest.aem@gmail.com` and opens the user's mail client. **Email body + subject are localised** to the selected language (EN or PT) via `email.*` translation keys — item names/colours/sizes translated too. No payment processing; payment is arranged when owner replies. (MBWay was fully removed from modal AND email; `MBWAY_NUMBER` constant kept in code but unused.)
- **Contact form ("Let's Talk"):** Formspree (`FORMSPREE_ID = 'xpqbozoq'`) → emails `thebest.aem@gmail.com`, with mailto fallback. No Subject field (uses a constant subject). On success the form is fully hidden and a standalone confirmation message shows.
- **Hero video:** JS-driven (`initHeroVideo`) source switch — `main_mobile.mp4` ≤768px else `main.mp4` (the `<source media>` attribute is unreliable, so JS sets `.src`). Hardened against blocked autoplay (OS "reduce motion" / data-saver): retries `play()` on first user interaction and on visibilitychange.
- **Shipping & Returns:** footer button opens an info modal (`#infoModal`, `initInfoModal`) with three sections (Shipping / Returns / Questions). Content intentionally non-committal (no fixed delivery days or return windows). EN+PT via `info.*` keys. "Privacy" link removed; "Shipping" + "Returns" merged into this one modal.
- **Filters & sort:** by category, with sort options. Section 6 of main.js.
- **Perks/shipping note in modal:** framed gold callout under Add-to-Cart, two perks on separate lines with gold dot markers.

---

## 8. Internationalisation (section 10 of main.js)

- **Default language is PT.** `<html lang="pt" data-lang="pt">`, PT button first in nav. Preference saved in `localStorage['am-lang']`.
- `TRANSLATIONS` = UI strings, keyed `en` / `pt`. PT uses informal "tu".
- `PRODUCT_TRANSLATIONS.pt[id]` = per-product name/family/description.
- `COLOR_TRANSLATIONS.pt`: Burgundy→Bordeaux, Navy→Azul Marinho, Forest Green→Verde Floresta, Black→Preto, White→Branco.
- `BADGE_TRANSLATIONS.pt`: Best Seller→Mais Vendido, New→Novo, Best Value→Melhor Valor.
- `SIZE_TRANSLATIONS.pt`: One Size→Tamanho Único. (iPhone model names NOT translated — same in both languages.)
- `email.*` keys (both languages) localise the order email.
- Helpers: `tProduct, tColor, tBadge, tSize, tSave`. Apply translations by reading `data-lang` off `<html>`.

---

## 9. Adding / editing products

Edit the `PRODUCTS` array in section 1 of `main.js` directly:
1. Pick the next free `id` (currently 22 used, so 23 next).
2. Add the object (copy the closest existing product as a template).
3. Put images in `images/products/` with matching filenames.
4. Add PT translation in `PRODUCT_TRANSLATIONS.pt` keyed by the new id.
5. `node -c js/main.js`, then commit.

Price strings include the euro sign (`"€15"`, `"€25.50"`); the cart parses the number out with a regex, so decimals are fine.

---

## 10. The `/new` admin page — FROZEN

`new/index.html` is a hidden product-builder that generates product-object code to paste into `main.js`. **It is intentionally NOT kept in sync** with recent features (galleries, sizeGroups, etc.) and the owner has said to leave it alone. Do not update it unless explicitly asked. There's an open idea to eventually replace it with a fuller "Product Management" page that loads the current catalog and outputs an updated `PRODUCTS` array (still copy-paste-to-commit, since the site is static), but that has not been built.

---

## 11. Known open items / future ideas (not built)

- **Office & Street pack** real contents + descriptions (placeholders currently). Street Pack two-dimension selector if it contains apparel + phone case.
- **Custom domain:** exploring a free short domain (e.g. `amthebest.eu.org` via eu.org + Cloudflare DNS, or a PR-based service like is-a.dev / Open Domains). When live, update the hardcoded `og:url` / `og:image` paths in `index.html` (currently the github.io path). Also: renaming the repo to `tvasconcellos.github.io` would drop the `/amthebest/` path for free.
- **Firebase profiles / loyalty (paused, learning project):** explored adding Google sign-in + profiles + order history + points via Firebase (project `amthebest-34fbd`, CDN approach, code to live in a separate `js/firebase.js`, sign-in as a small nav button). Blocked on a real design problem: with email-based orders the site never knows if an order was placed/paid, so history/points need either (A) record order to Firestore as 'pending' + owner marks paid manually, (B) real payments via Stripe, or (C) drop loyalty and keep profiles for autofill/favourites only. Not yet decided; nothing built.

---

## 12. Brand facts

- **Name:** A&M  •  **Instagram:** @aem.thebest  •  **Owner email:** thebest.aem@gmail.com
- **Market:** Portugal (default language PT, prices in €).
- **Tagline direction:** "The Best." / premium-but-accessible streetwear.
