const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  darkMode: false,
  theme: {
    colors: {
      gray: {
        DEFAULT: '#788393',
        translucent: '#788393cc',
      },
      orange: {
        DEFAULT: '#E86D39',
        translucent: '#E86D39cc',
      },
      white: {
        DEFAULT: '#ffffff',
        translucent: '#ffffffcc',
      },
      black: {
        DEFAULT: '#000000',
        translucent: '#000000cc',
      },
      purple: {
        DEFAULT: '#311a39',
        translucent: '#311a39cc',
      },
      pink: {
        DEFAULT: '#d566a4',
        translucent: '#d566a4cc',
      },
      silver: {
        DEFAULT: '#cccccc',
      },
    },
    fontFamily: {
      sans: ['Titillium Web', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      minHeight: {
        header: '576px',
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
