const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// loaders
const js = require('./loaders/js');
const css = require('./loaders/css');
const image = require('./loaders/image');
const constants = require('./constants');

const {
  ENTRY_FILE,
  DIST_DIR,
  VENDOR_LIBS,
  TEMPLATE_FILE
} = constants;

const config = {
  entry: {
    vendors: VENDOR_LIBS,
    bundle: ENTRY_FILE,
  },
  output: {
    path: DIST_DIR,
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      js.loader,
      css.loader,
      image.loader,
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'docs']),
    new HtmlWebpackPlugin({ template: TEMPLATE_FILE }),
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendors', 'manifest'] }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } }),
    css.extract
  ]
};

module.exports = config;
