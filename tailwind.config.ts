import type {Config} from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#006CB4',
        secondary: '#0DD3FF',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-multi'),
    plugin(function ({addUtilities}) {
      addUtilities({
        '.invert-svg': {
          filter: 'invert(0.5) sepia(1) saturate(5) hue-rotate(175deg)',
        },
      });
    }),
  ],
};
export default config;
