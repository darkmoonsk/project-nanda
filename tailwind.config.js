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
            "azul": "#000080"
        },
        dropShadow: {
            "custom": "box-shadow: 0px 12px 31px 0px rgba(0,0,0,0.75)"
        }
    },
  },
  plugins: [],
}

