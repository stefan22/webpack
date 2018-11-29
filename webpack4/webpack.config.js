const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// wp rules
const webpackRules = [];

// wp config
const webpackConfig = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: webpackRules,
  }, //module
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'webpack 4...',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
};

//loaders
let babelLoader = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
};

let allStyles = {
   test: /\.scss$/,
   use: [
      {
        loader: "style-loader"
      },
      {
        loader: "css-loader", options: {
         sourceMap: true
      }
      },
      {
        loader: "sass-loader",
          options: {
             sourceMap: true
        },
      }
   ],
};

webpackRules.push(allStyles);
webpackRules.push(babelLoader);

module.exports = webpackConfig;