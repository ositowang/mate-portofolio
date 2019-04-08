module.exports = {
  extends: ['airbnb', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ],
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
};
