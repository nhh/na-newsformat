module.exports = {
  mode: 'production',
  entry: "./dist/index.js",
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
