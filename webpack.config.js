var webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: "./build/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    library: 'nanewsformat'
  },
  optimization: {
    minimize: true,
    mergeDuplicateChunks: true
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
