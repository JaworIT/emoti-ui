import plugin from 'tailwindcss/plugin';

export const borderRadius = {
  none: '0',
  xs: '3px',
  s: '6px',
  m: '12px',
  l: '18px',
  xl: '24px',
  full: '9999px',
};

export const responsiveBorderRadius = plugin(({ addComponents }) => {
  addComponents({
    '.border-radius-default': {
      borderRadius: borderRadius.m,

      '@screen xs': {
        borderRadius: borderRadius.l,
      },

      '@screen s': {
        borderRadius: borderRadius.xl,
      },
    },
  });
});
