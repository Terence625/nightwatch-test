import { NightwatchClient } from "nightwatch";

const googleCommands = {
  searchFor: function (this: NightwatchClient, searchTerm: string) {
    return this.search("@searchBar", searchTerm);
  },
};

module.exports = {
  url: "https://google.com",
  commands: [googleCommands],
  elements: {
    searchBar: "textarea[name=q]",
  },
};
