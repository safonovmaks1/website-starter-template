'use strict';

// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// Project Folder
const sourceFolder = 'src';
const projectFolder = 'build';
// const projectFolder = rootFolder;
// const projectFolder = `/Applications/MAMP/htdocs/${rootFolder}`;

export default {
	root: projectFolder,
	rootFolder: rootFolder,

	html: {
		src: `${sourceFolder}/*.html`,
		watch: `${sourceFolder}/**/*.html`,
		dest: projectFolder,
	},
	pug: {},
	scss: {
		src: `${sourceFolder}/scss/*.scss`,
		watch: `${sourceFolder}/scss/**/*.scss`,
		dest: `${projectFolder}/css`,
	},
	js: {
		src: `${sourceFolder}/js/*.js`,
		watch: `${sourceFolder}/js/**/*.js`,
		dest: `${projectFolder}/js`,
	},
	fonts: {
		src: `${sourceFolder}/assets/fonts/**/*.ttf`,
		dest: `${projectFolder}/fonts`,
		scss: `${sourceFolder}/scss/fonts/_fonts.scss`,
	},
	icons: {},
	images: {},
	favicon: {},
	files: {},
};
