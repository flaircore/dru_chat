const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const  MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: {
        main: ["@babel/polyfill", path.resolve(__dirname, './src/index.js')],
        chat: ["@babel/polyfill", path.resolve(__dirname, './src/chat.js')]
    },

  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, '/build')
  },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
      new MiniCssExtractPlugin({ filename: '[name].css'}),
      new CleanWebpackPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
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
                //test: /\.(svg|png|jpg|gif)$/,
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: 'imgs'
                    }
                }
            }
        ],
    },

}
