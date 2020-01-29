const rimraf = require('rimraf');
const os = require('os');
const path = require('path');

const DIR = path.join(os.tmpdir(), 'jest_playwright_global_setup');

module.exports = async function() {
    console.log('Teardown Playwright');
    await global.__BROWSER_GLOBAL__.close();
    rimraf.sync(DIR);
}
