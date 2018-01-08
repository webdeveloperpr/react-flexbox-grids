const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { NPM_DIST_DIR, NPM_ENTRY_FILE } = require('./constants');

// loaders
const js = require('./loaders/js');
const css = require('./loaders/css');

const config = {
  entry: {
    bundle: NPM_ENTRY_FILE,
  },
  output: {
    path: NPM_DIST_DIR,
    filename: '[name].js',
  },
  module: {
    rules: [js.loader, css.loader],
  },
  plugins: [
    new CleanWebpackPlugin(['npm/dist']),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } }),
    css.extract
  ]
};

module.exports = config;
