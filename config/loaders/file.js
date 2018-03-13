const fileLoader = {
  test: /\.(jpe?g|png|gif|svg|ttf|eot|woff2?)$/i,
  loaders: [
    {
      loader: 'file-loader',
      options: {
        query: {
          name: '[name].[ext]'
        }
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {
        query: {
          mozjpeg: {
            progressive: true,
          },
          gifsicle: {
            interlaced: true,
          },
          optipng: {
            optimizationLevel: 7,
          }
        }
      }
    }
  ]

};

module.exports = {
  loader: fileLoader,
};