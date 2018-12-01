const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		filename: './bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: 'babel-loader',
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: true,
		}),
	],
};