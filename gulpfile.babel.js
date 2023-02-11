'use strict';

import gulp from 'gulp';

// Конфигурация
import path from './gulp/config/path.js';
import app from './gulp/config/app.js';
import plugins from './gulp/config/plugins.js';

// Tasks
import { reset } from './gulp/tasks/reset.js';
import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { pug } from './gulp/tasks/pug.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { sprites } from './gulp/tasks/sprites.js';
import { fonts, fontsStyle } from './gulp/tasks/fonts.js';
import { faviconsApp } from './gulp/tasks/faviconsApp.js';
import { seo } from './gulp/tasks/seo.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';

// Public Tasks
export { reset, seo };

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
	gulp.watch(path.files.src, copy);
	gulp.watch(path.html.watch, html);
	gulp.watch(path.pug.watch, pug);
	gulp.watch(path.scss.watch, scss);
	gulp.watch(path.js.watch, js);
	gulp.watch(path.images.watch, images);
	gulp.watch(path.icons.src, sprites);
	gulp.watch(path.fonts.src, gulp.series(fonts, fontsStyle));
};

const tasks = gulp.parallel(fonts, html, pug, scss, js, images, sprites, faviconsApp, copy);

const deployZip = gulp.series(reset, tasks, zip);
export { deployZip };

const deployFtp = gulp.series(reset, tasks, ftp);
export { deployFtp };

const build = gulp.series(reset, tasks);

const dev = gulp.series(build, fontsStyle, gulp.parallel(server, watcher));

export default app.isProd ? build : dev;
