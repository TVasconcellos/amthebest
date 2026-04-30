# STNDRD — Merch Store

A single-page, static merch website. No backend, no build tools, no dependencies. Just HTML, CSS, and vanilla JavaScript.

---

## Project Structure

```
stndrd/
├── index.html          ← The entire website (one file)
├── css/
│   └── style.css       ← All styles + animations
├── js/
│   └── main.js         ← All interactions + product data
├── images/
│   ├── products/       ← Your product photos go here
│   └── ig-01.jpg       ← Instagram feed images (ig-01 to ig-06)
└── README.md           ← This file
```

---

## Hosting on GitHub Pages

1. Create a new repository on GitHub (e.g. `stndrd-store`)
2. Push all files to the `main` branch
3. Go to **Settings → Pages**
4. Set Source to **Deploy from a branch → main → / (root)**
5. Your site will be live at `https://yourusername.github.io/stndrd-store`

---

## Adding Products

Open `js/main.js` and find the `PRODUCTS` array at the top of the file.

Each product looks like this:

```js
{
  id: 1,                                  // Unique number — don't repeat
  name: "Core Logo Tee",                  // Product name
  category: "tshirt",                     // Must be: tshirt | hoodie | sweatshirt | socks | accessories
  price: "€35",                           // Display price (string)
  badge: "Best Seller",                   // Optional label. Use null for no badge.
  image: "images/products/tshirt-01.jpg", // Path to product image
  description: "Description text here.",  // Shown in the modal
  sizes: ["XS", "S", "M", "L", "XL"]    // Available sizes
}
```

Just copy an existing entry, change the values, and add it to the array. The grid updates automatically.

---

## Adding Product Images

1. Drop your images into `images/products/`
2. Name them clearly: `tshirt-01.jpg`, `hoodie-02.jpg`, etc.
3. Update the `image` field in the PRODUCTS array to match
4. Recommended size: **800 × 1000px** (portrait, 4:5 ratio)
5. Format: JPEG at 80% quality for best file size/quality balance

If an image is missing, the card shows an empty navy placeholder — no errors.

---

## Adding Instagram Feed Images

Replace the placeholder paths in the `INSTAGRAM_POSTS` array in `main.js`:

```js
{ image: "images/ig-01.jpg", likes: "1.2k", comments: "34" },
```

- Put images in the `images/` folder
- Recommended size: **600 × 600px** (square)
- To connect to a real Instagram feed, see the comment in `main.js` about the Instagram Basic Display API or Behold.so

---

## Connecting the Contact Form

The form currently shows a success message but doesn't actually send an email. To make it real:

### Option A — Formspree (easiest, free tier)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and copy your Form ID
3. In `main.js`, find the `handleSubmit` function and replace the placeholder with:

```js
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: new FormData(form),
  headers: { 'Accept': 'application/json' }
}).then(() => showSuccess());
```

### Option B — Netlify Forms (if hosting on Netlify)
Add `netlify` attribute to the form tag in `index.html`:
```html
<form class="contact__form" id="contactForm" data-netlify="true">
```
Netlify handles the rest automatically.

---

## Customising the Brand

All visual design tokens live at the top of `css/style.css` in the `:root {}` block:

```css
:root {
  --color-black:    #0A0A0A;
  --color-white:    #F5F5F5;
  --color-navy:     #0D1B2A;
  --color-accent:   #C8A97E;   /* Gold accent — change this for a different pop color */
  --font-display:   'Bebas Neue', sans-serif;
  --font-body:      'DM Sans', sans-serif;
}
```

Change a value once here and it updates everywhere on the site.

---

## Changing the Brand Name

Search and replace `STNDRD` in:
- `index.html` — nav logo, page title, footer
- `main.js` — console.log at the bottom

---

## No Build Tools Needed

This is a fully static site. No Node.js, no npm, no Webpack, no React. Open `index.html` directly in a browser to preview locally, or use VS Code's Live Server extension for a better local dev experience.
