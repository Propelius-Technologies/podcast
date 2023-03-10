/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "pod-green": "#54E6AF",
      "pod-grey": "#2C344B",
      "pod-dark": "#121725",
      "pod-white": "#FFFFFF",
      "pod-light-grey": "#5A668A",
      "pod-text-grey": "#C2CBE5",
      "pod-green-light": "#B3FFE2",
    },
    extend: {
      fontFamily: {
        chivo: ["Chivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
