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
	pug: {
		src: `${sourceFolder}/*.pug`,
		watch: `${sourceFolder}/**/*.pug`,
		dest: projectFolder,
	},
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
	images: {
		src: `${sourceFolder}/assets/images/**/*.{png,jpg,jpeg,gif,svg}`,
		watch: `${sourceFolder}/assets/images/**/*.{png,jpg,jpeg,gif,svg}`,
		dest: `${projectFolder}/images/`,
	},
	icons: {
		src: `${sourceFolder}/assets/icons/**/*.svg`,
	},
	favicon: {
		src: `${sourceFolder}/assets/favicons/favicon.svg`,
		dest: `${projectFolder}/images/favicons`,
	},
	files: {
		src: `${sourceFolder}/assets/files/**/*.*`,
		dest: `${projectFolder}/files/`,
	},
	seo: {
		dest: projectFolder,
	},
};
