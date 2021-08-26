/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const webpack = require('webpack')

module.exports = () => {
  const plugins = []
  if (process.env.analyze) {
    plugins.push(new BundleAnalyzerPlugin())
  }
  return {
    entry: './index.tsx',
    output: {
      filename: 'js/bundle.[contenthash].min.js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
      clean: true,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    context: path.resolve(__dirname, '../src'),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['ts-loader'],
        },
        {
          test: /\.(css)$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      ...plugins,
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  }
}
