/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rokkitt: ["ROKKITT"],
      },
      colors: {
        hc: '#484A4D',
        hcd: '#202020',
        cb: '#141414',
      }
    },
  },
  plugins: [],
}
