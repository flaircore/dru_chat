const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common,{
    mode: 'development',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'build')
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
        ]
    },

    devtool: 'cheap-module-eval-source-map'

})