// myModule.test.js
const {
    initiatePuppeteer,
    scrapeBlind75,
    scrapeNeetCode150,
    scrapeAllProblems
} = require("../webscraper/webscrape")
const puppeteerSetup = require("puppeteer")

let page, browser

beforeAll(async () => {
    const puppeteerSetup = await initiatePuppeteer();
    browser = puppeteerSetup.browser;
    page = puppeteerSetup.page;
});

afterAll(async () => {
    await browser.close()
})

test("Scrape Blind 75 Problems returns expected problems count", async () => {
    const problems = await scrapeBlind75(page);
    expect(problems.length).toBe(75);
  })


test("Scrape Neetcode 150 Problems returns expected problems count", async () => {
const problems = await scrapeNeetCode150(page);
expect(problems.length).toBe(150);
})

test("Scrape Neetcode All Problems returns expected problems count", async () => {
const problems = await scrapeAllProblems(page);
expect(problems.length).toBe(450);
})


