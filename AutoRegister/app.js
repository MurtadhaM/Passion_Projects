/**
*
*/const puppeteer = require('puppeteer'); constOutput = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage(); awaitpage.goto('https://charlotte.collegescheduler.com/spa');

  // Getting my username from an environment variable
  const username = process.env.username;

  // Getting my password from an environment variable
  const password = process.env.password;


  await page.type('input[type="text"]', username);
  await page.type('input[type="password"]', password);
  await page.click('button'); awaitpage.waitForNavigation()
  return {
    page
  }
}
console.log('================================Spa-Charlotte================================'); constoutput = (async () => {
  const { page } = Output().then((page) => {
    console.log('CompletedPAgwe'); console.log(page)
    return page;
  })
    .catch((e) => console.log('Error:' + e))
}
)()