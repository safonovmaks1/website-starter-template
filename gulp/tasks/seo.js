'use strict';

// Configuration
import path from '../config/path.js';

// Plugins
import fs from 'fs';

// add seo files
export const seo = cb => {
	let seoPath = path.seo.dest;

	fs.writeFile(`${seoPath}/.htaccess`, ``, cb);

	fs.writeFile(`${seoPath}/robots.txt`, ``, cb);
	fs.appendFile(`${seoPath}/robots.txt`, `User-agent: *\r\n`, cb);
	fs.appendFile(`${seoPath}/robots.txt`, `Disallow: /\r\n`, cb);

	return;
};
