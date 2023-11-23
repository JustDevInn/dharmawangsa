module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: 'Helvetica Neue',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors: {
        primary: '#0E1112',
        secondary: '#FBF3EC',
        grey: '#484B4B',
        accent: '#EEF7F9',
      },
    },
  },
  plugins: [],
};