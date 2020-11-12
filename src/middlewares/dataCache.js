export default class DataCache {
  constructor() {
    this.data = {};
  }
  store({ key, value }) {
    this.data[key] = value;
  }
  load({ key }) {
    return this.data[key];
  }
}
