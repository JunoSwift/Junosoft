export default class Footer {
  constructor(copyright) {
    this.copyright = copyright;
  }
  render() {
    const footer = document.createElement("footer");
    const div = document.createElement("div");
    div.innerHTML = `${this.copyright}`;
    footer.append(div);
    return footer;
  }
}
