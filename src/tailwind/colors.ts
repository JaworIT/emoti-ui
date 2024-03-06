import Color from 'color';
import defaultColors from 'tailwindcss/colors';

const colors = {
  black: Color(defaultColors.black),
  white: Color(defaultColors.white),
  brand: Color('#e32016'),
  'brand-original': Color('#ff0014'),
  'brand-a11y-text': Color('#be1b13'),
  error: Color('#f0650c'),
  success: Color('#34a300'),
  neutral: Color('#337ca0'),
  gray: {
    '1': Color('#faf9f9'),
    '2': Color('#f3f0ef'),
    '3': Color('#e6e2e0'),
    '4': Color('#2e2b29'),
  },
};

// Utility function to convert color object to RGB string
const c = (colorObject: Color) => colorObject.rgb().string();

const borderColors = {
  brand: c(colors.brand),
  main: c(colors.black.alpha(0.44)),
  white: c(colors.white),
  decorative: c(colors.gray[3]),
  strong: c(colors.gray[4]),
  error: {
    DEFAULT: c(colors.error),
    muted: c(colors.error.alpha(0.12)),
  },
  hover: {
    DEFAULT: c(colors.gray[4].alpha(0.07)),
    brand: c(colors.brand.alpha(0.07)),
  },
  success: c(colors.success.alpha(0.12)),
  neutral: c(colors.neutral.alpha(0.12)),
};

const colorConfig = {
  colors: {
    brand: c(colors.brand),
    main: c(colors.white),
    icon: {
      DEFAULT: c(colors.gray[4]),
      disabled: c(colors.black.alpha(0.44)),
    },
    overlay: {
      DEFAULT: c(colors.black.alpha(0.1)),
      strong: c(colors.black.alpha(0.55)),
    },
    decorative: c(colors.gray[3]),
    strong: c(colors.gray[4]),
    success: c(colors.success),
  },
  borderColor: borderColors,
  ringColor: borderColors,
  outlineColor: borderColors,
  neutral: c(colors.neutral),
  textColor: {
    default: c(colors.black.alpha(0.75)),
    strong: c(colors.black.alpha(0.9)),
    muted: c(colors.black.alpha(0.54)),
    inverted: c(colors.white),
    brand: c(colors['brand-a11y-text']),
    error: c(colors.error),
    success: c(colors.success),
    info: c(colors.neutral),
  },
  backgroundColor: {
    transparent: 'transparent',
    main: {
      DEFAULT: c(colors.white),
      transparent: c(colors.white.alpha(0.85)),
    },
    'border-main': borderColors.main,
    alt: c(colors.gray[1]),
    brand: c(colors.brand),
    contrast: c(colors.gray[4]),
    error: c(colors.error.alpha(0.05)),
    'text-error': c(colors.error),
    success: c(colors.success.alpha(0.05)),
    neutral: c(colors.neutral.alpha(0.05)),
    decorative: c(colors.gray[3]),
    strong: c(colors.gray[4]),
    overlay: {
      DEFAULT: c(colors.black.alpha(0.1)),
      strong: c(colors.black.alpha(0.55)),
    },
  },
};

export default colorConfig;
