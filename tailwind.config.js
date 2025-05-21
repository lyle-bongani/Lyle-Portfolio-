/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        midnight: "var(--color-midnight)",
        navy: "var(--color-navy)",
        indigo: "var(--color-indigo)",
        storm: "var(--color-storm)",
        aqua: "var(--color-aqua)",
        mint: "var(--color-mint)",
        royal: "var(--color-royal)",
        lavender: "var(--color-lavender)",
        fuchsia: "var(--color-fuchsia)",
        orange: "var(--color-orange)",
        sand: "var(--color-sand)",
        coral: "var(--color-coral)",
      },
      animation: {
        orbit: "orbit 50s linear infinite",
        marquee: "marquee 50s linear infinite",
        "marquee-vertical": "marquee-vertical 50s linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform: "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
          },
          "100%": {
            transform: "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
};
