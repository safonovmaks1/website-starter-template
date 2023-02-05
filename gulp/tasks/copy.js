'use strict';

// Configuration
import path from '../config/path.js';
import plugins from '../config/plugins.js';

// Plugins
import gulp from 'gulp';

// Task Copy
export const copy = () => {
	return gulp
		.src(path.files.src, { dot: true })
		.pipe(gulp.dest(path.files.dest, {}))
		.pipe(plugins.browserSync.stream());
};
