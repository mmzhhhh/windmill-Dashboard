/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    function({addUtilities}){
      addUtilities({
        '.hide-scrollbar':{
          //隐藏滚动条针对IE、Edge、Firefox
          '-ms-overflow-style':'none',
          'scrollbar-width':'none',
          //隐藏滚动条针对Chrome Safari Opera
          '&::-webkit-scrollbar':{
            display:'none',
          },
        },
      });
    },
    
  ],
}

