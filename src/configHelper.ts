export function getConfigForComponent<T extends Record<string, any>>(
  defaultConfig: T,
  additionalConfig?: Partial<T>,
): T {
  return {
    ...defaultConfig,
    ...additionalConfig,
  } as T;
}
