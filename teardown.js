const rimraf = require('rimraf');

const { DIR } = require('./constants');

module.exports = async function() {
    console.log('Teardown Playwright');
    await global.__BROWSER_GLOBAL__.close();
    rimraf.sync(DIR);
}
