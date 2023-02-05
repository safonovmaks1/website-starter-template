'use strict';

// Configuration
import path from '../config/path.js';
import app from '../config/app.js';
import plugins from '../config/plugins.js';

// Plugins
import gulp from 'gulp';
import pugs from 'gulp-pug';
import webpHtml from 'gulp-webp-html';

// Pug Task
export const pug = () => {
	return gulp
		.src(path.pug.src, {})
		.pipe(
			plugins.plumber({
				errorHandler: plugins.notify.onError(error => ({
					title: 'Pug',
					message: error.message,
				})),
			}),
		)
		.pipe(plugins.newer(path.pug.dest))
		.pipe(pugs(app.pug))
		.pipe(webpHtml())
		.pipe(gulp.dest(path.pug.dest, {}))
		.pipe(plugins.browserSync.stream());
};
