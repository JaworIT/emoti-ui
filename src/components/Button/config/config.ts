import { giftsButtonConfig } from './giftsButtonConfig';
import { emotiButtonConfig } from './emotiButtonConfig';
import { getConfigForComponent } from '../../../configHelper';
import type { ButtonConfig } from './types';
export const config = getConfigForComponent<ButtonConfig>(
  giftsButtonConfig,
  emotiButtonConfig,
);
