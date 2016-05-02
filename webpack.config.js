var path = require('path');

module.exports = {
	entry: {
		main: './src/app/main.js'
	},
	output: {
		path: path.join(__dirname, './src/dist/'),
		filename: '[name].js',
		publicPath: './src/dist/'
	},
	module: {
		preLoaders: [
			{test: /\.js$/, loader: 'eslint-loader', exclued: /node_modules/}
		],

		loaders: [
			/*//{ test: /\.vue$/, loader: 'vue' },
			{test: /\.js$/, loader: 'babel', exclude: /node_modules/},
			{ test: /\.css$/, loader: 'style!css!autoprefixer'},
			{test: /\.less/, loader: 'style!css!autoprefixer!less'},
			{test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
			{test: /\.(html|tpl)$/, loader: 'html-loader'},*/

			{test: /\.less/, loader: 'style!css!autoprefixer!less?modules'},
			{test: /\.(html|tpl)$/, loader: 'html-loader'},
			//{test: /\.html$/, loader: 'babel!es6-template-string'},
			{test: /\.js$/, loader: 'babel', exclude: /node_modules/}
		]
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		extensions: ['', '.js', '.less', '.html'],
		alias: {
			nodeModels: path.join(__dirname, './node_modules'),
			models: path.join(__dirname, './src/app/models'),
			filter: path.join(__dirname, './src/app/filters'),
			views: path.join(__dirname, './src/app/views'),
			components: path.join(__dirname, './src/app/components')
		}
	},
	devtool: '#source-map'
};
