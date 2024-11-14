/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#07BCDD',
        secondary: '#0EC6E7',
        accent: '#E108C5',
        'deep-blue': '#0A4F70',
        'darker-blue': '#083D57',
        white: '#FFFFFF',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0A4F70, #083D57)',
        'gradient-accent': 'linear-gradient(135deg, #0EC6E7, #E108C5)',
      }
    },
  },
  plugins: [],
}

