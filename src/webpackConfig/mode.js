/**
 * create at 10/12/18
 *  模式
 */

'use strict';

const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * 用法
 */
const config = {
	mode: 'production'
}
// cli
'webpack --mode=production'


module.exports = config;