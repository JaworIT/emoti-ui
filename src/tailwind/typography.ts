import plugin from 'tailwindcss/plugin';

export default plugin(({ addComponents }) => {
  addComponents({
    '.text-heading-xl': {
      fontWeight: '600',
      fontSize: '31px',
      lineHeight: '36px',
      letterSpacing: '-0.015em',

      '@screen m': {
        fontSize: '39px',
        lineHeight: '42px',
        letterSpacing: '-0.02em',
      },
    },

    '.text-heading-l': {
      fontWeight: '600',
      fontSize: '25px',
      lineHeight: '30px',
      letterSpacing: '-0.01em',

      '@screen m': {
        fontSize: '29px',
        lineHeight: '36px',
      },
    },

    '.text-heading-m': {
      fontWeight: '600',
      fontSize: '20px',
      lineHeight: '25px',

      '@screen m': {
        fontSize: '21px',
        lineHeight: '24px',
      },
    },

    '.text-heading-s': {
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
    },

    '.text-heading-xs': {
      fontWeight: '700',
      fontSize: '12px',
      lineHeight: '18px',
      letterSpacing: '0.09em',
      textTransform: 'uppercase',
    },

    '.text-large': {
      fontSize: '19px',
      lineHeight: '24px',
    },

    '.text-body': {
      fontSize: '16px',
      lineHeight: '24px',
    },

    '.text-small': {
      fontSize: '12px',
      lineHeight: '18px',
      letterSpacing: '0.01em',
    },

    '.text-small-link': {
      fontSize: '12px',
      lineHeight: '24px',
      textDecoration: 'underline',
    },
  });
});
