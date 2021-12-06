module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{tsx,ts,js,jsx,vue}'
  ],
  // purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'reliquary-bridge': "url('/Reliquary_Bridge.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
