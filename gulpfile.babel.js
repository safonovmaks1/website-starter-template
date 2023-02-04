'use strict';

import gulp from 'gulp';

// Конфигурация
import path from './gulp/config/path.js';
import app from './gulp/config/app.js';
import plugins from './gulp/config/plugins.js';

// Tasks
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { fonts, fontsStyle } from './gulp/tasks/fonts.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';

// Public Tasks
export { reset };

// Static Server
const server = () => {
	return plugins.browserSync.init({
		server: path.root,
		logPrefix: 'DevServer',
		browser: 'google chrome',
		port: 3002,
		notify: true,
		online: true,
		cors: true,
		ui: false,
	});
};

// Watching files
const watcher = () => {
	gulp.watch(path.html.watch, html);
	gulp.watch(path.scss.watch, scss);
	gulp.watch(path.js.watch, js);
	gulp.watch(path.fonts.src, gulp.series(fonts, fontsStyle));
};

const tasks = gulp.parallel(fonts, html, scss, js);

const deployZip = gulp.series(reset, tasks, zip);
export { deployZip };

const deployFtp = gulp.series(reset, tasks, ftp);
export { deployFtp };

const build = gulp.series(reset, tasks);

const dev = gulp.series(build, fontsStyle, gulp.parallel(server, watcher));

export default app.isProd ? build : dev;
