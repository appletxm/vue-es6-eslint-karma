module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: './',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			//'node_modules/vue/dist/vue.js',
			//'src/app/**/*.js',
			//'test/unit/**/*-spec.js'
			{ pattern: './test/unit/test-context.js'}
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'app/**/*Spec.js': ['webpack', 'sourcemap'],
			'app/**/*(!Spec).js': ['webpack', 'sourcemap', 'coverage']
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['coverage'],
		singleRun: true,
		coverageReporter: {
			reporters: [
				{type: 'text-summary'},
				{type: 'html', dir: 'coverage/'}
			]
		},

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,

		webpack: {
			devtool: 'inline-source-map',
			module: {
				preLoaders: [
					{test: /\.js$/, exclude: [/node_modules/,/-spec\.js$/], loader: 'isparta-instrumenter'}
				],
				loaders: [
					/*{test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel'},
					{test: /\.html/, loader: 'raw'},
					{test: /\.styl$/, loader: 'style!css!stylus'},
					{test: /\.css$/, loader: 'style!css'}*/

					{test: /\.less/, loader: 'style!css!autoprefixer!less?modules'},
					{test: /\.(html|tpl)$/, loader: 'html-loader'},
					{test: /\.js$/, loader: 'babel', exclude: /node_modules/}
				]
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
			}
		},
		webpackServer: {
			noInfo: true // prevent console spamming when running in Karma!
		},
		plugins: [
			'karma-chrome-launcher',
			//'karma-chai',
			//'karma-mocha',
			'karma-jasmine',
			'karma-webpack',
			'karma-sourcemap-loader',
			'karma-coverage'/*,
			'karma-mocha-reporter'*/
		]
	})
};