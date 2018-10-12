/**
 * create at 10/12/18
 *  输出
 */

'use strict';

const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * 用法
 */
const config = {
	output: {
		filename: 'bundle.js',
		path: '/home/proj/public/assets'
	}
}

/**
 * 多个入口起点
 */
const multiConfig = {
	entry: {
		app: './src/app.js',
		search: './src/search.js'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist',
	}
}

/**
 * 高级进阶
 */
const highConfig = {
	output: {
		path: "/home/proj/cdn/assets/[hash]",
		publicPath: "http://cdn.example.com/assets/[hash]/"
	}
}
__webpack_public_path__ = myRuntimePublicPath

module.exports = config;