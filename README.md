# De' Coal Pot — Official Website

**Authentic West Indian Cuisine · Cruz Bay, St. John, USVI**

## 🌿 About

This is the official website for **De' Coal Pot**, a family-owned, culturally rooted West Indian restaurant in Cruz Bay, St. John, USVI. Built with React, designed for warmth, authenticity, and cultural pride.

---

## 🚀 Tech Stack

- **React 18** (Create React App)
- **React Router v6** — client-side routing
- **CSS Custom Properties** — brand design tokens
- **Google Fonts** — Playfair Display, Cormorant Garamond, DM Sans
- **Intersection Observer API** — scroll-triggered animations

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js / .css       — Fixed navigation with mobile hamburger
│   └── Footer.js / .css       — Footer with contact, hours, nav links
├── pages/
│   ├── Home.js / .css         — Hero, story intro, featured dishes, reviews, CTA
│   ├── OurStory.js / .css     — Heritage narrative, cultural roots, values
│   ├── Menu.js / .css         — Tabbed menu with categories and stories
│   ├── Vibe.js / .css         — Atmosphere, testimonials, music section
│   └── Visit.js / .css        — Hours, location, map, ferry info, FAQ
├── App.js                     — Router and layout
├── App.css                    — Shared page layout styles
└── index.css                  — Global design tokens and base styles
```

---

## 🛠️ Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm start
```

### Build for production

```bash
npm run build
```

---

## 🌐 Deployment

### GitHub Pages

1. Update `homepage` in `package.json`:

   ```json
   "homepage": "https://YOUR_USERNAME.github.io/decoalpot"
   ```

2. Initialize git and push to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/decoalpot.git
   git push -u origin main
   ```

3. Deploy:

   ```bash
   npm run deploy
   ```

   This runs `gh-pages -d build` which pushes the build to a `gh-pages` branch.

4. In your GitHub repo settings → Pages → set source to `gh-pages` branch.

---

### Firebase Hosting (Production)

1. Install Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Login and initialize:

   ```bash
   firebase login
   firebase init hosting
   ```

   - Select your Firebase project
   - Set public directory: `build`
   - Configure as single-page app: **Yes**
   - Don't overwrite `build/index.html`

3. Update `homepage` in `package.json` to your Firebase domain or custom domain:

   ```json
   "homepage": "/"
   ```

   _(Firebase doesn't need a subdirectory prefix)_

4. Build and deploy:

   ```bash
   npm run build
   firebase deploy
   ```

5. For a **custom domain** (e.g. `decoalpot.com`):
   - Go to Firebase Console → Hosting → Add custom domain
   - Follow DNS verification steps

---

## 🎨 Brand System

| Token        | Value                                |
| ------------ | ------------------------------------ |
| `--coal`     | `#0f0804` — Near-black base          |
| `--ember`    | `#C84B11` — Primary brand orange-red |
| `--turmeric` | `#D4922A` — Warm spice gold          |
| `--gold`     | `#F0B840` — Star ratings, accents    |
| `--cream`    | `#F5EDD8` — Primary text             |
| `--teal`     | `#1A6B6B` — Sea accent               |

**Fonts:**

- **Playfair Display** — Display / headlines
- **Cormorant Garamond** — Body text, quotes
- **DM Sans** — UI labels, navigation

---

## 📱 Pages

| Route        | Page                                         |
| ------------ | -------------------------------------------- |
| `/`          | Home — Hero, story, featured dishes, reviews |
| `/our-story` | Heritage narrative, timeline, cultural roots |
| `/menu`      | Tabbed menu: Pot, Sea, Staples, Vegetarian   |
| `/vibe`      | Atmosphere, testimonials, music              |
| `/visit`     | Location, hours, map, ferry info, FAQ        |

---

## 📞 Contact Info

- **Phone:** (340) 205-0001 / (340) 205-0001
- **Address:** 1E 96 Cruz Bay, St. John, USVI 00830
- **Facebook:** facebook.com/DeCoalPot

---

_Heritage cooked slow. Welcome to the table._ 🌿
