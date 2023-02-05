'use strict';

// Configuration
import path from '../config/path.js';
import app from '../config/app.js';
import plugins from '../config/plugins.js';

// Plugins
import gulp from 'gulp';
import favicons from 'gulp-favicons';
import filter from 'gulp-filter';

// Favicon Task
export const faviconsApp = () => {
	const filterFavicon = filter(['favicon.ico'], {});

	return gulp
		.src(path.favicon.src, {})
		.pipe(
			plugins.plumber({
				errorHandler: plugins.notify.onError(error => ({
					title: 'Favicons',
					message: error.message,
				})),
			}),
		)
		.pipe(gulp.dest(path.favicon.dest, {}))
		.pipe(favicons(app.favicons))
		.pipe(gulp.dest(path.favicon.dest, {}))
		.pipe(filterFavicon)
		.pipe(gulp.dest(path.root, {}));
};
