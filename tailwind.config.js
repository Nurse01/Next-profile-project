/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'lilac': '#c9b2c5',
        'blue': '#afb6e5',
        'cream': '#F5F5DC',
        'darkcream': '#ededd8',
      },
    },
  },
  plugins: [],
}
