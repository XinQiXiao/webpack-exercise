/**
 * create at 10/12/18
 *  loader
 */

'use strict';

const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * 实例
 */
const config = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: 'css-loader'
			},
			{
				test: /\.ts$/,
				use: 'ts-loader'
			},
		]
	}
}

/**
 * 使用loader
 * 配置， 内联， CLI
 */
// 配置
const configLoader1 = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							modules: true,
						}
					}
				]
			}
		]
	}
}
// 内联
import Styles from 'style-loader!css-loader?modules!./styles.css'
// CLI
// webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'

module.exports = config;