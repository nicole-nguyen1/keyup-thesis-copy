var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/dist');
var APP_DIR = path.resolve(__dirname, 'client/src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': {
      FB_APP_ID: JSON.stringify(`${process.env.FB_APP_ID}`) }
    })
  ]
};

module.exports = config;
