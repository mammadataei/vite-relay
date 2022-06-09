const fs = require('fs/promises')
const path = require('path')

fs.readFile(path.resolve(__dirname, '../src/schema.graphql'), 'utf8').then(
  (schema) => {
    const content = `export const schema = \`\n${schema}\``
    fs.writeFile(path.resolve(__dirname, '../src/schema.ts'), content)
  },
)
