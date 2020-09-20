export default class HeaderNav {
  constructor(icon, name = "") {
    this.icon = icon;
    this.name = name;
  }
  render() {
    const navItem = document.createElement("li");
    navItem.innerHTML = `<i class="${this.icon}"></i>${this.name}`;
    return navItem;
  }
}
