module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{tsx,ts,js,jsx,vue}'
  ],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
