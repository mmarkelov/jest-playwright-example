const timeout = 5000;

describe(
    'Firefox',
    () => {
        let page;
        beforeAll(async () => {
            const context = await global.__BROWSER__.newContext();
            page = await context.newPage();
            await page.goto('https://whatismybrowser.com/')
        }, timeout);

        afterAll(async () => {
            await page.close()
        });

        it('should load without error', async () => {
            const browser = await page.$eval('.string-major a', el => el.text);
            expect(browser).toContain('Firefox')
        })
    },
    timeout
);
