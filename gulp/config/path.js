'use strict';

// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// Project Folder
const sourceFolder = 'src';
const projectFolder = 'build';
// const projectFolder = rootFolder;
// const projectFolder = '/Applications/MAMP/htdocs/test';

export default {
	root: projectFolder,

	html: {},
	pug: {},
	scss: {},
	js: {},
	fonts: {},
	icons: {},
	images: {},
	favicon: {},
	files: {},
};
