const path = require('path');
const DIST_DIR = path.join(__dirname, '../docs');
const ENTRY_FILE = path.join(__dirname, '../index.js');
const TEMPLATES_DIR = path.join(__dirname, 'templates');
const DIST_DIR_INDEX_FILE = path.join(DIST_DIR, 'index.html');
const NPM_DIST_DIR = path.join(__dirname, '../dist');
const NPM_ENTRY_FILE = path.join(__dirname, '../src');
// templates
const TEMPLATE_FILE = path.join(TEMPLATES_DIR, 'template.html');
// prod
const VENDOR_LIBS = [
  'babel-polyfill',
  'react',
  'react-dom',
];

// express
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';

module.exports = {
  ENTRY_FILE,
  VENDOR_LIBS,
  // templates
  TEMPLATE_FILE,
  // dist
  DIST_DIR,
  DIST_DIR_INDEX_FILE,
  // express
  PORT,
  HOST,
  NPM_DIST_DIR,
  NPM_ENTRY_FILE,
};
