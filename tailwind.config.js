module.exports = {
  content: ['./src/**/*.{html,jsx}', './index.html'],
  theme: {
    extend: {
      animation: {
        'wiggle-r':
          'wiggle-r 1s cubic-bezier(0.5, 0.8, 0.5, 0.2) infinite forwards',
        'wiggle-l':
          'wiggle-l 1s cubic-bezier(0.5, 0.8, 0.5, 0.2) infinite forwards',
      },
      keyframes: {
        'wiggle-l': {
          '0%, 15%, 25%, 100%': { transform: 'translate(0, 0)' },
          '17%': { transform: 'translate(-20%, 0)' },
          '22%': { transform: 'translate(30%, 0)' },
          '24%': { transform: 'translate(-10%, 0)' },
        },
        'wiggle-r': {
          '0%, 25%, 35%, 100%': { transform: 'translate(0, 0)' },
          '27%': { transform: 'translate(20%, 0)' },
          '32%': { transform: 'translate(-30%, 0)' },
          '34%': { transform: 'translate(10%, 0)' },
        },
      },
    },
  },
  plugins: [],
}
