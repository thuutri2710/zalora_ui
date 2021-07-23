module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#262626',
          1: '#474747',
          2: '#737373',
          3: '#DEDEDE',
          4: '#F4F4F4',
        },
        secondary: {
          main: '#297E84',
          1: '#305558',
          2: '#31696D',
          3: '#E8F6F7',
        },
        success: {
          main: '#2E8618',
          1: '#2E8618',
          2: '#1A6307',
          3: '#DAF7D2',
        },
        alert: {
          main: '#FBC622',
          1: '#F08C00',
          2: '#FAB005',
          3: '#FEF7E2',
        },
        alert: {
          main: '#B81818',
          1: '#840F0F',
          2: '#9E0D0D',
          3: '#FDE4E4',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
