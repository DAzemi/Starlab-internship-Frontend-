/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dren: ["Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      // screens: {
      //   sm: "640px",
      //   md: "768px",
      //   lg: "1024px",
      //   xl: "1280px",
      //   "2xl": "1500px",
      //   "3xl": "1800px",
      // },
      // minHeight: {
      //   800: "800px",
      // },
      // fontFamily: {
      //   Poppins: ["Poppins", "sans"],
      //   Manrope: ["Manrope", "sans-serif"],
      //   roboto: ["Roboto", "sans-serif"],
      // },
      // borderRadius: {
      //   "8xs": "5px",
      //   "3xs": "10px",
      // },
    },
    // fontSize: {
    //   13: "0.813rem",
    //   14: "0.875rem",
    //   15: "0.938rem",
    //   16: "1rem",
    //   32: "2rem",
    //   40: "2.5rem",
    // },
  },
};
