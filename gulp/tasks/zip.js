'use strict';

// Configuration
import path from '../config/path.js';
import plugins from '../config/plugins.js';

// Plugins
import gulp from 'gulp';
import { deleteAsync } from 'del';
import zipPlugin from 'gulp-zip';

// Zip Task
export const zip = () => {
	deleteAsync(`./${path.rootFolder}.zip`, { force: true });

	return gulp
		.src(`${path.root}/**/*.*`, { dot: true })
		.pipe(
			plugins.plumber({
				errorHandler: plugins.notify.onError(error => ({
					title: 'Zip',
					message: error.message,
				})),
			}),
		)
		.pipe(
			plugins.size({
				title: 'Zip',
				pretty: 'true',
				gzip: 'true',
				showFiles: 'true',
				showTotal: 'true',
			}),
		)
		.pipe(zipPlugin(`${path.rootFolder}.zip`))
		.pipe(gulp.dest('./', {}));
};
