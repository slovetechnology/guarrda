/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#7090ea",
        "bg": "#f1f2fa",
        "bgdown": "#424242",
        "maindark": "#222223",
        "subdark": "#303132",
        "mainblue": "#4489ff",
      }
    },
  },
  plugins: [],
}

