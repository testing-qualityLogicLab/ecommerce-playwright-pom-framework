const {test, expect} = require('@playwright/test'); //impot the required libaraies
const { HomePage } = require('../pages/HomePage');

//test('TC01_LaunchApplication', async function({page})
test('@snity @regression TC01_LaunchApplication', async ({page})=>
{
      const home = new HomePage(page);
      await home.goto();
      await expect(page).toHaveTitle("Your store of fun")
});