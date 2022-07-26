/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './layout/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    fontFamily: {
      primary: "'Montserrat', sans-serif",
      secondary: "'Lora', serif",
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      colors: {
        'color-1': '#E72727',
        'color-2': '#992DCC',
        'color-3': '#27E746',
        'color-4': '#29176B',
        'color-5': '#4E349B',
        'light-100': '#ffffff',
        'light-200': '#f3f4ff',
        'dark-100': '#1A1A1A',
        'dark-200': '#393939',
        cyan: '#83D9EC',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio', require('@tailwindcss/forms')),
    require('@tailwindcss/line-clamp'),
  ],
};
