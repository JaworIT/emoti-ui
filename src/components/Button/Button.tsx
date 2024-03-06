import { forwardRef } from 'react';
import { CircleNotch } from '@phosphor-icons/react/dist/ssr';
import { clsx } from 'clsx';
import { config } from './config/config';
import { containsClasses } from 'src/utils/containsClasses';
import type { ButtonProps } from './Button.types';
import { PhosphorIcon } from '../Icon/PhosphorIcon';
import React from 'react';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size = 'default',
      accented,
      disabled,
      inverted,
      isLoading,
      children,
      className,
      isLink = false,
      prefetch,
      href,
      ...props
    },
    ref,
  ) => {
    const {
      baseClasses,
      heightClasses,
      paddingClasses,
      baseInvertedClasses,
      variantClasses,
      nonAccentedClasses,
      accentedClasses,
      disabledClasses,
      invertedClasses,
      positionClasses,
      loadingIconClasses,
    } = config;

    const classNames = clsx(
      baseClasses,
      heightClasses[size],
      paddingClasses[variant][size],
      inverted && baseInvertedClasses,
      !disabled && !inverted && variantClasses[variant],
      !accented && !disabled && !inverted && nonAccentedClasses[variant],
      accented && !disabled && !inverted && accentedClasses[variant],
      disabled && disabledClasses,
      !disabled && inverted && invertedClasses[variant],
      isLoading && 'pointer-events-none',
      !containsClasses(className, positionClasses) && 'relative',
      className,
    );
    return !isLink ? (
      <button
        className={classNames}
        ref={ref}
        disabled={disabled}
        aria-disabled={isLoading}
        {...props}
      >
        <div
          className={clsx(
            'flex items-center justify-center gap-xxs',
            isLoading && 'invisible',
          )}
        >
          {children}
        </div>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <PhosphorIcon
              Icon={CircleNotch}
              variant="bold"
              className={clsx('animate-spin', loadingIconClasses[size])}
            />
          </div>
        )}
      </button>
    ) : (
      <a
        href={href ?? '/'}
        aria-label={props['aria-label']}
        className={clsx(classNames, 'block', disabled && 'pointer-events-none')}
      >
        <div className="flex h-full items-center justify-center gap-xxs">
          {children}
        </div>
      </a>
    );
  },
);

Button.displayName = 'Button';
