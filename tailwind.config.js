/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1260px',
        },
        padding: {
          DEFAULT: '1rem',
          xl: '0px',
        },
      },
      colors: {
        primary: '#7C7C7C',
        secondary: '#009432',
        warning: '#ffc312',
      },
      screens: {
        xs: '520px',
      },
    },
    variants: {
      extend: {
        backgroundColor: ['group-hover'],
        textColor: ['group-hover'],
      },
    },
  },
  plugins: [],
}
