const timeout = 5000;

describe(
    'Webkit',
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
            const browser = await page.$eval('.string-major', el => el.innerText);
            expect(browser).toContain('Webkit')
        })
    },
    timeout
);
