/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
};
