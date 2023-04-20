/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        'blue': {
          'button': '#3260A8',
          'button-dark': '#203e6d',
          'component': '#f6f9fd'
        }
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}

