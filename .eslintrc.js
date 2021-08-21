module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
