const NodeEnvironment = require('jest-environment-node');
const playwright = require('playwright');
const fs = require('fs');
const path = require('path');

const { DIR } = require('./constants');

class PuppeteerEnvironment extends NodeEnvironment {
    constructor(config) {
        super(config)
    }

    async setup() {
        console.log('Setup Test Environment.');
        await super.setup();
        const wsEndpoint = fs.readFileSync(path.join(DIR, 'wsEndpoint'), 'utf8');
        if (!wsEndpoint) {
            throw new Error('wsEndpoint not found')
        }
        const browserType = process.env.BROWSER;
        this.global.__BROWSER__ = await playwright[browserType].connect({
            browserWSEndpoint: wsEndpoint,
        })
    }

    async teardown() {
        console.log('Teardown Test Environment.');
        await super.teardown()
    }

    runScript(script) {
        return super.runScript(script)
    }
}

module.exports = PuppeteerEnvironment;
