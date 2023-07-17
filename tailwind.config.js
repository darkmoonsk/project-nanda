/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "pastel-claro": "#F5E8C7",
            "pele": "#ECCCB2",
            "pele-escuro": "#DEB6AB",
            "rosa-medio": "#AC7088",
            "rosa-escuro": "#754d5d"
        },
    },
  },
  plugins: [],
}

