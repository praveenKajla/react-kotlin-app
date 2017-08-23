const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js/,
        use: [
          { loader:'react-hot-loader/webpack'},
          { loader: 'babel-loader' }

        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader', options: {
              includePaths: ['./node_modules']
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js','.scss']
  },
 output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.WatchIgnorePlugin([/\.json$/])

  ]
};
