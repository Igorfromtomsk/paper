module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  extends: [
    'plugin:react/recommended',
    "react-app",
    "react-app/jest"
  ],
  overrides: [
    {
      files: [ '*.ts', '*.tsx' ],
      rules: {
        "no-console": "warn",
        "quotes": [ "error", "single" ],
        "jsx-quotes": [ "error", "prefer-double" ],
        "max-len": [ "error", { "code": 127 }],
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    }
  ]
};
