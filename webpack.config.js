const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './app/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlPlugin({ template: './static/index.html' })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader'
        ]
      }
    ]
  }
}