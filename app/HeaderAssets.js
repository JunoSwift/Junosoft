export class HeaderItem {
  constructor(icon, itemName, itemLink) {
    this.icon = icon;
    this.itemName = itemName;
    this.itemLink = itemLink;
  }
}
export class HeaderElement {
  constructor(headerItem) {
    this.headerItem = headerItem;
  }
  render() {
    const iconName = this.headerItem.icon;
    const headerElement = document.createElement("li");

    headerElement.className = "header-list__element";
    headerElement.innerHTML = `<a href = "#${this.headerItem.itemLink}"
    <i class= ${iconName}> </i>
      ${this.headerItem.itemName} </a>
      `;
    return headerElement;
  }
}
