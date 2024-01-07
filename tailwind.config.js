/** @types {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      animation: {
        menuShow: 'menuShow .4 ease-in-out infinite',
      },
      keyframes: {
        menuShow: {
          '0%': {opacity: '0'},
          '100%' : {opacity: '100'}
        },
      },
      transitionProperty :{
        menuVisible: ' transform: scaleY(1) ',
        menuInvisible: 'transform: scaleY(0)',
      },
    },
  },
  plugins: [],
}

