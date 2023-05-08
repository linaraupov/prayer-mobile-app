module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'unused-imports'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {extensions: ['.js', '.jsx', '.tsx', '.ts']},
    ],
    'unused-imports/no-unused-imports': 1,
    'react-hooks/exhaustive-deps': 'error',
    'no-console': 1,
    'no-shadow': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-empty-function': 'off',
  },
  globals: {
    JSX: true,
  },
};
