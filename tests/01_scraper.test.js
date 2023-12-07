// myModule.test.js
const {
    initiatePuppeteer,
    scrapeBlind75,
    scrapeNeetCode150,
    scrapeAllProblems,
    saveFileToJson
} = require("../webscraper/webscrape")
const puppeteerSetup = require("puppeteer")
const fs = require('fs');
const path = require("path");
const JSONStream = require('JSONStream');

let page, browser
const testDirectory = '../testDir'
const leetcodeDir = '../leetcode_problems'

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


// //WHY DON"T THIS SHT WORK
test("Should save Blind 75 problems to JSON file", async () => {
    const problems = await scrapeBlind75(page);
    saveFileToJson("Blind75Problems.json", testDirectory, problems);

    // Define paths for files to be compared
    const filePath1 = path.join(__dirname, `${testDirectory}/Blind75Problems.json`);
    const filePath2 = path.join(__dirname, '../leetcode_problems/Blind75.json');

    // Ensure the directory exists before reading the file
    if (!fs.existsSync(path.dirname(filePath1))) {
        // Create the directory if it doesn't exist
        fs.mkdirSync(path.dirname(filePath1), { recursive: true });
    }

    // Compare parsed data
    try {
        const stream1 = fs.createReadStream(filePath1, 'utf-8').pipe(JSONStream.parse('*'));
        const stream2 = fs.createReadStream(filePath2, 'utf-8').pipe(JSONStream.parse('*'));

        // Arrays to store parsed data
        const parsedData1 = [];
        const parsedData2 = [];

        // Event handler for data events
        stream1.on('data', function (data1) {
            parsedData1.push(data1);
        });

        stream2.on('data', function (data2) {
            parsedData2.push(data2);
        });

        // Event handler for end event
        stream1.on('end', function () {
            // Use deep equality check
            expect(parsedData1).toEqual(parsedData2);
        });
    } catch (error) {
        console.error('Error parsing JSON:', error);
        // Handle the error, e.g., by failing the test or logging details
    }
  })



test("Should save neetcode150 problems to JSON file", async () => {
    const problems = await scrapeNeetCode150(page);
    saveFileToJson("neetcode150Problems.json", testDirectory, problems);

    // Define paths for files to be compared
    const filePath1 = path.join(__dirname, `${testDirectory}/neetcode150Problems.json`);
    const filePath2 = path.join(__dirname, '../leetcode_problems/neetcode150.json');

    // Ensure the directory exists before reading the file
    if (!fs.existsSync(path.dirname(filePath1))) {
        // Create the directory if it doesn't exist
        fs.mkdirSync(path.dirname(filePath1), { recursive: true });
    }

    // Compare parsed data
    try {
        const stream1 = fs.createReadStream(filePath1, 'utf-8').pipe(JSONStream.parse('*'));
        const stream2 = fs.createReadStream(filePath2, 'utf-8').pipe(JSONStream.parse('*'));

        // Arrays to store parsed data
        const parsedData1 = [];
        const parsedData2 = [];

        // Event handler for data events
        stream1.on('data', function (data1) {
            parsedData1.push(data1);
        });

        stream2.on('data', function (data2) {
            parsedData2.push(data2);
        });

        // Event handler for end event
        stream1.on('end', function () {
            // Use deep equality check
            expect(parsedData1).toEqual(parsedData2);
        });
    } catch (error) {
        console.error('Error parsing JSON:', error);
        // Handle the error, e.g., by failing the test or logging details
    }
  })


  test("Should save all problems to JSON file", async () => {
    const problems = await scrapeAllProblems(page);
    saveFileToJson("allProblems.json", testDirectory, problems);

    // Define paths for files to be compared
    const filePath1 = path.join(__dirname, `${testDirectory}/allProblems.json`);
    const filePath2 = path.join(__dirname, '../leetcode_problems/allProblem.json');

    // Ensure the directory exists before reading the file
    if (!fs.existsSync(path.dirname(filePath1))) {
        // Create the directory if it doesn't exist
        fs.mkdirSync(path.dirname(filePath1), { recursive: true });
    }

    // Compare parsed data
    try {
        const stream1 = fs.createReadStream(filePath1, 'utf-8').pipe(JSONStream.parse('*'));
        const stream2 = fs.createReadStream(filePath2, 'utf-8').pipe(JSONStream.parse('*'));

        // Arrays to store parsed data
        const parsedData1 = [];
        const parsedData2 = [];

        // Event handler for data events
        stream1.on('data', function (data1) {
            parsedData1.push(data1);
        });

        stream2.on('data', function (data2) {
            parsedData2.push(data2);
        });

        // Event handler for end event
        stream1.on('end', function () {
            // Use deep equality check
            expect(parsedData1).toEqual(parsedData2);
        });
    } catch (error) {
        console.error('Error parsing JSON:', error);
        // Handle the error, e.g., by failing the test or logging details
    }
  })




