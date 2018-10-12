'use strict';

const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: './path/to/my/entry/file.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'my-first-webpack.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.txt$/,
				use: 'raw-loader',
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: './src/index.html'})
	],
	mode: 'development' // production development
}

module.exports = config;