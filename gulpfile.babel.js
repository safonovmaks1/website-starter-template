'use strict';

import gulp from 'gulp';

// Конфигурация
import path from './gulp/config/path.js';
import app from './gulp/config/app.js';
import plugins from './gulp/config/plugins.js';

// Tasks
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';

// Public Tasks
export { reset };

// Static Server
const server = () => {
	return plugins.browserSync.init({
		server: path.root,
		logPrefix: 'DevServer',
		browser: 'google chrome',
		// browser: 'chrome',
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
};

const tasks = gulp.parallel(html);

const build = gulp.series(reset, tasks);

const dev = gulp.series(build, gulp.parallel(server, watcher));

export default app.isProd ? build : dev;
