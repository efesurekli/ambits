var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: 'client/checkin/checkin.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: 'client/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'client'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};