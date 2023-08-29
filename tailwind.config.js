/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1640px",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      backgroundColor: {
        primery: "#26901b",
      },
      backgroundImage: {
        clock:
          "radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%)",
      },
      screens: {
        tape: "360px",
      },
      variants: {
        textColor: ["responsive", "hover", "focus", "group-hover"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        wobble: {
          "0,100%": { transform: "translate3d(e, 0, 0)" },
          "15%": {
            transform: "translate3d(-25%, 0, 0) rotate3d(e, 0, 1, -5deg)",
          },
          "30%": {
            transform: "translate3d(20%, 0, 0) rotate3d(@, 0, 1, 3deg)",
          },
          "45%": {
            transform: "translate3d(-15%, 0, 0) rotate3d(e, 0, 1, -3deg)",
          },
          "60%": {
            transform: "translate3d(10%, 0, 0) rotate3d(@, 0, 1, 2deg)",
          },
          "75%": {
            transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -ldeg)",
          },
          "20%": { transform: "translate3d(o, 0, 0)" },
        },
      },

      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        wobble: "wobble 1s infinite",
      },
    },
  },
  plugins: [],
};
