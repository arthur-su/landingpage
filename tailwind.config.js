/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      "primary": "#623cad",  
      "secondary": "#3a3279", 
      "accent": "#ae6db0",
      "neutral": "#232343",
      "base-100": "#0f0f31",
      "base-300": "#e4d5ff",
      "info": "#0CA6E9",
      "success": "#2BD4BD",
      "warning": "#F4C152",
      "error": "#FB6F84",
      "white": "#FFFFFF"
    },
    fontFamily: {
      'roboto': ['Roboto'],
      'nunito': ['Nunito']
    },
    keyframes: {
      slide: {
        '0%, 100%': {
          transform: 'rotate(-3deg)'
        },
        '50%': {
          transform: 'rotate(3deg)'
        },
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [
  //     {
  //       myThemeDark: {  
  //         "primary": "#623cad",  
  //         "secondary": "#3a3279", 
  //         "accent": "#ae6db0",
  //         "neutral": "#232343",
  //         "base-100": "#0f0f31",
  //         "base-300": "#e4d5ff",
  //         "info": "#0CA6E9",
  //         "success": "#2BD4BD",
  //         "warning": "#F4C152",
  //         "error": "#FB6F84",
  //       },
  //     },
  //   ],
  // },
}
