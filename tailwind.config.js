/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Protest: ["Protest Guerrilla", "sans-serif"],
        Sofadi: ["Sofadi One", "sans-serif"],
        Nabla: ["Nabla ", "sans-serif"],

      },
    },
  },
  plugins: [],
}

