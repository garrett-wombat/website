module.exports = {
  'src/**/*.{ts,tsx}': [() => 'tsc -p tsconfig.json', 'eslint --fix'],
  '*.{js,jsx}': 'eslint --fix',
  '*.{css,html,json,md,mdx}': 'prettier -w',
}
