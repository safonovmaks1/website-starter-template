'use strict';

// Configuration
import path from '../config/path.js';
import plugins from '../config/plugins.js';

// Plugins
import gulp from 'gulp';
import fs from 'fs';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';

// Fonts Task
export const fonts = () => {
	gulp
		.src(path.fonts.src, {})
		.pipe(
			plugins.plumber({
				errorHandler: plugins.notify.onError(error => ({
					title: 'Fonts',
					message: error.message,
				})),
			}),
		)
		// Раскомментировать если нужен формат woff
		.pipe(ttf2woff())
		.pipe(gulp.dest(path.fonts.dest, {}));
	return gulp
		.src(path.fonts.src, {})
		.pipe(ttf2woff2())
		.pipe(gulp.dest(path.fonts.dest, {}))
		.pipe(plugins.browserSync.stream());
};

export const fontsStyle = done => {
	let scssFonts = path.fonts.scss;
	let distFonts = path.fonts.dest;

	const checkWeight = fontname => {
		let weight = 400;
		switch (true) {
			case /Thin/.test(fontname):
				weight = 100;
				break;
			case /ExtraLight/.test(fontname):
				weight = 200;
				break;
			case /Light/.test(fontname):
				weight = 300;
				break;
			case /Regular/.test(fontname):
				weight = 400;
				break;
			case /Medium/.test(fontname):
				weight = 500;
				break;
			case /SemiBold/.test(fontname):
				weight = 600;
				break;
			case /Semi/.test(fontname):
				weight = 600;
				break;
			case /Bold/.test(fontname):
				weight = 700;
				break;
			case /Heavy/.test(fontname):
				weight = 700;
				break;
			case /ExtraBold/.test(fontname):
				weight = 800;
				break;
			case /Black/.test(fontname):
				weight = 900;
				break;
			default:
				weight = 400;
		}
		return weight;
	};

	let fileContent = fs.readFileSync(scssFonts);
	function cb() {}

	fs.writeFile(scssFonts, '', cb);
	fs.readdir(distFonts, function (err, items) {
		if (items) {
			fs.appendFile(scssFonts, `@use 'abstracts/mixins' as *;\r\n`, cb);

			let cFontname;
			for (let i = 0; i < items.length; i++) {
				let fontname = items[i].split('.');
				fontname = fontname[0];
				let font = fontname.split('-')[0];
				let weight = checkWeight(fontname);

				if (cFontname != fontname) {
					fs.appendFile(scssFonts, `@include font-face('${font}', '${fontname}', ${weight});\r\n`, cb);
				}
				cFontname = fontname;
			}
		}
	});
	done();
};
