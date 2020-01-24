const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './lib/index.tsx',
	output: {
		path: path.join(__dirname, '/dist'),
		library: 'fiora-ui-react',
		libraryTarget: 'umd'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
			{
				test: /\.scss/,
				use: [
					'style-loader', // 将 JS 字符串生成为 style 节点
					'css-loader', // 将 CSS 转化成 CommonJS 模块
					'sass-loader' // 将 Sass 编译成 CSS，默认使用 Node Sass
				]
			},
			{
				test: /\.(jpg|png|gif|bmp|jpeg)$/,//正则表达式匹配图片规则
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 500,
							name: 'images/[name]-[hash:8].[ext]',
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new CheckerPlugin(),
		new CleanWebpackPlugin()
	]
};
