const ExtractTextPlugin = require("extract-text-webpack-plugin");

const cssLoader = {
  test: /\.s?css$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", 'sass-loader']
  })
};

module.exports = {
  loader: cssLoader,
  extract: new ExtractTextPlugin("styles.css"),
};