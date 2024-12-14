first use vite initialization
npm install -D tailwindcss postcss autoprefixer {then}
npx tailwindcss init -p {then}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} put from 6 to 16in tailwind.config.js


put these three in src/index.css
[empty the index.css first]
@tailwind base;
@tailwind components;
@tailwind utilities;

then run npm run dev 
remove app.css from app.jsx
