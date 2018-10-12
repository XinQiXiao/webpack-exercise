/**
 * create at 10/12/18
 *  入口起点
 */

'use strict';

const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * 单个入口
 */
const config = {
	entry: './path/to/my/entry/file.js',
}
// 简写
const config1 = {
	entry: {
		main: './path/to/my/entry/file.js'
	},
}

/**
 * 对象语法
 */
const configObj = {
	entry: {
		app: './src/app.js',
		vendors: './src/vendors.js'
	}
}

/**
 * 多页面应用程序
 */
const configMulti = {
	entry: {
		pageOne: './src/pageOne/index.js',
		pageTwo: './src/pageTwo/index.js',
		pageThreee: './src/pageThree/index.js',
	}
}

module.exports = config;