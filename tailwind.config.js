/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    keyframes: {
      measuringDisc:{
        '0%':{right:'0'},
        '100%':{right:'-105%'}
      },
    }
  },
  plugins: [],
}

