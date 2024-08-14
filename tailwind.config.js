/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
     
    },
    extend: {
      // Adding custom container class
      maxWidth: {
        'content-box': '1127px', // Custom class for max-width
      },
    },

  },
  plugins: [require('daisyui'),],
}

