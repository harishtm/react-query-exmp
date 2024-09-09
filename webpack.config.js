const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/")
    }
  },
  plugins: [
    new NodePolyfillPlugin()
  ]
};