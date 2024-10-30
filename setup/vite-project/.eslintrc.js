// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended', // Base ESLint rules
    'plugin:react/recommended', // Recommended React rules
    'plugin:react-hooks/recommended', // Recommended React Hooks rules
    'plugin:prettier/recommended', // Prettier plugin rules
    'react-app', // React app configuration (optional)
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
    ecmaVersion: 'latest', // Use the latest ECMAScript features
    sourceType: 'module', // Supports ES module imports/exports
  },
  plugins: [
    'react', // Enables `eslint-plugin-react`
    'react-hooks', // Enables `eslint-plugin-react-hooks`
    'prettier', // Enables `eslint-plugin-prettier`
  ],
  rules: {
    'prettier/prettier': 'error', // Marks Prettier issues as ESLint errors
  },
};
