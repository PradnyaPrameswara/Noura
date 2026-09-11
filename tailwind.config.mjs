/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        noura: {
          beige: '#f8f7f3',
          black: '#000000',
          white: '#ffffff',
          grey: {
            100: '#dddddd',
            200: '#b6b6b6',
            300: '#6b6b6b',
            350: '#525252',
            400: '#474747',
            500: '#333333',
            600: '#292929',
            700: '#171717',
            800: '#0f0f0f',
            900: '#0a0a0a',
          },
        },
      },
      fontFamily: {
        sans: ['"BDO Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
        display: ['"BDO Grotesk"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [],
};
