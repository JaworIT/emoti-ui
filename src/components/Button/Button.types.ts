import type { ComponentPropsWithoutRef } from 'react';

interface BaseProps extends ComponentPropsWithoutRef<'button'> {
  variant: 'primary' | 'secondary' | 'tertiary' | 'tertiary-no-frame';
  size?: 'default' | 'small' | 'large';
  disabled?: boolean;
  accented?: boolean;
  inverted?: boolean;
  isLoading?: boolean;
}

export type ButtonLinkProps =
  | {
      isLink: true;
      href: string;
      prefetch?: boolean;
    }
  | {
      isLink?: false;
      href?: never;
      prefetch?: boolean;
    };

export type ButtonProps = BaseProps & ButtonLinkProps;
