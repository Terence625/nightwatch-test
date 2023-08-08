import { NightwatchTests } from "nightwatch";

const home: NightwatchTests = {
  "Google search test": async() => {
    const google = browser.page.googlePage();

    await google.searchFor("nightwatch");
  },
};

export default home;
