const Nightwatch = require("nightwatch");

const client = Nightwatch.createClient({
  headless: true,
  output: true,
  silent: false, // set to false to enable verbose logging
  browserName: "chrome", // can be either: firefox, chrome, safari, or edge
  timeout: 1000,
  env: null,
  desiredCapabilities: {},
  globals: {},
  parallel: false,
  disable_colors: false,
  abortOnElementLocateError: true,
});

async function run() {
  const browser = await client.launchBrowser();
  await browser.url("https://www.google.com");
  await browser.click("#non-existing-element");
  await browser.error();
  await browser.url("https://www.google.com");
  console.log("test finished successfully");
  await browser.quit();
}

run();
