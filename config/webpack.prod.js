const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// loaders
const js = require('./loaders/js');
const css = require('./loaders/css');
const file = require('./loaders/file');
const constants = require('./constants');

const {
  ENV_VARS,
  DIST_DIR,
  ENTRY_FILE,
  VENDOR_LIBS,
  TEMPLATE_FILE,
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
      file.loader,
      css.loader,
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ template: TEMPLATE_FILE }),
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendors', 'manifest'] }),
    new webpack.DefinePlugin({
      'process.env': ENV_VARS
    }),
    css.extract
  ]
};

module.exports = config;
