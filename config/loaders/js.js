const jsLoader = {
  test: /\.jsx?$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
  }
};

module.exports = {
  loader: jsLoader,
};
