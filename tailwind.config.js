/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        marker: ['Permanent Marker'],
        mono: ['JetBrains Mono', 'monospace'],
      },

      colors: {},
    },
  },
  plugins: [],
};
