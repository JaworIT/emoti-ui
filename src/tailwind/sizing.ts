import { spacing } from './spacing';
import { fractionValues } from './fractionValues';

export const iconSizes = {
  'icon-extra-small': spacing.xs,
  'icon-small': spacing.s,
  'icon-medium': spacing.m,
  'icon-large': '30px',
};

export const fixedSizing = {
  clickable: '48px',
  'clickable-minimum': '36px',
  'clickable-large': '60px',
  'max-body-text-width': '600px',
  'max-modal-width': 'calc(600px + var(--padding-inner))',
  'max-button-width': '300px',
  'small-section-width': '360px',
  'max-form-width': '480px',
  ...iconSizes,
};

const translate = {
  full: '100%',
  ...fractionValues,
  ...spacing,
};

const sizing = {
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  ...fixedSizing,
  ...fractionValues,
  ...spacing,
};

export const sizingConfig = {
  minWidth: sizing,
  maxWidth: sizing,
  width: { ...sizing, screen: '100vw' },
  minHeight: sizing,
  maxHeight: sizing,
  height: { ...sizing, screen: '100vh' },
  size: sizing,
  translate,
};
