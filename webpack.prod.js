const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const src = path.resolve(__dirname, 'src')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: `${src}/production.html`,
  filename: 'index.html',
})

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: src,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                jsx: 'react-jsx',
                sourceMap: false,
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [htmlWebpackPlugin, new CleanWebpackPlugin()],
})
