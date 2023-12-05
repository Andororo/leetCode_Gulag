const puppeteer = require("puppeteer");

const url = "https://neetcode.io/practice/";

// This function will add a delay to the code execution (in milliseconds)
const addDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const initiatePuppeteer = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto(url);
  return { browser, page };
};

/**
 *
 * @param {*} page
 * @returns List of catorgries name and the count of the tabs
 */
const openEachTabs = async (page) => {
  //find the first intence of div class then return an array of elements
  const tabLinks = await page.$$(
    "div.tabs.is-centered.is-boxed.is-large ul.tabs-list li a.tab-link"
  );
  let categories
  for (let k = 1; k < 4; k++){
    await tabLinks[k].click();
    await page.waitForSelector("app-pattern-table");
    await page.waitForSelector(
      "button.flex-container-row.accordion.button.is-fullwidth.ng-tns-c41-1"
    );
    
    await page.waitForSelector("button.flex-container-row.accordion.button.is-fullwidth")

    // Get category count, for the first tab return 18
    const categoryArray = await page.$$eval("app-pattern-table", (categories) =>
      categories.map((category) => category.textContent)
    );
    //console.log("Array: ", categoryArray)
    
    const categoryLength = categoryArray.length;
    //console.log(categoryLength);

    //with known tabs, click and open each single one of them
    for (let i = 0; i < categoryLength; i++) {
      // wait for an element matching a given selector to appear in the page.
      // string variable (tabsSelector) that represents a CSS selector.
      const tabSelector = `button.flex-container-row.accordion.button.is-fullwidth.ng-tns-c41-${i}`;
      //wait for the element to appear on the page
      await page.waitForSelector(tabSelector);
      // use a element handle to reference a DOM to call function on
      const tabsElementHandle = await page.$(tabSelector);
      await tabsElementHandle.click();
    }

    // Extract category name
    const categories = await page.evaluate(() =>
      Array.from(
        document.querySelectorAll(
          "button.flex-container-row.accordion.button.is-fullwidth"
        ),
        (e) => e.querySelector("p").innerText
      )
    );
    console.log(categories);
  }
  return {categories};
};

//Scrape each problem title, the link, and difficulty 




(async () => {
  const { browser, page } = await initiatePuppeteer();
  await openEachTabs(page);
})();

/*
  Just in case the website changes, and the tabs are no longer in the same order, or there's a new tab, here's the code to check (hopefully it still works)
  const tabCount = (
    await page.$$(
      'div.tabs.is-centered.is-boxed.is-large ul.tabs-list li a.tab-link'
    )
  ).length;
  */

// module.exports = {
//   initiatePuppeteer,
//   scrapeCategories,
//   scrapeBlind75Problems,
//   scrapeNeetCode150Problems,
//   scrapeAllProblems,
//   saveProblemstoJSON
// }
