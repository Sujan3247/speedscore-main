const { test, expect } = require('@playwright/test');

async function login(page) {
    await page.goto('http://localhost:3000');

    // Ensure the login form is fully loaded before interacting
    await page.waitForSelector('input#email', { timeout: 10000 });

    // Fill in login credentials
    await page.fill('input#email', 'user@ss.org');
    await page.fill('input#password', 'Speedgolf1');
    await page.click('button#loginBtn');

    // Ensure the navigation happens after login
    await page.waitForSelector('#menuBtn', { timeout: 10000 });
}

test.describe('About Box Tests', () => {
    test.beforeEach(async ({ page }) => {
        await login(page); // Ensure login before running tests

        // Open the side menu
        await page.waitForSelector('#menuBtn', { timeout: 10000 });
        await page.click('#menuBtn');

        // Wait for the side menu to fully open
        await page.waitForSelector('#sideMenu', { timeout: 10000 });
    });

    test('About Box appears when clicking "About"', async ({ page }) => {
        // Click the "About" menu item
        await page.click('li[role="menuitem"]:has-text("About")');

        // Ensure modal appears
        await page.waitForSelector('#aboutSpeedScore', { timeout: 10000 });

        // Check if the modal is visible
        await expect(page.locator('#aboutSpeedScore')).toBeVisible();
    });

    test('About Box closes when clicking "X" button', async ({ page }) => {
        // Open About Box
        await page.click('li[role="menuitem"]:has-text("About")');
        await page.waitForSelector('#aboutSpeedScore', { timeout: 10000 });

        // Click the close button (X)
        await page.click('.close-about-btn');

        // Ensure the modal is now hidden
        await expect(page.locator('#aboutSpeedScore')).not.toBeVisible();
    });

    test('About Box closes when clicking "OK" button', async ({ page }) => {
        // Open About Box
        await page.click('li[role="menuitem"]:has-text("About")');
        await page.waitForSelector('#aboutSpeedScore', { timeout: 10000 });

        // Click the OK button (same class as close button)
        await page.click('.close-about-btn');

        // Ensure the modal is now hidden
        await expect(page.locator('#aboutSpeedScore')).not.toBeVisible();
    });
});
