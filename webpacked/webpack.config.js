const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const  MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    chat: './src/chat.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../libs/processed')
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css'}),
    new CleanWebpackPlugin()
  ],


  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,// 3. Extract css into files
          //'style-loader', 3 Inject styles into dom.. not needed
          'css-loader', // 2. Turns css into commonjs
          'sass-loader'// 1. Turns sass into css
        ],
      },
      {
        test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[hash].[ext]",
            outputPath: 'imgs'
          }
        }
      }
    ]
  }
}
