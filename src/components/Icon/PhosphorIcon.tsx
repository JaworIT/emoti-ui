import { forwardRef } from 'react';
import { clsx } from 'clsx';
import type { IconProps } from './PhosphorIcon.types';
import React from 'react';

export const PhosphorIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ Icon, variant = 'regular', color, className, ...props }, ref) => (
    <Icon
      {...props}
      className={clsx(className, 'block')}
      weight={variant}
      color={color}
      ref={ref}
    />
  ),
);

PhosphorIcon.displayName = 'PhosphorIcon';
