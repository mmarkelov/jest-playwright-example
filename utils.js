const { CHROMIUM, FIREFOX, WEBKIT } = require('./constants');

function checkBrowserEnv(param) {
    if (param !== CHROMIUM && param !== FIREFOX && param !== WEBKIT) {
        throw new Error(`Wrong browser type. Should be one of [${CHROMIUM}, ${FIREFOX}, ${WEBKIT}], but got ${param}`)
    }
}

module.exports = {
    checkBrowserEnv: checkBrowserEnv
};
