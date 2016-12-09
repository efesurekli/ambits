const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    'client/checkin/checkin.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'client'),
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
};