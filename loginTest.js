const { Builder, By, until } = require('selenium-webdriver');

async function implementLoginTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://www.example.com/login-page');

        let username = await driver.wait(
            until.elementLocated(By.id('username')),
            10000
        );
        await username.sendKeys('testuser');

        let password = await driver.wait(
            until.elementLocated(By.id('password')),
            10000
        );
        await password.sendKeys('password123');

        let loginBtn = await driver.wait(
            until.elementLocated(By.id('loginBtn')),
            10000
        );
        await loginBtn.click();

        await driver.wait(
            until.elementLocated(By.xpath("//*[contains(text(),'Welcome')]")),
            10000
        );

        console.log("  Login Test Passed");

    } catch (error) {
        console.error(" Login Test Failed:", error);
    } finally {
        await driver.quit();
    }
}

implementLoginTest();
