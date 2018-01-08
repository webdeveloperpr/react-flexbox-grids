const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { NPM_DIST_DIR, NPM_ENTRY_FILE } = require('./constants');

// loaders
const js = require('./loaders/js');
const css = require('./loaders/css');

const config = {
  entry: NPM_ENTRY_FILE,
  output: {
    path: NPM_DIST_DIR,
    filename: 'index.js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  module: {
    rules: [js.loader, css.loader],
  },
  plugins: [
    new CleanWebpackPlugin(['npm/dist']),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } }),
    css.extract
  ],
  externals: {
    'react': 'commonjs react', // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
};

module.exports = config;
