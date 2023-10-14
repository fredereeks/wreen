/** @type {import('tailwindcss').Config} */

module.exports = {
  "mode": "jit",
  "darkMode": "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "grey": "#acada8",
        "primary": "#0ea5e9",
        "dark": "#103256",
        "darker": "#061525",
        "info": "#0979db",
        "danger": "#ff6666",
        "warning": "#fac451",
      }
    },
  },
  plugins: [],
}
