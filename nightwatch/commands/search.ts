import { NightwatchClient } from "nightwatch";

export default class Search {
  async command(this: NightwatchClient, selector: string, searchTerm: string) {
    await this.api.element(by.css(selector)).setValue(searchTerm);
  }
}
