/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brandOrange: '#F96A0E',
        brandOrangeDark: '#E05500',
        brandOrangeLight: '#FFF2EA',
        darkHeader: '#0A0A0C',
        darkSidebar: '#000000',
        lightBg: '#F4F6F9',
        cardBg: '#FFFFFF',
        textDark: '#0F172A',
        textMuted: '#64748B',
        lineBorder: '#E2E8F0',
        cream: '#F6F1E9',
        paper: '#FBF8F3',
        espresso: '#0A0A0C',
        bark: '#18181B',
        clay: '#F96A0E',
        clayDark: '#E05500',
        stone: '#64748B',
        line: '#E2E8F0',
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
