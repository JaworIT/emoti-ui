import { fractionValues } from './fractionValues';

export const fixedSpacing = {
  '0': '0px',
  px: '1px',
  '2': '2px',
  '3': '3px',
  '4': '4px',
  '5': '5px',
  xxs: '6px',
  xs: '12px',
  s: '18px',
  m: '24px',
  l: '36px',
  xl: '54px',
  xxl: '78px',
  '3xl': '114px',
  inner: 'var(--padding-inner)',
  form: 'var(--form-spacing)',
};

export const spacing = {
  ...fixedSpacing,
  auto: 'auto',
};

const inset = {
  ...spacing,
  ...fractionValues,
  full: '100%',
};

export const spacingConfig = {
  margin: spacing,
  padding: spacing,
  space: spacing,
  gap: spacing,
  inset,
};
