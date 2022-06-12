module.exports = {
  content: ['./src/**/*.{html,jsx}', './index.html'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 0 24px 16px #111111',
      },
      animation: {
        'wiggle-r': 'wiggle-r 1s cubic-bezier(0.5, 0.8, 0.5, 0.2) infinite forwards',
        'wiggle-l': 'wiggle-l 1s cubic-bezier(0.5, 0.8, 0.5, 0.2) infinite forwards',
        'in-delay': 'fade-in 1s 0.5s forwards',
        'out-delay': 'fade-out 1s 0.5s forwards',
        'fade-in': 'fade-in 0.4s forwards',
        'fade-out': 'fade-out 0.4s forwards',
        'zoom-in': 'zoom-in 0.4s forwards',
        'zoom-out': 'zoom-out 0.4s forwards',
      },
      keyframes: {
        'wiggle-l': {
          '0%, 15%, 25%, 100%': { transform: 'translate(0, 0)' },
          '17%': { transform: 'translate(-30%, 0)' },
          '22%': { transform: 'translate(50%, 0)' },
          '24%': { transform: 'translate(-20%, 0)' },
        },
        'wiggle-r': {
          '0%, 25%, 35%, 100%': { transform: 'translate(0, 0)' },
          '27%': { transform: 'translate(30%, 0)' },
          '32%': { transform: 'translate(-50%, 0)' },
          '34%': { transform: 'translate(20%, 0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        'zoom-out': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.5)' },
        },
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
      },
    },
  },
  plugins: [],
}
