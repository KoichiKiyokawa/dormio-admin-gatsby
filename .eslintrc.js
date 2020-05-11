module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: { jsx: true }
  },
  env: {
    browser: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'react/prop-types': 0,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        semi: false,
        singleQuote: true,
        printWidth: 120
      }
    ]
  }
}
