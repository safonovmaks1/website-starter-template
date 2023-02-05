'use strict';

// Configuration
import path from '../config/path.js';
import app from '../config/app.js';
import plugins from '../config/plugins.js';

// Plugins
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

// Images Task
export const images = () => {
	return gulp
		.src(path.images.src, {})
		.pipe(
			plugins.plumber({
				errorHandler: plugins.notify.onError(error => ({
					title: 'Images',
					message: error.message,
				})),
			}),
		)
		.pipe(plugins.newer(path.images.dest))
		.pipe(webp(app.webp))
		.pipe(gulp.dest(path.images.dest, {}))
		.pipe(gulp.src(path.images.src, {}))
		.pipe(plugins.newer(path.images.dest))
		.pipe(plugins.gulpif(app.isProd, imagemin(app.imagemin)))
		.pipe(gulp.dest(path.images.dest, {}))
		.pipe(plugins.browserSync.stream());
};
