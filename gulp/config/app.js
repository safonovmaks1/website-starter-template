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
};
