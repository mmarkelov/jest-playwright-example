const playwright = require('playwright');
const fs = require('fs');
const path = require('path');

const { DIR } = require('./constants');
const { checkBrowserEnv } = require('./utils');

module.exports = async function() {
    const browserType = process.env.BROWSER;
    checkBrowserEnv(browserType);
    console.log('Setup Playwright');
    const OPTIONS = { webSocket: true};
    const browser = await playwright[browserType].launchBrowserApp(OPTIONS);
    // This global is not available inside tests but only in global teardown
    global.__BROWSER_GLOBAL__ = browser;
    // Instead, we expose the connection details via file system to be used in tests
    fs.mkdirSync(DIR, { recursive: true });
    fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
}
