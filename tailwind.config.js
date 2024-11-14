/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        editorColor: "var(--bgEditor)",
        btnColor: "var(--btnColor)",
        textColor: "var(--textColor)",

      }
    },
  },
  plugins: [],
}