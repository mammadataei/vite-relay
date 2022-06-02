/** @type {import('relay-compiler/lib/bin/RelayCompilerMain').Config} */
module.exports = {
  src: './src',
  schema: './src/schema.graphql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  language: 'typescript',
}
