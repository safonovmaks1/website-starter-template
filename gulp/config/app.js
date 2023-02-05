'use strict';

const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
	isProd: isProd,
	isDev: isDev,

	fileinclude: {
		prefix: '@@',
		basepath: '@file',
	},

	htmlmin: {
		collapseWhitespace: isProd,
		removeComments: isProd,
		removeEmptyAttributes: isProd,
		removeScriptTypeAttributes: isProd,
		removeStyleLinkTypeAttributes: isProd,
	},

	autoprefixer: {
		grid: true,
		cascade: true,
	},

	cleancss: {
		level: 2,
	},

	webpack: {
		mode: isProd ? 'production' : 'development',
		devtool: false,
		output: {
			filename: 'app.js',
		},
	},

	imagemin: {
		progressive: true,
		svgoPlugins: [
			{
				removeViewBox: false,
			},
		],
		interlaced: true,
		optimizationLevel: 3,
		verbose: true,
	},

	webp: {
		quality: isDev ? 100 : 60,
	},
};
