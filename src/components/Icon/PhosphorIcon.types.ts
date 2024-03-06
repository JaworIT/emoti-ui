import type { ComponentPropsWithoutRef } from 'react';
import type { Icon as IconType } from '@phosphor-icons/react/dist/lib/types';
import type { IconWeight } from '@phosphor-icons/react';

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  Icon: IconType;
  variant?: IconWeight;
  color?: string;
}
