const path = require('path'),
      webpack = require('webpack'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({ filename: './css/app.css' });

const config = {

context: path.resolve(__dirname, 'src'),

  entry: {
    app: './App.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/bundle.js'
  },

  module: {
    rules: [

      { test: /\.js$/, include: /src/, exclude: /node_modules/, use: { loader: "babel-loader", options: { presets: ['env', 'es2015', 'react'] } } },
      { test: /\.jsx$/, include: /src/, exclude: /node_modules/, use: { loader: "babel-loader", options: { presets: ['env', 'es2015', 'react'] } } },
      
      { test: /\.html$/, use: ['html-loader'] },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src', 'scss')],
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    extractPlugin
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 2000,
    stats: 'errors-only',
    open: true
  },

  devtool: 'inline-source-map'

};

module.exports = config;
