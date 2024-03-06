import { clsx } from 'clsx';

const positionClasses = ['relative', 'absolute', 'fixed'];

const baseClasses = clsx(
  'anim-effect focus-visible:focus-outline rounded-s font-semibold focus-visible:z-20 s:max-w-max-button-width',
);

const baseInvertedClasses = clsx('focus-visible:!outline-white');

const disabledClasses = clsx('bg-alt text-muted');

const variantClasses = {
  primary: clsx('text-inverted hover:outline'),
  secondary: clsx(
    'bg-main outline-hover-brand ring ring-inset ring-strong hover:outline hover:outline-3 hover:ring-brand',
  ),
  tertiary: clsx(
    'bg-main outline-hover-brand ring-1 ring-inset ring-decorative hover:outline hover:outline-3 hover:ring-brand',
  ),
  'tertiary-no-frame': clsx(
    'bg-transparent outline-hover hover:bg-main hover:outline hover:outline-3 focus-visible:bg-main',
  ),
};

const nonAccentedClasses = {
  primary: clsx('bg-contrast hover:bg-brand hover:outline-hover-brand'),
  secondary: clsx('border-strong text-strong'),
  tertiary: clsx('text-strong'),
  'tertiary-no-frame': clsx('text-strong'),
};

const accentedClasses = {
  primary: clsx('bg-brand hover:bg-contrast hover:outline-hover'),
  secondary: clsx('border-brand text-brand outline-hover hover:border-strong'),
  tertiary: clsx('text-brand'),
  'tertiary-no-frame': clsx('text-brand'),
};

const invertedClasses = {
  primary: variantClasses.primary,
  secondary: variantClasses.secondary,
  tertiary: clsx(
    'bg-transparent text-inverted ring-1 ring-inset ring-decorative hover:ring-2',
  ),
  'tertiary-no-frame': clsx(variantClasses['tertiary-no-frame']),
};

const heightClasses = {
  default: clsx('h-clickable'),
  small: clsx('h-clickable-minimum'),
  large: clsx('h-clickable-large'),
};

const paddingClasses = {
  primary: {
    default: clsx('px-m'),
    small: clsx('px-s'),
    large: clsx('px-l'),
  },
  secondary: {
    default: clsx('px-m'),
    small: clsx('px-s'),
    large: clsx('px-l'),
  },
  tertiary: {
    default: clsx('px-s'),
    small: clsx('px-xs'),
    large: clsx('px-m'),
  },
  'tertiary-no-frame': {
    default: clsx('px-xxs'),
    small: clsx('p-xxs'),
    large: clsx('px-xxs'),
  },
};

const loadingIconClasses = {
  default: 'icon-m',
  small: 'icon-s',
  large: 'icon-l',
};

export const giftsButtonConfig = {
  positionClasses,
  baseClasses,
  baseInvertedClasses,
  disabledClasses,
  variantClasses,
  nonAccentedClasses,
  accentedClasses,
  invertedClasses,
  heightClasses,
  paddingClasses,
  loadingIconClasses,
};
