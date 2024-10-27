/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities }) => {
      addUtilities({
        '.haa-global': {
          '@apply cursor-pointer hover:opacity-70 active:opacity-50 transition-opacity':
            {},
        },
        '.h-rotate-180': {
          '@apply cursor-pointer hover:rotate-180 transition-transform': {},
        },
        '.transition-width': {
          transition: 'width 0.3s ease',
        },
      });
    },
  ],
};
