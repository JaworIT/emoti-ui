module.exports = {
  extends: ['next', 'eslint:recommended', 'next/core-web-vitals', 'plugin:react/recommended', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:react/jsx-runtime', 'plugin:@typescript-eslint/recommended', 'plugin:tailwindcss/recommended', 'plugin:storybook/recommended'],
  rules: {
    'no-console': 'warn', // to change to 'error'
    'no-nested-ternary': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/hook-use-state': 'error',
    'react/no-array-index-key': 'warn',
    'no-useless-escape': 'off',
    '@typescript-eslint/no-explicit-any': 'warn', // to change to 'error'
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, destructuredArrayIgnorePattern: '^_' },
    ],
    'unused-imports/no-unused-imports': 'error',
    'tailwindcss/no-custom-classname': 'error',
    'tailwindcss/no-arbitrary-value': 'warn',
    'tailwindcss/enforces-shorthand': 'off',
    'no-restricted-imports': [
      'error',
      {
        name: 'react-cookie',
        message: 'Use our custom useCookies hooks instead.',
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports'],
  root: true,
  overrides: [
    // Next.js needs default exports for pages and API points
    {
      files: ['pages/*', 'pages/api/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['./**/*.d.ts'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
  ],
};
