var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH　= path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'index.jsx')
	},
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	// babel 重要的loader都在这里
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				include: APP_PATH,
				query: {
					// 添加两个presents 使用这两种present处理js或jsx文件
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'my first react app'
		})
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}