module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#4F46E5',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  corePlugins: {
    preflight: true,
  },
};
