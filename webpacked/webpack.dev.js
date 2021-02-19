const config = require('./webpack.config')
const { merge } = require('webpack-merge')
const  MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  //devtool: 'none', source maps

  watch: true,

  watchOptions: {
    ignored: 'node_modules/**'
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css'})
  ]

})