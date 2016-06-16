const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const productionPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: { warnings: false }
  })
]

module.exports = {
  devtool: isDev ? 'cheap-module-source-map' : null,

  entry: [
    './app/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlPlugin({ template: './static/index.html' })
  ].concat(isProd ? productionPlugins : []),

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
      },
      {
        test: /\.(svg|jpe?g|png)$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
}