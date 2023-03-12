/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'lilac': '#c9b2c5',
        'blue': '#192b5d',
        'cream': '#F5F5DC',
        'darkcream': '#ededd8',
        'darkblue': '#142249',
      },
    },
  },
  plugins: [],
}
