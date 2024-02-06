const styleguide = require('@vercel/style-guide/prettier');

/** @type {import('prettier').Config} */
const prettierConfig = {
  plugins: [
    ...styleguide.plugins,
    'prettier-plugin-tailwindcss',
    'prettier-plugin-embed',
    'prettier-plugin-sql',
    'prettier-plugin-organize-imports',
  ],
};

/** @type {import('prettier-plugin-embed').PrettierPluginEmbedOptions} */
const prettierPluginEmbedConfig = {
  embeddedSqlIdentifiers: ['sql'],
};

/** @type {import('prettier-plugin-sql').SqlBaseOptions} */
const prettierPluginSqlConfig = {
  language: 'postgresql',
  keywordCase: 'upper',
};

module.exports = {
  ...styleguide,
  ...prettierConfig,
  ...prettierPluginEmbedConfig,
  ...prettierPluginSqlConfig,
};
