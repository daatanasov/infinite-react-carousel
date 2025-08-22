# ✈️ Infinite Carousel Interview Task

A set of **Infinite Image Carousel** implementations built with **React 19**, **TypeScript**, **TailwindCSS**, **@tanstack/react-query**, **@tanstack/react-virtual** and **react-window** The goal is to demonstrate different approaches for building performant, responsive, and reusable infinite carousels that handle large datasets.

---

## 📝 The Task

### Problem:

Create an infinite image carousel (items loop when either end is reached) using React.
Navigation inside the carousel should only be triggered by scroll, not buttons/arrows.

### Requirements:

- **Handle images of different sizes and aspect ratios**
- **Work on both mobile and desktop (responsive design)**
- **Performant with small sets (dozens) and large sets (1000+ images)**
- **Reusable component design**

### Notes:

- **Public image APIs like Picsum Photos may be used (https://picsum.photos/)**

---

## 🚀 Implemented Solutions

The project demonstrates three different infinite carousel strategies across separate routes:

- **/home** - General information
- **/pagination-carousel** - Uses **@tanstack/react-virtual + @tanstack/react-query**. Fetches from https://picsum.photos/v2/list with pagination. Loads in batches of 10, continues fetching until no Link header remains

---

## 📦 Getting Started

### Prerequisites

- Node.js v22+
- Yarn / npm

```bash
npm install
# or
yarn install
```

---

## 📂 Project Structure

```
src/
│
├── assets/                     # Project assets
├── components/                 # Components
├── hooks/                      # Project hooks
├── pages/                      # Project pages
├── types/                      # TypeScript types/interfaces
├── utils/                      # Utility functions
└── App.tsx                     # Main app entry
```

---

## 📜 Scripts

```
| Script                | Description |
|-----------------------|-------------|
| `dev`                 | Start dev server on `http://localhost:5173` |
| `build`               | Type-check and build the app for production |
| `preview`             | Preview production build locally |
| `lint`                | Lint all files using ESLint |
```

---

## 📚 Tech Stack

- **React 19 + React DOM**
- **TypeScript**
- **Vite 7**
- **TailwindCSS 4**
- **@tanstack/react-query** - async data fetching
- **@tanstack/react-virtual** – virtualization for large lists
- **react-window** - lightweight virtualization alternative
- **ESLint** linting & code quality

---

## 🔮 Future Plans

- Convert all carousels into MFE (Micro Frontend) architecture for modularity

- Optimize rendering further for very large datasets

- Add a Masonry-style carousel layout

- Explore server-side rendering (SSR) for better UX

- Automated testing with Jest & React Testing Library

---

## 📄 License
