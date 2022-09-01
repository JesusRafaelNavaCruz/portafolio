module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    },
    screens: {
      
      'xs': {'raw': '(max-width: 600px)'},

      'sm': {'min': '600px'},
      // => @media (min-width: 640px) { ... }

      'md': {'min': '768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'min': '992px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'min': '1200px'},
      // => @media (min-width: 1280px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'dark',
      'light',
      'luxury',
    ],
  },
}
