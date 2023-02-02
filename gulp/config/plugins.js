'use strict';

import browserSync from 'browser-sync';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import size from 'gulp-size';
import replace from 'gulp-replace';
import rename from 'gulp-rename';
import newer from 'gulp-newer';

export default {
	browserSync: browserSync,
	gulpif: gulpif,
	plumber: plumber,
	notify: notify,
	size: size,
	replace: replace,
	rename: rename,
	newer: newer,
};
