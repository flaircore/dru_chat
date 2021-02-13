const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const  MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common,{
    mode: 'development',
    //devtool: 'cheap-module-eval-source-map',
  devtool: 'inline-source-map',
  watch: true,

  watchOptions: {
    ignored: 'node_modules/**'
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css'})
  ]

})
