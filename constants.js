const os = require('os');
const path = require('path');

const DIR = path.join(os.tmpdir(), 'jest_playwright_global_setup');

const CHROMIUM = 'chromium';
const FIREFOX = 'firefox';
const WEBKIT = 'webkit';

module.exports = {
    DIR: DIR,
    CHROMIUM: CHROMIUM,
    FIREFOX: FIREFOX,
    WEBKIT: WEBKIT
};
