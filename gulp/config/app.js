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

	pug: {
		pretty: isDev,
		data: {},
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

	favicons: {
		icons: {
			favicons: true,
			appleIcon: true,
			android: true,
			windows: false,
			yandex: false,
			coast: false,
			firefox: false,
			appleStartup: false,
		},
		appName: 'My App',
		appShortName: 'App',
		appDescription: 'This is my application',
		path: 'images/favicons/',
		lang: 'ru-RU',
	},

	svgo: {
		plugins: [
			{
				removeAttrs: {
					attrs: '(fill.*|stroke.*|style|width|height|data.*)',
				},
			},
		],
	},

	svgsprite: {
		mode: {
			stack: {
				sprite: '../sprite.svg',
				// Создавать страницу c перечнем иконок
				// example: true
			},
		},
	},
};
