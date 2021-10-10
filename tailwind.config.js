const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      sky: colors.sky,
      coolGray: colors.coolGray,
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
