'use strict';

// Configuration
import path from '../config/path.js';

// Plugins
import { deleteAsync } from 'del';

// Deleting a directory
export const reset = () => {
	return deleteAsync(path.root, { force: true });
};
