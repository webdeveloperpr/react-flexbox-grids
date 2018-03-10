const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// loaders
const js = require('./loaders/js');
const scss = require('./loaders/scss');
const image = require('./loaders/image');
const constants = require('./constants');

const { ENTRY_FILE, TEMPLATE_FILE, PORT, VENDOR_LIBS, HOST } = constants;
const hotMiddlewareScript = [
  'webpack-hot-middleware/client',
  `?path=http://${HOST}:${PORT}/__webpack_hmr`,
  '&timeout=20000',
  '&reload=true'
].join('');

const config = {
  devtool: '#source-map',
  entry: {
    bundle: [ENTRY_FILE, hotMiddlewareScript],
    vendors: VENDOR_LIBS,

  },
  output: {
    path: '/',
    filename: '[name].js',
    publicPath: `http://${HOST}:${PORT}/`,
  },
  module: {
    rules: [
      js.loader,
      scss.loader,
      image.loader,
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: TEMPLATE_FILE, }),
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendors', 'manifest'] }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } })
  ]
};

module.exports = config;
