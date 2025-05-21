module.exports = {
  theme: {
    extend: {
      keyframes: {
        zoomOut: {
          '0%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        zoomOut: 'zoomOut 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};