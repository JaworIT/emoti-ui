import plugin from 'tailwindcss/plugin';

export default plugin(({ addComponents }) => {
  addComponents({
    '.container': {
      margin: 'auto',
      width: '100%',
      padding: '0 12px',

      '@screen xs': {
        padding: '0 18px',
      },

      '@screen s': {
        padding: '0 30px',
      },

      '@screen m': {
        padding: '0 36px',
      },

      '@screen l': {
        padding: '0 48px',
      },

      '@screen xl': {
        width: '1308px',
        padding: '0',
      },

      '@screen xxl': {
        width: '1548px',
      },
    },

    '.container-padding': {
      padding: '0 12px',

      '@screen xs': {
        padding: '0 18px',
      },

      '@screen s': {
        padding: '0 30px',
      },

      '@screen m': {
        padding: '0 36px',
      },

      '@screen l': {
        padding: '0 48px',
      },

      '@screen xl': {
        padding: '0',
      },
    },

    '.beyond-container': {
      marginLeft: '-12px',
      marginRight: '-12px',

      '@screen xs': {
        marginLeft: '-18px',
        marginRight: '-18px',
      },

      '@screen s': {
        marginLeft: '-30px',
        marginRight: '-30px',
      },

      '@screen m': {
        marginLeft: '-36px',
        marginRight: '-36px',
      },

      '@screen l': {
        marginLeft: '-48px',
        marginRight: '-48px',
      },

      '@screen xl': {
        marginLeft: 'unset',
        marginRight: 'unset',
      },
    },
  });
});
