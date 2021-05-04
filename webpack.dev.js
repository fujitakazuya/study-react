const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const src = path.resolve(__dirname, 'src')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: `${src}/development.html`,
  filename: 'index.html',
  showErrors: true,
})

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',

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
                jsx: 'react-jsxdev',
              },
            },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        include: src,
        use: [
          {
            loader: 'source-map-loader',
          },
        ],
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
  },

  plugins: [htmlWebpackPlugin, new BundleAnalyzerPlugin()],
})
