/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "md-breeds-list": `repeat(auto-fit, minmax(25rem, 1fr))`,
        "breeds-list": `repeat(auto-fit, minmax(auto, 1fr))`,
        tag: `max-content max-content`,
      },
    },
  },
  plugins: [],
};
