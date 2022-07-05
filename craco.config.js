/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const plugin = require('craco-less')
const { compilerOptions } = require('./tsconfig.paths.json')

function resolveAliasPath() {
  return Object.entries(compilerOptions.paths).reduce(
    (prevPaths, [key, value]) => ({
      ...prevPaths,
      [key]: [path.resolve(__dirname, value[0])],
    }),
    {},
  )
}

module.exports = {
  webpack: {
    alias: resolveAliasPath(),
  },
  plugins: [
    {
      plugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
