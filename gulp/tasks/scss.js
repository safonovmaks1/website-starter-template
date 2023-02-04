'use strict';

// Конфигурация
import path from '../config/path.js';
import app from '../config/app.js';
import plugins from '../config/plugins.js';

// Plugins
import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';
import shorthand from 'gulp-shorthand';
import webpCss from 'gulp-webpcss';

const sass = gulpSass(dartSass);

// Scss Task
export const scss = () => {
	return (
		gulp
			.src(path.scss.src, { sourcemaps: app.isDev })
			.pipe(
				plugins.plumber({
					errorHandler: plugins.notify.onError((error) => ({
						title: 'Scss',
						message: error.message,
					})),
				})
			)
			.pipe(sass({ includePaths: ['node_modules'] }))
			.pipe(shorthand())
			.pipe(groupCssMediaQueries())
			.pipe(
				webpCss({
					webpClass: '.webp',
					noWebpClass: '.no-webp',
				})
			)
			.pipe(autoprefixer(app.autoprefixer))
			// Раскомментировать если нужен не сжатый дубль файла стилей
			// .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
			.pipe(plugins.gulpif(app.isProd, cleanCSS(app.cleancss)))
			.pipe(plugins.gulpif(app.isProd, plugins.rename({ suffix: '.min' })))
			.pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
			.pipe(plugins.browserSync.stream())
	);
};
