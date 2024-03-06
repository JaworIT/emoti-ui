'use client';

import React from 'react';
import { createContext, type ReactNode, useContext } from 'react';
import type { Config } from 'tailwindcss';
import config from '../../tailwind.config';

type ThemeProviderProps = {
  children: ReactNode;
  theme?: Partial<Config>;
};

export const ThemeContext = createContext<Config | undefined>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}: ThemeProviderProps) => {
  const context = useContext(ThemeContext);

  const finalTheme = { ...config, ...context, ...theme };
  return (
    <ThemeContext.Provider value={finalTheme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
