'use strict';

// Configuration
import path from '../config/path.js';
import app from '../config/app.js';
import plugins from '../config/plugins.js';

// Plugins
import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import webpHtml from 'gulp-webp-html';

// Html Task
export const html = () => {
	return gulp
		.src(path.html.src, {})
		.pipe(
			plugins.plumber({
				errorHandler: plugins.notify.onError(error => ({
					title: 'Html',
					message: error.message,
				})),
			}),
		)
		.pipe(plugins.newer(path.html.dest))
		.pipe(fileinclude(app.fileinclude))
		.pipe(webpHtml())
		.pipe(plugins.gulpif(app.isProd, plugins.replace('.css', '.min.css')))
		.pipe(plugins.gulpif(app.isProd, plugins.replace('.js', '.min.js')))
		.pipe(htmlmin(app.htmlmin))
		.pipe(gulp.dest(path.html.dest, {}))
		.pipe(plugins.browserSync.stream());
};
