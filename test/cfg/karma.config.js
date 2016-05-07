var webpack = require('karma-webpack');

module.exports = function (config) {
	config.set({
		basePath: '../../',
		frameworks: ['jasmine'],
		files: [
			'test/unit/**/*-Spec.js'
		],
		preprocessors: {
			'test/unit/**/*-Spec.js': ['webpack'],
			'src/app/**/*.js': ['webpack', 'coverage']
		},

		plugins: [
			webpack,
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-coverage'
		],
		browsers: ['Chrome'],
		reporters: ['coverage'],
		coverageReporter: {
			dir: 'build/reports/coverage',
			reporters: [
				{type: 'html', subdir: 'report-html'}/*,
				{type: 'lcov', subdir: 'report-lcov'},
				{type: 'cobertura', subdir: '.', file: 'cobertura.txt'}*/
			]
		},
		webpack: {
			devtool: '#source-map',
			module: {
				loaders: [
					{test: /\.less/, loader: 'style!css!autoprefixer!less?modules'},
					{test: /\.(html|tpl)$/, loader: 'html-loader'},
					{test: /\.js$/, loader: 'babel', exclude: /node_modules/}
				],
				postLoaders: [{
					test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components|tests)/,
					loader: 'istanbul-instrumenter'
				}]
			}
		},
		webpackMiddleware: {noInfo: true}
	});
};
