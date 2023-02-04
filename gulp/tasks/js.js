'use strict';

// Configuration
import path from '../config/path.js';
import app from '../config/app.js';
import plugins from '../config/plugins.js';

// Plugins
import gulp from 'gulp';
import babel from 'gulp-babel';
import webpackStream from 'webpack-stream';

// javaScript Task
export const js = () => {
	return gulp
		.src(path.js.src, { sourcemaps: app.isDev })
		.pipe(
			plugins.plumber({
				errorHandler: plugins.notify.onError(error => ({
					title: 'JavaScript',
					message: error.message,
				})),
			}),
		)
		.pipe(babel())
		.pipe(webpackStream(app.webpack))
		.pipe(plugins.gulpif(app.isProd, plugins.rename({ suffix: '.min' })))
		.pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }))
		.pipe(plugins.browserSync.stream());
};
