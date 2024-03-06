export const containsClasses = (
    classNames: string | undefined,
    searchedClassNames: string | string[]
): boolean => {
  if (!classNames) return false;

  if (typeof searchedClassNames === 'string') {
    searchedClassNames = searchedClassNames.split(' ');
  }

  const classNamesArray: string[] = classNames.split(' ');

  for (let i = 0; i < searchedClassNames.length; i++) {
    if (classNamesArray.includes(searchedClassNames[i])) {
      return true;
    }
  }

  return false;
};
