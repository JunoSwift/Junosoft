export default class LeftNavItem {
  constructor(name) {
    this.name = name;
  }

  render() {
    const list = document.createElement("li");
    list.className = "nav-item";
    list.textContent = this.name;

    return list;
  }
}
