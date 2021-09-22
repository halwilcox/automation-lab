const { Builder, Capabilities, By } = require('selenium-webdriver')


require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://localhost:5500/exercises/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Adding a movie to the page', async () => {
    await driver.sleep(2000)
    let searchBar = await driver.findElement(By.name('Input'))

    await searchBar.sendKeys('Night at the Roxberry\n')

    let button = await driver.findElement(By.name('button'))
    await button.click()

})
