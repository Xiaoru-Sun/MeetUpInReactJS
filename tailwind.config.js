/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#023047',
        secodary: '#219EBC',
        background: '#EDEDE9',
      },
    },
  },
  plugins: [],
};