/**
 * create at 10/15/18
 *  configuration
 */

'use strict';

const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/// 基础配置
var path = require('path');

module.exports = {
  mode: 'development',
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  }
};

/// 多个Target 
// 导出为一个函数
// -module.exports = {
// 	+module.exports = function(env, argv) {
// 	+  return {
// 	+    mode: env.production ? 'production' : 'development',
// 	+    devtool: env.production ? 'source-maps' : 'eval',
// 			 plugins: [
// 				 new webpack.optimize.UglifyJsPlugin({
// 	+        compress: argv['optimize-minimize'] // 只有传入 -p 或 --optimize-minimize
// 				 })
// 			 ]
// 	+  };
// 	};

/// 使用其他配置语言

module.exports = config;