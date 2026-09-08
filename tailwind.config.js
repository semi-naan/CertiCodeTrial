/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6F1E9',
        paper: '#FBF8F3',
        espresso: '#2B2019',
        bark: '#3D2E22',
        clay: '#C97A4A',
        clayDark: '#B3663A',
        stone: '#8A7C6C',
        line: '#E5DDCF',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};
