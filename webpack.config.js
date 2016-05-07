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
			{test: /\.less/, loader: 'style!css!autoprefixer!less?modules'},
			{test: /\.(html|tpl)$/, loader: 'html-loader'},
			{test: /\.js$/, loader: 'babel', exclude: /node_modules/}
		]
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
		extensions: ['', '.js', '.less', '.html']
	},
	devtool: '#source-map'
};
