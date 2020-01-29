const timeout = 5000;

describe(
    'Test',
    () => {
        let page;
        beforeAll(async () => {
            const context = await global.__BROWSER__.newContext();
            page = await context.newPage();
            await page.goto('https://google.com')
        }, timeout);

        afterAll(async () => {
            await page.close()
        });

        it('should load without error', async () => {
            const text = await page.title();
            expect(text).toBe('Google')
        })
    },
    timeout
);
