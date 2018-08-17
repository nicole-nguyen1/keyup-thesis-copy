var webpack = require('webpack');
var path = require('path');
var dotenv = require('dotenv');

var BUILD_DIR = path.resolve(__dirname, 'client/dist');
var APP_DIR = path.resolve(__dirname, 'client/src');

const env = dotenv.config().parsed;

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
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': {
      FB_APP_ID: JSON.stringify(`${env.FB_APP_ID}`) }
    })
  ]
};

module.exports = config;
