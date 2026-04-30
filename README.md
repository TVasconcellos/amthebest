# A&M — Merch Store

Single-page merch website. No backend, no build tools, no dependencies.

---

## Project Structure

```
a-and-m-store/
├── logo.png             ← YOUR LOGO GOES HERE (same level as index.html)
├── index.html           ← The entire website
├── css/
│   └── style.css        ← All styles + design tokens
├── js/
│   └── main.js          ← All logic, product data, translations
├── images/
│   ├── products/        ← Product photos (shirt1.jpg, hoodie1.jpg, etc.)
│   ├── ig1.jpg          ← Instagram feed images
│   ├── ig2.jpg
│   ├── ig3.jpg
│   ├── ig4.jpg
│   ├── ig5.jpg
│   └── ig6.jpg
└── README.md
```

---

## Logo

Put `logo.png` in the **root folder** (same level as `index.html`).

- Format: PNG with transparent background (recommended)
- Size: any — CSS scales it to max 120px wide / 48px tall
- It appears in the nav bar on the left

---

## Product Images

Put images in `images/products/`. Naming convention:

| Type        | Names                              |
|-------------|------------------------------------|
| T-Shirts    | `shirt1.jpg`, `shirt2.jpg`, ...    |
| Hoodies     | `hoodie1.jpg`, `hoodie2.jpg`, ...  |
| Sweatshirts | `sweatshirt1.jpg`, `sweatshirt2.jpg`, ... |
| Socks       | `socks1.jpg`, `socks2.jpg`, ...    |
| Accessories | `tote1.jpg`, `beanie1.jpg`, ...    |

Recommended size: **800 × 1000px**, JPEG at 80% quality.

Update the `image` field in the `PRODUCTS` array in `main.js` to match.

---

## Adding Products

Edit the `PRODUCTS` array in `js/main.js`:

```js
{
  id: 11,                                  // Unique number — never repeat
  name: "New Item",
  category: "tshirt",                      // tshirt | hoodie | sweatshirt | socks | accessories
  price: "€40",
  badge: "New",                            // or null for no badge
  image: "images/products/shirt3.jpg",
  description: "Product description here.",
  sizes: ["XS", "S", "M", "L", "XL"]
}
```

---

## Instagram Feed

Put 6 images in `images/` named `ig1.jpg` through `ig6.jpg`.  
These simulate the @sofiavalequaresma feed.

To connect a **live feed**, use [Behold.so](https://behold.so) — it creates an API endpoint you replace the `INSTAGRAM_POSTS` array with.

---

## Contact Form (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Click "New Form" → enter `thebest.aem@gmail.com`
3. Copy the Form ID (8-character code, e.g. `xpzvwqbo`)
4. In `js/main.js`, find: `const FORMSPREE_ID = 'YOUR_FORM_ID'`
5. Replace `YOUR_FORM_ID` with your actual ID

Free plan: 50 submissions/month.

---

## Languages

The site supports **English** and **Portuguese (PT-PT)**.  
A switcher in the nav lets the visitor toggle.  
User preference is saved in localStorage (persists across visits).

To edit or add translations, find the `TRANSLATIONS` object in `js/main.js`.

---

## Hosting on GitHub Pages

1. Create a repo on GitHub (e.g. `am-store`)
2. Push all files to the `main` branch
3. Go to **Settings → Pages → Deploy from branch → main → / (root)**
4. Site goes live at `https://yourusername.github.io/am-store`

---

## Customising the Look

All visual values are CSS variables at the top of `css/style.css`:

```css
:root {
  --color-accent: #C8A97E;   /* Gold highlight — change to re-theme */
  --font-display: 'Bebas Neue', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --space-xl: 8rem;          /* Section padding */
}
```

Each section in both `style.css` and `main.js` has a `★ TWEAK GUIDE` comment explaining what each value controls.
