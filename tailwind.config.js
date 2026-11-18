/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#19191a",
        secondary: "#f2f2f0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        extended: ["var(--font-extended)", "sans-serif"],
      },
      spacing: {
        "4-to-8": "clamp(0.25rem, calc(0.25rem + 0.25 * ((100vw - 24rem) / 72)), 0.5rem)",
        "12-to-24": "clamp(0.75rem, calc(0.75rem + 0.75 * ((100vw - 24rem) / 72)), 1.5rem)",
        "24-to-48": "clamp(1.5rem, calc(1.5rem + 1.5 * ((100vw - 24rem) / 72)), 3rem)",
        "48-to-96": "clamp(3rem, calc(3rem + 3 * ((100vw - 24rem) / 72)), 6rem)",
        "72-to-144": "clamp(4.5rem, calc(4.5rem + 4.5 * ((100vw - 24rem) / 72)), 9rem)",
        "88-to-240": "clamp(5.5rem, calc(5.5rem + 9.5 * ((100vw - 24rem) / 72)), 15rem)",
        "96-to-192": "clamp(6rem, calc(6rem + 6 * ((100vw - 24rem) / 72)), 12rem)",
      },
      fontSize: {
        "10": "0.625rem",
        "12": "0.75rem",
        "14": "0.875rem",
        "18-per-25": "clamp(1.125rem, calc(1.125rem + 0.14 * ((100vw - 24rem) / 72)), 1.265rem)",
        "24-per-250": "clamp(1.5rem, calc(1.5rem + 1.875 * ((100vw - 24rem) / 72)), 3.375rem)",
        "32-per-100": "clamp(2rem, calc(2rem + 1 * ((100vw - 24rem) / 72)), 3rem)",
        "32-per-450": "clamp(2rem, calc(2rem + 6 * ((100vw - 24rem) / 72)), 8rem)",
      },
    },
  },
  plugins: [],
};
