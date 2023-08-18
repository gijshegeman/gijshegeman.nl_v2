/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blur: {
          '0%': { filter: "blur(0px)" },
          '100%': { filter: "blur(5px)" },
        }
      },
      animation: {
        blur: 'blur 15s linear infinite',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '1030px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1710px',
      // => @media (min-width: 1536px) { ... }

      '4xl': '2050px',
      // => @media (min-width: 1536px) { ... }

      '5xl': '2390px',
      // => @media (min-width: 1536px) { ... }

      '6xl': '2730px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}