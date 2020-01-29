const playwright = require('playwright');
const fs = require('fs');
const os = require('os');
const path = require('path');

const DIR = path.join(os.tmpdir(), 'jest_playwright_global_setup');

module.exports = async function() {
    console.log('Setup Playwright')
    const browser = await playwright['chromium'].launchBrowserApp({ webSocket: true});
    // This global is not available inside tests but only in global teardown
    global.__BROWSER_GLOBAL__ = browser;
    // Instead, we expose the connection details via file system to be used in tests
    fs.mkdirSync(DIR, { recursive: true });
    fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
}
