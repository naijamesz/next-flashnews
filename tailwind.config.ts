import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    /* Every file .js .ts .jsx .tsx .mdx in page or app folder*/
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    /* Every file .js .ts .jsx .tsx .mdx in components folder*/
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    /* Every file .js .ts .jsx .tsx .mdx in app folder*/
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
export default config;
