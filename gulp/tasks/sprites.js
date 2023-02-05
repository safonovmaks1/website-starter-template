'use strict';

// Configuration
import path from '../config/path.js';
import app from '../config/app.js';
import plugins from '../config/plugins.js';

// Plugins
import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import svgo from 'gulp-svgo';

// svgSprites Task
export const sprites = () => {
	return gulp
		.src(path.icons.src, {})
		.pipe(
			plugins.plumber({
				errorHandler: plugins.notify.onError(error => ({
					title: 'Sprites',
					message: error.message,
				})),
			}),
		)
		.pipe(svgo(app.svgo))
		.pipe(svgSprite(app.svgsprite))
		.pipe(gulp.dest(path.images.dest, {}))
		.pipe(plugins.browserSync.stream());
};
