import type { Config } from 'tailwindcss';
import colorConfig from './src/tailwind/colors';
import typography from './src/tailwind/typography';
import container from './src/tailwind/container';
import {
  borderRadius,
  responsiveBorderRadius,
} from './src/tailwind/borderRadius';
import { spacingConfig } from './src/tailwind/spacing';
import { sizingConfig, iconSizes } from './src/tailwind/sizing';

const borderWidth = {
  none: '0',
  DEFAULT: '1px',
  1: '1px',
  2: '2px',
  3: '3px',
  4: '4px',
  5: '5px',
  6: '6px',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/emoti-ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      scale: {
        '80': '0.8',
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
      },
      zIndex: {
        '100': '100',
        '500': '500',
        '1000': '1000',
        top: '9999',
      },
      aspectRatio: {
        '3/2': '3/2',
      },
    },
    screens: {
      xxs: '0px',
      xs: '360px',
      s: '600px',
      m: '900px',
      l: '1200px',
      xl: '1404px',
      xxl: '1704px',
    },
    fontSize: iconSizes,
    ...spacingConfig,
    ...sizingConfig,
    borderRadius,
    outlineWidth: borderWidth,
    borderWidth,
    ...colorConfig,
  },
  plugins: [container, typography, responsiveBorderRadius],
};
export default config;
