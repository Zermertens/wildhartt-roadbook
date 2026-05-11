/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/*.js', './**/*.django-html'],
  theme: {
    extend: {
      colors: {
        'wh-dark':      '#303d3c',
        'wh-cream':     '#fefded',
        'wh-orange':    '#ff9441',
        'wh-teal':      '#5ea59e',
        'wh-rose':      '#d79eae',
        'wh-black':     '#1a2120',
        'wh-dark-bg':   '#253130',
        'wh-sand':      '#f5f1e0',
        'wh-orange-lt': '#ffb070',
        'wh-text':      '#303d3c',
        'wh-muted':     '#7a8a89',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', '"Neue Haas Grotesk Display Pro"', '"Helvetica Neue"', 'sans-serif'],
        body:    ['"Plus Jakarta Sans"', '"Neue Haas Grotesk Display Pro"', '"Helvetica Neue"', 'sans-serif'],
        mono:    ['"Space Mono"', '"Courier New"', 'monospace'],
      },
      maxWidth: {
        page: '820px',
      },
      borderColor: {
        DEFAULT: 'rgba(48,61,60,0.10)',
      },
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [],
}
