const config = require('./webpack.config')
const { merge } = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')


module.exports = merge(config, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      //new OptimizeCssAssetsPlugin(),
        // https://webpack.js.org/plugins/terser-webpack-plugin/
      new TerserPlugin({extractComments: true})]
  },

})