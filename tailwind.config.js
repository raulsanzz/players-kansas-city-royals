/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      extend: {
        colors: {
          'dark-black': '#6C6D6F',
          'black': '#000000',
        },
      },
    },
  },
  plugins: [],
}
